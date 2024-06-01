import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  products: [],
  error: null,
  loading: false
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    }
  }
})

export const { addProducts } = productsSlice.actions
export default productsSlice.reducer;
