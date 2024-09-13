/*
Se crea el home.jsx para redireccionar
Se exporta como una función
Paso como parametro el usuario para que me muestre el nombre del usuario
*/
export function Home({ usuario, setUsuario }) {
  const handleLogout = () => {
    setUsuario([])
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      <h2>{usuario}</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
