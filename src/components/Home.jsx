import React from "react";
import "./home.css";
import logo from "../assets/suc_logo.png";
import brochure from "../assets/StartUp Conclave Media Brochure.pdf";

const Home = () => (
  <div id="" className="grid grid-cols-1 md:grid-cols-2 py-12">
    <div id="suc_logo" class="flex items-center justify-center mt-8">
      <div className="">
        <img
          id="image_logo"
          src={logo}
          alt="logo"
          class="w-[75%] py-8 ml-[35px] md:ml-16"
        />
      </div>
    </div>
    <div
      id="intro"
      className="flex flex-col items-center justify-center mt-8 p-2"
    >
      <p className="text-center">
        <span className="text-[#B70404] font-bold">
          Central India's Largest B-Plan Competition.
        </span>
        <br />
        <span className="text-2xl">
          Registrations for SUC 2024 Starting soon !!!
        </span>
      </p>
      <div className="">
        <a
          href="https://forms.gle/tkcbw4ozCT4P1cMc6"
          rel="noreferrer"
          target="_blank"
          className="mr-8"
        >
          <button className=" bg-[#ff0000] scale-110 hover:bg-red-700 text-white font-bold mt-2 py-2 px-4 rounded">
            Register Now
          </button>
        </a>
        <a
          href={brochure}
          download="StartUp Conclave Media Brochure.pdf"
          rel="noreferrer"
          target="_blank"
        >
          <button className="bg-[#ff0000] scale-110 hover:bg-red-700 text-white font-bold mt-2 py-2 px-4 rounded">
            Brochure
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
