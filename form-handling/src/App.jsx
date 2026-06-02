
const App = () => {
  const formHandling = (e) =>{
    e.preventDefault()
    console.log("form Submit")
  }


  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={(e)=>{
        formHandling(e)
      }}> 
        <input type='text' placeholder='Enter Your Name:'/>
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App