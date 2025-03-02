import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})