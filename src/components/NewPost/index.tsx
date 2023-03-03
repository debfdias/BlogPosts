import styles from "./NewPost.module.css";

export function NewPost({ onSubmit }: any) {
  return (
    <form onSubmit={onSubmit} className={styles.formBox}>
      <textarea
        className={styles.contentBox}
        rows={5}
        name="content"
        placeholder="Type something here!"
      />
      <div className={styles.row}>
        <input
          className={styles.authorBox}
          name="author"
          placeholder="Author name"
        />
        <button className={styles.submitButton} type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
