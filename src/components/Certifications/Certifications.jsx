import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from '../Layout/AnimatedHeading';
import { FaCertificate, FaAward, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';
import './Certifications.scss';

const credentials = [
    {
        id: "01",
        title: "Microsoft Certified: Security Operations Analyst Associate",
        code: "SC-200",
        issuer: "Microsoft",
        date: "October 2026",
        type: "Professional Certification",
        icon: <FaShieldAlt className="text-blue-400" />,
        color: "#0078d4",
        desc: "Validated expertise in threat mitigation using Microsoft Defender, Microsoft Sentinel, and Microsoft Entra ID. Specialized in alert investigation, threat hunting, and incident response.",
        skills: ["Microsoft Defender", "Microsoft Sentinel", "Entra ID", "Threat Hunting", "Incident Response"]
    },
    {
        id: "02",
        title: "NOC AI Innovation Quest — Winning Idea",
        code: "AWARD",
        issuer: "Stratogent Technology Services",
        date: "July 2026",
        type: "Enterprise Innovation Award",
        icon: <FaAward className="text-amber-400" />,
        color: "#f59e0b",
        desc: "Selected as one of the winning entries in Stratogent's NOC AI Innovation Quest for proposing OpsPilot AI—an autonomous NOC copilot concept designed to streamline incident triage and alert correlation.",
        skills: ["AI Copilot", "Autonomous NOC", "Alert Correlation", "Incident Triage"]
    },
    {
        id: "03",
        title: "AI Agents for Cybersecurity",
        code: "AGENTIC-SEC",
        issuer: "LinkedIn Learning",
        date: "August 2026",
        type: "Specialized Credential",
        icon: <FaCertificate className="text-cyan-400" />,
        color: "#0a66c2",
        desc: "Focused on designing multi-agent AI systems, LLM-driven threat intelligence analysis, and automated defensive security workflows.",
        skills: ["Agentic AI", "Threat Intelligence", "Defensive Automation", "LLM Workflows"]
    },
    {
        id: "04",
        title: "B.E. in Artificial Intelligence & Machine Learning",
        code: "GPA: 7.4",
        issuer: "MVJ College of Engineering, Bengaluru",
        date: "Dec 2021 — Jun 2025",
        type: "Academic Degree",
        icon: <FaGraduationCap className="text-emerald-400" />,
        color: "#10b981",
        desc: "Rigorous curriculum covering neural networks, deep learning, algorithms, and distributed computing. Served as Chief Coordinator of VertechX 2024 Tech Fest.",
        skills: ["Machine Learning", "Data Structures", "System Design", "Leadership"]
    }
];

const Certifications = () => {
    return (
        <div className="certifications-container">
            <div className="certifications-header">
                <AnimatedHeading text="CREDENTIALS & HONORS" />
                <span className="subtitle">Certified Industry Expertise & Enterprise Accolades</span>
            </div>

            <div className="credentials-grid">
                {credentials.map((c) => (
                    <motion.div
                        key={c.id}
                        className="credential-card group"
                        whileHover={{ y: -6, scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="card-top">
                            <div className="icon-wrapper" style={{ borderColor: `${c.color}40`, backgroundColor: `${c.color}15` }}>
                                {c.icon}
                            </div>
                            <span className="badge-pill font-mono" style={{ color: c.color, borderColor: `${c.color}40` }}>
                                {c.code}
                            </span>
                        </div>

                        <div className="card-body">
                            <div className="meta-row">
                                <span className="issuer">{c.issuer}</span>
                                <span className="date font-mono">{c.date}</span>
                            </div>

                            <h3 className="title">{c.title}</h3>
                            <p className="description">{c.desc}</p>

                            <div className="skills-row">
                                {c.skills.map((skill, i) => (
                                    <span key={i} className="skill-chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="card-accent-bar" style={{ backgroundColor: c.color }} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
