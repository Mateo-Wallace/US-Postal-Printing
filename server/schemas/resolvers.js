const { AuthenticationError } = require("apollo-server-express");
const { User, Package, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // GETS ALL USERS
    users: async () => {
      return User.find()
        .populate("orders")
        .populate("packages")
        .select("-__v -password");
    },
    /// GETS ONE USER
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate("orders")
        .populate("packages")
        .select("-__v -password");
    },
    // GETS CURRENT USER
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("orders")
          .populate("packages")
          .select("-__v -password");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // GETS ALL PACKAGES, IF PASS USERNAME THEN ALL PACKAGES FOR SPECIFIC USER
    packages: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Package.find(params).sort({ createdAt: -1 });
    },
    // GETS SINGLE PACKAGE BY ID
    package: async (parent, { packageId }) => {
      return Package.findOne({ _id: packageId });
    },

    // GETS ALL ORDERS, IF PASS USERNAME THEN ALL ORDERS FOR SPECIFIC USER
    orders: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Order.find(params).sort({ createdAt: -1 });
    },
    // GETS SINGLE ORDER BY ID
    order: async (parent, { orderId }) => {
      return Order.findOne({ _id: orderId });
    },
  },

  Mutation: {
    /// LOGIN ///
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    /// ADD USER ///
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete(
          { _id: context.user._id }
        );

        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
