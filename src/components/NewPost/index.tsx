interface NewPostProps {
  onSubmit: () => void;
}

export function NewPost({ onSubmit }: any) {
  return (
    <form onSubmit={onSubmit}>
      <textarea rows={3} name="content" />
      <input name="author" />
      <button type="submit">Submit</button>
    </form>
  );
}
