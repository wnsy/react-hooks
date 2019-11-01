import React, { useState } from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import useTodoState from 'useTodoState.js'

const App = () => {
  // const [ todos, setTodos, deleteTodo ] = useState([])
  const { todos, addTodo, deleteTodo } = useTodoState([])

  console.log("todos debug in App.js", todos)
  // saveTodo:.
  const saveTodo = (todoText) => {
    const trimmedText = todoText.trim()
    if (trimmedText.length > 0) {
      addTodo(trimmedText)
      // console.log("debug trimmedText", trimmedText)
    }
  }


  return (
    <div className="container">
      <h2>React hooks</h2>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Todo form</h2>
          <TodoForm saveTodo={saveTodo}
          />
          <TodoList
            todos={todos}
            // deleteTodo={(todoIndex) => {
            //   const newTodos = todos.filter((_, index) => index !== todoIndex)
            //   setTodos(newTodos)
            // }}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
