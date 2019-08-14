import _ from "lodash";

const allCustomers = [
  { id: "c1", name: "Paul", yearOfBirth: 2000 },
  { id: "c2", name: "Mark", yearOfBirth: 1977 },
  { id: "c3", name: "Bruce", yearOfBirth: 1955 },
];

export const resolvers = {
  Query: {
    customers: () => allCustomers,
  },
  Customer: {
    __resolveReference(reference) {
      return _.find(allCustomers, { id: reference.id });
    },
  },
};
