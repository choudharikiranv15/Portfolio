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
        <div className="experience-container" ref={containerRef}>
            <motion.div className="floating-particles" style={{ x: starsX }}></motion.div>

            <div className="exp-header">
                <h2>JOURNEY</h2>
                <span className="subtitle">Traversing the timeline of innovation</span>
            </div>

            <div className="timeline-track">
                <div className="horizon-line">
                    <motion.div
                        className="signal-packet"
                        animate={{ left: ["-10%", "110%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {experiences.map((exp, index) => (
                    <div key={exp.id} className={`timeline-node node-${index}`}>
                        <div className="node-marker" style={{ boxShadow: `0 0 20px ${exp.color}` }}>
                            <div className="inner-core"></div>
                        </div>

                        <TiltCard style={{ width: '100%', perspective: 1000 }}>
                            <div className="exp-card glass-panel" style={{ borderTop: `2px solid ${exp.color}` }}>
                                <span className="period">{exp.period}</span>
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.desc}</p>
                                <div className="glow-effect" style={{ background: exp.color }}></div>
                            </div>
                        </TiltCard>

                        <div className="beam"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
