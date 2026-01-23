import React from 'react';
import './Works.scss';
import { motion } from 'framer-motion';

const projects = [
    { id: "01", name: "Neural Vision", cat: "Computer Vision", color: "#333" },
    { id: "02", name: "Alpha Trade", cat: "FinTech / SDE", color: "#444" },
    { id: "03", name: "Cloud Sentinel", cat: "DevOps Tooling", color: "#555" },
];

const Works = () => {
    return (
        <div className="works-container">
            <div className="works-header">
                <h2>SELECTED WORKS</h2>
                <span className="subtitle">From AI Research to Full Stack Applications</span>
            </div>

            <div className="projects-list">
                {projects.map((p) => (
                    <motion.div
                        key={p.id}
                        className="project-item"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="project-image-placeholder" style={{ backgroundColor: p.color }}>
                            {/* Image would go here */}
                            <span className="id-number">{p.id}</span>
                        </div>
                        <div className="project-info">
                            <h3>{p.name}</h3>
                            <p>{p.cat}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Works;
