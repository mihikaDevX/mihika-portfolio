import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Certifications from "./sections/Certifications"
import Contact from "./sections/Contact"
function App() {
  return (
    <div className="bg-slate-950 text-gray-200">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App