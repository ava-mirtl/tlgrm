import styles from './components.module.scss';

function Button({title, onclick}){
  return(
  <button className={styles.btn} onClick={onclick?()=>onclick():()=>console.log("rfrfr")}>
  {title}
  </button>)
  }
  export default Button