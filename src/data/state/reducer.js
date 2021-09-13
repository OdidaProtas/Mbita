const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const basket = {
        ...state.basket,
        [action.id]: {
          quantity: action.quantity,
          options: action.options,
        },
      };
      return {
        ...state,
        basket: basket,
      };

    case "RESTORE_BASKET":
      return {
        ...state,
        basket: action.payload,
      };

    case "REMOVE_FROM_BASKET":
      const basketCopy = { ...state.basket };
      delete basketCopy[action.payload];
      return { ...state, basket: basketCopy };

    default:
      return { ...state };
  }
};

export default reducer;
