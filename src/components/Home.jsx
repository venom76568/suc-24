import React from 'react';
import './home.css';
import logo from"../assets/SUC logo_1.png"

const Home = () => (
  <div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id='title'></div>
    <header>
      <nav id="navbar">
        <ul>
          <li id="button"><button><a href="register.html">Register</a></button></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Glimpses</a></li>
          <li><a href="">Why SUC</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </nav>
    </header>
  <div id='suc_logo'>
    <div>
      <img src={logo}  />
    </div>
  </div>
    
  </div>
);

export default Home;