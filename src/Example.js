import React, { useState, useEffect } from 'react'

const Example = () => {
  // declare a new state var, we'll call 'count'
  const [count, setCount] = useState(0)
  // [] = aren't part of the react api, array destructuring
  // making two vars 'fruit' and 'setFruit'
  const [fruit, setFruit] = useState('apple')

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Example
