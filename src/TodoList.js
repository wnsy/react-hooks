import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

// It takes two props. todos = array to map over,
// deleteTodos will be a button which todos are deleted when user clicks a button
const TodoList = ({ todos, deleteTodo }) => (
    <List>
      {/* todos */}
      {todos && todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
          <Checkbox
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={todo} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index)
            }}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
)

export default TodoList
