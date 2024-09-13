import "./form.css";
import { useState } from "react";

//La función recibe como parametro el setUsuario creado en el App.jsx
export function Form({ setUsuario }) {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  //Voy a crear una constante para levantar errores
  const [error, setError] = useState(false);

  //Crear constante para guardar información
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || contraseña === "") {
      setError(true);
      return;
    }
    //Una vez pasa la condición debemos settear el error a falso nuevamente
    setError(false);
    //Una vez pasa las condiciones vamos a pasar al setUsuario
    setUsuario([email]);
  };

  return (
    <section>
      <h1>Clientes</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          //Con la ayuda del onChange={(e)} guardar el evento
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          placeholder="contraseña"
        />
        <button>Inciar sesion</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
  );
}
