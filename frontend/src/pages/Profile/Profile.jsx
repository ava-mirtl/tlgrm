import { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ticktak from '../../assets/icons/BsClock.svg';
import calendar from '../../assets/icons/BsCalendar2Check.svg';
import question from '../../assets/icons/CkQuestion.svg';
import styles from './profile.module.scss';

function Profile({data}){
let handleClick=()=>{
    console.log("куку");
  };
  
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
          <Card title='Лучшее время для публикации' bold={data.time} icon={ticktak} btn='Подробнее' onclick = {handleClick()}/>
          <Card title='Лучший день для публикации' bold={data.day} icon={calendar} btn='Подробнее' onclick = {handleClick()}/>
        </div>

      <div className={styles.subtitle}>Аудитория</div>
        <div className={styles.auditory}>
          <Card title='Ваши контакты' bold={data.follow} btn='Список контактов' onclick = {handleClick()}/>
          <Card title='Вы в контактах' bold={data.followers} btn='Список контактов' onclick = {handleClick()}/>
          <Card title='Распределение' icon={question} simple={data.followers - data.premium_followers} premium={data.premium_followers} />
        </div>
      </div>
    </div>
  )
}
export default Profile;