import styles from "./Card.module.css";
import { Trash, PencilLine, ThumbsUp } from "phosphor-react";

interface CardProps {
  id: string;
  content: string;
  author: string;
  likes: number;
  onDelete: (id: string) => void;
  onAddLike: (id: string) => void;
}
export function Card({
  content,
  author,
  onDelete,
  onAddLike,
  id,
  likes,
}: CardProps) {
  return (
    <div className={styles.box}>
      <div className={styles.text}>
        {content}
        <div className={styles.row}>
          <div className={styles.author}>{author}</div>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={() => onAddLike(id)}>
          <ThumbsUp size={25} color="#2E8BC0" />
          {likes}
        </button>
        <button className={styles.actionButton}>
          <PencilLine size={25} color="#0bb864" />
        </button>
        <button className={styles.actionButton} onClick={() => onDelete(id)}>
          <Trash size={25} color="#ff4b33" />
        </button>
      </div>
    </div>
  );
}
