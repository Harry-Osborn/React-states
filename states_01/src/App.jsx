import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);

  function AddCount() {
    setCount(count + 1);
  }

  //  this function doesnt increase the count by 2

  // function AddCount() {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }

  // To really increase the count by 2 we use callbacks

  // const AddCount = () => {
  //   setCount((PrevCount) => PrevCount + 1);
  //   setCount((PrevCount) => PrevCount + 1);
  // };

  function SubCount() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={AddCount}>ADD</button>
      <button onClick={SubCount}>SUB</button>
    </>
  );
}

export default App;
