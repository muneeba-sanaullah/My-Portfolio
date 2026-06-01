function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-7xl mx-auto">

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          About Me
        </h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          A quick introduction to who I am and what I build
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT: About Text */}
        <div className="space-y-6 text-gray-300 leading-relaxed">

          <p>
            I’m a React and Full-Stack developer focused on building modern,
            responsive, and interactive web applications. I enjoy turning ideas
            into real digital products with clean UI and smooth user experiences.
          </p>

          <p>
            My work includes building e-commerce systems, API integrations,
            dashboards, and UI-focused web applications using React, Node.js,
            and modern frontend tools.
          </p>

          <p>
            I care about writing clean code, building scalable components, and
            creating interfaces that feel intuitive and elegant.
          </p>

          {/* Small highlight box */}
          <div className="border border-white/10 rounded-xl p-5 bg-white/5">
            <p className="text-sm text-gray-300">
              Currently focused on improving full-stack architecture, advanced
              React patterns, and building production-ready web applications.
            </p>
          </div>
        </div>

        {/* RIGHT: Skills */}
        <div>

          <h3 className="text-white text-xl font-medium mb-6">
            Skills & Technologies
          </h3>

          <div className="space-y-6">

            {/* Frontend */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "HTML", "CSS", "Tailwind"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300 hover:border-white/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Backend</p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "REST APIs", "Stripe"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300 hover:border-white/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Database</p>
              <div className="flex flex-wrap gap-2">
                {["SQLite", "Data Modeling"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300 hover:border-white/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Tools</p>
              <div className="flex flex-wrap gap-2">
                {["GitHub", "Vercel", "Netlify", "Figma"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300 hover:border-white/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About