import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const productSlice = createSlice({
  name: "productlist",
  initialState: {
    list: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(callAPI.pending, (state, action) => {
    })
      .addCase(callAPI.fulfilled, (state, action) => {
        state.list = action.payload
        console.log(action.payload)
      })
      .addCase(callAPI.rejected, (state, action) => {
        console.log("Cal API thất bại, vui lòng tải lại trang", "Lỗi")
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.push(action.payload)
        console.log(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        console.log("call loi")
      })
      .addCase(delProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(item => item.id !== action.payload)
        console.log(action.payload);
      })
      .addCase(delProduct.rejected, (state, action) => {
        console.log("call loi")
      })
  }

})

const callAPI = createAsyncThunk(
  "setProduct",
  async () => {
    const res = await axios.get("https://64966e6c83d4c69925a2cb54.mockapi.io/product")
    return res.data
  }
)

const addProduct = createAsyncThunk(
  "addProduct",
  async (form) => {
    const res = await axios.request({
      method: "POST",
      url: "https://64966e6c83d4c69925a2cb54.mockapi.io/product/",
      headers: {},
      data: {
        "title": `${form.title}`,
        "price": `${form.price}`,
        "des": `${form.des}`,
        "img": `${form.img}`,
      }
    })
    return res.data
  }
)


const delProduct = createAsyncThunk(
  "delProduct",
  async (id) => {
    const res = await axios.delete(`https://64966e6c83d4c69925a2cb54.mockapi.io/product/${id}`)
    return id
  }
)
export default productSlice
export { callAPI, delProduct, addProduct }


