import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Post {
    id: String
    content: String
    author: String
    likes: Int
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(content: String, author: String, likes: Int): Post
    editPost(id: String, content: String, author: String): Post
    deletePost(id: String): Post
    addLike(id: String): Post
  }
`;
