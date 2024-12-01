// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state:any) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
