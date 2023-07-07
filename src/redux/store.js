import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../components/ProductList/productSlice"
import cartSlice from "../components/Cart/CartSlice"

const store = configureStore({
  reducer: {
    productlist: productSlice.reducer,
    cartList: cartSlice.reducer
  }
})


export default store