import React,{useContext} from 'react'
import { counter } from './contex/contex'

const PropDrill = () => {
    const value=useContext(counter)
  return (
    <div>{value.count}</div>
  )
}

export default PropDrill