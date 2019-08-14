import _ from "lodash";

const allOrders = [
  { id: "o1", customer: { id: "c1" }, coffee: { id: "d3" }, boughtAt: "20.01.2019" },
  { id: "o2", customer: { id: "c1" }, coffee: { id: "d3" }, boughtAt: "22.01.2019" },
  { id: "o3", customer: { id: "c2" }, coffee: { id: "d2" }, boughtAt: "24.01.2019" },
  { id: "o4", customer: { id: "c3" }, coffee: { id: "d2" }, boughtAt: "26.01.2019" },
];

export const resolvers = {
  Query: {
    orders: () => allOrders,
  },
  // Order: {
  //   customer(order) {
  //     // console.log("Order.customer", order);
  //     return { __typename: "Customer", id: order.customer.id };

  //     // return _.find(allCustomers, { id: order.customer.id });
  //   },
  //   coffee(order) {
  //     // console.log("Order.coffee", order);
  //     return { __typename: "Coffee", id: order.coffee.id };
  //     // return _.find(allCoffees, { id: order.coffee.id });
  //   },
  // },
};
