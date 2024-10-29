import React from "react";

function App() {
  //! React.useState() -> [variable, funcion] == [count, setCount] == [name, setName]
  const initialCount = 10;
  const [count, setCount] = React.useState(initialCount);

  function handleClick(incremet) {
    setCount(count + incremet);
    //body
  }

  return (
    <React.Fragment>
      <></>

      <div>{count}</div>
      <br />
      <button onClick={() => handleClick(1)}>Aumenta en 1</button>
      <button onClick={() => handleClick(10)}>Aumenta en 10</button>
      {/* <button onClick={() => ...}</React.Fragment>} >Aumenta en 1</button> */}
    </React.Fragment>
  );
}

export default App;
