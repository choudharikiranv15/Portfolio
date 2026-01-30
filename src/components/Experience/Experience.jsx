import React from 'react';
import AnimatedHeading from '../Layout/AnimatedHeading';
import { motion } from 'framer-motion';

const journeyItems = [
    {
        id: 1,
        type: 'education',
        role: "B.E. AI & ML",
        org: "MVJ College of Engineering Bengaluru",
        period: "2021 — 2025",
        desc: "Specialized in Artificial Intelligence & Machine Learning.  Chief Cordinator of VertechX 2024(Tech Fest).",
        tech: ["Full Stack", "AI/ML", "Leadership"],
        color: "#10b981",
        position: 'top'
    },
    {
        id: 2,
        type: 'work',
        role: "AI Intern",
        org: "Crafttech 360",
        period: "Sep '25 — Nov '25",
        desc: "Built RAG pipelines and deployed optimized Edge AI models for real-time inference.",
        tech: ["Python", "CI/CD", "RAG"],
        color: "#db2777",
        position: 'bottom'
    },
    {
        id: 3,
        type: 'work',
        role: "Full Stack Intern",
        org: "Salesence",
        period: "Jun '25 — Present",
        desc: "Architecting high-throughput REST APIs and scraping engines for scalable data solutions.",
        tech: ["Node.js", "React", "BullMQ"],
        color: "#4f46e5",
        position: 'top'
    }
];

const MobileNode = ({ item, isLast, index }) => (
    <div className="relative flex gap-4 pb-12">
        {!isLast && (
            <div className="absolute left-[11px] top-6 bottom-0 w-[1px] bg-white/20"></div>
        )}
        <div className="flex-shrink-0 z-10 mt-1">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-6 h-6 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center"
                style={{ borderColor: item.color }}
            >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
            </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-grow"
        >
            <div className="pl-4 pt-0.5 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white leading-tight">{item.role}</h3>
                    <span className="text-[11px] font-bold tracking-widest uppercase mt-1 sm:mt-0" style={{ color: item.color }}>
                        {item.period}
                    </span>
                </div>

                <h4 className="text-sm font-medium text-white/60 mb-3 font-mono uppercase tracking-wide">{item.org}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-prose">{item.desc}</p>

                <div className="flex flex-wrap gap-x-3 gap-y-2 text-[11px] font-mono text-gray-500 uppercase">
                    {item.tech.map((t, i) => (
                        <span key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full mr-1.5 opacity-50" style={{ backgroundColor: item.color }}></span>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
);

const HorizontalNode = ({ item }) => {
    const isTop = item.position === 'top';
    return (
        <div className="relative flex flex-col items-center justify-center h-full px-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2"
                    style={{ borderColor: item.color }}
                >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: item.color }}></div>
                </motion.div>
            </div>
            <div className={`absolute w-[1px] bg-white/20 ${isTop ? 'bottom-1/2 mb-2' : 'top-1/2 mt-2'}`} style={{ height: '60px' }}></div>
            <div className={`absolute ${isTop ? 'bottom-[calc(50%+60px)]' : 'top-[calc(50%+60px)]'} w-full px-2`}>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-white/30 transition-all">
                    <div className="absolute top-0 left-4 right-4 h-[2px]" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                        {item.type} // {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{item.role}</h3>
                    <h4 className="text-sm text-gray-400 mb-2">{item.org}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((t, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 bg-white/5 rounded text-gray-500">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="w-full min-h-screen lg:h-full bg-[#0a0a0a] flex flex-col justify-center p-6 sm:p-8 lg:p-16 overflow-y-auto lg:overflow-visible">
            {/* Header */}
            <div className="lg:mb-16">
                <AnimatedHeading
                    text="JOURNEY"
                    className="text-3xl sm:text-4xl lg:text-7xl font-black tracking-tighter text-white"
                />
                <div className="h-1 w-16 lg:w-20 bg-blue-600 mt-2"></div>
            </div>

            {/* Mobile Spacer */}
            <div className="h-[50px] lg:hidden"></div>

            {/* Mobile Timeline */}
            <div className="lg:hidden">
                {journeyItems.map((item, index) => (
                    <MobileNode key={item.id} item={item} index={index} isLast={index === journeyItems.length - 1} />
                ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:flex relative flex-1 items-center justify-center">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 overflow-hidden">
                    <motion.div
                        className="absolute top-0 right-full w-40 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                        animate={{ x: "250%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>
                <div className="grid grid-cols-3 gap-8 w-full max-w-[1200px] h-[400px]">
                    {journeyItems.map((item) => (
                        <HorizontalNode key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
