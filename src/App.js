import React, { useState } from 'react'
import TodoForm from './TodoForm.js'

const App = () => {
  const [todos, setTodos] = useState([])
  return (
    <div className="container">
      <h2>React hooks</h2>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Todo form</h2>
          <TodoForm save={console.warn}/>
        </div>
      </div>
    </div>
  )
}

export default App;
