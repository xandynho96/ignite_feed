import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/xandynho96.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
             <strong>Alex</strong> 
             <time title='24 de maio há 11:36h' dateTime='2024-05-24 11:36:00'>Cerca de 1h atrás </time>
            </div>
              <button title='Deletar comentário'>
                <Trash size={24}/>
              </button>
          </header>
          <p>muito bom parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}