import { FaReact, FaServer, FaRobot, FaDatabase } from "react-icons/fa";
import GradientText from './GradientText';
import BorderGlow from './BorderGlow';
import TiltedCard from './TiltedCard';

function Services() {
  const services = [
    {
      icon: <FaReact size={28} />,
      title: "Frontend Engineering",
      description: "Building pixel-perfect, responsive UIs with React, Tailwind, and high-performance design patterns.",
      image:
      "https://images.unsplash.com/photo-1671159593357-ee577a598f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <FaServer size={28} />,
      title: "Backend Development",
      description: "Designing robust RESTful APIs, Node.js server architectures, and secure authentication flows.",
      image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Database Management",
      description: "Designing efficient schemas and implementing persistent SQLite/SQL storage solutions for scalable apps.",
      image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
    },
    {
      icon: <FaRobot size={28} />,
      title: "System Integration",
      description: "Integrating AI models, third-party APIs, and payment gateways into seamless, intelligent ecosystems.",
      image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
    },
  ];

  return (
    <section id="services" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
         
          <GradientText
  colors={["#4B0082", "#1D4ED8", "#E63940", "#22D3EE", "#A855F7"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
>
   My Services
</GradientText>
        </h2>

        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Areas where I create value through modern web development
        </p>
      </div>

      {/* <BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#161616"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  opacity={0.5}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
> */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {services.map((service) => (
  <TiltedCard
    key={service.title}
    imageSrc="https://images.unsplash.com/photo-1759210479316-7b6ea0fc7856?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    altText={service.title}
    imageWidth="100%"
    rotateAmplitude={12}
    scaleOnHover={1.05}
    showMobileWarning={false}
    showTooltip={false}
    displayOverlayContent
    overlayContent={
      <div className="h-full flex flex-col justify-end p-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl  text-white mb-4">
          {service.icon}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mt-2 text-sm text-gray-300">
          {service.description}
        </p>
      </div>
    }
  />
))}
      </div>
      {/* </BorderGlow> */}
    </section>
  );
}

export default Services;