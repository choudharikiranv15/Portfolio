import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const journeyItems = [
    {
        id: 1,
        type: 'education',
        role: "B.E. Computer Science",
        org: "SPPU",
        period: "2022 — 2026",
        desc: "Specialized in AI/ML.",
        tech: ["DSA", "System Design"],
        color: "#10b981", // Green
        position: 'top'
    },
    {
        id: 2,
        type: 'work',
        role: "AI Intern",
        org: "Crafttech 360",
        period: "Sep '25 — Nov '25",
        desc: "Built RAG pipelines & Edge AI models.",
        tech: ["Python", "TensorFlow"],
        color: "#db2777", // Pink
        position: 'bottom'
    },
    {
        id: 3,
        type: 'work',
        role: "Full Stack Intern",
        org: "Salesence",
        period: "Jun '25 — Present",
        desc: "High-scale APIs & Scraping Engines.",
        tech: ["Node.js", "AWS"],
        color: "#4f46e5", // Indigo
        position: 'top'
    }
];

const HorizontalNode = ({ item, index }) => {
    const isTop = item.position === 'top';

    return (
        <div className="relative flex flex-col items-center justify-center min-w-[300px] md:min-w-[400px] h-full">

            {/* The Node Dot on the Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                    className="w-6 h-6 rounded-full bg-[#0a0a0a] border-2 border-white relative group cursor-pointer"
                    style={{ borderColor: item.color }}
                >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: item.color }}></div>
                </motion.div>
            </div>

            {/* Connecting Line from Dot to Card */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '80px' }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                className={`absolute w-[1px] bg-gradient-to-b from-transparent to-white/30 z-0 ${isTop ? 'bottom-1/2 mb-3 bg-gradient-to-t' : 'top-1/2 mt-3'}`}
            ></motion.div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                className={`absolute ${isTop ? 'bottom-[calc(50%+60px)]' : 'top-[calc(50%+60px)]'} w-full px-4`}
            >
                <div className="bg-[#111] border border-white/10 p-6 rounded-xl relative hover:border-white/30 transition-colors group">
                    {/* Decorative Top Border */}
                    <div className="absolute top-0 left-4 right-4 h-[2px]" style={{ backgroundColor: item.color }}></div>

                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">
                        {item.type} // {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight mb-1">
                        {item.role}
                    </h3>
                    <h4 className="text-sm font-medium text-gray-400 mb-3">{item.org}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                        {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((t, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

const Experience = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center bg-[#0a0a0a] relative overflow-hidden">

            {/* Header (Absolute Top Left in the section) */}
            <div className="absolute top-20 left-10 md:left-20 z-20">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white opacity-20 select-none">
                    JOURNEY
                </h2>
                <div className="h-1 w-24 bg-white/20 mt-2"></div>
            </div>

            {/* Horizontal Timeline Track */}
            <div className="relative w-full flex items-center justify-center px-10 md:px-0">

                {/* Main Horizontal Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 w-full z-0"></div>

                {/* Glowing Beam (Left to Right) */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-0 opacity-50"
                ></motion.div>

                {/* Nodes Container */}
                <div className="flex items-center justify-center gap-4 md:gap-12 relative z-10 w-full max-w-6xl">
                    {journeyItems.map((item, index) => (
                        <HorizontalNode key={item.id} item={item} index={index} />
                    ))}
                </div>

            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}>
            </div>

        </div>
    );
};

export default Experience;
