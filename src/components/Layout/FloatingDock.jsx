import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './FloatingDock.scss';

const FloatingDock = () => {
    const navItems = [
        { icon: <FaHome />, label: 'Home', id: 'hero' },
        { icon: <FaUser />, label: 'Services', id: 'services' },
        { icon: <FaCode />, label: 'Works', id: 'works' },
        { icon: <FaBriefcase />, label: 'Experience', id: 'experience' },
        { icon: <FaEnvelope />, label: 'Contact', id: 'contact' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="floating-dock-container">
            <motion.div
                className="floating-dock"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            >
                {navItems.map((item, index) => (
                    <motion.button
                        key={item.id}
                        className="dock-item group"
                        onClick={() => scrollToSection(item.id)}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
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
