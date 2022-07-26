import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFiltersInput): [Post!]!
  }

  interface PostError {
    statusCode: Int!
    message: String!
  }

  # No união não pode colocar a interface só o type
  union PostResult = PostNotFoundError | PostTimeoutError | Post

  type PostNotFoundError implements PostError {
    statusCode: Int!
    message: String!
    postId: String!
  }
  type PostTimeoutError implements PostError {
    statusCode: Int!
    message: String!
    timeout: Int!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    # user: User!
    indexRef: Int!
    createdAt: String!
    unixTimestamp: String!
  }
`;
