import  { useState,  lazy, Suspense } from 'react';
import Card from '../../components/Card';
import Story from '../../components/Story';
import Button from '../../components/Button';
import ticktak from '../../assets/icons/BsClock.svg';
import calendar from '../../assets/icons/BsCalendar2Check.svg';
import question from '../../assets/icons/CkQuestion.svg';
import styles from './profile.module.scss';
//const Story = lazy(() => import('../../components/Story'));

function Profile({data}){
  const [showAll, setShowAll] = useState(false);
    
let toggleShowAll=()=>{
  setShowAll(!showAll);
};

const LazyStoryComponents = data.stories.map((el, i) =>
lazy(() => import('../../components/Story')));

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.btn_container}><Button title='Выйти'/></div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
        <div className={styles.username_container}>
        <div className={styles.login}>
          {data.login}
          </div>
          <div className={styles.username}>
          {data.username}
          </div>
          </div>
          <div className={styles.avatar}>
          <img src={data.path} alt="avatar" />
        </div>
        </div>
        <div className={styles.time}>
          <Card title='Лучшее время для публикации' bold={data.time} icon={ticktak} btn='Подробнее' onclick = {false}/>
          <Card title='Лучший день для публикации' bold={data.day} icon={calendar} btn='Подробнее' onclick = {false}/>
        </div>

        <div className={styles.subtitle}>Аудитория</div>
        <div className={styles.auditory}>
          <Card title='Ваши контакты' bold={data.follow} btn='Список контактов'/>
          <Card title='Вы в контактах' bold={data.followers} btn='Список контактов'/>
          <Card title='Распределение' icon={question} simple={data.followers - data.premium_followers} premium={data.premium_followers} />
        </div>
        <div className={styles.subtitle_box}>
        <div className={styles.subtitle}>Последние stories</div>
        <div className={styles.btn_container}>
          <Button title={'Смотреть все '+ data.stories.length} onclick={toggleShowAll}/>
          </div>
        </div>
        <div className={styles.stories_box}>
       {data.stories.slice(0, 8).map(
        (el, i) => (
            <Story key={i} path={el.path} views={el.views} likes={el.likes} date={el.date} status={el.status} />
         ))
      }
       {showAll && (
        <Suspense fallback={<div>Loading...</div>}>
          {LazyStoryComponents.slice(8, LazyStoryComponents.length ).map((LazyStoryComponent, i) => (
            <LazyStoryComponent key={i} path={data.stories[i].path} views={data.stories[i].views} likes={data.stories[i].likes} date={data.stories[i].date} status={data.stories[i].status}/>
          ))}
        </Suspense>
      ) }
        </div>
      </div>
    </div>
  )
}
export default Profile;