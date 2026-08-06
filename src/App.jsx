import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import { SKILLS, STATS, PROJECTS, PROFILE } from './data/content.js'

function App() {
  return (
    <div className="page">
      <Navbar initials={PROFILE.initials} name={PROFILE.name} />
      <Hero initials={PROFILE.initials} name={PROFILE.name} role={PROFILE.role} />
      <StatsBar stats={STATS} />
      <About bio={PROFILE.bio} skills={SKILLS} />
      <Projects projects={PROJECTS} />
      <Footer email={PROFILE.email} />
    </div>
  )
}

export default App
