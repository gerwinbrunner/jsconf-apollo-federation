import { Meteor } from "meteor/meteor";
import _ from "lodash";
// import "./apollo-gateway-init";
// Meteor.startup(() => {});

import { ApolloServer, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql",
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});
