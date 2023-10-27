import React from 'react';
import './about.css';
import logo from "../assets/SUC logo_1_copy.png";
import logo1 from "../assets/ecell logo.png";

const About = () => (
  <div>
        <div id="about">
        <p class="hover-underline-animation">About us</p>
        </div>
    <div id="Dot"><span id="dot"></span></div>
    <div id="part1">
        <div><img id="img1" src={logo} alt="startup conclave logo"/></div>
        <div id="vl"></div>
        <div id="text1">Innovation and enterprising are the wheels that steer the world into a brighter future. Great ideas result into great undertakings which pave the way for glaring success. In order to facilitate this vision of promoting entrepreneurship in India, E-Cell VNIT organizes StartUp Conclave, a national-level business plan competition.</div>
    </div>
    <div id="Dot"><span id="dot"></span></div>
    <div id="part2">
        <div id="text2">Entrepreneurship Cell is managed by students of VNIT under the guidance of Centre of Innovation, Nagpur and Prime Minister Yuva Yojana, which aims to promote and develop entrepreneurship culture amongst the students. Throughout the year, we conduct various events, workshops and invite speakers from varied domains to inspire and assist students on their journey to become leading entrepreneurs of tomorrow.</div>
        <div id="vl"></div>
        <div><img id="img2" src={logo1} alt="E-Cell logo"/></div>
    </div>
    <div id="Dot"><span id="dot"></span></div>
  </div>
);

export default About;