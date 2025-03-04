import { ACTION } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.ADD_TO_BASKET: {
        // Check if the item already exists in the basket
        const existingItem = state.basket.find((item) => item.id === action.item.id);
  
        if (!existingItem) {
          // If the item is not in the basket, add it with amount: 1
          return {
            ...state,
            basket: [...state.basket, { ...action.item, amount: 1 }],
          };
        } else {
          // If the item exists, update its amount
          const updatedBasket = state.basket.map((item) =>
            item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
          );
  
          return {
            ...state,
            basket: updatedBasket,
          };
        }
      }
  
      case ACTION.REMOVE_FROM_BASKET: {
        const index = state.basket.findIndex((item) => item.id === action.id);
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          if (newBasket[index].amount > 1) {
            newBasket[index] = {
              ...newBasket[index],
              amount: newBasket[index].amount - 1,
            };
          } else {
            newBasket.splice(index, 1);
          }
        }
  
        return {
          ...state,
          basket: newBasket,
        };
      }
  
      case ACTION.SET_USER:
        return {
          ...state,
          user: action.user,
        };
  
      case ACTION.EMPTY_BASKET:
        return {
          ...state,
          basket: [],
        };
  
      default:
        return state;
    }
  };
  