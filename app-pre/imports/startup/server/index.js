import { Meteor } from "meteor/meteor";
import _ from "lodash";

import { ApolloServer } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
// import { ApolloGateway } from "@apollo/gateway";
// import { initializeApolloServer as initCustomers } from "/imports/microservices/customer";
// import { initializeApolloServer as initCoffee } from "/imports/microservices/coffee";
// import { initializeApolloServer as initOrder } from "/imports/microservices/order";

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

// // const customerPath = "/gms/customer";
// // const coffeePath = "/gms/coffee";
// // const orderPath = "/gms/order";

// // initCustomers({ path: customerPath });
// // initCoffee({ path: coffeePath });
// // initOrder({ path: orderPath });

// Meteor.startup(() => {
//   Meteor.defer(() => {
//     const gateway = new ApolloGateway({
//       serviceList: [
//         // { name: "customer", url: getUrl({ path: customerPath }) },
//         // { name: "coffee", url: getUrl({ path: coffeePath }) },
//         // { name: "order", url: getUrl({ path: orderPath }) },
//       ],
//       debug: true,
//     });
//     const { schema, executor } = Promise.await(gateway.load());
//     const serverGateway = new ApolloServer({
//       schema,
//       executor,
//     });
//     serverGateway.applyMiddleware({
//       app: WebApp.connectHandlers,
//       path: "/graphql",
//     });
//     WebApp.connectHandlers.use("/graphql", (req, res) => {
//       if (req.method === "GET") {
//         res.end();
//       }
//     });
//   });
// });

// const getUrl = ({ path }) => {
//   return _.trimEnd(Meteor.absoluteUrl(), "/") + path;
// };
