import React from 'react';
import './about.css';
import logo from "../assets/SUC logo_1_copy.png";
import logo1 from "../assets/ecell logo.png";

const About = () => (
  <div>
        <div id="about" className="flex items-center justify-center text-white text-4xl font-mono font-bold my-12">
        <p className="hover-underline-animation" id="aboutus">About us</p>
  </div>

  <div className="flex items-center justify-center">
    <span className="w-4 h-4 bg-red-700 rounded-full my-4"></span>
  </div>

  <div id="part1" className="flex items-center justify-evenly text-white ">
    <div><img id="img1" src={logo} alt="startup conclave logo" className="w-60 hover:scale-125 "/></div>
<div className="border-l-4 border-red-700 h-72 "></div>
  <div id="text1" className="flex flex-col justify-center text-base w-60 font-medium space-y-2 ">
    Innovation and enterprising are the wheels that steer the world into a brighter future. Great ideas result into great undertakings which pave the way for glaring success. In order to facilitate this vision of promoting entrepreneurship in India, E-Cell VNIT organizes StartUp Conclave, a national-level business plan competition.
  </div>
</div>

<div className="flex items-center justify-center">
  <span className="w-4 h-4 bg-red-700 rounded-full my-4"></span>
</div>

<div id="part2" className="flex items-center justify-evenly text-white ">
  <div id="text2" className="flex flex-col justify-center text-base font-medium w-60 space-y-2 ">
    Entrepreneurship Cell is managed by students of VNIT under the guidance of Centre of Innovation, Nagpur and Prime Minister Yuva Yojana, which aims to promote and develop entrepreneurship culture amongst the students. Throughout the year, we conduct various events, workshops and invite speakers from varied domains to inspire and assist students on their journey to become leading entrepreneurs of tomorrow.
  </div>
    <div className="border-l-4 border-red-700 h-96 "></div>
    <div><img id="img2" src={logo1} alt="E-Cell logo" className="w-60 hover:scale-125 "/></div>
</div>

  <div className="flex items-center justify-center">
    <span className="w-4 h-4 bg-red-700 rounded-full my-4"></span>
  </div>   
  </div>
);

export default About;