import { configureStore } from '@reduxjs/toolkit'
import estatesSlice from './products/products'
import authSlice from './auth/auth'

export const store = configureStore({
  reducer: {
    estates: estatesSlice,
    auth: authSlice,
  },
})
