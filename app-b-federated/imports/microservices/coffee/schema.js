import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    coffees: [Coffee]
  }
  type Coffee @key(fields: "id") {
    id: String!
    name: String!
    price: Float!
  }
`;
