export const initialState = {
  basket: [],
  customer: null,
};

//selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

const reducer = (state, action) => {
  console.log("this is the customer ----->>>>>", action.customer);
  switch (action?.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    }

    case "REMOVE_FROM_BASKET": {
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket -- remove it.
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cannot remove item: ${action.id} as it is not in basket.`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    case "EMPTY_BASKET": {
      return {
        ...state,
        basket: [],
      };
    }

    case "ADD_CUSTOMER": {
      return {
        ...state,
        customer: action.customer,
      };
    }

    default:
      return state;
  }
};

export default reducer;
