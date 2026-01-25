import React from 'react';
import { motion } from 'framer-motion';
import './Freelance.scss';
import AnimatedHeading from '../Layout/AnimatedHeading';
import { FaBrain, FaServer, FaCode, FaRocket } from 'react-icons/fa';

const freelanceServices = [
    {
        icon: <FaBrain />,
        title: "AI/ML Solutions",
        desc: "Custom RAG pipelines, chatbots, and intelligent automation systems."
    },
    {
        icon: <FaServer />,
        title: "Backend Development",
        desc: "Scalable APIs, database design, and server architecture."
    },
    {
        icon: <FaCode />,
        title: "Full Stack Apps",
        desc: "End-to-end web applications with modern tech stack."
    },
    {
        icon: <FaRocket />,
        title: "DevOps Setup",
        desc: "CI/CD pipelines, cloud deployment, and infrastructure."
    }
];

const freelanceProjects = [
    {
        id: "01",
        client: "Business Website",
        type: "Full Stack Platform",
        desc: "Developed a complete e-commerce solution with admin dashboard.",
        tech: ["Tailwind CSS", "Supabase", "Vercel"],
        status: "Completed",
        link: "https://mahalingeshwardigitalprints.netlify.app/"
    },
    {
        id: "02",
        client: "E-Commerce Brand",
        type: "Full Stack Platform",
        desc: "Developed a complete e-commerce solution with admin dashboard.",
        tech: ["React", "Node.js", "MongoDB"],
        status: "Completed",
        link: "https://shopease-cyan.vercel.app/"
    },
    {
        id: "03",
        client: "SaaS Company",
        type: "Backend Architecture",
        desc: "Designed and implemented scalable microservices architecture.",
        tech: ["Node.js", "PostgreSQL", "Redis"],
        status: "Completed",
        link: "https://gosalesence.com"
    }
];

const Freelance = () => {
    return (
        <div className="freelance-container">
            <div className="freelance-header">
                <AnimatedHeading text="FREELANCE" />
                <div className="availability">
                    <span className="dot"></span>
                    <span>Available for Work</span>
                </div>
                <div className="line"></div>
            </div>

            <div className="freelance-content">
                {/* Services */}
                <div className="services-section">
                    <h3 className="section-title">Services</h3>
                    <div className="services-grid">
                        {freelanceServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                whileHover={{ y: -5 }}
                            >
                                <div className="icon">{service.icon}</div>
                                <h4>{service.title}</h4>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Recent Projects */}
                <div className="projects-section">
                    <h3 className="section-title">Recent Projects</h3>
                    <div className="projects-list">
                        {freelanceProjects.map((project) => (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card"
                                whileHover={{ x: 5 }}
                            >
                                <span className="project-id">{project.id}</span>
                                <div className="project-info">
                                    <div className="project-header">
                                        <h4>{project.client}</h4>
                                        <span className="project-type">{project.type}</span>
                                    </div>
                                    <p>{project.desc}</p>
                                    <div className="tech-stack">
                                        {project.tech.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freelance;
