import SkillCard from './SkillCard.jsx'

function About({ bio, skills }) {
  return (
    <section className="about" id="habilidades">
      <div className="about-text">
        <h2>Sobre mí</h2>
        <div className="underline" />
        <p>{bio}</p>
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <SkillCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  )
}

export default About
