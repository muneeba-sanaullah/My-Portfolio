import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";
import GradientText from "./GradientText";
import profilePic from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-34"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Role */}

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-gray-400">
            <GradientText
              colors={[
                "#4B0082",
                "#1D4ED8",
                "#E63940",
                "#22D3EE",
                "#A855F7",
              ]}
              animationSpeed={8}
              showBorder={false}
            >
              React • Full-Stack Developer
            </GradientText>
          </p>

          {/* Intro */}

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 py-3">
Hello There —
</p>

          {/* Name */}

          <h1 className="mt-2 text-5xl md:text-7xl font-bold leading-none">
            <GradientText
              colors={[
                "#A855F7",
                "#22D3EE",
                "#2563EB",
                "#E63946",
              ]}
              animationSpeed={10}
              showBorder={false}
            >
              <DecryptedText
                text="Muneeba Sana"
                revealDirection="start"
                sequential
                className="text-transparent"
                encryptedClassName="text-transparent opacity-40"
              />
            </GradientText>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-gray-400 text-lg leading-8">
            I build modern web experiences that combine clean design, scalable architecture, and intuitive user interactions. Passionate about creating applications that are both visually polished and technically robust.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              <GradientText
                colors={[
                  "#4B0082",
                  "#1D4ED8",
                  "#E63946",
                ]}
                animationSpeed={8}
                showBorder={false}
              >
                View Projects
              </GradientText>
            </a>

            <a
              href="/Muneeba_Sana_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              Download Resume
            </a>

          </div>

          {/* Skills */}

          <div className="mt-12 flex flex-wrap gap-3">

            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "REST APIs",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300"
              >
                {item}
              </span>
            ))}

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full blur-[90px] bg-gradient-to-r from-purple-600/30 via-blue-500/30 to-cyan-500/30 scale-110"></div>

            {/* <BorderGlow>

              <img
                src="https://images.unsplash.com/photo-1708034677699-6f39d9c59f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljJTIwYW5pbWUlMjBnaXJsJTIwZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Muneeba Sanaullah"
                className="relative w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-full border border-white/10"
              />

            </BorderGlow> */}
            <motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative"
>
  {/* Ambient Glow */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[380px] h-[380px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-pink-500/20 blur-[90px]" />
  </div>

  {/* Decorative Ring */}
  <div className="absolute inset-0 rounded-full border border-white/10 scale-105" />

  <img
    src={profilePic}
    alt="Muneeba Sanaullah"
    className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover border border-white/10 shadow-2xl"
  />
</motion.div>

            {/* Floating Tags */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -left-6 top-12 bg-black/70 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 text-sm"
            >
               React
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-0 bottom-10 bg-black/70 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 text-sm"
            >
               Full Stack
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-10 top-0 bg-black/70 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 text-sm"
            >
               UI Engineer
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;