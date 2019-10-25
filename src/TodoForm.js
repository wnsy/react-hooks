import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const TodoForm = ({ saveTodo }) => {
  console.log("saveTodo", saveTodo)
  //keeps the val
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    console.log("event", event)
    event.preventDefault(saveTodo) //don't save it yet
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
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
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default TodoForm
