import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleAuth: state => {
      state.signedIn = !state.signedIn
    }
  }
})

export const { handleAuth } = authSlice.actions;
export default authSlice.reducer;