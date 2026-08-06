function SkillCard({ icon, title, desc }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default SkillCard
