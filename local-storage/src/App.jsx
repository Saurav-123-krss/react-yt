const App = () => {
  // localStorage.setItem("Name", "saurav", "age", 23);
  // localStorage.setItem("Age", 28);

  // const user = localStorage.getItem("Name");
  // const user1 = localStorage.getItem("Age");

  // localStorage.removeItem("Age");

  // console.log(user);
  // console.log(user1);

  const user3 = {
    name: "Sharma",
    age: 45,
    address: "Bihar",
  };

  localStorage.setItem("name",JSON.stringify(user3))

  // const user4 = JSON.parse(localStorage.getItem("user"));
  // console.log(user4.name);
  

  return <div>App</div>;
};

export default App;
