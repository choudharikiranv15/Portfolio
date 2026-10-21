import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaBriefcase, FaTerminal, FaCertificate, FaEnvelope } from 'react-icons/fa';
import './FloatingDock.scss';

const FloatingDock = () => {
    const navItems = [
        { icon: <FaHome />, label: 'Home', id: 'hero' },
        { icon: <FaShieldAlt />, label: 'Focus', id: 'services' },
        { icon: <FaBriefcase />, label: 'Journey', id: 'experience' },
        { icon: <FaTerminal />, label: 'Projects', id: 'works' },
        { icon: <FaCertificate />, label: 'Credentials', id: 'certifications' },
        { icon: <FaEnvelope />, label: 'Contact', id: 'contact' }
    ];

    const scrollToSection = (id) => {
        const sectionOrder = ['hero', 'services', 'experience', 'works', 'certifications', 'contact'];
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            const idx = sectionOrder.indexOf(id);
            if (idx !== -1) {
                window.scrollTo({
                    top: idx * window.innerHeight,
                    behavior: 'smooth'
                });
            }
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="floating-dock-container">
            <motion.div
                className="floating-dock"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
            >
                {navItems.map((item) => (
                    <motion.button
                        key={item.id}
                        className="dock-item group"
                        onClick={() => scrollToSection(item.id)}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={item.label}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="tooltip-label">{item.label}</span>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};

export default FloatingDock;
