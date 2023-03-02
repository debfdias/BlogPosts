import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Post {
    id: String
    content: String
    author: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(content: String, author: String): Post
    editPost(id: String, content: String, author: String): Post
    deletePost(id: String): Post
  }
`;
