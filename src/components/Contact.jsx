import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {

  const [state, handleSubmit] = useForm("xnjrrpjq");

  return (
    <section id="contact" className="px-6 py-24 max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Let’s Connect
        </h2>

        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Feel free to reach out for collaborations or opportunities
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT */}
        <div className="space-y-6 text-gray-300">

          <p className="leading-relaxed">
            I’m currently open to frontend and full-stack opportunities where I
            can contribute to building modern web applications and scalable UI systems.
          </p>

          {/* Info */}
          <div className="space-y-3 text-sm">

            <div className="flex items-center gap-3">
              <span className="text-gray-400">Email:</span>

              <a
                href="mailto:muneebasana4@gmail.com"
                className="text-white hover:text-gray-300 transition"
              >
                muneebasana4@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400">Location:</span>
              <span className="text-white">Islamabad, Pakistan</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400">Availability:</span>
              <span className="text-green-400">Open to work</span>
            </div>

          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 pt-4">

            {/* GitHub */}
            <a
              href="https://github.com/muneeba-sanaullah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muneeba-sana-713a2a361"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>

            {/* Email */}
            <a
              href="mailto:muneebasana4@gmail.com?subject=Portfolio Inquiry"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
            >
              <HiOutlineMail size={18} />
            </a>

          </div>

        </div>

        {/* RIGHT: FORM */}
        <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">

          {/* SUCCESS MESSAGE */}
          {state.succeeded ? (

            <div className="py-12 text-center">

              <h3 className="text-2xl font-semibold text-white">
                Message Sent ✨
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Thank you for reaching out. I’ll get back to you soon.
              </p>

            </div>

          ) : (

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition"
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition"
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
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition resize-none"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm"
              />

              <p className="text-sm text-gray-500">
                I’ll respond as soon as possible.
              </p>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full cursor-pointer py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>

            </form>

          )}

        </div>

      </div>

    </section>
  );
}

export default Contact;