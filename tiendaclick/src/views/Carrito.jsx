import { useCart } from "../context/CartContext";

function Carrito() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos agregados.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.nombre}</h3>
            <p>Precio: S/ {item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Carrito;