const { Schema, model } = require("mongoose");
const { formatDate } = require("../utils/helpers");

const orderSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    quantity: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return formatDate(date);
      },
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Package",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
