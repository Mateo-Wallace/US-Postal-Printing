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

    // Creates packages and links to user
    for (let i = 0; i < packageSeeds.length; i++) {
      const { _id, username } = await Package.create(packageSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            packages: _id,
          },
        }
      );
      console.log(user);
    }

    // Creates orders and links to user
    for (let i = 0; i < orderSeeds.length; i++) {
      const { _id, username } = await Package.create(orderSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            orders: _id,
          },
        }
      );
      console.log(user);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
