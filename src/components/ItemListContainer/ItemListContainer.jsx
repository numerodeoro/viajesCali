import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { CATEGORIES } from "../../config";
import { useServices } from "../../hooks/useServices";

export const ItemListContainer = () => {
  const { category } = useParams();
  const { services, error, loading } = useServices();

  if (loading) return <p className="state">Cargando...</p>;
  if (error) return <p className="state">{error}</p>;

  const filtered = category ? services.filter((s) => s.category === category) : services;
  const title = category
    ? (CATEGORIES.find((c) => c.slug === category)?.label ?? "Servicios")
    : "Servicios";

  return (
    <section className="section" id="servicios">
      <h2 className="section-title">{title}</h2>
      <ItemList services={filtered} />
    </section>
  );
};
