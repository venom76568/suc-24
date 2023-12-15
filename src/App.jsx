import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import About1 from "./components/About1";

function App() {
  return (
    <BrowserRouter>
      <div className="page-top">
        <Navbar />
        <Home />
        <About1 />
        {/* <About /> */}
        <TimeLine />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
