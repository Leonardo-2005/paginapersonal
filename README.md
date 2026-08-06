# Portfolio - Leonardo Hernández

Proyecto hecho con **React + Vite**.

## Cómo correrlo en VS Code

1. Descomprime el .zip y abre la carpeta en VS Code.
2. Abre una terminal dentro de VS Code (`Ctrl + ñ` o menú Terminal > Nueva Terminal).
3. Instala las dependencias:
   ```
   npm install
   ```
4. Corre el proyecto en modo desarrollo:
   ```
   npm run dev
   ```
5. Abre el link que aparece en la terminal (normalmente `http://localhost:5173`).

## Cómo subirlo a Vercel

Ver instrucciones detalladas en la respuesta del chat.

## Estructura del proyecto

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    StatsBar.jsx
    About.jsx
    SkillCard.jsx
    Projects.jsx
    ProjectCard.jsx
    Footer.jsx
  data/
    content.js   <- toda la información real (perfil, proyectos, skills)
  App.jsx        <- arma la página juntando los componentes
  index.css
  main.jsx
```

Para editar tu información (nombre, bio, proyectos, email), solo modifica
`src/data/content.js`. No hace falta tocar los componentes.

## Diseño

El diseño sigue el layout creado en Figma durante el primer parcial (navbar,
hero oscuro, barra de estadísticas, sección "Sobre mí", proyectos y footer de
contacto). No se hicieron cambios de diseño respecto al Figma original.
