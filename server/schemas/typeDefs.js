const { gql } = require("graphql-tag");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    phoneNum: String
    packages: [Package]!
    orders: [Order]!
  }

  type Package {
    _id: ID!
    trackingNum: String!
    carrier: String
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

    packages(userId: ID): [Package]
    package(packageId: ID!): Package

    orders(userId: ID): [Order]
    order(orderId: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    editUser(
      username: String
      email: String
      password: String
      phoneNum: String
    ): User
    deleteUser: User

    addPackage(trackingNum: String!): Package
    editPackage(packageId: ID!, trackingNum: String): Package
    deletePackage(packageId: ID!): Package

    # addOrder, editOrder, deleteOrder
    addOrder(type: String!, message: String!): Order
    editOrder(orderId: ID!, type: String, message: String): Order
    deleteOrder(orderId: ID!): Order
  }
`;

module.exports = typeDefs;
