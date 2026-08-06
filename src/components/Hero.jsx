function Hero({ name, initials, role }) {
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <span className="badge">👋 Disponible para proyectos</span>
        <h1>
          Hola, soy {firstName}
          <br />
          <span className="accent">{lastName}</span>
        </h1>
        <p className="hero-sub">{role}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#proyectos">Ver mis proyectos ↓</a>
          <a className="btn btn-secondary" href="/cv-leonardo-hernandez.pdf" download>
            Descargar CV
          </a>
        </div>
      </div>
      <div className="hero-avatar-wrap">
        <div className="avatar-big">{initials}</div>
      </div>
    </section>
  )
}

export default Hero
