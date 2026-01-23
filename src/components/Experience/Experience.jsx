import React from 'react';
import { motion } from 'framer-motion';
import './Experience.scss';

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer Intern",
        company: "Salesence",
        period: "Jun '25 — Present",
        location: "Remote",
        desc: "Architecting high-throughput REST APIs and scraping engines.",
        color: "#4f46e5" // Indigo glow
    },
    {
        id: 2,
        role: "AI Intern",
        company: "Crafttech 360",
        period: "Sep '25 — Nov '25",
        location: "Bengaluru",
        desc: "Built RAG pipelines and deploying edge AI models.",
        color: "#ec4899" // Pink glow
    }
];

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="floating-particles"></div>

            <div className="exp-header">
                <h2>JOURNEY</h2>
                <span className="subtitle">Traversing the timeline of innovation</span>
            </div>

            <div className="timeline-track">
                <div className="horizon-line"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className={`timeline-node node-${index}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                    >
                        <div className="node-marker" style={{ boxShadow: `0 0 20px ${exp.color}` }}>
                            <div className="inner-core"></div>
                        </div>

                        <div className="exp-card glass-panel" style={{ borderTop: `2px solid ${exp.color}` }}>
                            <span className="period">{exp.period}</span>
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <p>{exp.desc}</p>
                            <div className="glow-effect" style={{ background: exp.color }}></div>
                        </div>

                        {/* Connecting beam to the horizon */}
                        <div className="beam"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
