import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';
import { FaShieldAlt, FaBrain, FaTerminal, FaServer } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import AnimatedHeading from '../Layout/AnimatedHeading';

const services = [
    {
        title: "Security Operations & Triage",
        icon: <FaShieldAlt />,
        desc: "Investigating 250+ security alerts across 15+ client environments. Triaging identity, cloud, email, and endpoint threats.",
        tags: ["Fluency SIEM", "Defender", "Entra ID", "SentinelOne", "TheHive"],
        resume: "/resumes/Kiran Vijaykumar Choudhari ML.pdf"
    },
    {
        title: "GenAI & Agentic Systems",
        icon: <FaBrain />,
        desc: "Designing multi-agent diagnostic pipelines, evidence-grounded RAG workflows, and resilient multi-provider LLM fallbacks.",
        tags: ["Multi-Agent AI", "RAG", "OpenClaw", "LangChain", "Vector DBs"],
        resume: "/resumes/Kiran Vijaykumar Choudhari ML.pdf"
    },
    {
        title: "Threat Intel & CVE Analysis",
        icon: <FaTerminal />,
        desc: "Deterministic vulnerability research, correlating live NVD data and CISA KEV exploitation proof before LLM inference.",
        tags: ["NVD", "CISA KEV", "CVSS Scoring", "OSINT", "Provenance"],
        resume: "/resumes/Kiran Vijaykumar Choudhari ML.pdf"
    },
    {
        title: "Cloud Security & Automation",
        icon: <FaServer />,
        desc: "Automating SIEM reporting dashboards, investigating AWS ingress & access anomalies, and containerizing security tools.",
        tags: ["AWS Security", "SIEM Dashboards", "Docker", "Python", "ConnectWise"],
        resume: "/resumes/Kiran Vijaykumar Choudhari ML.pdf"
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
                        <a
                            href={service.resume}
                            download
                            className="download-icon-btn group"
                        >
                            <FiDownload />
                            <span className="tooltip">Download Resume</span>
                        </a>
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
