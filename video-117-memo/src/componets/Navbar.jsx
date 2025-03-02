import React, { memo } from 'react'

const Navbar = ({text,changeSomething}) => {
    console.log("navbar")
  return (
    <div>
      i am {text}
      <button onClick={()=>{changeSomething()}} >change text</button>
    </div>
  )
}

export default memo(Navbar)
