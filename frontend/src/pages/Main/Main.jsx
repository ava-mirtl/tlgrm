import styles from './main.module.scss';

function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <div className={styles.content_container}>
        <h1 className={styles.title}>Аналитика Telegram Stories</h1>
        <p className={styles.subtitle}>Введите ваш никнейм Telegram или адрес канала</p>
        <form className={styles.form}>
          <input className={styles.input} type='text' placeholder='Укажите никнейм'/>
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
