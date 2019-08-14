import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  type Query {
    orders: [Order]
  }

  extend type Customer @key(fields: "id") {
    id: String! @external
  }

  extend type Coffee @key(fields: "id") {
    id: String! @external
  }

  type Order {
    id: String!
    customer: Customer
    coffee: Coffee
    boughtAt: Date
  }
`;
