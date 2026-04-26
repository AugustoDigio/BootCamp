import { useState } from "react";
import "./App.css";

function MensajeBienvenida({ mensaje }) {
  if (!mensaje) return null;

  return (
    <div className="mensaje-container">
      <p className="mensaje-texto">{mensaje}</p>
    </div>
  );
}

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState("");

  function generarMensaje(nombre, edad) {
    if (edad < 18) {
      return `Hola ${nombre}, eres muy joven para usar esta aplicación`;
    } else {
      return `Bienvenido ${nombre}, gracias por usar nuestra aplicación`;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const mensajeGenerado = generarMensaje(nombre, Number(edad));
    setMensaje(mensajeGenerado);
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="titulo">Bienvenida</h1>
        <p className="subtitulo">Ingresá tus datos para continuar</p>

        <form onSubmit={handleSubmit} className="formulario">
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="edad">Edad</label>
            <input
              id="edad"
              type="number"
              placeholder="Tu edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              min="0"
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Ver mensaje
          </button>
        </form>

        <MensajeBienvenida mensaje={mensaje} />
      </div>
    </div>
  );
}

export default App;
