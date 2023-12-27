import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import styles from './components.module.scss';

function Button({title, onclick, href}){
  return(
    href ? 
    <Link className={styles.btn} to={href}>{title}</Link>
    :
  <button className={styles.btn} onClick={onclick?()=>onclick():()=>console.log("У самурая нет цели, есть только путь, а путь самурая - это смерть.")}>
  {title}
  </button>)
  }
  export default Button