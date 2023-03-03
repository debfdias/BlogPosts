import styles from "./Card.module.css";
import { Trash, PencilLine, ThumbsUp } from "phosphor-react";
import { DefaultModal } from "../Modal";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_POST, GET_POSTS } from "@/graphql/queries";

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
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editId, setEditId] = useState("");

  const [editPost] = useMutation(EDIT_POST, {
    refetchQueries: [{ query: GET_POSTS }],
    onCompleted: () => setEditModalOpen(false),
  });

  function onOpenModal(id: string) {
    setEditModalOpen(true);
    setEditId(id);
  }

  function onSaveEdit(event: any) {
    event.preventDefault();
    editPost({
      variables: {
        id: editId,
        content: event.target.content.value,
        author: event.target.author.value,
      },
    });
  }

  return (
    <div className={styles.box}>
      {editModalOpen && (
        <DefaultModal
          onModalOpen={setEditModalOpen}
          onSubmit={onSaveEdit}
          post={{ author, content }}
        />
      )}
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
        <button className={styles.actionButton} onClick={() => onOpenModal(id)}>
          <PencilLine size={25} color="#0bb864" />
        </button>
        <button className={styles.actionButton} onClick={() => onDelete(id)}>
          <Trash size={25} color="#ff4b33" />
        </button>
      </div>
    </div>
  );
}
