import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useAuth } from "../../context/auth";
import './Navbar.css';

const Navbar = () => {

  const { auth, setAuth } = useAuth();
  const handleLogout =()=>{
    setAuth({
      ...auth,
      user: null,
      token: "",
    })
    localStorage.removeItem("auth");
  }

  return (
    <div class="container-fluid " style={{ padding: "0 15px" }}>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        style={{ margin: "0 -3px",fontSize:"20px" }}
      >
        <Link to="/">
        <Logo/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{marginLeft:"25px"}}>
          <ul class="navbar-nav" style={{marginLeft:"10px"}}>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Orders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Category
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Mens
                </a>
                <a className="dropdown-item" href="#">
                  Womens
                </a>
                <a className="dropdown-item" href="#">
                  Kids
                </a>
              </div>
            </li>
            {
              !auth.user ? (
              <>
              <li class="nav-item" style={{marginLeft:"300px"}}>
              <Link to="/login">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          LogIn
        </button>
              </Link>
          </li>
          <li class="nav-item ml-5" >
          <Link to="/signup">
          <button class="btn btn-outline-success my-2 my-sm-0 ml-5" type="submit">
          SignUp
        </button>
        </Link>
          </li>
              </>
           )  : (
            <li class="nav-item" style={{marginLeft:"300px"}}>
              <Link to="/login">
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} type="submit">
          Logout
        </button>
              </Link>
          </li>
           ) }
          </ul>

          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "300px",marginLeft:"20px" }}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
