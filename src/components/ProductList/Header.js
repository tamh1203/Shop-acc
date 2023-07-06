import React from "react";
import { NavLink } from "react-router-dom";
import AdminBtn from "../Cart/AdminBtn";
import CartBtn from "../Cart/CartBtn";
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
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Login
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <button className="btn btn-primary w-100 mb-4">
                      <span className="fa fa-google me-2"></span> Sign in With
                      Google
                    </button>
                    <button className="btn btn-primary w-100 mb-4">
                      <span className="fa fa-facebook me-2"></span> Sign in
                      With Facebook
                    </button>
                    <Formik
                      initialValues={form}
                      onSubmit={handleLogin}
                      validationSchema={SigninSchema}
                    >
                      <Form>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <Field
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                          />
                          <ErrorMessage
                            name="email"
                            component={"span"}
                            className="text-danger"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <Field
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                          />
                        </div>
                        <ErrorMessage
                          name="password"
                          component={"span"}
                          className="text-danger"
                        />
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-outline-primary w-100 mt-5"
                          data-bs-dismiss="modal"
                        >
                          Submit
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            {isLoggedIn ? <CartBtn /> : <div></div>}
            <AdminBtn />
          </div>
        </nav>

      </div>
    </>
  );
};

export default Header;
