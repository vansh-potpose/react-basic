import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btn, setbtn] = useState(false)

  const [form, setForm] = useState({email:"",phone:""})
  const [todos, setTodos] = useState([
    {
      tittle:"heloo",
      des:"h e l o o"
    },
    {
      tittle:"hello",
      des:"h e l l o"
    },
    {
      tittle:"hell2o",
      des:"h e l l   o"
    }
  ])

  // https://jsonplaceholder.typicode.com/posts
  const [card, setCard] = useState([])

  useEffect(() => {

    const f=async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setCard(result)
      } catch (error) {
        
      } 
    };
    f();
  }, [])
  
  const hadleChanges=(e) => {
    setForm({...form,[e.target.name]:e.target.value})
    console.log('form', form)
  }
  

  return (
    <>

      {todos.map(todo=>{
        return(
          <div key={todos.tittle} className='todo'>
          <div>{todo.tittle}</div>
          <div>{todo.des}</div>
          </div>
        )
      })}
      
      
      {/* {btn && <button>hello</button>} */}

      {btn?<button>hello</button>:<button>olleh</button>}

      <div className="card">
        <button onClick={() => setbtn(!btn)}>
          btn change {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input type="text" name="email" value={form.email} onChange={hadleChanges} />
      <input type="text" name="phone" value={form.phone} onChange={hadleChanges} />

      <div className="container">
        {card.map(item=>{
          return(<div key={item.id} className="card">
            <div><strong>tittle :{item.title}</strong></div>
            <div>{item.body}</div>
            </div>)
        })}
        
      </div>
    </>
  )
}

export default App
