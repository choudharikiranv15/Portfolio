import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const journeyItems = [
    {
        id: 1,
        type: 'education',
        role: "B.E. Computer Science",
        org: "Savitribai Phule Pune University",
        period: "2022 — 2026",
        desc: "Specialized in Artificial Intelligence & Machine Learning. Active member of the coding club.",
        tech: ["DSA", "System Design", "AI/ML"],
        color: "#10b981", // Green
        position: 'top'
    },
    {
        id: 2,
        type: 'work',
        role: "AI Intern",
        org: "Crafttech 360",
        period: "Sep '25 — Nov '25",
        desc: "Built RAG pipelines and deployed optimized Edge AI models for real-time inference.",
        tech: ["Python", "TensorFlow", "RAG"],
        color: "#db2777", // Pink
        position: 'bottom'
    },
    {
        id: 3,
        type: 'work',
        role: "Full Stack Intern",
        org: "Salesence",
        period: "Jun '25 — Present",
        desc: "Architecting high-throughput REST APIs and scraping engines for scalable data solutions.",
        tech: ["Node.js", "React", "AWS"],
        color: "#4f46e5", // Indigo
        position: 'top'
    }
];

const HorizontalNode = ({ item, index }) => {
    const isTop = item.position === 'top';

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full z-10 px-2 lg:px-4">

            {/* The Node Dot on the Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div
                    initial={{ scale: 0.5, opacity: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white relative cursor-pointer"
                    style={{ borderColor: item.color }}
                >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: item.color }}></div>
                </motion.div>
            </div>

            {/* Connecting Line from Dot to Card */}
            <div
                className={`absolute w-[1px] bg-white/20 z-0 ${isTop ? 'bottom-1/2 mb-2' : 'top-1/2 mt-2'}`}
                style={{ height: '60px' }}
            ></div>

            {/* Content Card - ensured opacity 1 */}
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                className={`absolute ${isTop ? 'bottom-[calc(50%+60px)]' : 'top-[calc(50%+60px)]'} w-full left-0 right-0 px-2`}
            >
                <div className="bg-[#0a0a0a] border border-white/10 p-5 lg:p-6 rounded-xl relative hover:border-white/30 transition-all duration-300 shadow-2xl z-20">

                    {/* Top Color Accent */}
                    <div className="absolute top-0 left-4 right-4 h-[2px]" style={{ backgroundColor: item.color }}></div>

                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
                        {item.type} // {item.period}
                    </span>
                    <h3 className="text-lg lg:text-xl font-bold text-white leading-tight mb-1 truncate" title={item.role}>
                        {item.role}
                    </h3>
                    <h4 className="text-xs lg:text-sm font-medium text-gray-400 mb-3 truncate" title={item.org}>{item.org}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                        {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((t, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 bg-white/5 rounded text-gray-500 border border-white/5 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

const MobileNode = ({ item, isLast, index }) => {
    return (
        <div className="relative flex gap-4 pb-8"> {/* Reduced gap, changed pb */}
            {/* Timeline Line (Vertical) */}
            {!isLast && (
                <div
                    className="absolute left-[11px] top-6 bottom-0 w-[1px] bg-white/20 z-0"
                ></div>
            )}

            {/* Dot - Smaller for mobile */}
            <div className="flex-shrink-0 z-10 mt-1">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-6 h-6 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center relative shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: item.color }}
                >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                </motion.div>
            </div>

            {/* Content Check */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
                className="flex-grow min-w-0"
            >
                <div className="bg-[#0a0a0a] border border-white/10 p-4 rounded-lg relative hover:border-white/20 transition-all duration-300 shadow-xl">
                    {/* Role & Org */}
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">
                        {item.type} // {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight mb-0.5 truncate pr-2">
                        {item.role}
                    </h3>
                    <h4 className="text-xs font-medium text-gray-400 mb-2 truncate">{item.org}</h4>

                    <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-3">
                        {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t, i) => (
                            <span key={i} className="text-[9px] px-1.5 py-0.5 bg-white/5 rounded text-gray-400 border border-white/5 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const Experience = () => {
    return (
        <div
            className="bg-[#0a0a0a]"
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'clamp(2rem, 5vw, 5rem)',
                overflow: 'hidden',
            }}
        >

            {/* Header */}
            <div className="w-full max-w-[1400px] mb-8 lg:mb-16 z-20">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
                    JOURNEY
                </h2>
                <div className="h-1 w-16 md:w-20 bg-blue-600 mt-2"></div>
            </div>

            {/* --- Mobile View (Vertical) --- */}
            <div className="md:hidden w-full max-w-xl relative z-10">
                {journeyItems.map((item, index) => (
                    <MobileNode
                        key={item.id}
                        item={item}
                        index={index}
                        isLast={index === journeyItems.length - 1}
                    />
                ))}
            </div>

            {/* --- Desktop View (Horizontal) --- */}
            <div className="hidden md:flex relative w-full flex-1 items-center justify-center px-10">

                {/* Main Horizontal Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 w-full z-0"></div>

                {/* Nodes Grid */}
                <div className="grid grid-cols-3 gap-8 w-full max-w-[1400px] h-full max-h-[500px] z-10 items-center">
                    {journeyItems.map((item, index) => (
                        <div key={item.id} className="h-full flex flex-col justify-center">
                            <HorizontalNode item={item} index={index} />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Experience;
