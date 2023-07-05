import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../components/ProductList/productSlice"

const store = configureStore({
  reducer: {
    productlist: productSlice.reducer
  }
})


export default store