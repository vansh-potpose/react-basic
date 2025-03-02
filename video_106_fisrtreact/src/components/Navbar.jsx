import React from 'react'
import './Navbar.css'
const Navbar = (props) => {
  return (
    <div>
      <nav style={{backgroundColor:props.bg,color:props.textcolor}}>
        <div className="title">
            {props.tittle}
        </div>
        <ul >
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
