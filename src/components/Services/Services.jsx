import React from 'react';
import { motion } from 'framer-motion';
// import './Services.scss'; // Removed SCSS dependency
import { FaCode, FaBrain, FaServer, FaGlobe } from 'react-icons/fa';

const services = [
    {
        title: "AI & GenAI Engineer",
        icon: <FaBrain />,
        desc: "Building production-grade RAG systems, Multi-Agent architectures, and LLM inference pipelines.",
        tags: ["RAG", "LangChain", "LLMs", "Vector DBs"]
    },
    {
        title: "Backend Architect",
        icon: <FaServer />,
        desc: "Designing high-throughput APIs, implementing stealth scrapers, and managing async job queues.",
        tags: ["Node.js", "Flask", "Redis", "PostgreSQL"]
    },
    {
        title: "DevOps & Cloud",
        icon: <FaCode />,
        desc: "Automating zero-downtime deployments, containerization, and cloud infrastructure management.",
        tags: ["Docker", "Azure", "CI/CD", "GCP"]
    },
    {
        title: "Full Stack Web",
        icon: <FaGlobe />,
        desc: "Crafting responsive, interactive applications with modern frontend frameworks and robust auth.",
        tags: ["React", "TypeScript", "Node.js", "MongoDB"]
    }
];

const Services = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center">
            {/* Header */}
            <div className="mb-10 md:mb-16 pt-10 md:pt-0"> {/* Added pt-10 for mobile extra clearance */}
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    CORE COMPETENCIES
                </h2>
                <div className="h-1 w-20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-10"> {/* Added pb-10 */}
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl flex flex-col justify-between h-auto min-h-[250px] md:min-h-[420px] hover:border-white/30 transition-all group relative overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="text-4xl md:text-5xl mb-6 text-white/80 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                                {service.desc}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {service.tags.map(tag => (
                                <span key={tag} className="text-[10px] md:text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400 font-mono uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
