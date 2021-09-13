import { createContext } from "react";

export const initialState = {
  size: 0,
  products: {},
  basket: {},
};

export const StateContext = createContext(initialState);

export const getBasketTotal = (basket, products) => {
  const prices = Object.keys(basket).map(
    (id) =>
      products.filter((product) => product.id === parseInt(id))[0]
      // .price
      //   .amount * basket[id].quantity
  );
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return prices.reduce(reducer, 0);
};
