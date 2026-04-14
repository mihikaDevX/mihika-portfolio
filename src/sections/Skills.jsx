/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import {
    FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt,
    FaFigma, FaPython, FaLinux
} from "react-icons/fa"

import {
    SiNextdotjs, SiTypescript, SiTailwindcss,
    SiPostgresql, SiFirebase, SiRedux,
    SiJest, SiVite, SiWebpack
} from "react-icons/si"

const Skills = () => {

    const skillGroups = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React", icon: <FaReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "HTML5" },
                { name: "CSS3" },
            ],
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Python", icon: <FaPython /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "REST APIs" },
            ],
        },
        {
            title: "UI / UX Design",
            skills: [
                { name: "Figma", icon: <FaFigma /> },
                { name: "Responsive Design" },
                { name: "Wireframing" },
                { name: "Prototyping" },
            ],
        },
        {
            title: "Cloud & DevOps",
            skills: [
                { name: "AWS", icon: <FaAws /> },
                { name: "Docker", icon: <FaDocker /> },
                { name: "CI/CD" },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Linux", icon: <FaLinux /> },
            ],
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "VS Code" },
                { name: "Webpack", icon: <SiWebpack /> },
                { name: "Redux", icon: <SiRedux /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "Jest", icon: <SiJest /> },
                { name: "Vite", icon: <SiVite /> },
            ],
        },
        {
            title: "CS Fundamentals",
            skills: [
                { name: "OOPS" },
                { name: "Operating Systems" },
                { name: "DSA" },
                { name: "DBMS" },
                { name: "Web Development" },
            ],
        },
    ]

    return (
        <section className="relative bg-slate-950 px-6 py-36 border-t border-slate-800 overflow-hidden">

            {/* Background Word */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-[140px] md:text-[220px] font-bold text-white/[0.04] tracking-tight select-none">
                    SKILLS
                </h1>
            </div>

            <div className="relative max-w-6xl mx-auto">

                {/* Editorial Label */}
                <div className="mb-24">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-[1px] bg-indigo-500"></div>
                        <span className="text-sm tracking-widest text-indigo-400 uppercase">
                            Full-Stack & AI Capability
                        </span>
                    </div>

                    <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
                        I build systems end-to-end — from frontend interfaces and backend logic
                        to infrastructure, DevOps pipelines, and intelligent AI integrations.
                    </p>
                </div>

                {/* Group Cards */}
                <div className="grid md:grid-cols-2 gap-16">

                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Glow Layer */}
                            <div className="absolute -inset-2 rounded-2xl bg-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative p-8 bg-slate-900/60 backdrop-blur-sm 
                              border border-slate-700 
                              rounded-2xl 
                              group-hover:border-indigo-500/40
                              transition duration-300">

                                {/* Top Accent Line */}
                                <div className="w-10 h-[2px] bg-indigo-500 mb-6"></div>

                                <h3 className="text-white text-lg font-semibold mb-6 tracking-wide">
                                    {group.title}
                                </h3>

                                <div className="flex flex-wrap gap-4">
                                    {group.skills.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -6 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 14 }}
                                            className="flex items-center gap-2 
                                 text-sm text-gray-300
                                 border border-slate-700 
                                 px-3 py-2 rounded-lg
                                 hover:border-indigo-500
                                 hover:text-white
                                 transition"
                                        >
                                            {skill.icon && (
                                                <span className="text-indigo-400">
                                                    {skill.icon}
                                                </span>
                                            )}
                                            {skill.name}
                                        </motion.div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Skills