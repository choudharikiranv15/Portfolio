import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import './Contact.scss';

const Contact = () => {
    // Split text for animation
    const line1 = "Let's";
    const line2 = "Work";
    const line3 = "Together";

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    const renderAnimatedText = (text, startIndex = 0) => {
        return text.split('').map((char, index) => (
            <motion.span
                key={index}
                custom={startIndex + index}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        ));
    };

    return (
        <div className="contact-container">
            {/* Background animated elements */}
            <div className="bg-elements">
                <motion.div
                    className="circle circle-1"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.03, 0.06, 0.03]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="circle circle-2"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.02, 0.05]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="contact-content">
                {/* Main Heading with letter animation */}
                <div className="heading-wrapper">
                    <h2 className="main-heading">
                        <span className="line">
                            {renderAnimatedText(line1, 0)}
                        </span>
                        <span className="line">
                            {renderAnimatedText(line2, line1.length)}
                        </span>
                        <span className="line accent">
                            {renderAnimatedText(line3, line1.length + line2.length)}
                        </span>
                    </h2>
                </div>

                {/* Subtitle */}
                <motion.p
                    className="subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    Open for Freelance Projects in AI, Full Stack Development, and DevOps.
                </motion.p>

                {/* CTA Button */}


                {/* Social Media Icons */}
                <div className="social-links">
                    <motion.a
                        href="https://github.com/choudharikiranv15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                        whileHover={{ y: -5, color: "#000" }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/kiranchoudhari-1510m/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                        whileHover={{ y: -5, color: "#0077b5" }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="mailto:choudharikiranv2003@gmail.com"
                        className="social-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                        whileHover={{ y: -5, color: "#ea4335" }}
                    >
                        <SiGmail />
                    </motion.a>
                </div>

                {/* Decorative line */}
                <motion.div
                    className="deco-line"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default Contact;
