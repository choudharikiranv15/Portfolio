import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import PortraitImg from '../../assets/hero_avatar_clean.png';
import './Hero.scss';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const yAvatar = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Animation variants
    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    const slideInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    const avatarAnim = {
        hidden: { scale: 0.8, opacity: 0, y: 50 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut", delay: 0.2 }
        }
    };

    return (
        <div ref={containerRef} className="relative w-full h-[120vh] bg-[#050505] overflow-hidden flex flex-col justify-start items-center pt-[15vh] md:pt-0 md:justify-center">

            {/* --- Background Layers --- */}

            {/* Noise Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

            {/* Mesh Gradients / Abstract Waves */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-gray-800 to-transparent rounded-full blur-[100px] opacity-20 animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tl from-gray-700 to-transparent rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>


            {/* --- Main Content Container --- */}
            <div className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center h-full">

                {/* --- Left Text Section --- */}
                <motion.div
                    className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right space-y-4 md:space-y-6 order-2 md:order-1 relative z-0"
                    initial="hidden"
                    animate="visible"
                    variants={slideInLeft}
                    style={{ y: yText, opacity: opacityText }}
                >
                    <h3 className="text-xl md:text-2xl font-light tracking-[0.3em] text-gray-400">HELLO,</h3>
                    <p className="text-gray-500 font-medium text-sm md:text-base max-w-[280px] leading-relaxed">
                        I craft high-performance digital experiences with a focus on motion and premium aesthetics.
                    </p>
                    <div className="h-px w-16 bg-gray-700 mt-4 hidden md:block"></div>
                </motion.div>


                {/* --- Center Avatar Section --- */}
                <motion.div
                    className="md:col-span-4 flex justify-center items-center relative order-1 md:order-2 h-[50vh] md:h-auto my-8 md:my-0"
                    initial="hidden"
                    animate="visible"
                    variants={avatarAnim}
                    style={{ y: yAvatar }}
                >
                    {/* Glow Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-[60px] md:blur-[80px] -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full -z-10 animate-spin-slow-reverse"></div>

                    {/* The Avatar */}
                    <div className="relative z-10 w-[280px] md:w-[450px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group">
                        {/* Subtle rim light via drop-shadow */}
                        <img
                            src={PortraitImg}
                            alt="Kiran Choudhari"
                            className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] mask-image-gradient"
                        />

                        {/* Floating Social Icons (Orbiting/Connected) */}
                        {/* Defined specifically relative to avatar container */}
                        <div className="absolute top-[20%] left-[-40px] md:left-[-60px] flex items-center group-hover:-translate-x-2 transition-transform duration-500">
                            <div className="w-[30px] h-[1px] bg-white/20"></div>
                            <a href="https://github.com/kiranchoudhari" className="p-3 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm text-gray-400 hover:text-white hover:border-white/50 transition-colors">
                                <FaGithub size={20} />
                            </a>
                        </div>

                        <div className="absolute bottom-[30%] right-[-40px] md:right-[-60px] flex items-center group-hover:translate-x-2 transition-transform duration-500">
                            <a href="https://linkedin.com/in/kiran-choudhari" className="p-3 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm text-gray-400 hover:text-white hover:border-white/50 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <div className="w-[30px] h-[1px] bg-white/20"></div>
                        </div>

                        <div className="absolute top-[10%] right-[-20px] md:right-[0px] flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                            <div className="h-[30px] w-[1px] bg-white/20"></div>
                            <a href="mailto:contact@kiranchoudhari.com" className="p-3 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm text-gray-400 hover:text-white hover:border-white/50 transition-colors" title="Email Me">
                                <FaEnvelope size={18} />
                            </a>
                        </div>

                    </div>
                </motion.div>


                {/* --- Right Text Section --- */}
                <motion.div
                    className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-2 md:space-y-4 order-3 relative z-0"
                    initial="hidden"
                    animate="visible"
                    variants={slideInRight}
                    style={{ y: yText, opacity: opacityText }}
                >
                    {/* Layered Text Effect: Partially behind avatar if screen is small, but on desktop we align it to side */}
                    {/* To create the "partially hidden" effect on desktop, we use negative margins to pull text closer to center */}

                    <div className="relative md:-ml-12 lg:-ml-20 z-0">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tighter opacity-90">
                            I’M KIRAN
                        </h2>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 leading-none tracking-tighter">
                            CHOUDHARI
                        </h2>
                    </div>

                    <div className="md:pl-4 lg:pl-0 mt-6 md:mt-0">
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-500">
                            <span className="px-3 py-1 border border-white/10 rounded-full">Full Stack</span>
                            <span className="px-3 py-1 border border-white/10 rounded-full">AI / ML</span>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, transition: { delay: 2 } }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                <span className="text-[10px] tracking-[0.2em] text-white/60">SCROLL</span>
            </motion.div>

        </div>
    );
};

export default Hero;
