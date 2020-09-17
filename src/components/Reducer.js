export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    }

    case "REMOVE_FROM_BASKET": {
      // if item id is not equal to action id, it will return true.

      // if they are the same, it will return false and remove the item with that id.

      // then returns the new filtered array.

      return {
        ...state,
        basket: [...state.basket.filter((item) => item.id != action.id)],
      };
    }

    default:
      return state;
  }
};

export default reducer;
