const { AuthenticationError } = require("apollo-server-express");
const { User, Package, Order } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

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
    packages: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
      return Package.find(params).sort({ createdAt: -1 });
    },
    // GETS SINGLE PACKAGE BY ID
    package: async (parent, { packageId }) => {
      return Package.findOne({ _id: packageId });
    },

    // GETS ALL ORDERS, IF PASS USERNAME THEN ALL ORDERS FOR SPECIFIC USER
    orders: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
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
    // EDIT USER BASED ON INPUT AND TOKEN
    editUser: async (parent, args, context) => {
      if (context.user) {
        if (args.password) {
          const saltRounds = 12;
          const newPassword = await bcrypt.hash(args.password, saltRounds);
          return User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $set: {
                username: args.username,
                password: newPassword,
                email: args.email,
                phoneNum: args.phoneNum,
              },
            },
            { new: true }
          );
        }
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              username: args.username,
              email: args.email,
              phoneNum: args.phoneNum,
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // DELETE USER BASED ON TOKEN
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // CREATE NEW PACKAGE
    addPackage: async (parent, args, context) => {
      if (context.user) {
        const package = await Package.create({
          ...args,
          userId: context.user._id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { packages: package._id } }
        );
        return package;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // EDIT PACKAGE
    editPackage: async (parent, args, context) => {
      if (context.user) {
        return Package.findOneAndUpdate(
          { _id: args.packageId },
          { $set: args },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // DELETE PACKAGE
    deletePackage: async (parent, args, context) => {
      if (context.user) {
        const package = await Package.findOneAndDelete({ _id: args.packageId });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { packages: package._id } }
        );
        return package;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // CREATE NEW PACKAGE
    addOrder: async (parent, args, context) => {
      if (context.user) {
        const order = await Order.create({
          ...args,
          userId: context.user._id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { orders: order._id } }
        );
        return order;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // EDIT ORDER
    editOrder: async (parent, args, context) => {
      if (context.user) {
        return Order.findOneAndUpdate(
          { _id: args.orderId },
          { $set: args },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // DELETE ORDER
    deleteOrder: async (parent, args, context) => {
      if (context.user) {
        const order = await Order.findOneAndDelete({ _id: args.orderId });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { orders: order._id } }
        );
        return order;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
