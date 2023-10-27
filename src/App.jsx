import React from "react";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Register from "./components/Register";

function App()
{
    return(
        <BrowserRouter>
        <Home/>
        <About/>
        {/* <Register/> */}
        </BrowserRouter>
    );
}
export default App;