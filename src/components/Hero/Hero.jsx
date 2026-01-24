import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPython, FaNodeJs, FaBrain } from 'react-icons/fa';
import { SiPostgresql, SiFastapi } from 'react-icons/si';
import PortraitImg from '../../assets/hero_avatar_clean.png';
import './Hero.scss';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax for background text using Framer Motion
    const yBgText = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <div ref={containerRef} className="relative w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between overflow-hidden font-sans">

            {/* --- 1. Background Typography Layer (Behind Avatar) --- */}
            <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden">
                <motion.div style={{ y: yBgText }} className="flex flex-col items-center opacity-[0.03] space-y-0 leading-none">
                    {/* Massive Background Text */}
                    <span className="text-[15vw] md:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">DEVELOPER</span>
                    <span className="text-[15vw] md:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono ml-[10vw]">ENGINEER</span>
                    <span className="text-[15vw] md:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono -ml-[10vw]">CREATOR</span>
                </motion.div>
            </div>


            {/* --- 2. Main Content Grid --- */}
            <div className="relative z-10 w-full flex-grow flex flex-col md:grid md:grid-cols-12 h-full container mx-auto px-6 md:px-12 py-12 md:py-0">

                {/* --- Left Column: Intro Info --- */}
                <div className="md:col-span-4 flex flex-col justify-center items-start space-y-8 order-2 md:order-1 pt-10 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-mono text-gray-400 mb-2">HELLO,</h3>
                        <p className="text-2xl md:text-3xl font-light leading-snug">
                            I build scalable <span className="text-white font-medium">web</span> and <span className="text-white font-medium">AI</span> solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-2"
                    >

                        <div className="flex items-center gap-4 text-xl text-gray-400 mt-1">
                            <FaPython title="Python" className="hover:text-blue-400 transition-colors" />
                            <FaNodeJs title="Node.js" className="hover:text-green-500 transition-colors" />
                            <FaBrain title="AI / ML" className="hover:text-purple-500 transition-colors" />
                            <SiPostgresql title="PostgreSQL" className="hover:text-blue-300 transition-colors" />
                            <SiFastapi title="FastAPI" className="hover:text-teal-400 transition-colors" />
                        </div>
                    </motion.div>

                    {/* Left Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-2 font-mono text-sm text-gray-400 mt-4"
                    >
                        <a href="https://github.com/kiranchoudhari" className="hover:text-white transition-colors flex items-center gap-2 group">
                            GITHUB <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </a>
                        <a href="https://linkedin.com/in/kiran-choudhari" className="hover:text-white transition-colors flex items-center gap-2 group">
                            LINKEDIN <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </a>
                        <a href="mailto:contact@kiranchoudhari.com" className="hover:text-white transition-colors flex items-center gap-2 group">
                            EMAIL <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </a>
                    </motion.div>
                </div>


                {/* --- Center Column: Avatar --- */}
                <div className="md:col-span-4 flex items-end justify-center relative order-1 md:order-2 h-[50vh] md:h-screen">
                    {/* Avatar Image */}
                    <motion.div
                        className="relative z-20 w-full h-full flex items-end justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <img
                            src={PortraitImg}
                            alt="Kiran Choudhari"
                            className="w-auto h-full max-h-[85vh] object-contain object-bottom drop-shadow-2xl"
                        />
                        {/* Gradient Mask at bottom to blend if needed */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-30"></div>
                    </motion.div>
                </div>


                {/* --- Right Column: Profile & Tech --- */}
                <div className="md:col-span-4 flex flex-col justify-center items-end text-right space-y-8 order-3 pt-4 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-2">
                            I’M<br />KIRAN
                        </h2>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 tracking-tight leading-none">
                            CHOUDHARI
                        </h2>
                    </motion.div>




                </div>

            </div>




        </div>
    );
};

export default Hero;
