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
            <div className="relative z-10 w-full flex-grow flex flex-col md:grid md:grid-cols-12 h-full container mx-auto px-4 md:px-12 py-4 md:py-0">

                {/* --- Left Column: Intro Info --- */}
                {/* --- Left Column: Intro Info --- */}
                <div className="md:col-span-4 flex flex-col justify-center items-start gap-4 md:gap-6 order-2 md:order-1 pt-4 md:pt-0 md:pl-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-lg md:text-xl font-mono text-gray-400 mb-2 md:mb-4">HELLO,</h3>
                        <p className="text-xl md:text-3xl font-light leading-snug">
                            I build scalable <span className="text-white font-medium">web</span><br />
                            and <span className="text-white font-medium">AI</span> solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-4"
                    >

                        <div className="flex items-center gap-6 text-2xl text-gray-400 mt-2">
                            <FaPython title="Python" className="hover:text-blue-400 transition-colors" />
                            <FaNodeJs title="Node.js" className="hover:text-green-500 transition-colors" />
                            <FaBrain title="AI / ML" className="hover:text-purple-500 transition-colors" />
                            <SiPostgresql title="PostgreSQL" className="hover:text-blue-300 transition-colors" />
                            <SiFastapi title="FastAPI" className="hover:text-teal-400 transition-colors" />
                        </div>
                    </motion.div>


                </div>


                {/* --- Center Column: Avatar --- */}
                <div className="md:col-span-4 flex items-end justify-center relative order-1 md:order-2 h-[35vh] md:h-screen">



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
                <div className="md:col-span-4 flex flex-col justify-center items-end text-right space-y-4 md:space-y-8 order-3 pt-4 md:pt-0 md:pr-24">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-1 md:mb-2">
                            I’M<br />KIRAN
                        </h2>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-500 tracking-tight leading-none">
                            CHOUDHARI
                        </h2>
                    </motion.div>




                </div>

            </div>




        </div>
    );
};

export default Hero;
