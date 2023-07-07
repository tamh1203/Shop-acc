import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delItem } from '../Cart/CartSlice'
import { cartSelector } from '../../redux/selector';
import { API } from '../Cart/CartSlice';
import { useEffect, useState } from 'react';

const Cart = () => {
  const cart = useSelector(cartSelector)
  console.log(cart);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(API())
  }, [])
  const handleClose = (id) => {
    dispatch(delItem(id))
  }
  const cartItems = (cartItem) => {
    console.log(cartItem);
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(cartItem.id)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.img} alt={cartItem.title} height="200px" width="300px" />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  }
  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 && cart.map(cartItems)}
      {cart.length !== 0 && button()}
    </>
  )
}

export default Cart