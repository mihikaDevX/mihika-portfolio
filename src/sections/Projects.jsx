import { useEffect, useRef, useState } from "react"

import snakeImage from "../assets/snake.webp"
import medicineImage from "../assets/medicine.jpg"
import finscoreImage from "../assets/finscore.png"
import devopsImage from "../assets/devops.png"

const projects = [
    {
        title: "GestureSnake",
        tagline: "Real-Time Computer Vision Controlled Interactive System",
        image: snakeImage,
        description:
            "A gesture-controlled gaming system powered by computer vision. Implements real-time hand tracking and motion detection for interactive control.",
        architecture: ["Python", "OpenCV", "MediaPipe", "Real-Time Frame Processing"],
        impact:
            "Demonstrates applied AI integration, real-time processing logic, and performance-aware system design.",
        github: "#",
        live: "#"
    },
    {
        title: "Medicine Identification & Expiry Tracking System",
        tagline: "Browser-Based QR Pharmaceutical Intelligence Prototype",
        image: medicineImage,
        description:
            "A camera-integrated QR scanning system that retrieves structured medicine data from a pre-stored database and evaluates expiry timelines in real time.",
        architecture: ["React", "Node.js", "QR Camera Integration", "Structured DB Schema"],
        impact:
            "Combines real-world healthcare use case with structured backend validation and expiry detection logic.",
        github: "#",
        live: "#"
    },
    {
        title: "FinScoreTech",
        tagline: "Modular Financial Score Analytics Platform",
        image: "src/assets/finscore.png",
        description:
            "A financial score tracking platform built with modular backend APIs and relational database modeling.",
        architecture: ["React", "Node.js", "PostgreSQL", "REST APIs"],
        impact:
            "Transforms structured financial data into actionable analytics dashboards.",
        github: "#",
        live: "#"
    },
    {
        title: "DevOps CI/CD Static Website",
        tagline: "Automated Deployment Infrastructure Pipeline",
        image: devopsImage,
        description:
            "A fully automated CI/CD workflow that builds, tests, and deploys a static site using containerized environments.",
        architecture: ["GitHub Actions", "Docker", "AWS", "Linux"],
        impact:
            "Improves deployment reliability and reduces manual configuration errors.",
        github: "#",
        live: "#"
    }
]

export default function Projects() {
    const containerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return

            const scrollTop = window.scrollY
            const sectionTop = containerRef.current.offsetTop
            const sectionHeight = containerRef.current.offsetHeight
            const viewportHeight = window.innerHeight

            const progress = (scrollTop - sectionTop) / (sectionHeight - viewportHeight)
            const clamped = Math.max(0, Math.min(1, progress))
            const index = Math.floor(clamped * projects.length)

            setActiveIndex(Math.min(index, projects.length - 1))
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative bg-slate-950"
            style={{ height: `${projects.length * 100}vh` }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {/* Background Word */}
                <h1 className="absolute text-[15vw] font-bold text-white/5 tracking-widest select-none">
                    PROJECTS
                </h1>

                {/* Scroll Indicator */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-gray-800">
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 transition-all duration-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                        style={{
                            top: `${(activeIndex / (projects.length - 1)) * 100}%`,
                            transform: "translate(-50%, -50%)"
                        }}
                    />
                </div>

                {projects.map((project, index) => {
                    const isActive = index === activeIndex

                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-out ${isActive
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                                }`}
                        >
                            {/* Subtle Glow */}
                            {isActive && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[70%] h-[60%] rounded-3xl bg-indigo-500/10 blur-3xl" />
                                </div>
                            )}

                            <div className="h-full w-full grid md:grid-cols-2">

                                {/* LEFT IMAGE */}
                                <div className="relative h-full w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="relative z-10 flex flex-col justify-center px-12 md:px-20 text-gray-200">

                                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                                        {project.title}
                                    </h2>

                                    <p className="text-indigo-400 mb-6 tracking-wide">
                                        {project.tagline}
                                    </p>

                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                                            Architecture
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.architecture.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs border border-gray-700 px-3 py-1 rounded-full text-gray-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 mb-8">
                                        {project.impact}
                                    </p>

                                    <div className="flex gap-6">
                                        <a
                                            href={project.github}
                                            className="text-sm border-b border-gray-500 hover:border-indigo-400 transition"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href={project.live}
                                            className="text-sm border-b border-gray-500 hover:border-indigo-400 transition"
                                        >
                                            Live
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
