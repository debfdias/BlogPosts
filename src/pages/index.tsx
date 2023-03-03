import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card";
import {
  ADD_LIKE,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
} from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { NewPost } from "@/components/NewPost";

export default function Home() {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const { loading, data } = useQuery(GET_POSTS);

  const [addBlogPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  const [deleteBlogPost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  const [addLikePost] = useMutation(ADD_LIKE, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  function onDelete(id: string) {
    deleteBlogPost({ variables: { id } });
  }

  function onSubmit(event: any) {
    event.preventDefault();
    addBlogPost({
      variables: {
        content: event.target.content.value,
        author: event.target.author.value,
      },
    });
    event.target.content.value = "";
    event.target.author.value = "";
  }

  function onAddLike(id: string) {
    addLikePost({ variables: { id } });
  }

  return (
    <>
      <Head>
        <title>Blog CRUD</title>
      </Head>
      <main className={styles.main}>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <NewPost onSubmit={onSubmit} />
            {data?.posts.map((post: any) => (
              <div key={post.id}>
                <Card
                  id={post.id}
                  content={post.content}
                  author={post.author}
                  onDelete={onDelete}
                  likes={post.likes}
                  onAddLike={onAddLike}
                />
              </div>
            ))}
          </>
        )}
      </main>
    </>
  );
}
