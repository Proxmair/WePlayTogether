import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import generalReducer from './slice/generalSlice'
import socketReducer from './slice/socketSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      general: generalReducer,
      socket: socketReducer,
    }
  })
}