// import { buildFederatedSchema } from "@apollo/federation";
// import { ApolloServer } from "apollo-server-express";
// import { WebApp } from "meteor/webapp";

// export const createApolloServer = ({ path, typeDefs, resolvers }) => {
//   const schema = buildFederatedSchema([
//     {
//       typeDefs: typeDefs,
//       resolvers: resolvers,
//     },
//   ]);

//   const server = new ApolloServer({
//     schema,
//   });
//   server.applyMiddleware({
//     app: WebApp.connectHandlers,
//     path,
//   });
//   WebApp.connectHandlers.use(path, (req, res) => {
//     if (req.method === "GET") {
//       res.end();
//     }
//   });
//   console.log("createApolloServer", path);
//   return { server, schema };
// };
