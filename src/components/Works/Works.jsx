import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: "01",
        name: "DokGuru",
        cat: "AI Platform / RAG",
        desc: "Multilingual Document Assistant with sub-second latency.",
    },
    {
        id: "02",
        name: "OpsPilot",
        cat: "DevOps Intelligence",
        desc: "Autonomous Root Cause Analysis using Multi-Agent AI.",
    },
    {
        id: "03",
        name: "ShopEase",
        cat: "E-Commerce / Full Stack",
        desc: "Secure platform with RBAC, OTP Auth, and Seller Dashboard.",
    },
    {
        id: "04",
        name: "Salesence",
        cat: "SaaS / Backend",
        desc: "High-scale scraping & analytics architecture.",
    }
];

const Works = () => {
    return (
        <div className="w-full min-h-screen lg:h-full bg-[#0a0a0a] flex flex-col justify-center p-6 sm:p-8 lg:p-16">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    SELECTED WORKS
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest">
                    From Multi-Agent Systems to Scalable SaaS
                </p>
                <div className="h-1 w-16 lg:w-20 bg-green-500 mt-3"></div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {projects.map((p) => (
                    <motion.div
                        key={p.id}
                        className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer group hover:border-white/30 transition-all"
                        whileHover={{ y: -5 }}
                    >
                        {/* Large ID */}
                        <span className="absolute -bottom-4 -right-2 text-[6rem] lg:text-[8rem] font-black text-white/5 leading-none select-none">
                            {p.id}
                        </span>

                        {/* Content */}
                        <div className="relative z-10 p-5 lg:p-6 min-h-[200px] lg:min-h-[280px] flex flex-col">
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">
                                {p.cat}
                            </span>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                                {p.name}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                {p.desc}
                            </p>
                            <div className="mt-4 flex items-center text-white/60 group-hover:text-white transition-colors text-sm">
                                <span>View Project</span>
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Works;
