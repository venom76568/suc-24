import React from 'react'
import RegisterButton from './RegisterButton'

function NavBar() {
  return (
    <div>
      <ul>
          <li id="button"><RegisterButton/></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Glimpses</a></li>
          <li><a href="">Why SUC</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Home</a></li>
        </ul>
    </div>
  )
}

export default NavBar

