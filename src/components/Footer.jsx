function Footer({ email }) {
  return (
    <footer className="footer" id="contacto">
      <div>
        <h3>💬 ¿Hablamos?</h3>
        <p>{email}</p>
        <span className="footer-copy">
          © 2025 Leonardo Hernández · Diseñado con ❤ en Figma
        </span>
      </div>
      <div className="footer-actions">
        <div className="socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="https://github.com/LeonardoHernandez504" aria-label="GitHub" target="_blank" rel="noreferrer">gh</a>
          <a href="#" aria-label="Twitter">tw</a>
        </div>
        <a className="btn btn-accent" href={`mailto:${email}`}>Enviar mensaje ✉</a>
      </div>
    </footer>
  )
}

export default Footer
