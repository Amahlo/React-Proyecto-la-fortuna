import { Form } from "./form.jsx";
import "./form.css";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState([]);

  return (
    <div className="App">
      {!usuario.length > 0 ? (
        <Form setUsuario={setUsuario}></Form>
      ) : (
        <Home usuario={usuario} setUsuario={setUsuario}></Home>
      )}
    </div>
  );
}

export default App;

