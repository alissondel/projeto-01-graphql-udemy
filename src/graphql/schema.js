import { gql } from 'apollo-server-core';

/* TypeDefs */
import { userTypeDefs } from './user/typedefs';
import { postTypeDefs } from './post/typedefs';
import { apiFiltersTypeDefs } from './api-filters/typedefs';

/* Resolvers */
import { userResolvers } from './user/resolvers';
import { postResolvers } from './post/resolvers';
import { ApiFiltersResolvers } from './api-filters/resolvers';

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

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  ApiFiltersResolvers,
];
