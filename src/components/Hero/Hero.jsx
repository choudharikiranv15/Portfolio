import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PortraitImg from '../../assets/hero_avatar_clean.png';
import './Hero.scss';

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div
            className="hero-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Minimal Background Elements */}
            <div className="bg-noise"></div>
            <div className="bg-abstract-waves">
                <div className="wave-line line-1"></div>
                <div className="wave-line line-2"></div>
                <div className="wave-line line-3"></div>
            </div>

            <div className="hero-content">
                {/* Left Column: Text & Info */}
                <div className="hero-text-section">
                    <motion.h2 className="greeting-text" variants={fadeInUp}>Hello,</motion.h2>
                    <motion.h1 className="name-heading" variants={fadeInUp}>
                        I’m Kiran<br />Choudhari
                    </motion.h1>

                    <motion.p className="short-bio" variants={fadeInUp}>
                        Full Stack Developer | AI/ML Engineer | Freelancer
                    </motion.p>


                </div>

                {/* Right Column: Avatar & Minimal Socials */}
                <div className="hero-visual-section">
                    {/* SVG Connections Layer */}
                    <svg className="connection-lines" viewBox="0 0 400 600">
                        <motion.path
                            d="M 200 250 L 320 180"
                            stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        <motion.path
                            d="M 200 280 L 350 280"
                            stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }}
                        />
                        <motion.path
                            d="M 200 310 L 320 380"
                            stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }}
                        />
                    </svg>

                    <motion.div className="avatar-wrapper" variants={fadeInUp}>
                        <img src={PortraitImg} alt="Kiran Choudhari" className="mono-avatar" />
                        <div className="rim-light"></div>
                    </motion.div>

                    {/* Social Icons positioned at end of lines */}
                    <div className="social-nodes-minimal">
                        <motion.a
                            href="https://github.com/kiranchoudhari" target="_blank" rel="noopener noreferrer"
                            className="minimal-icon icon-1" style={{ top: '180px', left: '320px' }}>
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/kiran-choudhari" target="_blank" rel="noopener noreferrer"
                            className="minimal-icon icon-2" style={{ top: '280px', left: '350px' }}>
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="mailto:contact@kiranchoudhari.com"
                            className="minimal-icon icon-3" style={{ top: '380px', left: '320px' }}>
                            <FaEnvelope />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
