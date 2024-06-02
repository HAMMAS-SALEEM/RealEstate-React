import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  estates: [],
  error: null,
  loading: false
}

export const estatesSlice = createSlice({
  name: 'estates',
  initialState,
  reducers: {
    addEstates: (state, action) => {
      state.estates = action.payload;
    },
    createEstate: (state, action) => {
      state.estates.push(action.payload);
    },
    removeEstate: (state, action) => {
      state.estates = state.estates.filter(estate => estate._id !== action.payload);
    },
    updateEstate: (state, action) => {
      state.estates = state.estates.map(estate =>
        estate._id === action.payload._id? action.payload : estate
      )
    }
  }
})

export const { addEstates, createEstate, removeEstate, updateEstate } = estatesSlice.actions
export default estatesSlice.reducer;
