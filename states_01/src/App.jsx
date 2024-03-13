import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function AddCount() {
    setCount(count + 1);
  }

  function SubCount() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={AddCount}>ADD</button>{" "}
      <button onClick={SubCount}>SUB</button>
    </>
  );
}

export default App;
