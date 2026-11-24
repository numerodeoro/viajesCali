import { Link, useParams } from "react-router-dom";
import { Item } from "../Item/Item";
import { useServices } from "../../hooks/useServices";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { services, error, loading } = useServices();

  if (loading) return <p className="state">Cargando...</p>;
  if (error) return <p className="state">{error}</p>;

  const service = services.find((s) => String(s.id) === id);
  if (!service) return <p className="state">Servicio no encontrado</p>;

  return (
    <section className="section detail">
      <Link to="/" className="back">← Volver a servicios</Link>
      <Item service={service} detailed />
    </section>
  );
};
