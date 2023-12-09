import React from "react";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Memories from "./components/Memories";
// import Register from "./components/Register";

function App()
{
    return(
        <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <TimeLine/>
        {/* <Register/> */}
        {/* <Memories/> */}
        <Contact/>
        <Footer/>
        </BrowserRouter>
    );
}
export default App;