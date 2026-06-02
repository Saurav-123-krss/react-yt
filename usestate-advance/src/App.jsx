import { useState } from "react"

const App = () => {

  // const [num, setnum] = useState({ user: "saurav", age: 18 })

  // const btnClicked = () => {
  //   const newNum = { ...num };
  //   newNum.user = "Kumar"
  //   newNum.age = 26
  //   setnum(newNum)
  // }

  const [num, set] = useState([1,2,3,4])

  const btnClicked = () =>{
    const newNum = [...num];
    newNum.push(99)
    set(newNum)

  }
  return (
    <div>
      <h1>{num} </h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App