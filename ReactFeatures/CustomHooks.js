import React, { useState, useEffect } from 'react'

const userDocumentTitle = title => {
  useEffect(() => {
    document.title = title
  }, [title])
}

function CustomCounter () {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(count + 1)
  userDocumentTitle(`You clicked ${count} times`)
  return (
    <div>
      <p>Custom Hooks</p>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  )
}

export default CustomCounter
