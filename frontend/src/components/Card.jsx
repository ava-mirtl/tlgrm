import Button from './Button';
import styles from './components.module.scss';

function Card({title, bold, icon, btn, onclick, simple, premium}){
return(
<div className={styles.wrapper}>
  <div>
  <div className={styles.title_container}>
  <div className={styles.title}>{title}</div>
    {icon&&<div className={styles.icon}>
   <img src={icon} alt="icon"/> 
  </div>}
  </div>
  <div className={styles.content}>{bold}</div>
  </div>
  {btn&&
  <div className={styles.btn_box}><Button title={btn} onclick={onclick}/></div>}
  {simple&&<div className={styles.premium}>
    <div className={styles.simple}><span>Обычные</span> <span className={styles.content}>{simple}</span></div>
    <div className={styles.simple}><span>Premium</span> <span className={styles.content}>{premium}</span></div>
  </div>}
</div>)
}
export default Card