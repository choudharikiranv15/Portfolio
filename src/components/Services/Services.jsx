import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';
import { FaCode, FaBrain, FaServer, FaGlobe } from 'react-icons/fa';
import AnimatedHeading from '../Layout/AnimatedHeading';

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
        <div className="services-container">
            <div className="services-header">
                <AnimatedHeading
                    text="CORE COMPETENCIES"
                    className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-3 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
                />
                <div className="h-1 w-16 lg:w-20 bg-purple-500"></div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        whileHover={{ y: -10, scale: 1.02, borderColor: "rgba(255,255,255,0.8)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <div className="tags">
                            {service.tags.map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
