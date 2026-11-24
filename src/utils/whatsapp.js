import { BUSINESS } from "../config";

// Arma el link de WhatsApp con un mensaje ya escrito.
export const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

// 👉 Qué pasa cuando alguien toca "Comprar" en una tarjeta.
// Por ahora abre WhatsApp con el servicio elegido.
// Si más adelante se quiere otra cosa (formulario, Mercado Pago, etc.),
// se cambia solamente esta función.
export const buyService = (service) => {
  const message = `¡Hola! Vi tu página y quiero contratar: *${service.name}*. ¿Me pasás info y precio?`;
  window.open(whatsappLink(message), "_blank", "noopener");
};
