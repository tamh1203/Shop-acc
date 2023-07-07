import React from "react";
import { NavLink } from "react-router-dom";
import AdminBtn from "../Cart/AdminBtn";
import CartBtn from "../Cart/CartBtn";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/selector";
const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Header = () => {
  const cart = useSelector(cartSelector)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleLogin = (values, { resetForm }) => {
    console.log(values);
    setForm({
      email: values.email,
      passwordL: values.password,
    });
    setIsLoggedIn(true);
    resetForm();
  };
  return (
    <>
      <div className="header container-fluid col-sm-11 col-lg-11 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Offcanvas navbar large">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold" to="/">Shop</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/products">KeyBoard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/abouts">Abouts</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/contacts">Contact Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/cart">Cart ({cart.length})</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <div className="d-flex align-items-center text-info">
                <p>{form.email}</p>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-outline-primary ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                <span className="fa fa-sign-in me-1"></span> Login
              </button>
            )}
            <div
              className="modal fade"
              id="loginModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
            </div>

            <AdminBtn />
          </div>
        </nav>

      </div>
    </>
  );
};

export default Header;
