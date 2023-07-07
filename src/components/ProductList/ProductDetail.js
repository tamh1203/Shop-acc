import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSelector } from "../../redux/selector";
import { NavLink } from "react-router-dom";
import { addItem } from "../Cart/CartSlice";

const ProductDetail = () => {
  const [cart, setCart] = useState("Add to Cart")
  const dispatch = useDispatch()
  const { id } = useParams()
  const list = useSelector(listSelector)
  const detail = list.find(item => item.id == id)
  console.log(list);
  const handleCart = (detail) => {
    dispatch(addItem({ ...detail }));
    console.log(detail);
  }

  return <>
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img
            src={detail.img}
            alt={detail.title}
            height="350px"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold" style={{ color: "red" }}>{detail.title}</h1>
          <hr />
          <h2 className="my-4" style={{ color: "blue" }}>${detail.price}</h2>
          <p className="lead" style={{ color: "white" }}>{detail.des}</p>
          <div>
            <NavLink
              className="btn btn-danger my-5 me-3"
              style={{ width: "130px" }}
              to={`/products/detail/${detail.id}`}
            >
              BUY NOW
            </NavLink>
            <button
              className="btn btn-outline-dark my-5"
              style={{ width: "200px" }}
              onClick={() => {
                handleCart(detail)
              }}
            >
              {cart}
            </button>
          </div>

        </div>
      </div>
    </div>
  </>
}


export default ProductDetail