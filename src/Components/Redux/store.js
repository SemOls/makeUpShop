import { configureStore } from '@reduxjs/toolkit'
import counter from './brandsSlice'
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    counter,
    cart,
  },
})