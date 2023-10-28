import styles from './main.module.scss';

function Main() {
  let error={};
  error.message='Такого аккаунта не существует';
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <div className={styles.content_container}>
        <h1 className={styles.title}><span>Аналитика</span><span>Telegram Stories</span></h1>
        <p className={styles.subtitle}>Введите ваш никнейм Telegram или адрес канала</p>
        <form className={styles.form}>
          <div className={styles.input_container}>
            <input className={error?styles.error:styles.input} type='text' placeholder='Укажите никнейм'/>
            {error&&<div className={styles.error_msg}>{error.message}</div>}
          </div>
          
          <button className={styles.btn}>Анализировать</button>
        </form>
      </div>
      </div>
      <div className={styles.footer}>
      <div className={styles.copyright}>
      © 2023 Stories Analytics
    </div>
    <div className={styles.links}>
      <a href='#'>Политика конфиденциальности</a>
      <a href='#'>Пользовательское соглашение</a>

      </div>
    </div>
    </div>
  );
}

export default Main;
