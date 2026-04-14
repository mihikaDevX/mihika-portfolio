/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="relative bg-slate-950 px-6 py-36 border-t border-slate-800 overflow-hidden">

            {/* Background Word */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-[120px] md:text-[200px] font-bold text-white/[0.06] md:text-white/[0.05] tracking-tight select-none">
                    ABOUT ME
                </h1>
            </div>

            <div className="relative max-w-6xl mx-auto">

                {/* Editorial Label */}
                <div className="mb-20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-indigo-500"></div>
                        <span className="text-sm tracking-widest text-indigo-400 uppercase">
                            About Me
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-20 items-start">

                    {/* LEFT — PROFILE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="relative w-[320px] h-[420px]">

                            {/* Ambient Glow */}
                            <div className="absolute -inset-6 bg-indigo-500/10 blur-3xl rounded-3xl"></div>

                            {/* Offset Frames */}
                            <div className="absolute -right-4 -bottom-4 w-full h-full border border-slate-800 rounded-3xl"></div>
                            <div className="absolute -left-4 -top-4 w-full h-full border border-indigo-500/20 rounded-3xl"></div>

                            {/* Main Card */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
                            >
                                {/* Light Sweep */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-6 animate-light-sweep"></div>
                                </div>

                                <img
                                    src="src/assets/profile.jpeg"
                                    alt="Mihika Bhosale"
                                    className="w-full h-full object-cover"
                                />

                                {/* Bottom Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                                {/* Identity Badge */}
                                <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-indigo-500/30 text-xs tracking-wider text-indigo-400">
                                    SYSTEMS • AI • PRODUCT
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* RIGHT — CAPABILITY MATRIX */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <div className="relative space-y-14">

                            {/* Vertical Spine */}
                            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-indigo-500/40 to-transparent"></div>

                            {[
                                {
                                    title: "System Architecture",
                                    text: "Designing scalable backend services, clean API layers, and modular frontend systems structured for long-term growth."
                                },
                                {
                                    title: "AI Integration",
                                    text: "Embedding intelligent workflows into production-ready applications — from prompt interfaces to automated decision layers."
                                },
                                {
                                    title: "Product Thinking",
                                    text: "Engineering solutions around real user friction, balancing usability, performance, and long-term product evolution."
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative pl-10 group">

                                    {/* Indicator Dot */}
                                    <div className="absolute -left-[6px] top-2 w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-125 transition"></div>

                                    <h4 className="text-white text-xl font-semibold mb-3">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-400 leading-relaxed">
                                        {item.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About