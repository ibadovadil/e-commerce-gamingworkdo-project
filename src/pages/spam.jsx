import React, { useContext, useRef, useState } from "react";
import { Modecontext } from "../context/Modecontent";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Langcontext } from "../context/Langcontext";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { Orbit } from "@uiball/loaders";

const Header = () => {
  const users = localStorage.getItem("users")
  const userlogin = JSON.parse(users);
  const navigate = useNavigate();
  const shop = useSelector((p) => p);
  const [lang, setLang] = useContext(Langcontext);
  const [mode, setMode] = useContext(Modecontext);
  const queryRef = useRef();
  const [query, setQuery] = useState(null);
  const { totalItems } = useCart();
  const querySubmit = (event) => {
    event.preventDefault();
    setQuery(queryRef.current.value);
  };
  console.log(query);















  
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("active");
    // localStorage.removeItem("active1");

    navigate("/login");
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            width={100}
            src="https://rglobalcarrental.com/wp-content/uploads/2020/05/LUXURY-CAR-RENTAL-SERVICE-MALAYSIA.png"
            alt=""
          />
        </a>
        <button
          style={{ color: "white" }}
          className="navbar-toggler custom-button-color"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {lang === "az" ? "Ana Səhifə" : "Home"}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                {lang === "az" ? "Bizim haqqımızda" : "About Us"}
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link " aria-disabled="true">
                {lang === "az" ? "əlaqə saxlayın" : "Contact"}
              </a>
            </li>
            <li className="nav-item">
              <a href="/shop" className="nav-link " aria-disabled="true">
                {lang === "az" ? "mağaza" : "Shop"}
              </a>
            </li>
            <li className="nav-item">
              <a href="/fag" className="nav-link " aria-disabled="true">
                {lang === "az" ? "tez-tez verilən suallar" : "FAQ"}
              </a>
            </li>
            <li className="nav-item">
              <a href="/wishlist" className="nav-link " aria-disabled="true">
                {lang === "az" ? "istək siyahısı" : "Wishlist"}
              </a>
            </li>
          </ul>

          {localStorage.getItem("active") === "user@user.gmail.com" ? (
            <>
              <div className="user">{localStorage.getItem("name")}</div>
              <button onClick={handleLogout} class="BTN">
                <div class="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>

                <div class="text-out">Logout</div>
              </button>
            </>
          ) : localStorage.getItem("active") === "admin@admin" ? (
            <>
            
              <Link to={"/admin"} className="admin">
                Admin
              </Link>
              <button onClick={handleLogout} class="BTN">
                <div class="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>

                <div class="text-out">Logout</div>
              </button>
            </>
          ) : (
            <Link to={"/login"} className="btn">
              <button className="login mx-3">
                <i className="fa-solid fa-user"></i>
              </button>
            </Link>
          )}

          <div className="search">
            <button
              type="button"
              className="search  my-3 mx-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-dark"
                      id="exampleModalLabel"
                    >
                      Search
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={querySubmit} className="input-group mb-3">
                      <input
                        // ref={queryRef}
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter your car "
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </form>
                    <ul className="list-group">
                      {shop
                        .filter((p) => p.model.toLowerCase().includes(query))
                        .map((item) => (
                          <Link to={`/Productdetails/${item.id}`}>
                            <li key={item.id} className="list-group-item">
                              <img width={50} src={item.image} alt="" />{" "}
                              {item.model}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/cartpage"
              type="button"
              className="btn btn-succcess position-relative"
            >
              <i class=" cartpage fa-solid fa-cart-shopping"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </div>
          <div className="d-flex" role="button">
            <button
              className="mode mx-4"
              type="button"
              onClick={() => {
                mode === "dark" ? setMode("light") : setMode("dark");
                mode === "dark"
                  ? localStorage.setItem("mode", "light")
                  : localStorage.setItem("mode", "dark");
              }}
            >
              {/* {mode === "light" ? "Dark" : "Light"} */}
              <i class="fa-solid fa-moon"></i>
            </button>
            <button
            style={{marginLeft:"10px"}}
              className="lang-button"
              type="button "
              onClick={() => {
                lang === "az" ? setLang("en") : setLang("az");
                lang === "az"
                  ? localStorage.setItem("lang", "en")
                  : localStorage.setItem("lang", "az");
              }}
            >
              {lang === "az" ? "EN" : "AZ"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;