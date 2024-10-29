import React, { useState } from "react";

function App2() {
  const [name, setName] = useState("Sophia");
  const [email, setEmail] = useState("");
  const [drone, setDrone] = React.useState("");
  //drone = dewey

  return (
    <form>
      <fieldset>
        <label htmlFor="name">Nombre</label>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </fieldset>

      <hr />
      <fieldset>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input
            type="radio"
            id="huey"
            name="drone"
            value="huey"
            checked={drone === "huey"}
            onChange={(event) => setDrone(event.target.value)}
          />
          <label for="huey">Huey</label>
        </div>

        <div>
          <input
            type="radio"
            id="dewey"
            name="drone"
            value="dewey"
            checked={drone === "dewey"}
            onChange={(event) => setDrone(event.target.value)}
          />
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input
            type="radio"
            id="louie"
            name="drone"
            value="louie"
            checked={drone === "louie"}
            onChange={(event) => setDrone(event.target.value)}
          />
          <label for="louie">Louie</label>
        </div>
      </fieldset>

      <button>Guardar</button>
    </form>
  );
}

export default App2;
