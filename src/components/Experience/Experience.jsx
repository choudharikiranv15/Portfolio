import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import './Experience.scss';

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer Intern",
        company: "Salesence",
        period: "Jun '25 — Present",
        location: "Remote",
        desc: "Architecting high-throughput REST APIs and scraping engines.",
        color: "#4f46e5"
    },
    {
        id: 2,
        role: "AI Intern",
        company: "Crafttech 360",
        period: "Sep '25 — Nov '25",
        location: "Bengaluru",
        desc: "Built RAG pipelines and deploying edge AI models.",
        color: "#ec4899"
    }
];

const TiltCard = ({ children, style }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                ...style
            }}
        >
            {children}
        </motion.div>
    );
}

const Experience = () => {
    const containerRef = useRef(null);

    // Parallax for background
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const starsX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-20 bg-[#0a0a0a] relative overflow-hidden" ref={containerRef}>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-12 text-white">

                {/* Left: Sticky Header */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
                            EXPERIENCE
                        </h2>
                        <p className="text-xl text-gray-400 font-light max-w-sm leading-relaxed">
                            A track record of building high-performance systems and pioneering AI solutions.
                        </p>

                        <div className="mt-12 flex gap-4">
                            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                            <div className="h-1 w-10 bg-gray-700 rounded-full"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Cards List */}
                <div className="md:col-span-7 flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative bg-[#111] border border-white/5 hover:border-white/20 p-8 rounded-2xl transition-all duration-300 hover:bg-[#161616]"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm font-mono text-gray-500 mt-1 block">
                                        {exp.company} &nbsp;//&nbsp; {exp.location}
                                    </span>
                                </div>
                                <span className="mt-2 md:mt-0 px-4 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/5">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-gray-400 font-light leading-relaxed">
                                {exp.desc}
                            </p>

                            {/* Side Accent Line */}
                            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Experience;
