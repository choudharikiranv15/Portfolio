import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';
import { FaCode, FaBrain, FaServer, FaGlobe } from 'react-icons/fa';

const services = [
    {
        title: "AI & ML Engineer",
        icon: <FaBrain />,
        desc: "Developing predictive models, neural networks, and computer vision solutions using PyTorch & TensorFlow.",
        tags: ["Python", "TensorFlow", "NLP", "CV"]
    },
    {
        title: "SDE / Backend",
        icon: <FaServer />,
        desc: "Architecting scalable backend systems, microservices, and high-performance APIs.",
        tags: ["Java", "Node.js", "System Design", "SQL"]
    },
    {
        title: "DevOps Engineer",
        icon: <FaCode />,
        desc: "Streamlining CI/CD pipelines, containerization, and cloud infrastructure management.",
        tags: ["Docker", "Kubernetes", "AWS", "Jenkins"]
    },
    {
        title: "Web Developer",
        icon: <FaGlobe />,
        desc: "Building immersive, responsive, and interactive frontend applications.",
        tags: ["React", "Next.js", "Three.js", "SCSS"]
    }
];

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <h2>CORE COMPETENCIES</h2>
                <div className="line"></div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        whileHover={{ y: -10, backgroundColor: "#f0f0f0", color: "#050505" }}
                        transition={{ type: "spring", stiffness: 300 }}
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
