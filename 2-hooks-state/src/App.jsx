import React from "react";

function App() {
  //! React.useState() -> [variable, funcion] == [count, setCount] == [name, setName]
  const initialCount = 0;
  const [count, setCount] = React.useState(initialCount);

  function handleClick(argumento) {
    //setCount(count + incremet);
    switch (argumento) {
      case "reset": {
        const nextCount = initialCount;
        setCount(initialCount);
        window.alert(nextCount);
        break;
      }
      case "random": {
        const nextCount = Math.floor(Math.random() * 101);
        setCount(nextCount);
        window.alert(nextCount);
        break;
      }
      default: {
        const nextCount = count + argumento;
        setCount(nextCount);
        window.alert(nextCount);
        break;
      }
    }
  }

  return (
    <React.Fragment>
      <></>

      <div>{count}</div>
      <br />
      <button onClick={() => handleClick(1)}>Aumenta en 1</button>
      <button onClick={() => handleClick(10)}>Aumenta en 10</button>
      <button onClick={() => handleClick("reset")}>Reinciar</button>
      <button onClick={() => handleClick("random")}>Numero random 1-100</button>
      <button onClick={() => handleClick(-10)}>disminuye en 10 </button>
      <button onClick={() => handleClick(-1)}>disminuye en 1 </button>

      {/* <button onClick={() => ...}</React.Fragment>} >Aumenta en 1</button> */}
    </React.Fragment>
  );
}

export default App;
