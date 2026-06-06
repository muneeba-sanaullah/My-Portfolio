import { FaReact, FaServer, FaRobot, FaDatabase } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaReact size={28} />,
      title: "Frontend Engineering",
      description: "Building pixel-perfect, responsive UIs with React, Tailwind, and high-performance design patterns."
    },
    {
      icon: <FaServer size={28} />,
      title: "Backend Development",
      description: "Designing robust RESTful APIs, Node.js server architectures, and secure authentication flows."
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Database Management",
      description: "Designing efficient schemas and implementing persistent SQLite/SQL storage solutions for scalable apps."
    },
    {
      icon: <FaRobot size={28} />,
      title: "System Integration",
      description: "Integrating AI models, third-party APIs, and payment gateways into seamless, intelligent ecosystems."
    },
  ];

  return (
    <section id="services" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Services
        </h2>

        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Areas where I create value through modern web development
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-white/10 bg-white/[0.02] rounded-2xl p-6 hover:border-white/25 hover:bg-white/[0.04] transition duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              {service.icon}
            </div>

            <h3 className="mt-5 text-xl font-medium text-white">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;