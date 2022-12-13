const { gql } = require('graphql-tag')

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    packages: [Package]!
    orders: [Order]!
  }

  type Package {
    _id: ID!
    trackingNum: String!
    createdAt: String
  }

  type Order {
    _id: ID!
    type: String!
    message: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
