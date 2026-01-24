import React from 'react';
import { motion } from 'framer-motion';
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
        <div
            className="w-full h-full bg-[#0a0a0a] relative"
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(2rem, 5vw, 5rem)',
            }}
        >
            {/* Header */}
            <div className="mb-10 lg:mb-14">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    CORE COMPETENCIES
                </h2>
                <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>

            {/* Grid - 4 equal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl flex flex-col hover:border-white/30 hover:from-white/15 hover:to-white/10 transition-all duration-300 group"
                        style={{ minHeight: '320px' }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex-grow">
                            <div className="text-4xl lg:text-5xl mb-5 text-purple-400 group-hover:text-purple-300 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                                {service.desc}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10">
                            {service.tags.map(tag => (
                                <span key={tag} className="text-[10px] lg:text-xs px-3 py-1.5 bg-white/10 rounded-full text-gray-300 font-medium">
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
