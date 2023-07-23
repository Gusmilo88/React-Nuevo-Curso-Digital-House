import { types } from "../types";

const cartReducer = (state = [], action) => {
  const item = state.find((item) => item.idDrink === action.payload.idDrink);

  switch (action.type) {
    case types.addItemToCart:
      return item
        ? state.map((item) =>
            item.idDrink === action.payload.idDrink
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        : [
            ...state,
            {
              ...action.payload,
              quantity: 1,
            },
          ];

    case types.removeItemFromCart:
      return state.filter((item) => item.idDrink !== action.payload);

    case types.removeAllItemsFromCart:
      return state.filter((item) => item.idDrink !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
