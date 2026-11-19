import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useService } from "../services/useService";
import { useCart } from "../context/CartContext";

function DetalleProducto() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const { addToCart } = useCart();

  const agregarCarrito = () => {
  addToCart({
    id: producto.id,
    nombre: nombresAbarrotes[id],
    precio: preciosAbarrotes[id]
  });

  setMensaje(" Producto agregado al carrito");
};

  const nombresAbarrotes = {
    1: "Arroz Costeño",
    2: "Aceite Primor",
    3: "Azúcar Rubia",
    4: "Leche Gloria",
    5: "Fideos Don Vittorio",
    6: "Atún Florida",
    7: "Galletas Soda",
    8: "Avena Quaker",
    9: "Café Altomayo",
    10: "Harina Blanca Flor"
  };

  const preciosAbarrotes = {
  1: 4.00,
  2: 11.00,
  3: 4.00,
  4: 4.30,
  5: 1.80,
  6: 4.50,
  7: 2.50,
  8: 2.50,
  9: 2.00,
  10: 3.20
};

  useEffect(() => {

    async function cargarProducto() {

      const data = await useService.getProductById(id);

      setProducto(data);

    }

    cargarProducto();

  }, [id]);



  if (!producto) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <div>

      <h2>Detalle del Producto</h2>

      <h3>{nombresAbarrotes[id]}</h3>

      <p>Precio: S/ {preciosAbarrotes[id]}</p>

      <p>Stock: 20 unidades</p>

      <p>Categoría: Abarrotes</p>

      <p>
        Producto disponible para compra en TiendaClick.
      </p>

      <button onClick={agregarCarrito}>
        Agregar al carrito
      </button>

      <p>{mensaje}</p>

    </div>
  );
}

export default DetalleProducto;