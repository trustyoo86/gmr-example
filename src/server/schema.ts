import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type User {
    _id: ID!
    name: String!
    age: Int!
    gender: String!
  }

  type Query {
    allUser: [User]
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  input UserInput {
    name: String!
    age: Int!
    gender: String!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;