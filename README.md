# Tienda de Donas - Pruebas Automatizadas (Selenium + JavaScript)

Proyecto de ejemplo para la tarea de Pruebas Automatizadas con Selenium (Tarea 4).

## Estructura
- `index.html` - Página principal (carga donas desde JSON).
- `login.html` - Página de login simple para simular HU-01.
- `assets/` - JS, CSS, datos e imágenes de productos (agrega las imágenes en `assets/img-products`).
- `tests/` - Pruebas automatizadas con Selenium (Mocha + Mochawesome).
- `package.json` - Scripts y dependencias.

## Requisitos
- Node.js (v16+)
- Google Chrome

## Instalación rápida
```bash
npm install
```

## Ejecutar servidor local
```bash
npm run start
# abre http://localhost:5500
```

## Ejecutar pruebas y generar reporte HTML
En otra terminal:
```bash
npm test
```

El reporte se genera en `./mochawesome-report/report.html`. Las capturas de pantalla se guardan en la carpeta `screenshots/`.

## Notas
- Asegúrate de añadir imágenes JPG en `assets/img-products` con los nombres indicados en `assets/img-products/README.txt`.
- Invita a `ktejada@itla.edu.do` y `20186927@itla.edu.do` como colaboradores a tu repo y/o proyecto en Jira para que puedan revisar.
