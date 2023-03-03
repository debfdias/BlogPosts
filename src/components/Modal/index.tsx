import styles from "./Form.module.css";
import { XCircle } from "phosphor-react";
import { useState } from "react";

interface ModalProps {
  post: any;
  onModalOpen: (value: boolean) => void;
  onSubmit?: (event: any) => any;
}

export function DefaultModal({ post, onModalOpen, onSubmit }: ModalProps) {
  const [content, setContent] = useState(post.content);
  const [author, setAuthor] = useState(post.author);

  return (
    <div className={styles.modal}>
      <div className={styles.box}>
        <button className={styles.actionButton}>
          <XCircle
            className={styles.iconClose}
            onClick={() => onModalOpen(false)}
          />
        </button>

        <form onSubmit={onSubmit}>
          <textarea
            className={styles.contentBox}
            rows={5}
            name="content"
            placeholder="Type something here!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            className={styles.authorBox}
            name="author"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button className={styles.submitButton} type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
