import { useRef, useState, useEffect } from "react";
import styles from "./components.module.scss";

function User({ path, views, likes, username, status }) {
    const [imgPath, setImgPath] = useState("../assets/images/story2.png");

    useEffect(() => {
        setImgPath(path);
    }, []);
    const ava = useRef(null);
    const stat = useRef(null);

    if (ava.current !== null) {
        ava.current.style.backgroundImage = `url("${imgPath}")`;
    }

    if (stat.current !== null) {
      stat.current.style.color = status=='В сети'? "#3182CE" : "#718096";
  }

    return (
        <div className={styles.user_wrapper}>
            <div className={styles.user_passport}>
                <div className={styles.ava_box} ref={ava}></div>
                <div className={styles.user_info}>
                  <p>{username}</p>
                  <p ref={stat}>{status}</p>
                </div>
            </div>
            <div className={styles.user_views}> 
              <p>{views}</p>
              <p>Просмотров stories</p>
            </div>
            <div className={styles.user_likes}>
              <p>{likes}</p>
              <p>Лайков</p>
            </div>
        </div>
    );
}
export default User;
