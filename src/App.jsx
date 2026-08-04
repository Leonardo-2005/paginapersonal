import { useState } from 'react'

const SKILLS = [
  { icon: '⚡', title: 'Frontend', desc: 'HTML · CSS · React' },
  { icon: '🛠️', title: 'Backend', desc: 'Node.js · Python' },
  { icon: '🎨', title: 'UI/UX', desc: 'Figma · Diseño' },
  { icon: '📱', title: 'Responsive', desc: 'Mobile first' },
]

const PROJECTS = [
  {
    tag: 'React',
    title: 'Portfolio Web',
    desc: 'Sitio personal con React y animaciones CSS.',
    link: '#',
  },
  {
    tag: 'Node.js',
    title: 'E-commerce App',
    desc: 'Tienda online con carrito y pagos integrados.',
    link: '#',
  },
  {
    tag: 'Python',
    title: 'Dashboard Admin',
    desc: 'Panel de control con gráficos y reportes.',
    link: '#',
  },
]

const STATS = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos completados' },
  { value: '100%', label: 'Clientes satisfechos' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="navbar">
        <div className="navbar-brand">
          <div className="avatar-small">LH</div>
          <span className="brand-name">Leonardo Hernández</span>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
        </nav>
        <button className="btn btn-primary btn-nav">Contáctame</button>
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-text">
          <span className="badge">👋 Disponible para proyectos</span>
          <h1>
            Hola, soy Leonardo
            <br />
            <span className="accent">Hernández</span>
          </h1>
          <p className="hero-sub">
            Desarrollador web apasionado por crear experiencias digitales
            modernas y funcionales.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Ver mis proyectos ↓</button>
            <button className="btn btn-secondary">Descargar CV</button>
          </div>
        </div>
        <div className="hero-avatar-wrap">
          <div className="avatar-big">LH</div>
        </div>
      </section>

      <div className="stats-bar">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <section className="about" id="habilidades">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <div className="underline" />
          <p>
            Soy un desarrollador web con experiencia en tecnologías modernas.
            Me apasiona construir interfaces intuitivas y sistemas robustos.
          </p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="proyectos">
        <h2>Proyectos</h2>
        <div className="underline" />
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-thumb">🖼️</div>
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a className="btn btn-primary btn-small" href={p.link}>
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3>💬 ¿Hablamos?</h3>
          <p>lehernandezm2005@gmail.com</p>
          <span className="footer-copy">
            © 2025 Leonardo Hernández · Diseñado con ❤ en Figma
          </span>
        </div>
        <div className="footer-actions">
          <div className="socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">gh</a>
            <a href="#" aria-label="Twitter">tw</a>
          </div>
          <button className="btn btn-accent">Enviar mensaje ✉</button>
        </div>
      </footer>
    </div>
  )
}

export default App
