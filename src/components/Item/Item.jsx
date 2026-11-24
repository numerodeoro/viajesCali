import { Link } from "react-router-dom";
import { buyService } from "../../utils/whatsapp";

// Tarjeta reutilizable. En el detalle se muestra con la descripción completa.
export const Item = ({ service, detailed = false }) => {
  const { id, name, description, price, image } = service;

  return (
    <article className={`card ${detailed ? "card-detailed" : ""}`}>
      <Link to={`/servicio/${id}`} className="card-img">
        <img src={image} alt={name} loading="lazy" />
      </Link>
      <div className="card-body">
        <h3>
          <Link to={`/servicio/${id}`}>{name}</Link>
        </h3>
        <p className={detailed ? "" : "clamp"}>{description}</p>
        <div className="card-footer">
          <span className="price">{price}</span>
          <button className="btn btn-primary" onClick={() => buyService(service)}>
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
};
