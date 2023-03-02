import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    posts {
      id
      content
      author
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($content: String, $author: String) {
    addPost(content: $content, author: $author) {
      id
      content
      author
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: String) {
    deletePost(id: $id) {
      id
      content
      author
    }
  }
`;

export const EDIT_POST = gql`
  mutation EditPost($id: String, $content: String, $author: String) {
    editBlogPost(id: $id, content: $content, author: $author) {
      id
      content
      author
    }
  }
`;
