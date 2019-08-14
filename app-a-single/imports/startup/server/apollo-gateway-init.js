// Spin up the Gateway
import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";
// import { ApolloServer } from "apollo-server";
import { ApolloServer } from "apollo-server-express";
import { WebApp } from "meteor/webapp";

import { initializeApolloServer as initSettings } from "/imports/microservices/settings/server";
import { initializeApolloServer as initLabels } from "/imports/microservices/labels/server";
import { initializeApolloServer as initHelloWorld } from "/imports/microservices/helloworld/server";
import { initializeApolloServer as initPaket } from "/imports/microservices/account-paket/server";
import { initializeApolloServer as initExpress } from "/imports/microservices/account-express/server";

initSettings();
initLabels();
initHelloWorld();

initPaket();
initExpress();

Meteor.startup(() => {
  Meteor.defer(() => {
    const gateway = new ApolloGateway({
      serviceList: [
        { name: "settings", url: `${Meteor.absoluteUrl()}gms/settings` },
        { name: "labels", url: `${Meteor.absoluteUrl()}gms/labels` },
        { name: "helloworld", url: `${Meteor.absoluteUrl()}gms/helloworld` },
        // { name: "account-paket", url: `${Meteor.absoluteUrl()}gms/account-paket` },
        { name: "account-express", url: `${Meteor.absoluteUrl()}gms/account-express` },
      ],
      debug: true,
      buildService({ name, url }) {
        return new RemoteGraphQLDataSource({
          url,
          willSendRequest({ request, context }) {
            // console.log("serverGateway willSendRequest", JSON.stringify(context, null, "\t"));
            // console.log("serverGateway rest", JSON.stringify(rest, null, "\t"));
            request.http.headers.set("authorization", context.authorization);
          },
        });
      },
    });
    const { schema, executor } = Promise.await(gateway.load());
    const serverGateway = new ApolloServer({
      schema,
      executor,
      context: ({ req }) => ({
        authorization: req.headers.authorization,
      }),
    });
    serverGateway.applyMiddleware({
      app: WebApp.connectHandlers,
      path: "/graphql",
    });
    WebApp.connectHandlers.use("/graphql", (req, res) => {
      if (req.method === "GET") {
        res.end();
      }
    });
    // console.log("Apollo Geateway started");
  });
});
