const certifications = [
    {
        title: "AWS Academy Graduate – Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        date: "Issued Oct 2025",
        description:
            "Completed 20 hours of structured coursework covering cloud computing fundamentals, AWS core services, security best practices, pricing models, and architectural principles.",
        skills: [
            "Cloud Computing",
            "AWS Core Services",
            "Cloud Security",
            "Networking",
            "Cloud Architecture"
        ],
        link: "#",
        watermark: "/logos/aws.svg"
    },
    {
        title: "AWS Academy Graduate – Data Center Technician",
        issuer: "Amazon Web Services (AWS)",
        date: "Issued Jun 2025",
        description:
            "Focused on AWS infrastructure operations, networking fundamentals, system troubleshooting, and maintenance procedures.",
        skills: [
            "AWS Infrastructure",
            "Cloud Operations",
            "Networking",
            "Troubleshooting"
        ],
        link: "#",
        watermark: "/logos/aws.svg"
    },
    {
        title: "AWS Academy Graduate – Generative AI Foundations",
        issuer: "Amazon Web Services (AWS)",
        date: "Issued Jul 2025",
        description:
            "Covered generative AI fundamentals, API integrations, prompt engineering concepts, and machine learning workflows using Python.",
        skills: [
            "Generative AI",
            "Machine Learning",
            "Prompt Engineering",
            "Python",
            "APIs"
        ],
        link: "#",
        watermark: "/logos/aws.svg"
    },
    {
        title: "Introduction to AI & ML",
        issuer: "Analytics Vidhya",
        date: "Issued Jul 2025",
        description:
            "Introduced core AI and machine learning concepts including algorithms, data-driven modeling, and applied problem-solving techniques.",
        skills: [
            "Artificial Intelligence",
            "Machine Learning",
            "Algorithms",
            "Data Science"
        ],
        link: "#",
        watermark: null
    }
]

export default function Certifications() {
    return (
        <section className="relative bg-slate-950 py-32 px-6 md:px-20">

            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-20">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                    Validated Expertise
                </p>
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-6">
                    Certifications
                </h1>
                <div className="w-24 h-[1px] bg-indigo-500"></div>
            </div>

            <div className="relative max-w-6xl mx-auto">

                {/* Vertical Spine */}
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-800 hidden md:block"></div>

                <div className="space-y-24">
                    {certifications.map((cert, index) => {
                        const isLeft = index % 2 === 0

                        return (
                            <div
                                key={index}
                                className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                            >

                                <div
                                    className={`relative bg-slate-900/60 border border-gray-800 p-8 rounded-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] overflow-hidden ${isLeft ? "md:col-start-1" : "md:col-start-2"
                                        }`}
                                >

                                    {/* Watermark */}
                                    {cert.watermark && (
                                        <img
                                            src={cert.watermark}
                                            alt="AWS watermark"
                                            className="absolute top-6 right-6 w-28 opacity-5 grayscale pointer-events-none select-none"
                                        />
                                    )}

                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                        {cert.issuer}
                                    </p>

                                    <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                                        {cert.title}
                                    </h2>

                                    <p className="text-sm text-gray-500 mb-4">
                                        {cert.date}
                                    </p>

                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {cert.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {cert.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs border border-gray-700 px-3 py-1 rounded-full text-gray-400"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={cert.link}
                                        className="text-sm border-b border-gray-600 hover:border-indigo-400 transition"
                                    >
                                        View Credential
                                    </a>
                                </div>

                                {/* Spine Dot */}
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}