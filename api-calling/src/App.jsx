import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    // console.log(response.data)
    setdata(response.data);

    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json()
    // console.log(data)
  };

  return (
    <div>
      <button onClick={getData}>Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3>
              {" "}
              {elem.data.Array} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
