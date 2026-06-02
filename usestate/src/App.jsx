import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)

  function inc() {
    setnum(num + 1)
  }

  function dec() {
    setnum(num - 1);
  }

  function by(){
    setnum(num + 5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={by}>Jump by 5</button>
    </div>
  )
}

export default App