const db = require("../config/connection");
const { User, Package, Order } = require("../models");
const userSeeds = require("./userSeeds.json");
const packageSeeds = require("./packageSeeds.json");
const orderSeeds = require("./orderSeeds.json");

db.once("open", async () => {
  try {
    await Order.deleteMany({});
    await Package.deleteMany({});
    await User.deleteMany({});

    // Creates Users
    await User.create(userSeeds);
    const userData = await User.find();

    // Creates packages and links to user
    for (let i = 0; i < packageSeeds.length; i++) {
      const { _id, userId } = await Package.create({
        ...packageSeeds[i],
        userId: userData[i]._id,
      });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            packages: _id,
          },
        }
      );
    }

    // Creates orders and links to user
    for (let i = 0; i < orderSeeds.length; i++) {
      const { _id, userId } = await Order.create({
        ...orderSeeds[i],
        userId: userData[i]._id,
      });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            orders: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
