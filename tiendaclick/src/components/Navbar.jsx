import { Link } from "react-router-dom";
import "../styles/nabvar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">

        <h1 className="navbar-brand m-0">
          Tienda iKON
        </h1>

        <ul className="navbar-nav ms-auto d-flex flex-row gap-3">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Inicio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/productos">
              Productos
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/blog">
              Blog
           </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/carrito">
              Carrito
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/cliente">
              Cliente
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;