import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './useInputState'

const TodoForm = ({ saveTodo }) => {
  //keeps the val
  // const [value, setValue] = useState('')
  const { value, onChange, reset } = useInputState('')

  const handleSubmit = (event) => {
    event.preventDefault() // prevent child event bubbling to parent to document
    saveTodo(value) // WHY: from that destructuring saveTodo becoming a function???
    reset('')
  }

  return(
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <TextField
          id='todo-form'
          label='Todo Form'
          variant='outlined'
          margin='normal'
          placeholder="Add todo"
          onChange={onChange}
          value={value}
        />
      </form>
    </div>
  )
}

export default TodoForm
