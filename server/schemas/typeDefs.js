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
    username: String!
  }

  type Order {
    _id: ID!
    type: String!
    message: String
    createdAt: String
    username: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    packages(username: String): [Package]
    package(packageId: ID!): Package
    orders(username: String): [Order]
    order(orderId: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
