
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from './productSlice'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    des: "",
    img: "",
    price: ""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addProduct(form))
    setForm({
      title: "",
      des: "",
      img: "",
      price: ""
    })
    // navigate("/products")
    console.log(form, setForm)

  }

  return <>
    <div className='d-flex justify-content-around mt-5'>
      <form onSubmit={handleSubmit} style={{ width: "500px", height: "300px" }}>
        <h3>Product New</h3>
        <div className="mb-3" >
          <label>Product Name</label>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="form-control" placeholder='ProductName' />
        </div>
        <div className="mb-3">
          <label>Product Description</label>
          <textarea value={form.des} onChange={(e) => setForm({ ...form, des: e.target.value })} className="form-control" placeholder='Des' />
        </div>
        <div className="mb-3">
          <label >Images Product</label>
          <input value={form.img} type='text' onChange={(e) => setForm({ ...form, img: e.target.value })} className="form-control" placeholder='url' />
        </div>
        <div className="mb-3">
          <label>Price Product</label>
          <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="form-control" placeholder='Price' />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form >
    </div>
  </>
}
