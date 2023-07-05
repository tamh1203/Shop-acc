import React from "react";
import ProductList from ".";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <div className="d-flex justify-content-center align-items-center detail-cus ">
            <div className="detail col-4">
              <h1>
                KeyBoard Shop
              </h1>
              <p>
                Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet,
                lobortis semper quam.Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet,
                lobortis semper quam.
              </p>
              <div className="btn-box btn1">
                <NavLink to="/contacts" className="btn1">
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="col-6">
              <img src="/assets/img/1402_layout-ban-phim.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductList />
      </div>
    </div>

  );
};

export default Home;
