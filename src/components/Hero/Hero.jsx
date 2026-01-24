import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPython, FaNodeJs, FaBrain } from 'react-icons/fa';
import { SiPostgresql, SiFastapi } from 'react-icons/si';
import PortraitImg from '../../assets/hero_avatar_clean.png';
import './Hero.scss';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const yBgText = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <div
            ref={containerRef}
            className="w-full min-h-screen lg:h-full bg-[#0a0a0a] text-white overflow-hidden"
        >
            {/* Background Text */}
            <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none">
                <motion.div style={{ y: yBgText }} className="flex flex-col items-center opacity-[0.03] leading-none">
                    <span className="text-[15vw] lg:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">DEVELOPER</span>
                    <span className="text-[15vw] lg:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">ENGINEER</span>
                    <span className="text-[15vw] lg:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">CREATOR</span>
                </motion.div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden relative z-10 flex flex-col items-center justify-between min-h-screen px-6 py-12">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
                        I'M KIRAN
                    </h2>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-500 tracking-tight">
                        CHOUDHARI
                    </h3>
                </motion.div>

                <motion.div
                    className="flex-1 flex items-center justify-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <img
                        src={PortraitImg}
                        alt="Kiran Choudhari"
                        className="w-auto max-h-[45vh] object-contain drop-shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-lg font-light mb-4">
                        I build scalable <span className="font-medium">web</span> and <span className="font-medium">AI</span> solutions.
                    </p>
                    <div className="flex items-center justify-center gap-5 text-xl text-gray-400">
                        <FaPython className="hover:text-blue-400 transition-colors" />
                        <FaNodeJs className="hover:text-green-500 transition-colors" />
                        <FaBrain className="hover:text-purple-500 transition-colors" />
                        <SiPostgresql className="hover:text-blue-300 transition-colors" />
                        <SiFastapi className="hover:text-teal-400 transition-colors" />
                    </div>
                </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-12 h-full px-12 relative z-10">
                <div className="col-span-4 flex flex-col justify-center items-start gap-6 pl-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <h3 className="text-xl font-mono text-gray-400 mb-4">HELLO,</h3>
                        <p className="text-3xl font-light leading-snug">
                            I build scalable <span className="font-medium">web</span><br />
                            and <span className="font-medium">AI</span> solutions.
                        </p>
                    </motion.div>
                    <div className="flex items-center gap-6 text-2xl text-gray-400">
                        <FaPython className="hover:text-blue-400 transition-colors cursor-pointer" />
                        <FaNodeJs className="hover:text-green-500 transition-colors cursor-pointer" />
                        <FaBrain className="hover:text-purple-500 transition-colors cursor-pointer" />
                        <SiPostgresql className="hover:text-blue-300 transition-colors cursor-pointer" />
                        <SiFastapi className="hover:text-teal-400 transition-colors cursor-pointer" />
                    </div>
                </div>

                <div className="col-span-4 flex items-end justify-center relative">
                    <motion.img
                        src={PortraitImg}
                        alt="Kiran Choudhari"
                        className="w-auto max-h-[85vh] object-contain object-bottom drop-shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>

                <div className="col-span-4 flex flex-col justify-center items-end text-right pr-12">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
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
