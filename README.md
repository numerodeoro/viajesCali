# Viajes Cali — página web

Página de servicios hecha con React + Vite + React Router.

## Cómo correrla
```bash
npm install
npm run dev      # abre en http://localhost:5173
npm run build    # genera la carpeta dist/ para subir a un hosting
```

## Qué editar
| Quiero cambiar…                          | Archivo                         |
|------------------------------------------|---------------------------------|
| Nombre, WhatsApp, zonas, horario, Instagram | `src/config.js`              |
| Servicios (texto, precio, foto, categoría) | `public/data/services.json`   |
| Fotos                                    | `public/img/servicios/` (reemplazar los .svg de muestra por .jpg y cambiar la ruta en services.json) |
| Qué pasa al tocar "Comprar"              | `src/utils/whatsapp.js` → función `buyService` |
| Colores                                  | `src/index.css` (variables al principio) |
