import React from "react";
import { NavLink } from "react-router-dom";
// import CartBtn from "./buttons/CartBtn";
// import AdminBtn from "./buttons/AdminBtn";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Header = () => {
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
            <NavLink className="navbar-brand fw-bold" to="/">MOMO Shop</NavLink>
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
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
