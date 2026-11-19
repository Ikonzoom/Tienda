import { useState } from "react";

function Login() {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const validarLogin = () => {

    const formatoCorreo = /\S+@\S+\.\S+/;

    if (correo === "") {
      setMensaje("Ingrese un correo electrónico.");
      return;
    }

    if (!formatoCorreo.test(correo)) {
      setMensaje("Ingrese un correo válido.");
      return;
    }

    if (password === "") {
      setMensaje("Ingrese una contraseña.");
      return;
    }

    if (password.length < 8) {
      setMensaje("La contraseña debe tener mínimo 8 caracteres.");
      return;
    }

    setMensaje(" Inicio de sesión correcto.");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={validarLogin}>
        Ingresar
      </button>

      <p>{mensaje}</p>

    </div>
  );
}

export default Login;