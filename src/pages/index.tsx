import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card";
import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
} from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export default function Home() {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const { loading, error, data } = useQuery(GET_POSTS);

  const [deleteBlogPost] = useMutation(DELETE_POST, {
    onCompleted: (data) => {
      window.location.reload();
    },
  });

  function onDelete(id: string) {
    console.log("got here " + id);
    deleteBlogPost({ variables: { id } });
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
            {data.posts.map((post: any) => (
              <div key={post.id}>
                <Card
                  id={post.id}
                  content={post.content}
                  author={post.author}
                  onDelete={onDelete}
                />
              </div>
            ))}
          </>
        )}
      </main>
    </>
  );
}
