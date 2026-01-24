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
        <div className="w-full min-h-screen lg:h-full bg-[#0a0a0a] flex flex-col justify-center p-6 sm:p-8 lg:p-16">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-3 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    CORE COMPETENCIES
                </h2>
                <div className="h-1 w-16 lg:w-20 bg-purple-500"></div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/5 border border-white/10 p-5 lg:p-6 rounded-xl flex flex-col hover:border-white/30 hover:bg-white/10 transition-all group"
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-3xl lg:text-4xl mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                            {service.icon}
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                            {service.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                            {service.tags.map(tag => (
                                <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-gray-300">
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
