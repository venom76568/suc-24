import React from "react";
import './navbar.css';
import black_logo from "../assets/ecell logo.png";

const Navbar = () => (
    <div>
        <header>
            <div id="header">
            <div id="logo">
              <a href="https://www.ecellvnit.org/" target="_blank"><img id="black_logo" src={black_logo} alt="logo" /></a>
            </div>
            <div>
      <nav id="navbar">
      <div class="menu-toggle">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
        <ul className="navbar">
          <li id="button"><button><a href="https://forms.gle/tkcbw4ozCT4P1cMc6" target="_blank">Register</a></button></li>
          <li><a href="">Contact</a></li>
          {/* <li><a href="">Glimpses</a></li> */}
          <li><a href="">Speakers N Sponsors</a></li>
          <li><a href="#aboutus">About us</a></li>
          <li><a href="#stars" class="active">Home</a></li>
        </ul>
      </nav>
      </div>
            </div>
    </header>
    {/* { <script>
    document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('show')
    });
    </script> } */}
    </div>
);
export default Navbar;