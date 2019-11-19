import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import CustomHooks from './CustomHooks'

function ReactHooks () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `you clicked ${count} times`
  })

  return (
    <div>
      <NavLink to='/'>Back</NavLink>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} >Click</button>
      <br />
      <CustomHooks />
    </div>
  )
}

export default ReactHooks
