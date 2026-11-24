import { useEffect, useState } from "react";

// Trae la lista de servicios una sola vez.
export const useServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setServices)
      .catch(() => setError("No se pudieron cargar los servicios"))
      .finally(() => setLoading(false));
  }, []);

  return { services, error, loading };
};
