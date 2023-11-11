import React from 'react';
import './home.css';
import logo from"../assets/SUC logo_1_copy.png";

const Home = () => (
  <div>
    <div id='stars' class="bg-gray-900"></div>
<div id='stars2' class="bg-gray-900"></div>
<div id="intro" class="flex items-center justify-center mt-8">
  <p class="hover:underline">Central India's Largest B-Plan Competition.<br />
  Registrations for SUC 2023 Starting soon !!!</p>
</div>
<div id='suc_logo' class="flex items-center justify-center mt-8">
  <div>
    <img id='image_logo' src={logo} class="w-96 my-4" />
  </div>
</div>
<div id='buttons' class="flex items-center justify-center mt-8">
  <span><button id='button1' class="px-8 py-4 bg-white text-black font-semibold rounded-full transition-colors duration-300 ease-in-out hover:bg-red-500 hover:text-white"><a href="">Sign Up</a></button></span>
  <button id='button2' class="px-8 py-4 bg-transparent border-2 border-gray-900 text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-red-500 hover:border-red-500 hover:shadow-lg"><a href="">Sign in</a></button>
</div>
  </div>
);

export default Home;