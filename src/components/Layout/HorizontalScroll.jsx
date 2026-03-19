import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

const HorizontalScroll = ({ children }) => {
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(null); // null = not yet determined

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;
        const lenis = new Lenis({
            autoRaf: true,
            duration: 1.5,
            smoothWheel: true,
        });

        const handleKeyDown = (e) => {
            const viewportHeight = window.innerHeight;
            if (e.key === "ArrowRight") {
                lenis.scrollTo(lenis.scroll + viewportHeight, { duration: 1.5 });
            } else if (e.key === "ArrowLeft") {
                lenis.scrollTo(lenis.scroll - viewportHeight, { duration: 1.5 });
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            lenis.destroy();
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobile]);

    const { scrollYProgress } = useScroll({ target: targetRef });
    const sectionCount = React.Children.count(children);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((sectionCount - 1) / sectionCount) * 100}%`]);

    // Mobile: Simple vertical scroll
    if (isMobile === null) {
        // Pre-render with dark bg so there's no flash of empty page
        return <div className="w-full min-h-screen bg-[#0a0a0a]" />;
    }

    if (isMobile) {
        return (
            <div className="w-full">
                {children}
            </div>
        );
    }

    // Desktop: Horizontal scroll
    return (
        <div ref={targetRef} style={{ height: `${sectionCount * 100}vh` }}>
            <div className="sticky top-0 h-screen w-screen overflow-hidden">
                <motion.div
                    ref={containerRef}
                    style={{ x, display: "flex", height: "100vh", width: `${sectionCount * 100}vw`, willChange: "transform" }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className="w-screen h-screen flex-shrink-0 overflow-hidden relative"
                        >
                            {child}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
