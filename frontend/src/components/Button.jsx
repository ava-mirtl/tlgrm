import styles from './components.module.scss';

function Button({title, onclick}){
  return(
  <button className={styles.btn}>
  {title}
  </button>)
  }
  export default Button