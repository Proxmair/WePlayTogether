// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isChatOn: false
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setIsChatOn: (state:any, action:any) => {
      state.isChatOn = action.payload;
    },
    clearGeneral: (state:any) => {
      state.isChatOn = false
    },
  },
});

export const { setIsChatOn, clearGeneral } = generalSlice.actions;
export default generalSlice.reducer;
