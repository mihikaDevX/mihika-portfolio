/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden px-6">

            {/* Subtle Architectural Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* Animated Gradient Orbs */}
            <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse"></div>
            <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>

            {/* Spotlight Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)]"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-center max-w-4xl"
            >

                {/* Name with subtle glow */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white relative">
                    <span className="relative z-10">Mihika Bhosale</span>
                    <span className="absolute inset-0 blur-2xl opacity-20 bg-indigo-500 rounded-full"></span>
                </h1>

                {/* Animated Role */}
                <div className="mt-6 text-2xl md:text-3xl font-medium text-indigo-400 min-h-[60px]">
                    <TypeAnimation
                        sequence={[
                            "Product-Focused Full Stack Engineer.",
                            2000,
                            "Building AI-Integrated Web Applications.",
                            2000,
                            "Engineering Intelligent Digital Products.",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>

                <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    I design and develop production-ready systems combining frontend precision,
                    scalable backend architecture, and intelligent AI-driven features.
                </p>

                {/* Intelligent Skill Indicators */}
                <div className="mt-10 flex justify-center gap-6 text-sm text-gray-500 tracking-wider">
                    <span className="flex items-center gap-2 hover:text-indigo-400 transition">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                        React
                    </span>

                    <span className="flex items-center gap-2 hover:text-indigo-400 transition">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                        Node.js
                    </span>

                    <span className="flex items-center gap-2 hover:text-indigo-400 transition">
                        <span className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></span>
                        AI Systems
                    </span>

                    <span className="flex items-center gap-2 hover:text-indigo-400 transition">
                        <span className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></span>
                        DevOps
                    </span>
                </div>

                <div className="mt-14 flex justify-center gap-6">
                    <button
                      onClick={() =>
                       document.getElementById("projects")?.scrollIntoView({
                       behavior: "smooth",
                      })
                     }
                     className="bg-indigo-500 hover:bg-indigo-600 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-xl font-medium shadow-lg shadow-indigo-500/30"
                     >
                     View Projects
                   </button>

                    <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="border border-gray-600 hover:border-indigo-400 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-xl font-medium"
>
  Contact Me
</button>

            </motion.div>
        </section>
    )
}

export default Hero
