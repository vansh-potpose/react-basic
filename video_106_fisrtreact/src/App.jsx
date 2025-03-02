import { useState,useEffect,useRef } from "react"

import Navbar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0)
  let a=0;
  const b=useRef(0);

  const btnref =useRef()
  
  useEffect(() => {
    // all render active
    a=a+1; //due to rerendering this is not working as "a " is initionalised again and again
    b.current=b.current+1; // when ref is change the page does not render
    console.log(`a=${a} and b=${b.current}`)
  })
  

  // frist render active
  useEffect(() => {
    alert("app opened")
    btnref.current.style.backgroundColor="red" //can access it anywere
  }, [])

  // certian value cahnge active
  useEffect(() => {
    alert("count changed")
  }, [count])
  
  return (
    <>
      <Navbar bg="red" tittle="code with harry" textcolor="white"/>
      <div>count is {count}</div>
      <button ref={btnref} onClick={()=>{setCount(count+1)}}>count++</button>
    </>
  )
}

export default App
