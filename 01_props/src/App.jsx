import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Saurav"
        age={23}
        male="Female"
        img="https://images.unsplash.com/photo-1778452419724-1f605dc17c46?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Card
        user="Kumar"
        age={24}
        img="https://images.unsplash.com/photo-1778668750300-fa6ff2d40be2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Card
        user="Sharma"
        age={25}
        img="https://images.unsplash.com/photo-1778222013873-cedbf72df0d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App