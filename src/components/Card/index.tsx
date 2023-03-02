import styles from "./Card.module.css";
import { Trash, PencilLine } from "phosphor-react";

interface CardProps {
  id: string;
  content: string;
  author: string;
  onDelete: (id: string) => void;
}
export function Card({ content, author, onDelete, id }: CardProps) {
  return (
    <div className={styles.box}>
      <div className={styles.text}>
        {content}
        <div className={styles.author}>{author}</div>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <PencilLine size={32} color="#0bb864" />
        </button>
        <button className={styles.actionButton} onClick={() => onDelete(id)}>
          <Trash size={32} color="#ff4b33" />
        </button>
      </div>
    </div>
  );
}
