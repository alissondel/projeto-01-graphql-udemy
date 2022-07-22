import { gql } from 'apollo-server-core';

/* TypeDefs */
import { userTypeDefs } from './user/typedefs';
import { postTypeDefs } from './post/typedefs';

/* Resolvers */
import { userResolvers } from './user/resolvers';
import { postResolvers } from './post/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
