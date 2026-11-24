import { Item } from "../Item/Item";

export const ItemList = ({ services }) => {
  if (!services.length) return <p className="state">No hay servicios en esta categoría</p>;

  return (
    <div className="cards">
      {services.map((service) => (
        <Item key={service.id} service={service} />
      ))}
    </div>
  );
};
