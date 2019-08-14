import _ from "lodash";

const allCoffees = [
  { id: "d1", name: "Espresso", price: 2.95 },
  { id: "d2", name: "Cappucino", price: 4.95 },
  { id: "d3", name: "Cold Brew", price: 4.95 },
  { id: "d4", name: "Nitro Cold Brew", price: 5.95 },
];

export const resolvers = {
  Query: {
    coffees: () => allCoffees,
  },
  Coffee: {
    __resolveReference(reference) {
      return _.find(allCoffees, { id: reference.id });
    },
  },
};
