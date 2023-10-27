import React from "react";
import './navbar.css';
import black_logo from "../assets/ecell logo.png";

const Navbar = () => (
    <div>
        <header>
            <div id="header">
            <div id="logo">
              <img id="black_logo" src={black_logo} alt="logo" />
            </div>
            <div>
      <nav id="navbar">
        <ul>
          <li id="button"><button><a href="register.html">Register</a></button></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Glimpses</a></li>
          <li><a href="">Speakers</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </nav>
      </div>
            </div>
    </header>
    </div>
);
export default Navbar;