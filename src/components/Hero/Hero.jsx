import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero-content">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text-container"
            >
                <h1 className="hero-name">
                    KIRAN<br />
                    CHOUDHARI
                </h1>
                <div className="hero-divider"></div>
                <h2 className="hero-role">
                    AI & MACHINE LEARNING<br />
                    ENGINEER
                </h2>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <span>SCROLL TO EXPLORE</span>
                    <FaArrowRight className="arrow-icon" />
                </motion.div>
            </motion.div>

            {/* Abstract 3D shape placeholder or simplified graphic */}
            <div className="hero-graphic">
                <div className="circle-graphic"></div>
            </div>
        </div>
    );
};

export default Hero;
