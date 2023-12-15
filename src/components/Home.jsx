import React from "react";
import "./home.css";
import logo from "../assets/suc_logo.png";

const Home = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 py-12">
    <div id="suc_logo" class="flex items-center justify-center mt-8">
      <div>
        <img id="image_logo" src={logo} alt="logo" class="w-[75%] py-8 ml-16" />
      </div>
    </div>
    <div id="intro" className="flex items-center justify-center mt-8">
      <p className="text-center">
        <span className="text-[#B70404] font-bold">
          Central India's Largest B-Plan Competition.
        </span>
        <br />
        <span className="text-2xl">
          Registrations for SUC 2024 Starting soon !!!
        </span>
      </p>
    </div>
  </div>
);

export default Home;
