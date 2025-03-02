import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import 'D:/Pracice/htlm/REACT.js/react basic/video115-router/src/App.css'
import Button from './Button'
import { counter } from './contex/contex'
const Navbar = () => {
 const [count, setCount] = useState(0)
  return (
    <div>
        <counter.Provider value={{count,setCount}}>

      <nav>
        <ul>
            <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/">home</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/login">login</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/about">about</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/user/raj">raj</NavLink></li>
            <Button/>
        </ul>
      </nav>
        </counter.Provider>
    </div>
  )
}

export default Navbar
