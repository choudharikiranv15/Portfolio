import React from 'react';
import './Works.scss';
import AnimatedHeading from '../Layout/AnimatedHeading';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaTerminal, FaBrain } from 'react-icons/fa';

const projects = [
    {
        id: "01",
        name: "ThreatIntel AI",
        cat: "Threat Intelligence / Evidence-First AI",
        desc: "Evidence-first CVE investigation engine pulling live data from NVD & CISA KEV before LLM reasoning. Integrated with an OpenClaw Discord SOC assistant with guild allowlisting.",
        link: "https://github.com/choudharikiranv15/ThreatIntel-AI",
        isGitHub: true,
        icon: <FaShieldAlt className="text-cyan-400" />,
        badge: "CVE Provenance Engine",
        tags: ["NVD API", "CISA KEV", "OpenClaw", "Discord SOC", "CVE-2024-3094"],
        terminalSnippet: {
            cmd: "threatintel investigate CVE-2024-3094",
            output: "NVD CVSS: 10.0 [CRITICAL]\nCISA KEV: Listed (Active Exploitation)\nStatus: Grounded Source Evidence Verified"
        }
    },
    {
        id: "02",
        name: "OpsPilot AI CLI",
        cat: "Agentic Incident Analysis & Troubleshooting",
        desc: "Autonomous multi-agent CLI (Planner, Verifier, Fixer, Remediation) diagnosing container logs and Docker environments with P0-P3 severity scoring and safe dry-run fix recommendations.",
        link: "https://github.com/choudharikiranv15/OpsPilot-AI",
        isGitHub: true,
        icon: <FaTerminal className="text-purple-400" />,
        badge: "Multi-Agent Incident CLI",
        tags: ["Multi-Agent AI", "Docker", "RCA", "LLM Fallback", "Dry-Run Safety"],
        terminalSnippet: {
            cmd: "opspilot analyze --env docker --severity P1",
            output: "Pipeline: Planner ➔ Verifier ➔ Remediation\nDiagnosis: Memory leak in container worker\nAction: Dry-run fix generated (Zero code modified)"
        }
    },
    {
        id: "03",
        name: "DokGuru",
        cat: "Multilingual Document Intelligence",
        desc: "High-performance AI document assistant featuring sub-second semantic retrieval, English-to-Kannada synthesis, and real-time text-to-speech audio narration.",
        link: "https://dokguru.in/",
        isGitHub: false,
        icon: <FaBrain className="text-emerald-400" />,
        badge: "Live AI Platform",
        tags: ["RAG", "Semantic Search", "FastAPI", "TTS Audio", "Multilingual"],
        terminalSnippet: {
            cmd: "dokguru query --lang kn --stream",
            output: "Latency: 280ms | Mode: Sub-second RAG\nSynthesizing: English ➔ Kannada Audio\nPlayback: Real-time neural stream ready"
        }
    }
];

const Works = () => {
    return (
        <div className="works-container">
            <div className="works-header">
                <AnimatedHeading text="FEATURED PROJECTS" />
                <span className="subtitle">Security Workflows, Agentic Systems, and AI Platforms</span>
            </div>

            <div className="projects-list">
                {projects.map((p) => (
                    <motion.a
                        key={p.id}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-item group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="project-image-placeholder">
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <span className="project-badge">{p.badge}</span>
                            </div>
                            <div className="terminal-body font-mono">
                                <div className="terminal-prompt">
                                    <span className="prompt-symbol">$</span> {p.terminalSnippet.cmd}
                                </div>
                                <div className="terminal-output">
                                    {p.terminalSnippet.output}
                                </div>
                            </div>
                            <span className="id-number">{p.id}</span>
                        </div>

                        <div className="project-info">
                            <div className="flex items-center justify-between mb-1">
                                <h3>{p.name}</h3>
                                {p.isGitHub ? (
                                    <FaGithub className="text-gray-400 group-hover:text-white transition-colors text-lg" />
                                ) : (
                                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-white transition-colors text-sm" />
                                )}
                            </div>
                            <span className="category">{p.cat}</span>
                            <p className="description">{p.desc}</p>
                            <div className="tags-row flex flex-wrap gap-1.5 mt-3">
                                {p.tags.map((t, idx) => (
                                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Works;
