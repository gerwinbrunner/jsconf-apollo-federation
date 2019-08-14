import ApolloClient from "apollo-boost";

console.log("/imports/startup/client - Client Loading");
const client = new ApolloClient({
  uri: "/graphql",
});
