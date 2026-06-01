import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"

function App() {
  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">
      
      <Navbar />
      
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />

    </main>
  )
}

export default App