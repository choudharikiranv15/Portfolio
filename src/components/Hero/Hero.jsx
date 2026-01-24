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
        <div
            ref={containerRef}
            className="bg-[#0a0a0a] text-white font-sans"
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
            }}
        >

            {/* --- 1. Background Typography Layer --- */}
            <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none">
                <motion.div style={{ y: yBgText }} className="flex flex-col items-center opacity-[0.03] leading-none">
                    <span className="text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">DEVELOPER</span>
                    <span className="text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono ml-[10vw]">ENGINEER</span>
                    <span className="text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono -ml-[10vw]">CREATOR</span>
                </motion.div>
            </div>

            {/* --- 2. Main Content Grid --- */}
            <div className="relative z-10 w-full h-full grid grid-cols-12 px-8 md:px-12">

                {/* --- Left Column: Intro Info --- */}
                <div className="col-span-4 hidden md:flex flex-col justify-center items-start gap-6 pl-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-mono text-gray-400 mb-4">HELLO,</h3>
                        <p className="text-3xl font-light leading-snug">
                            I build scalable <span className="text-white font-medium">web</span><br />
                            and <span className="text-white font-medium">AI</span> solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-6 text-2xl text-gray-400 mt-2">
                            <FaPython title="Python" className="hover:text-blue-400 transition-colors cursor-pointer" />
                            <FaNodeJs title="Node.js" className="hover:text-green-500 transition-colors cursor-pointer" />
                            <FaBrain title="AI / ML" className="hover:text-purple-500 transition-colors cursor-pointer" />
                            <SiPostgresql title="PostgreSQL" className="hover:text-blue-300 transition-colors cursor-pointer" />
                            <SiFastapi title="FastAPI" className="hover:text-teal-400 transition-colors cursor-pointer" />
                        </div>
                    </motion.div>
                </div>

                {/* --- Center Column: Avatar --- */}
                <div className="col-span-12 md:col-span-4 flex items-end justify-center relative z-10">
                    <motion.div
                        className="relative flex items-end justify-center h-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <img
                            src={PortraitImg}
                            alt="Kiran Choudhari"
                            className="w-auto max-h-[85vh] object-contain object-bottom drop-shadow-2xl"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-30"></div>
                    </motion.div>
                </div>

                {/* --- Right Column: Name --- */}
                <div className="col-span-4 hidden md:flex flex-col justify-center items-end text-right pr-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-7xl xl:text-8xl font-black tracking-tighter leading-none mb-2">
                            I'M<br />KIRAN
                        </h2>
                        <h2 className="text-5xl xl:text-6xl font-bold text-gray-500 tracking-tight leading-none">
                            CHOUDHARI
                        </h2>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
