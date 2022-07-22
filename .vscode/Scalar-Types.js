import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  /* Tipos Scalares "ID, String, Int, Float, Boolean" */
  /* married: Boolean! -> Força para o type não retornar nulo */
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      average: Float
      married: Boolean!
      friends: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: async () => {
        return '1';
      },
      name: async () => {
        return 'Alisson Delatim';
      },
      age: async () => {
        return 22;
      },
      average: async () => {
        return 55.55;
      },
      married: async () => {
        return false;
      },
      friends: async () => {
        return ['Flavio', 'Marcos'];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on -> ${url}`);
});
