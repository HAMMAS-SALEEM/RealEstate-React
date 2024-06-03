import { configureStore } from '@reduxjs/toolkit'
import estatesSlice from './estates/estates'
import authSlice from './auth/auth'

export const store = configureStore({
  reducer: {
    estates: estatesSlice,
    auth: authSlice,
  },
})
