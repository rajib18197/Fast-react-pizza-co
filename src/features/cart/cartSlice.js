import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
    },
    removeCart(state, action) {
      state.cart = state.cart.filter((cart) => cart.pizzaId !== action.payload);
    },
    increaseCartQuantity(state, action) {
      console.log(action);
      state.cart = state.cart.map((cart) =>
        cart.pizzaId === action.payload
          ? {
              ...cart,
              quantity: cart.quantity + 1,
              totalPrice: (cart.quantity + 1) * cart.unitPrice,
            }
          : { ...cart }
      );
      console.log(state.cart);
    },
    decreaseCartQuantity(state, action) {
      console.log(state);
      const pizza = state.cart.find((cart) => cart.pizzaId === action.payload);
      console.log(pizza);
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;

      if (pizza.quantity === 0)
        cartSlice.caseReducers.removeCart(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addCart,
  removeCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getItemQuantityById = (id) => (state) => {
  return state.cart.cart.find((cart) => cart.pizzaId === id)?.quantity || 0;
};

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0);

export const getAllIngredients = (state) => {
  const allIngs = state.cart.cart.map((cart) => cart.ingredients);
  return allIngs;
};
