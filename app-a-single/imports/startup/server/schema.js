import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  type Query {
    customers: [Customer]
    coffees: [Coffee]
    orders: [Order]
  }

  type Customer {
    id: String!
    name: String!
    yearOfBirth: Int!
  }

  type Coffee {
    id: String!
    name: String!
    price: Float!
  }

  type Order {
    id: String!
    customer: Customer
    coffee: Coffee
    boughtAt: Date
  }
`;
