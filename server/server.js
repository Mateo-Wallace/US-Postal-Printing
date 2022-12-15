const axios = require("axios").default;
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  cache: "bounded",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  app.get(`/shippo`, async (req, res) => {
    const response = await axios.get(
      `https://api.goshippo.com/tracks/${req.query.carrier}/${req.query.trackingNum}/`,
      {
        headers: {
          Authorization:
            "ShippoToken shippo_live_2aeb30d49cea5e24877025920d21a632d5f91e05",
        },
      }
    );
    res.json({ chapter: response.data });
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API Server is running on port ${PORT}!`);
      console.log(
        `Navigate to GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
