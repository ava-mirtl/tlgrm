import moment from 'moment';
import view from '../assets/icons/BsFillEyeFill.svg';
import like from '../assets/icons/IoHeartSharp.svg';
import styles from './components.module.scss';

function Story({path, views, likes, date, status}){
  const formattedDateTime = moment(date).format('DD.MM.YY [в] HH:mm');


return(
<div className={styles.story} style={{background: `url(${process.env.PUBLIC_URL}/${path})`}}>
    {status === "active" ?<div className={styles.label_active}>
 Активная</div>
:<div className={styles.label_archive}>Архив</div>}
  <div className={styles.stat_box}>
  <div className={styles.views}>
    <img src={view} alt="глаз" /> <span className={styles.span}>{views}</span>
    <img src={like} alt="сердце" /> <span>{likes}</span>
    </div>
    <div>{formattedDateTime}</div>
  </div>
</div>)
}
export default Story