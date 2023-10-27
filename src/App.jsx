import React from "react";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
// import Register from "./components/Register";

function App()
{
    return(
        <BrowserRouter>
        <Home/>
        {/* <Register/> */}
        </BrowserRouter>
    );
}
export default App;