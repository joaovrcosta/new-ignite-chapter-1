import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="https://github.com/joaovrcosta.png" />
          <div className={styles.authorInfo}>
            <strong>João Victor</strong>
            <span>Web Developer</span>
          </div>
        </div>  
        <time time="11 de Maio ás 08:13h" dateTime="2022-11-01 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{" "} <a>jane.design/doctorcare</a>
        </p>
        <p>
          <a>#novoprojeto</a>{" "}
          <a> #nlw </a>{" "}
          <a>#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        placeholder="Deixe um comentario"
        />
        <footer>
        <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
