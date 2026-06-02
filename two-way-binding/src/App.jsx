import { useState } from "react"

const App = () => {

 const [title, settitle] = useState("") 

  const submitbtn =(e)=>{
    e.preventDefault()
    console.log("Form Submit",title)
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submitbtn(e)
      }}>
        <input type="text" placeholder="Enter you name" value={title} onChange={(e) =>{
          settitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App