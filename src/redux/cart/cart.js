import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const findItem = state.cartItems.find((item) => +item.id === +action.payload.cart.id);
      if(findItem) {
        findItem.quantity = findItem.quantity + action.payload.cart.quantity;
      } else {
        state.cartItems.push(action.payload.cart);
      }
      state.totalItems = state.totalItems + action.payload.cart.quantity;
      state.totalPrice = state.totalPrice + action.payload.totalAmount;
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id!== action.payload.id);
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    updateItemQuantity: (state, action) => {
      console.log(action.payload);
      const findItem = state.cartItems.find((item) => +item.id === +action.payload.id);
      const value = findItem.price * action.payload.updatedQuantity;
      if(action.payload.status === "increase") {
        findItem.quantity = findItem.quantity + action.payload.quantity;
        state.totalItems = state.totalItems + action.payload.quantity;
        state.totalPrice = state.totalPrice + value;
        console.log(true);
      } else {
        findItem.quantity = findItem.quantity - action.payload.quantity;
        state.totalItems = state.totalItems - action.payload.quantity;
        state.totalPrice = state.totalPrice - value;
        console.log(false);
      }
    },
    clearCart: state => {
      state.cartItems = [];
      totalPrice = 0;
    }
  }
})

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;