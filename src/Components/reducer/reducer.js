export const initialState = {
  cart: [],
  detail: [],

};


const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "ADD_TO_DETAIL":
      return {
        ...state,
        cart: [...state.cart],
        detail: [action.payload],
      };

    case "ADD_QUANTITY":
      return {
        ...state,
        cart: [...state.cart],
        quantity:action.payload,
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      let newcart = [...state.cart];

      if (index >= 0) {
        newcart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart!`
        );
      }
      return {
        ...state,
        cart: newcart,
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducer;
