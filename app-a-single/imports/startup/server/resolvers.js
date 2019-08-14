import _ from "lodash";

const allCustomers = [
  { id: "c1", name: "Paul", yearOfBirth: 2000 },
  { id: "c2", name: "Mark", yearOfBirth: 1977 },
  { id: "c3", name: "Bruce", yearOfBirth: 1955 },
];

const allCoffees = [
  { id: "d1", name: "Espresso", price: 2.95 },
  { id: "d2", name: "Cappucino", price: 4.95 },
  { id: "d3", name: "Cold Brew", price: 4.95 },
  { id: "d4", name: "Nitro Cold Brew", price: 5.95 },
];

const allOrders = [
  { id: "o1", customer: { id: "c1" }, coffee: { id: "d3" }, boughtAt: "20.01.2019" },
  { id: "o2", customer: { id: "c1" }, coffee: { id: "d3" }, boughtAt: "22.01.2019" },
  { id: "o3", customer: { id: "c2" }, coffee: { id: "d2" }, boughtAt: "24.01.2019" },
  { id: "o4", customer: { id: "c3" }, coffee: { id: "d2" }, boughtAt: "26.01.2019" },
];

export const resolvers = {
  Query: {
    customers: () => allCustomers,
    coffees: () => allCoffees,
    orders: () => allOrders,
  },
  Order: {
    customer(order) {
      // console.log("Order.customer", order);
      return _.find(allCustomers, { id: order.customer.id });
    },
    coffee(order) {
      // console.log("Order.coffee", order);
      return _.find(allCoffees, { id: order.coffee.id });
    },
  },
};
