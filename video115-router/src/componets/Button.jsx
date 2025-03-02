import React, { useContext } from 'react'
import PropDrill from './PropDrill'
import { counter } from './contex/contex'
const Button = () => {
    const value=useContext(counter)
  return (
    <div>
        <button onClick={()=>{value.setCount((count)=>count+1)}}>click</button>
      <PropDrill/>
    </div>
  )
}

export default Button
