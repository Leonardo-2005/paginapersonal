import { useState } from 'react'

function Navbar({ initials, name }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <div className="avatar-small">{initials}</div>
        <span className="brand-name">{name}</span>
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a>
      </nav>
      <a className="btn btn-primary btn-nav" href="#contacto">Contáctame</a>
      <button
        className="menu-toggle"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen((v) => !v)}
      >
        ☰
      </button>
    </header>
  )
}

export default Navbar
