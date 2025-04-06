import './App.css'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const handleClick = () => {
      setTodos([...todos, todo])
      setTodo("")
  }

  const handleDelete = () => {
    setTodos(todos.filter((item, index) => index !== todos.length - 1))
  }

  return (
    <>
      <input type='text' placeholder='Type in the task' value={todo} onChange={handleInput} />
      <p></p>
      <button onClick={handleClick}>Add Todo</button>
      <button onClick={handleDelete}>Delete Todo 🥲</button>
      <div>
        {todos.map((item, index) => (
          <div key={index} className='todo'>{item}</div>
        ))}
      </div>
    </>
  )
}

export default App