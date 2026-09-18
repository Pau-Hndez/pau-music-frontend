🎵 Pau Music
📌 Descripción del proyecto

Pau Music es una plataforma web educativa diseñada para ofrecer una experiencia de aprendizaje musical personalizada para estudiantes de piano y guitarra. El proyecto permite a los usuarios registrarse e iniciar sesión para acceder a un área privada donde pueden consultar material de estudio, buscar recursos musicales y guardar canciones de interés.
La aplicación fue desarrollada como un proyecto full-stack, integrando una interfaz construida con React con un backend desarrollado en Node.js y Express, utilizando una base de datos para almacenar la información de los usuarios. También incorpora autenticación, rutas protegidas y consumo de APIs externas.

🎯 ¿Por qué se creó este proyecto?

Pau Music surge de mi interés por combinar dos áreas que forman parte de mi trayectoria: la música y el desarrollo web.
La idea inicial fue crear una plataforma que pudiera representar digitalmente una escuela de música, donde los estudiantes pudieran iniciar sesión y encontrar en un mismo espacio recursos relacionados con su aprendizaje.
El proyecto también fue pensado como una oportunidad para llevar a la práctica conocimientos de desarrollo frontend y backend, especialmente en áreas como React, manejo de estado, autenticación, rutas protegidas, APIs y bases de datos.

✨ Funcionalidades principales

🏠 Página principal
La página de inicio presenta:

Información sobre la profesora.
Cursos disponibles.
Piano.
Guitarra.
Testimonios de estudiantes.
Llamados a la acción.
Diseño responsive.

La navegación permite acceder a diferentes secciones de la página de forma sencilla.

📝 Registro de usuarios

Los nuevos estudiantes pueden crear una cuenta proporcionando sus datos.
El formulario incluye validaciones y manejo de errores para situaciones como:

Campos incompletos.
Datos inválidos.
Correo electrónico ya registrado.
Errores de comunicación con la API.
🔐 Inicio de sesión

Los usuarios registrados pueden iniciar sesión utilizando sus credenciales.

Después de una autenticación exitosa, el usuario puede acceder a las funcionalidades privadas de la plataforma.

🔒 Rutas protegidas

Las rutas privadas están protegidas para impedir que usuarios no autenticados accedan directamente al área de estudiantes.

🎓 Área de estudiantes

Una vez autenticado, el estudiante puede acceder a una sección personalizada.
En ella puede encontrar contenido relacionado con el instrumento seleccionado y recursos musicales.

🎵 Búsqueda de canciones

La aplicación utiliza una API externa para realizar búsquedas de contenido musical.
El estudiante puede buscar canciones relacionadas con su instrumento.

💻 Frontend

El frontend es responsable de:

Interfaz.
Componentes.
Navegación.
Formularios.
Autenticación del usuario.
Rutas protegidas.
Estado global.
Consumo de APIs.
Diseño responsive.

Tecnologías

React
JavaScript
React Router
Context API
HTML5
CSS3
Flexbox
CSS Grid
