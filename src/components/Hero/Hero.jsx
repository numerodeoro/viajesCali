import { BUSINESS } from "../../config";
import { whatsappLink } from "../../utils/whatsapp";

const HIGHLIGHTS = [
  "Entregas rápidas",
  "Trámites",
  "Encomiendas",
  "Viajes puerta a puerta",
  "Compras y mandados",
  "Con casco y puntualidad",
];

export const Hero = () => (
  <section className="hero">
    <div className="hero-text">
      <p className="eyebrow">📍 {BUSINESS.base}</p>
      <h1>
        {BUSINESS.name} · <span>{BUSINESS.tagline}</span>
      </h1>
      <p className="hero-sub">{BUSINESS.subtitle}. Pedí tu viaje o envío: rápido y seguro.</p>
      <ul className="checks">
        {HIGHLIGHTS.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <a
        className="btn btn-whatsapp"
        href={whatsappLink("¡Hola! Vi tu página y quiero cotizar un viaje o envío.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cotizá por WhatsApp
      </a>
    </div>
    <img className="hero-photo" src="/img/cali-moto.jpg" alt={`${BUSINESS.name} en moto`} />
    <div className="zones-bar">
      <strong>Zonas:</strong>
      {BUSINESS.zones.map((z) => (
        <span key={z}>{z}</span>
      ))}
      <span>y alrededores</span>
    </div>
  </section>
);
