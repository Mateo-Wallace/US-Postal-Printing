const { gql } = require("graphql-tag");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    packages: [Package]!
    orders: [Order]!
  }

  type Package {
    _id: ID!
    trackingNum: String!
    createdAt: String
    userId: ID!
  }

  type Order {
    _id: ID!
    type: String!
    message: String
    createdAt: String
    userId: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User

    packages(userId: ID!): [Package]
    package(packageId: ID!): Package

    orders(userId: ID!): [Order]
    order(orderId: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    editUser(username: String, email: String, password: String): User
    deleteUser: User

    # addPackage, editPackage, deletePackage
    addPackage(trackingNum: String!): Package


    # addOrder, editOrder, deleteOrder
  }
`;

module.exports = typeDefs;
