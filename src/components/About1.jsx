import React from "react";
import "./about1.css";
import logo from "../assets/SUC logo_1_copy.png";
import logo1 from "../assets/ecell logo.png";

const AboutSection = () => {
  return (
    <div>
      <div
        id="about"
        className="flex items-center justify-center text-white text-4xl font-bold my-12"
      >
        <p className="hover-underline-animation" id="aboutus">
          About us
        </p>
      </div>
      <section className="about-section text-white flex m-auto ml-1">
        {/* Image Column */}

        {/* <div className="image-column col-lg-6 col-md-12 col-sm-12  ">
          <div className="inner-column wow fadeInLeft hidden md:block ">
            <div className="author-desc bg-red">
              <h2 className="text-bold">Start-up conclave</h2>
              <span>Entrepreneurship cell VNIT</span>
            </div>
            <figure className="image-1">
              <a href="#" className="lightbox-image" data-fancybox="images">
                <img src={aboutcopy} alt="" />
              </a>
            </figure>
          </div>
        </div> */}

        {/* Content Column */}
        <div className="content-column scale-110 col-lg-6 col-md-12 col-sm-12">
          <div
            id="part1"
            className="flex items-center justify-evenly text-white "
          >
            <div>
              <img
                id="img1"
                src={logo}
                alt="startup conclave logo"
                className="w-60 hover:scale-125"
              />
            </div>

            <div
              id="text1"
              className="flex flex-col justify-center text-base w-80 font-medium space-y-2"
            >
              Innovation and enterprising are the wheels that steer the world
              into a brighter future. Great ideas result in great undertakings
              that pave the way for glaring success. In order to facilitate this
              vision of promoting entrepreneurship in India, E-Cell VNIT
              organizes StartUp Conclave, a national-level business plan
              competition.
            </div>
          </div>

          <div
            id="part2"
            className="flex items-center justify-evenly text-white"
          >
            <div
              id="text2"
              className="flex flex-col justify-center text-base font-medium w-80 space-y-2"
            >
              Entrepreneurship Cell is managed by students of VNIT under the
              guidance of the Centre of Innovation, Nagpur, and Prime Minister
              Yuva Yojana, which aims to promote and develop the
              entrepreneurship culture amongst the students. Throughout the
              year, we conduct various events, workshops, and invite speakers
              from varied domains to inspire and assist students on their
              journey to become leading entrepreneurs of tomorrow.
            </div>

            <div>
              <img
                id="img2"
                src={logo1}
                alt="E-Cell logo"
                className="w-60 hover:scale-125"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
