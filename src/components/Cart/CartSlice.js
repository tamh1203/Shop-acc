import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const cartSlice = createSlice({
  name: "cartList",
  initialState: {
    cartList: [],
  },
  reducers: {
    setCartList: (state, action) => {
      state.cartList = action.payload
    },

  },
  extraReducers: (builder) => {
    builder.addCase(API.pending, (state, action) => {
    })
      .addCase(API.fulfilled, (state, action) => {
        state.cartList = action.payload
        console.log(action.payload)
      })
      .addCase(API.rejected, (state, action) => {
        console.log("Cal API thất bại, vui lòng tải lại trang", "Lỗi")
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.cartList.push(action.payload)
        console.log(state)
      })
      .addCase(addItem.rejected, (state, action) => {
        console.log("Cal API thất bại, vui lòng tải lại trang", "Lỗi")
      })
      .addCase(delItem.fulfilled, (state, action) => {
        state.cartList = state.cartList.filter(item => item.id !== action.payload)
        console.log(action.payload);
      })
      .addCase(delItem.rejected, (state, action) => {
        console.log("Cal API thất bại, vui lòng tải lại trang", "Lỗi")
      })
  }
})

const API = createAsyncThunk(
  "setCartList",
  async () => {
    const res = await axios.get("https://64966e6c83d4c69925a2cb54.mockapi.io/oder")
    return res.data
  }
)
const addItem = createAsyncThunk(
  "addCartList",
  async (form) => {
    const res = await axios.request({
      method: "POST",
      url: "https://64966e6c83d4c69925a2cb54.mockapi.io/oder",
      headers: {},
      data: {
        "title": `${form.title}`,
        "price": `${form.price}`,
        "des": `${form.des}`,
        "img": `${form.img}`,
      }
    })
    return form
  }
)

const delItem = createAsyncThunk(
  "delCartList",
  async (id) => {
    const res = await axios.delete(`https://64966e6c83d4c69925a2cb54.mockapi.io/oder/${id}`)
    return id
  }
)
export default cartSlice

export { API, addItem, delItem }