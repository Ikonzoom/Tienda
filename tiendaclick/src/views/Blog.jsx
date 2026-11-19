import { publicaciones } from "../data/blogData";

function Blog() {
  return (
    <div className="container my-4">

      <h1 className="text-center mb-4">
        Blog iKON
      </h1>

      <p className="text-center mb-5">
        Consejos, promociones, novedades y guías para nuestros clientes.
      </p>

      <div className="row">
        {publicaciones.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">

                <span
                  className={`badge ${obtenerColorCategoria(post.categoria)}`}
                >
                  {post.categoria}
                </span>

                <h5 className="mt-3">
                  {post.titulo}
                </h5>

                <p className="text-muted mb-1">
                  <strong>Fecha:</strong> {post.fecha}
                </p>

                <p className="text-muted mb-2">
                  <strong>Autor:</strong> {post.autor}
                </p>

                <p>
                  {post.descripcion}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

const obtenerColorCategoria = (categoria) => {
  switch (categoria) {

    case "Consejos de Compra":
      return "bg-primary";

    case "Guías de Productos":
      return "bg-success";

    case "Promociones y Novedades":
      return "bg-warning text-dark";

    case "Sobre TiendaClick":
      return "bg-danger";

    default:
      return "bg-secondary";
  }
};

export default Blog;