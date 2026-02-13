# GIFS App

Aplicación web construida con React, TypeScript y Vite para buscar, visualizar y compartir gifs obtenidos de la API pública de Giphy. La interfaz está pensada para ser liviana, responsiva y sencilla de usar desde escritorio o dispositivos móviles.

## ¿Qué hace la app?
- Permite buscar gifs escribiendo cualquier término en español o inglés.
- Consume la API oficial de Giphy y devuelve hasta 10 resultados optimizados por consulta.
- Muestra los gifs en tarjetas con título y dimensiones para entender la calidad del recurso.
- Guarda hasta ocho búsquedas previas para relanzarlas rápidamente con un clic.
- Incluye un encabezado y barra de búsqueda con debounce para evitar peticiones innecesarias.

## Tecnologías principales
- React + TypeScript + Vite como base del frontend.
- Axios para las peticiones HTTP a Giphy.
- Hooks personalizados (`useState`, `useEffect`) para controlar estado, historial y debounce básico.
- CSS modularizado (ver `src/index.css`) para los estilos de tarjetas, buscador y listados.

## Requisitos previos
1. Node.js 18+ y npm instalados.
2. Clave de desarrollador de [Giphy Developers](https://developers.giphy.com/).
3. Crear un archivo `.env` en la raíz del proyecto con la variable:
   ```bash
   VITE_GIPHY_API_KEY=tu_api_key
   ```

## Instalación y ejecución
```bash
npm install       # instala dependencias
npm run dev       # levanta el servidor de desarrollo en http://localhost:5173
npm run build     # genera la versión lista para producción
```

## Estructura destacada
- `src/GifsApp.tsx`: componente raíz, coordina encabezado, buscador, historial y resultados.
- `src/gifs/actions/get-gifs-by-query.actions.ts`: acción asincrónica que consulta Giphy y normaliza la respuesta.
- `src/gifs/components/GifList.tsx`: renderiza la grilla de gifs.
- `src/gifs/components/PreviousSearches.tsx`: muestra el historial clickable.
- `src/shared/components/SearchBar.tsx`: input con debounce de 700 ms para optimizar llamadas.

## Próximos pasos sugeridos
- Agregar paginación o scroll infinito para explorar más resultados por término.
- Persistir el historial en `localStorage` para conservarlo entre sesiones.
- Incorporar pruebas unitarias para las acciones y componentes clave.
