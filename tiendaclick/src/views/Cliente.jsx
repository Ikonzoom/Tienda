import { useEffect, useState } from "react";
import Avatar from "../components/Avatar";

function Cliente() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <h2>Cargando usuarios...</h2>;
  }

  return (
    <div>

      <h2>Usuarios Registrados</h2>

      <div className="cliente-card">
        <Avatar />
        <h3>María López</h3>
        <p>Correo: maria@gmail.com</p>
        <p>Compras realizadas: 15</p>
        <p>Cuenta: Activa</p>
      </div>

      <div className="cliente-card">
        <Avatar />
        <h3>Carlos Pérez</h3>
        <p>Correo: carlos@gmail.com</p>
        <p>Compras realizadas: 10</p>
        <p>Cuenta: Activa</p>
      </div>

      <div className="cliente-card">
        <Avatar />
        <h3>Ana Torres</h3>
        <p>Correo: ana@gmail.com</p>
        <p>Compras realizadas: 8</p>
        <p>Cuenta: Activa</p>
      </div>

      <div className="cliente-card">
        <Avatar />
        <h3>Valeria Esparza</h3>
        <p>Correo: valeria@gmail.com</p>
        <p>Compras realizadas: 12</p>
        <p>Cuenta: Activa</p>
      </div>

      <div className="cliente-card">
        <Avatar />
        <h3>Sofía Ramírez</h3>
        <p>Correo: sofia@gmail.com</p>
        <p>Compras realizadas: 6</p>
        <p>Cuenta: Inactiva</p>
      </div>

    </div>
  );
}

export default Cliente;
