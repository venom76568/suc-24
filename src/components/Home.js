import React from 'react';
import './home.css';
import NavBar from './NavBar';
import SUC_logo from "../assets/SUClogo_1.png"
import RegisterButton from './RegisterButton';
import Login from './Login';

function Home()
{
  return(
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'></div>
      
        <nav id="navbar">
          <NavBar/>
        </nav>
        <div className='flex flex-col h-screen justify-center items-center '>
          <div><img src={SUC_logo} width="700rem" ></img></div>
          <div className='flex justify-evenly m-10'>
            <div className='m-3 mr-8 w-30'>
              <RegisterButton/>
            </div>
            <div className='m-3 ml-8'>
              <Login  />
            </div>
          </div>
          
        </div>
        
    
  </div>
  )
}
  


export default Home;