import React from "react";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
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
        <Footer/>
        </BrowserRouter>
    );
}
export default App;