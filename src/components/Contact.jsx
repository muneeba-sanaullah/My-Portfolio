import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";
import GradientText from './GradientText';
import { HiOutlineMapPin } from "react-icons/hi2";

function Contact() {
  const [state, handleSubmit] = useForm("xnjrrpjq");

  return (
    <section id="contact" className="px-6 py-24 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          
          <GradientText
            colors={["#4B0082", "#1D4ED8", "#E63940", "#22D3EE", "#A855F7"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
             Let’s Connect
          </GradientText>
        </h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Feel free to reach out for collaborations or opportunities
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
    {/* LEFT */}
<div className="space-y-6">

  <div>
    <h3 className="text-4xl font-semibold text-white leading-tight">
      Let's build something amazing.
    </h3>

    <p className="mt-4 text-gray-400 leading-8 max-w-lg">
      Whether you have a project in mind, a freelance opportunity,
      or simply want to connect, I'd love to hear from you.
      I'm always excited to collaborate on meaningful digital experiences.
    </p>

    {/* Availability Badge */}
    <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
      Open to Work
    </div>
  </div>

  {/* Email Card */}
  <div className="group flex items-center gap-4 p-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-400/30 transition-all duration-300">

    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 via-blue-500/20 to-cyan-500/20 flex items-center justify-center">
      <HiOutlineMail className="text-2xl text-cyan-300" />
    </div>

    <div>
      <p className="text-sm text-gray-500">Email</p>

      <a
        href="mailto:muneebasana4@gmail.com"
        className="text-white hover:text-cyan-300 transition"
      >
        muneebasana4@gmail.com
      </a>
    </div>

  </div>

  {/* Location Card */}
  <div className="group flex items-center gap-4 p-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-400/30 transition-all duration-300">

    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 via-blue-500/20 to-cyan-500/20 flex items-center justify-center">
      <HiOutlineMapPin className="text-2xl text-cyan-300" />
    </div>

    <div>
      <p className="text-sm text-gray-500">Location</p>
      <p className="text-white">Islamabad, Pakistan</p>
    </div>

  </div>

  {/* Social Icons */}
  <div className="flex items-center gap-4 pt-2">

    <a
      href="https://github.com/muneeba-sanaullah"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-gray-300 hover:text-white hover:border-violet-400/30 hover:bg-violet-500/10 hover:-translate-y-1 transition-all duration-300"
    >
      <FaGithub size={20} />
    </a>

    <a
      href="https://www.linkedin.com/in/muneeba-sana-713a2a361"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-gray-300 hover:text-white hover:border-violet-400/30 hover:bg-violet-500/10 hover:-translate-y-1 transition-all duration-300"
    >
      <FaLinkedinIn size={18} />
    </a>

    <a
      href="mailto:muneebasana4@gmail.com?subject=Portfolio Inquiry"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-gray-300 hover:text-white hover:border-violet-400/30 hover:bg-violet-500/10 hover:-translate-y-1 transition-all duration-300"
    >
      <HiOutlineMail size={20} />
    </a>

  </div>

</div>
        
        {/* RIGHT: FORM */}
        <div className="relative group">

  {/* Ambient Glow */}
  <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-violet-600/10 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

  {/* Glass Card */}
  <div className="relative p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

    {state.succeeded ? (
      <div className="py-12 text-center">
        <h3 className="text-2xl font-semibold text-white">
          Message Sent!
        </h3>

        <p className="mt-4 text-gray-400 leading-relaxed">
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-5">

        {state.errors && state.errors.length > 0 && (
          <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            Something went wrong. Please try again later.
          </div>
        )}

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-400/50 focus:bg-white/10 transition-all"
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-400/50 focus:bg-white/10 transition-all"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm"
        />

        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Tell me about your project..."
          required
          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-400/50 focus:bg-white/10 transition-all resize-none"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 text-sm"
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white font-medium hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

      </form>
    )}

  </div>

</div>
</div>
    </section>
  );
}

export default Contact;