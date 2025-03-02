import { useState,useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'

const nums=new Array(30_000).fill(0).map((_,i)=>{
  return{
    index:i,
    isMagical:i===20_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)
  const [text, setText] = useState("hello")
  const magical=useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])

  const changeSomething = useCallback(
    () => {
      return "another"
    },
    [],
  )
  
  return (
    <>
      <Navbar text={text} changeSomething={changeSomething} />

      <h1>Vite + React {magical.index}</h1>
      <div className="card">
        <button onClick={() =>{ setCount((count) => count + 1);
          if(count==10){
            setNumbers(new Array(40_000).fill(0).map((_,i)=>{
              return{
                index:i,
                isMagical:i===30_000
              }
            }))
          }}}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
