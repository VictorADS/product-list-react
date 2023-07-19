import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../content/reducers/products'

export default configureStore({
  reducer: {
    products: productsReducer
  },
})
