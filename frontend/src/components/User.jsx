import { useRef, useState, useEffect } from "react";
import styles from "./components.module.scss";
import dots from '../assets/images/dots.png';

function User({ path, views, likes, username, status, stories }) {
    const [imgPath, setImgPath] = useState("../assets/images/story2.png");
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        setImgPath(path);
    }, []);

    const ava = useRef(null);
    const popup_ava = useRef(null);
    const stat = useRef(null);

    if (ava.current) {
        ava.current.style.backgroundImage = `url("${imgPath}")`;
    }
  //   if (popup_ava!==null) {
  //     popup_ava.current.style.backgroundImage = `url("${imgPath}")`;
  // }
    if (stat.current) {
      stat.current.style.color = status=='В сети'? "#3182CE" : "#718096";
  }
  function handleClick(e){
    if (e.target === e.currentTarget) {
      setPopup(false);
    }
  }
    return (
      <>
        <div className={styles.user_wrapper}>
            <div className={styles.user_passport}>
                <div className={styles.ava_box} ref={ava}></div>
                <div className={styles.user_info}>
                  <p>{username}</p>
                  <p ref={stat}>{status}</p>
                </div>
            </div>
            <div className={styles.user_views}> 
              <p>{views}&nbsp;&#40;{views*100/stories}&#37;&#41;</p>
              <p>Просмотров stories</p>
            </div>
            <div className={styles.user_likes}>
              <p>{likes}</p>
              <p>Лайков</p>
            </div>
        </div>
        <div className={styles.user_mobile}>
            <div className={styles.user_passport}>
                <div className={styles.ava_box} ref={ava}></div>
                <div className={styles.user_info}>
                  <p>{username}</p>
                  <p ref={stat}>{status}</p>
                </div>
            </div>
           <div className={styles.dots} onClick={()=>setPopup(true)}>
            <img src={dots} alt="три точки"/>
           </div>
        { 
popup && 
      <div className={styles.popup} onClick={(e)=>handleClick(e)}>
        <div className={styles.popup_content}>
          <div className={styles.user_passport}>
              <img className={styles.ava_box} src={imgPath} alt="man">
              </img>
              <div className={styles.user_info}>
                <p>{username}</p>
                <p ref={stat}>{status}</p>
                <div className={styles.views_cont}>

<div className={styles.user_views}> 
      <p>{views}&nbsp;&#40;{views*100/+stories}&#37;&#41;</p>
      <p>Просмотров stories</p>
</div>
<div className={styles.user_likes}>
  <p>{likes}</p>
  <p>Лайков</p>
</div>
</div>
              </div>
                <div className={styles.exit} onClick={() => setPopup(false)}>+</div>
          </div>
          
            
      </div>
      </div>}
      </div>

        </>
    );
}
export default User;
