import { useEffect, useState } from "react";
import { useService } from "../services/useService";
import { Link } from "react-router-dom";

function Productos() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const preciosAbarrotes = [
    4.00,
    11.00,
    4.00,
    4.30,
    1.80,
    4.50,
    2.50,
    2.50,
    2.00,
    3.20
  ];


  const nombresAbarrotes = [
    "Arroz Costeño",
    "Aceite Primor",
    "Azúcar Rubia",
    "Leche Gloria",
    "Fideos Don Vittorio",
    "Atún Florida",
    "Galletas Soda",
    "Avena Quaker",
    "Café Altomayo",
    "Harina Blanca Flor"
  ];

  useEffect(() => {

    async function loadProducts() {

      const data = await useService.getAllProducts();

      setProductos(data.slice(0, 10));

      setLoading(false);
    }

    loadProducts();

  }, []);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div>

      <h2>Catálogo de Productos</h2>

      {productos.map((producto, index) => (

        <div key={producto.id}>

          <h3>{nombresAbarrotes[index]}</h3>

          <p>Precio: S/ {preciosAbarrotes[index]}</p>

          <Link to={`/detalle-producto/${producto.id}`}>
            <button>Ver Detalle</button>
          </Link>

        </div>

      ))}

    </div>
  );
}

export default Productos;