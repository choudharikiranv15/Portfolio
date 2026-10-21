import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaBrain, FaRobot, FaPython } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';
import PortraitImg from '../../assets/hero_avatar_clean.png';
import './Hero.scss';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, ease: 'easeOut', delay },
});

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
            <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden">
                <motion.div style={{ y: yBgText }} className="flex flex-col items-center opacity-[0.1] leading-none">
                    <span className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">DEVELOPER</span>
                    <span className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">ENGINEER</span>
                    <span className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-black tracking-tighter whitespace-nowrap font-mono">CREATOR</span>
                </motion.div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-8 sm:py-12 gap-6 sm:gap-8">
                <motion.div
                    className="text-center"
                    {...fadeUp(0.1)}
                >
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
                        <FaShieldAlt className="text-xs" /> Security Operations & AI
                    </div>
                    <h3 className="text-sm sm:text-base font-mono text-gray-400 mb-1">HELLO,</h3>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none">
                        I'M KIRAN
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500 tracking-tight mt-1">
                        CHOUDHARI
                    </h3>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                    <img
                        src={PortraitImg}
                        alt="Kiran Choudhari"
                        className="w-auto max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] object-contain drop-shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    className="text-center"
                    {...fadeUp(0.3)}
                >
                    <p className="text-base sm:text-lg font-light mb-3 sm:mb-4 max-w-sm text-gray-200">
                        Investigating enterprise security events & engineering <span className="font-medium text-white">evidence-first AI systems</span>.
                    </p>
                    <div className="flex items-center justify-center gap-5 sm:gap-6 text-xl text-gray-400">
                        <FaShieldAlt title="Security Operations" className="hover:text-cyan-400 transition-colors" />
                        <FaBrain title="GenAI & RAG" className="hover:text-purple-400 transition-colors" />
                        <FaRobot title="AI Agents" className="hover:text-indigo-400 transition-colors" />
                        <FaPython title="Python" className="hover:text-blue-400 transition-colors" />
                        <SiDocker title="Docker" className="hover:text-sky-400 transition-colors" />
                    </div>
                </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-12 h-full px-12 relative z-10">
                <div className="col-span-4 flex flex-col justify-center items-start gap-6 pl-12">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
                            <FaShieldAlt className="text-xs" /> Security Operations & AI
                        </div>
                        <p className="text-3xl font-light leading-snug text-gray-200">
                            Investigating security events & engineering <span className="font-semibold text-white">evidence-first AI</span> solutions.
                        </p>
                    </motion.div>
                    <div className="flex items-center gap-6 text-2xl text-gray-400">
                        <FaShieldAlt title="Security Operations" className="hover:text-cyan-400 transition-colors cursor-pointer" />
                        <FaBrain title="GenAI & RAG" className="hover:text-purple-400 transition-colors cursor-pointer" />
                        <FaRobot title="AI Agents" className="hover:text-indigo-400 transition-colors cursor-pointer" />
                        <FaPython title="Python" className="hover:text-blue-400 transition-colors cursor-pointer" />
                        <SiDocker title="Docker" className="hover:text-sky-400 transition-colors cursor-pointer" />
                    </div>
                </div>

                <div className="col-span-4 flex items-end justify-center relative">
                    <motion.img
                        src={PortraitImg}
                        alt="Kiran Choudhari"
                        className="w-auto max-h-[85vh] object-contain object-bottom drop-shadow-2xl"
                        initial={{ opacity: 0, scale: 0.97, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>

                <div className="col-span-4 flex flex-col justify-center items-end text-right pr-12">
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
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
