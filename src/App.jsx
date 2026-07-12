import { motion } from 'framer-motion';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

// 1. Create a reusable wrapper for smooth, scroll-based reveals
const SectionWrapper = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the section is visible
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

function App() {
  return (
    <main className="bg-[#0f0707] text-white min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
    style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1671159593357-ee577a598f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0N3x8fGVufDB8fHx8fA%3D%3D')",
  }}>
      <Navbar />
      
      {/* Hero usually doesn't need a scroll animation as it's the first thing seen */}
      <Hero />
      
      <SectionWrapper><Services /></SectionWrapper>
      <SectionWrapper><Projects /></SectionWrapper>
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper><Contact /></SectionWrapper>
    </main>
  );
}

export default App;