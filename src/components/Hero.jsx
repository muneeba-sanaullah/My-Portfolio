function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      
      <div className="text-center max-w-3xl">

        {/* Subtle role */}
        <p className="text-gray-400 uppercase tracking-[0.35em] text-xs md:text-sm">
          React & Full-Stack Developer
        </p>

        {/* Main heading */}
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
          Crafting modern, scalable web applications with clean UI & real functionality.
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          I build responsive React applications, full-stack e-commerce systems, and interactive user experiences using modern web technologies like React, Node.js, and API integrations.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">

  {/* Projects */}
  <a
    href="#projects"
    className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300"
  >
    View Projects
  </a>

  {/* Resume */}
  <a
    href="/Muneeba_Sana_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
  >
    Download Resume
  </a>

</div>
        {/* Subtle credibility line */}
        <p className="mt-10 text-xs text-gray-500 tracking-wide">
          Specializing in React, UI systems, APIs, and full-stack e-commerce workflows
          {/* Specializing in React, AI-powered applications, APIs, and full-stack e-commerce systems */}
        </p>

      </div>

    </section>
  )
}

export default Hero