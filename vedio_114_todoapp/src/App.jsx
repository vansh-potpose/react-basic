  import { useState,useEffect } from 'react'
  import { v4 as uuidv4 } from 'uuid';
  import Navbar from './components/Navbar'
  import { FaEdit } from "react-icons/fa";
  import { MdDelete } from "react-icons/md";


  function App() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [isCompleted, setIsCompleted] = useState(false)

    useEffect(() => {
      let  todoString =localStorage.getItem("todos")
      if(todoString){
        let todos=JSON.parse(todoString);
        setTodos(todos)
      }
    }, [])

    const saveTodos =(params) => {
      localStorage.setItem("todos",JSON.stringify(todos))
    }
    
    

    const handleChange = (e) => {
      setTodo(e.target.value);
    }
    const addTodo = () => {
      if(todo.length!==0){

        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
        setTodo("")
        saveTodos()
      }

    }

    const handleCheckbox=(e) => {
      let id=e.target.name;
      let index=todos.findIndex(item=>{
        return item.id===id;
      })
      let newTodos=[...todos];
      newTodos[index].isCompleted=!newTodos[index].isCompleted;
      setTodos(newTodos)
      saveTodos()
    }
    
    const handleDelete=(e,id) => {
      const confirmed = window.confirm("Are you sure you want to delte this todo?");
      if (confirmed) {
        let newTodos=todos.filter(item=>{
          return item.id!==id;
        })
        setTodos(newTodos);
        saveTodos()
      } 
      
    }
    
    const handleEdit=(e,id) => {
      let index=todos.findIndex(item=>{
        return item.id===id;
      })
      
      setTodo(todos[index].todo)
      
      let newTodos=todos.filter(item=>{
        return item.id!==id;
      })

      setTodos(newTodos);
      saveTodos()
    }
    
    

    return (
      <>
        <div className='bg-green-100 h-screen'>

          <Navbar />
          <div className="todo-container bg-green-300 min-h-[90vh] m-4 rounded-lg md:max-w-[80vw] mx-auto p-5 font-semibold">
            <div className="todo-adder">
              <span>ADD A TODO</span>
              <div className='flex gap-4 max-w-[69%] justify-between'>
                <input type="text" onChange={handleChange} value={todo} className='rounded outline-green-700 w-fill-available' />
                <button onClick={addTodo} disabled={todo.length<3} className='bg-green-700 text-white px-2 py-[3px] rounded disabled:bg-green-600'>Save</button>
              </div>
              <div className='flex my-2 mx-1 gap-2'><input type="checkbox" className='scale-125' onChange={()=>{setIsCompleted(!isCompleted)}} />Show Completed tasks</div>
            </div>
            <div className="Todos md:max-w-[70%] flex-col gap-2 my-4">
              {todos.length===0 && <h3>No todos to display</h3>}
              {todos.map(item => {
                return ( (isCompleted || !item.isCompleted ) &&
                  <div key={item.id} className={`${item.isCompleted ? "bg-yellow-300" : "bg-green-200"} todo flex justify-between bg-green-200 px-4 py-2 rounded my-2 items-center`}>
                    <div className="todo-text flex items-center gap-2">
                      <input onChange={handleCheckbox} name={item.id} type="checkbox" className='scale-125' checked={item.isCompleted} />
                      <div className={`${item.isCompleted ? "line-through" : ""} break-all flex-grow`}>{item.todo}</div>
                    </div>
                    <div className="todo-button flex gap-5 h-full">
                      <button onClick={(e)=>{handleEdit(e,item.id)}} className={`${item.isCompleted ? "bg-yellow-600" : "bg-green-700"} text-white px-2 py-[3px] rounded `}><FaEdit className='scale-110'/></button>
                      <button onClick={(e)=>{handleDelete(e,item.id)}} className={`${item.isCompleted ? "bg-yellow-600" : "bg-green-700"} text-white px-2 py-[3px] rounded h-8`}><MdDelete  className='scale-125' />
                      </button>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </>
    )
  }

  export default App
