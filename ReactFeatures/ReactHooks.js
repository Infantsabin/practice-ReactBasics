import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function ReactHooks () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <NavLink to='/'>Back</NavLink>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} >Click</button>
    </div>
  )
}

export default ReactHooks
