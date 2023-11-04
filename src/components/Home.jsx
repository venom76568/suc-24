import React from 'react';
import './home.css';
import logo from"../assets/SUC logo_1_copy.png";

const Home = () => (
  <div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id='title'></div>
    <div id="intro">
      <p class="hover-underline-animation">Central India's Largest B-Plan Competition.<br />
      Registrations for SUC 2023 Starting soon !!!</p>
    </div>
  <div id='suc_logo'>
    <div>
      <img id='image_logo' src={logo}  />
    </div>
  </div>
    <div id='buttons'>
      <span><button id='button1'><a href="">Register</a></button></span>
      <button id='button2'><a href="">Login</a></button>
    </div>
    
  </div>
);

export default Home;