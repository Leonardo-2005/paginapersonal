function ProjectCard({ project }) {
  const { tag, title, description, role, contribution, tech, link } = project

  return (
    <div className="project-card">
      <span className="project-tag">{tag}</span>
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>

      <div className="project-meta">
        <span className={`role-badge role-${role}`}>
          {role === 'individual' ? 'Proyecto individual' : 'Proyecto en equipo'}
        </span>
      </div>

      <p className="project-contribution">
        <strong>Mi aporte: </strong>
        {contribution}
      </p>

      <div className="project-tech">
        {tech.map((t) => (
          <span className="tech-pill" key={t}>{t}</span>
        ))}
      </div>

      {link ? (
        <a className="btn btn-primary btn-small" href={link} target="_blank" rel="noreferrer">
          Ver repositorio →
        </a>
      ) : null}
    </div>
  )
}

export default ProjectCard
