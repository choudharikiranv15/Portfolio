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
        <div className="relative flex flex-col items-center justify-center min-w-[350px] md:min-w-[450px] h-full z-10 px-4">

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
                className={`absolute ${isTop ? 'bottom-[calc(50%+60px)]' : 'top-[calc(50%+60px)]'} w-full left-0 right-0 px-4`}
            >
                <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl relative hover:border-white/30 transition-all duration-300 shadow-2xl z-20">

                    {/* Top Color Accent */}
                    <div className="absolute top-0 left-4 right-4 h-[2px]" style={{ backgroundColor: item.color }}></div>

                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
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

const Experience = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center bg-[#0a0a0a] relative overflow-hidden">

            {/* Header */}
            <div className="absolute top-20 left-10 md:left-24 z-20 pointer-events-none">
                <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-white select-none">
                    JOURNEY
                </h2>
                <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            </div>

            {/* Scrollable Container */}
            <div className="relative w-full h-full flex items-center overflow-x-auto no-scrollbar pt-20">

                {/* Main Horizontal Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 w-[200vw] z-0"></div>

                {/* Nodes Wrapper */}
                <div className="flex items-center gap-0 min-w-max px-20 h-[500px]">
                    {journeyItems.map((item, index) => (
                        <HorizontalNode key={item.id} item={item} index={index} />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Experience;
