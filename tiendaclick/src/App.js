import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Home from "./views/Home";

import Productos from "./views/Productos";
import DetalleProducto from "./views/DetalleProducto";

import Login from "./views/Login";
import Carrito from "./views/Carrito";
import Cliente from "./views/Cliente";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/productos" element={<Productos />} />

          <Route
            path="/detalle-producto/:id"
            element={<DetalleProducto />}
          />

          <Route path="/login" element={<Login />} />

          <Route path="/carrito" element={<Carrito />} />

          <Route path="/cliente" element={<Cliente />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;