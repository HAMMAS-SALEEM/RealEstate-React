import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products/products'
import cartSlice from './cart/cart'
import authSlice from './auth/auth'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    auth: authSlice,
  },
})
