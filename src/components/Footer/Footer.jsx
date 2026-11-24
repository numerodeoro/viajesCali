import { BUSINESS } from "../../config";
import { whatsappLink } from "../../utils/whatsapp";

export const Footer = () => (
  <footer className="footer">
    <div>
      <strong>{BUSINESS.name}</strong>
      <p>{BUSINESS.hours}</p>
    </div>
    <ul className="footer-links">
      <li>
        <a href={whatsappLink("¡Hola! Quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </li>
      {BUSINESS.instagram && (
        <li>
          <a href={`https://instagram.com/${BUSINESS.instagram}`} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      )}
    </ul>
  </footer>
);
