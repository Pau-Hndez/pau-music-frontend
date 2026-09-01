# Pau Music Frontend

Aplicación frontend para una plataforma educativa de música, orientada a estudiantes de piano y guitarra. La web permite:

- visualizar una landing page institucional,
- registrarse e iniciar sesión,
- acceder a una vista protegida para cada estudiante,
- buscar material audiovisual en YouTube según su instrumento,
- guardar canciones y tutoriales como favoritos.

## Descripción general

Este proyecto está desarrollado con React y Vite, y usa rutas protegidas para controlar el acceso a la sección de alumnos. El flujo principal combina:

- autenticación basada en usuarios guardados en una API mock,
- almacenamiento local del usuario activo en `localStorage`,
- búsquedas dinámicas a la API de YouTube,
- actualización del perfil de usuario con favoritos guardados.

## Stack tecnológico

- React 19
- Vite 8
- React Router DOM
- JavaScript ESModules
- Fetch API para consumo de servicios externos

## Estructura del proyecto

```text
pau-music-frontend/
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── App/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── Main/
│   ├── context/
│   │   └── CurrentUserContext.js
│   ├── index.css
│   ├── main.jsx
│   └── utils/
│       ├── Api.js
│       ├── Auth.js
│       ├── token.js
│       └── youtubeApi.js
└── vendor/
```

## Funcionalidades principales

### 1. Autenticación y registro

La autenticación se gestiona en `src/utils/Auth.js` y `src/utils/Api.js`.

- `register(data)` valida si el correo ya existe antes de crear un usuario.
- `login(data)` compara credenciales con la lista de usuarios obtenida desde la API mock.
- `localStorage` guarda la sesión activa para mantener el usuario logueado.

### 2. Ruta protegida para estudiantes

La aplicación renderiza la vista de alumnos mediante la ruta `/students` y el componente `ProtectedRoute`.

Si no existe un usuario autenticado, se bloquea el acceso a la zona privada.

### 3. Búsqueda de contenido musical

La búsqueda de videos se realiza en `src/utils/youtubeApi.js` usando la API de YouTube Data API v3.

El query se prepara con `URLSearchParams` y añade la clave de la API almacenada en variables de entorno.

### 4. Favoritos

Los usuarios pueden guardar vídeos en su lista de favoritos. La información se actualiza con `updateUser()` y queda asociada al perfil del estudiante.

## Variables de entorno (.env)

El proyecto usa variables de entorno con Vite. La clave de YouTube se encuentra en el archivo `.env` y se accede con el prefijo `VITE_`.

### Archivo actual

```env
VITE_YOUTUBE_API_KEY=tu_clave_aqui
```

### ¿Por qué se usa `VITE_`?

Con Vite, las variables públicas del frontend deben empezar con `VITE_` para poder leerse desde el navegador.

En el proyecto se usa así:

```js
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
```

Esto permite que React/Vite exponga la variable de forma segura dentro del frontend.

### Importante

- El archivo `.env` no debe subirse al repositorio.
- Está incluido en `.gitignore` para evitar que se publique información sensible.
- La clave de la API de YouTube es privada y debe mantenerse en secreto.

### Plantilla recomendada

Se recomienda crear un archivo `.env.example` con valores de ejemplo para que otros desarrolladores sepan qué variables necesitan configurar:

```env
VITE_YOUTUBE_API_KEY=tu_clave_de_youtube
```

## Configuración local

### Requisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Compilar para producción

```bash
npm run build
```

### Vista previa de la build

```bash
npm run preview
```

## Seguridad y buenas prácticas

- No guardar claves reales dentro del código fuente.
- Usar `.env` localmente y `.env.example` como guía.
- Mantener `.env` ignorado con Git.
- Revisar los permisos de la API de YouTube para evitar errores de acceso.

## Flujo de la aplicación

1. El usuario entra a la landing page.
2. Puede registrarse o iniciar sesión.
3. El backend mock valida credenciales y devuelve el usuario.
4. La sesión se guarda en `localStorage`.
5. El usuario entra a `/students`.
6. Puede buscar vídeos con la clave de YouTube configurada en `.env`.
7. Los favoritos se guardan en el perfil del usuario y se sincronizan con la API mock.

## Posibles mejoras futuras

- migrar la API mock a un backend real,
- implementar autenticación JWT,
- mejorar el manejo de errores del cliente,
- añadir tests unitarios y de integración,
- separar mejor la lógica de negocio en servicios.

## Conclusión

Pau Music Frontend es una aplicación de aprendizaje musical con enfoque en experiencia de usuario, autenticación, cursos guiados y contenido multimedia. La configuración de entorno es un punto crítico para que la búsqueda de vídeos funcione correctamente, y esa es la razón por la cual el archivo `.env` debe configurarse correctamente y mantenerse fuera del control de versiones.
