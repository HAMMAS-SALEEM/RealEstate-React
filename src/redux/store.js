import { configureStore } from '@reduxjs/toolkit'
import estatesSlice from './estates/estates'
import authSlice from './auth/auth'
import searchSlice from './search/search'

export const store = configureStore({
  reducer: {
    estates: estatesSlice,
    auth: authSlice,
    search: searchSlice
  }
})
