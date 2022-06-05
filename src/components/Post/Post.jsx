import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/joaovrcosta.png"/>
            <div className={styles.authorInfo}>
              <strong>João Victor</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="04 de junho ás 03:13h" dateTime="2022-05-11 07:00:12">
            Publicado há 1h{" "}
          </time>
        </header>
        <div className={styles.content}>
          <p>Fala galera!</p>
          <p>Acabei de subir mais um projeto no meu portifólio</p>
          <p>
            <a href="">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">
              <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
              <a href="">#rocketseat</a>
            </a>
          </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe um comentario" />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
      </article>
    </>
  );
}
