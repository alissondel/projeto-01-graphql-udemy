import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  /* Tipos Custom Types "User" */
  /* user: User! -> Força para o type não retornar nulo */
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: async () => {
        return {
          id: '1',
          userName: 'Alisson Delatim',
        };
      },
      users: async () => {
        return [
          {
            id: '1',
            userName: 'Gustavo Batista',
          },
          {
            id: '2',
            userName: 'Rafael Didone',
          },
          {
            id: '3',
            userName: 'João Alves',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on -> ${url}`);
});
