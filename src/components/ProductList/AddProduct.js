
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from './productSlice'

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    des: "",
    img: "",
    price: ""
  })
  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addProduct(form))
    setForm("")
    console.log(form)
  }

  return <>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Product Name</label>
        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="form-control" />
      </div>
      <div className="mb-3">
        <label>Product Description</label>
        <input value={form.des} onChange={(e) => setForm({ ...form, des: e.target.value })} className="form-control" />
      </div>
      <div className="mb-3">
        <label >Images Product</label>
        <input value={form.img} type='file' onChange={(e) => setForm({ ...form, img: e.target.value })} className="form-control" />
      </div>
      <div className="mb-3">
        <label>Price Product</label>
        <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form >
  </>
}
