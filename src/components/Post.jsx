import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar hasBorde src="https://github.com/xandynho96.png" />
          <div className={styles.authorInfo}>
            <strong>Alexandre Ferreira</strong>
            <span>Web Develop</span>

          </div>
        </div>
        <time title='24 de maio há 11:36h' dateTime='2024-05-24 11:36:00'>publicado há 1h</time>
      </header>

      <div className={ styles.content}>
      <p>Fala galeraa</p> 👋

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉 <a href=''> jane.design/doctorcare</a></p>

      <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>

    </article>
  )
}