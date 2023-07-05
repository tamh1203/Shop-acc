import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSelector } from "../../redux/selector";
import { NavLink } from "react-router-dom";
import { addProduct } from "./productSlice";

const ProductDetail = () => {
  const [cart, setCart] = useState("Add to Cart")
  const dispatch = useDispatch()
  const { id } = useParams()
  const list = useSelector(listSelector)
  const detail = list.find(item => item.id == id)
  console.log(detail);

  function handleClick(detail) {
    dispatch(addProduct(detail))
    console.log("handle:", detail);
  }
  return <>
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img
            src={detail.img}
            alt={detail.title}
            height="400px"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold">{detail.title}</h1>
          <hr />
          <h2 className="my-4">${detail.price}</h2>
          <p className="lead">{detail.des}</p>
          <div>
            <NavLink
              className="btn btn-danger my-5 ms-3"
              style={{ width: "130px" }}
              to={`/products/detail/${detail.id}`}
            >
              MUA NGAY
            </NavLink>
            <button
              className="btn btn-outline-dark my-5"
              style={{ width: "200px" }}
              onClick={() => {
                handleClick(detail)
              }}
            >
              CHO VÀO GIỎ HÀNG
            </button>
          </div>

        </div>
      </div>
    </div>
  </>
}


export default ProductDetail