const { Schema, model } = require("mongoose");
const { formatDate } = require("../utils/helpers");

const packageSchema = new Schema(
  {
    trackingNum: {
      type: String,
      required: true,
    },
    carrier: {
      type: String,
    },
    notes: {
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

const Package = model("Package", packageSchema);

module.exports = Package;
