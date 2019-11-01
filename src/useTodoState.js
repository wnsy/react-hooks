import { useState } from 'react'

export default (initialValue) => {
  const [todos, setTodos, deleteTodo] = useState(initialValue)

  return {
    todos,
    addTodo: (todoText) => {
      setTodos([...todos, todoText])
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex)
      setTodos(newTodos)
    },
  }
}
