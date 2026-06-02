import { useState } from "react";

const App = () => {
  const [first, setfirst] = useState("");
  const [details, setdetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task];

    copytask.push({ first, details });
    setTask(copytask);

    setfirst("");
    setdetails("");
  };

  const deleteNote = (idx) =>{
    const copytask = ([...task]);
    copytask.splice(idx,1)

    setTask(copytask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Here"
          className="w-full py-4 px-5 outline-none rounded text-white "
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
        />

        <textarea
          placeholder="Enter Details"
          className="w-full h-32 py-3 px-5 outline-none rounded text-white bg-black resize-none"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />

        <button className="bg-black text-white border-3 px-4 py-2 rounded">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 border-l-2 border-white p-10  ">
        <h1 className="text-3xl font-bold">Your Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-47 rounded-2xl object-fit bg-cover bg-[url(https://img.magnific.com/premium-photo/png-note-paper-transparent-diary-page-white-background_53876-900894.jpg?semt=ais_hybrid&w=740&q=80)]"
              >
                <h3 className="leading-tight text-xl font-bold text-black mt-5 px-3 wrap-break-word">
                  {elem.first}
                </h3>
                <p className="mt-4 leading-tight font-medium text-blue-600 px-3 wrap-break-word">
                  {elem.details}
                </p>

                <button 
                className="mt-22 ml-2 px-14 bg-red-700 w-43 h-8 rounded"
                onClick={() =>{
                  deleteNote(idx)
                }}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
