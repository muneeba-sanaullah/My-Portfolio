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
    <main className="bg-[#0f0f0f] text-white min-h-screen">
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