import React from "react";
import Saludo from "./components/Saludo";
import Button from "./components/Button";

function App() {
  return (
    <>
      <header>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Logo</p>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Acerca de nosotros</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/*<Saludo hola="este es el prop hola" adios="este es el prop adios" />*/}
        {/* <Button content="Registrarse" />
        <Button content="Iniciar Sesion" /> */}

        <Button>Iniciar Sesion</Button>
        <Button>Registrate</Button>
        <Button>
          <code>Log in</code>
          <span> Hola!</span>
        </Button>

        <Saludo firstName="Ana" lastName="Acosta" />
        <Saludo />
        <Saludo firstName="Sophia" lastName="Viquez" />
        <Saludo firstName="Frida" lastName="Hernandez" />
        <Saludo firstName="Yun" lastName="Alcantar" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nihil dolorum facilis ab iusto alias quo vitae ut libero sunt.
        </p>
      </main>
    </>
  );
}

export default App;
