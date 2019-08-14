import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    customers: [Customer]
  }

  type Customer @key(fields: "id") {
    id: String!
    name: String!
    yearOfBirth: Int!
  }
`;
