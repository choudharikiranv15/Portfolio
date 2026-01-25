import React from 'react';
import './Works.scss';
import { motion } from 'framer-motion';

const projects = [
    {
        id: "01",
        name: "DokGuru",
        cat: "AI Platform / RAG",
        desc: "Multilingual Document Assistant with sub-second latency.",
    },
    {
        id: "02",
        name: "OpsPilot",
        cat: "DevOps Intelligence",
        desc: "Autonomous Root Cause Analysis using Multi-Agent AI.",
    },
    {
        id: "03",
        name: "ShopEase",
        cat: "E-Commerce / Full Stack",
        desc: "Secure platform with RBAC, OTP Auth, and Seller Dashboard.",
    },
    {
        id: "04",
        name: "Salesence",
        cat: "SaaS / Backend",
        desc: "High-scale scraping & analytics architecture.",
    }
];

const Works = () => {
    return (
        <div className="works-container">
            <div className="works-header">
                <h2>SELECTED WORKS</h2>
                <span className="subtitle">From Multi-Agent Systems to Scalable SaaS</span>
            </div>

            <div className="projects-list">
                {projects.map((p) => (
                    <motion.div
                        key={p.id}
                        className="project-item"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="project-image-placeholder">
                            <span className="project-title-large">{p.name}</span>
                            <span className="id-number">{p.id}</span>
                        </div>
                        <div className="project-info">
                            <h3>{p.name}</h3>
                            <span className="category">{p.cat}</span>
                            <p className="description">{p.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Works;
