import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { callAPI } from './productSlice'
import { listSelector } from '../../redux/selector'
import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { delProduct, addProduct } from './productSlice'

export default function Admin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const list = useSelector(listSelector)
  useEffect(() => {
    dispatch(callAPI())
  }, [])
  console.log(list);
  const Item = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead" style={{ color: "red", fontWeight: "blod" }} >Giá : {item.price}</p>
          <button className='btn btn-danger' onClick={() => dispatch(delProduct(item.id))}>Delete</button>
        </div>
      </div>
    );
  };
  return <>

    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Key Board</h1>
            <NavLink className="btn btn-info ms-5 mt-5 " to="/addproduct">Add Product</NavLink>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {list.map(Item)}
        </div>
      </div>
    </div>
  </>
}
