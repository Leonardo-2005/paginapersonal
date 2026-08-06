import ProjectCard from './ProjectCard.jsx'

function Projects({ projects }) {
  return (
    <section className="projects" id="proyectos">
      <h2>Proyectos</h2>
      <div className="underline" />
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
