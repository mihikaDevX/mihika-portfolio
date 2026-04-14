import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {
    const formRef = useRef()
    const [status, setStatus] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        setStatus("Sending message...")

        emailjs
            .sendForm(
                "service_au1ixca",
                "template_wossgnd",
                formRef.current,
                "a36bJIrf6G3aK0X-e"
            )
            .then(() => {
                setStatus("Message sent successfully.")
                formRef.current.reset()
            })
            .catch(() => {
                setStatus("Something went wrong. Try again.")
            })
    }

    return (
        <section className="relative h-screen flex items-center justify-center bg-[#050810] px-6 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[700px] h-[700px] bg-indigo-600/10 blur-[140px] rounded-full animate-glow" />

            <div className="relative w-full max-w-4xl">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-3">
                        Contact Me
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I build scalable <span className="text-indigo-400">Full Stack Applications</span>
                        and intelligent <span className="text-indigo-400">AI-powered systems</span>.
                        Let’s create something impactful.
                    </p>

                    {/* Available Indicator */}
                    <div className="flex items-center justify-center gap-2 mt-5">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <p className="text-sm text-gray-400 tracking-wide">
                            Available for opportunities
                        </p>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_rgba(99,102,241,0.08)]">

                    <form ref={formRef} onSubmit={sendEmail} className="space-y-8">

                        <div className="grid md:grid-cols-2 gap-8">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="input-style"
                            />

                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                className="input-style"
                            />
                        </div>

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="input-style"
                        />

                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="px-10 py-3 rounded-md font-medium bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_45px_rgba(99,102,241,0.9)]"
                            >
                                Send Message
                            </button>
                        </div>

                        {status && (
                            <p className="text-center text-sm text-gray-400 pt-2">
                                {status}
                            </p>
                        )}
                    </form>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-8 mt-10 text-gray-400">
                        <a
                            href=" https://www.linkedin.com/in/mihika-bhosale-363039330/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-indigo-400 transition transform hover:scale-110"
                        >
                            <FaLinkedin size={22} />
                        </a>

                        <a
                            href="https://github.com/mihikaDevX"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-indigo-400 transition transform hover:scale-110"
                        >
                            <FaGithub size={22} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Animations & Input Glow */}
            <style>{`
        @keyframes glow {
          0% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.6; transform: scale(1); }
        }

        .animate-glow {
          animation: glow 8s ease-in-out infinite;
        }

        .input-style {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid #374151;
          padding: 12px 0;
          color: #e5e7eb;
          transition: all 0.3s ease;
        }

        .input-style:focus {
          outline: none;
          border-bottom: 1px solid #6366f1;
          box-shadow: 0 6px 20px -10px rgba(99,102,241,0.8);
        }
      `}</style>
        </section>
    )
}