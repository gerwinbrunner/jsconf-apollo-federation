import { createApolloServer } from "../createApolloServer";

import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

export const initializeApolloServer = ({ path }) => {
  console.log("initializeApolloServer", path);
  return createApolloServer({ path, typeDefs, resolvers });
};
