import "../styles/productocard.css";

function ProductCard({ nombre, precio }) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>S/ {precio}</p>

      <button>Agregar</button>
      <button>Comprar</button>
    </div>
  );
}

export default ProductCard;