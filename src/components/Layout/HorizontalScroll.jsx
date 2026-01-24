import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

const HorizontalScroll = ({ children }) => {
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR
    const [isClient, setIsClient] = useState(false);

    // Check for mobile device
    useEffect(() => {
        setIsClient(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Initialize Lenis for smooth scrolling (desktop only)
    useEffect(() => {
        // Only initialize Lenis on desktop for horizontal scroll effect
        if (isMobile) return;

        const lenis = new Lenis({
            autoRaf: true,
            duration: 1.5,
            smoothWheel: true,
        });

        return () => {
            lenis.destroy();
        };
    }, [isMobile]);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const sectionCount = React.Children.count(children);

    // Transform scrollYProgress (0 -> 1) to x offset.
    // Dynamic calculation: shifts by -(N-1)/N * 100 %
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((sectionCount - 1) / sectionCount) * 100}%`]);

    if (isMobile) {
        return (
            <div className="mobile-layout flex flex-col w-full overflow-x-hidden">
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className="mobile-section-wrapper"
                        style={{
                            width: "100%",
                            minHeight: "100svh",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div ref={targetRef} style={{ height: `${sectionCount * 100}vh`, position: 'relative' }}>
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                }}
            >
                <motion.div
                    ref={containerRef}
                    style={{
                        x,
                        display: "flex",
                        height: "100vh",
                        width: `${sectionCount * 100}vw`,
                    }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className="section-wrapper"
                            style={{
                                width: "100vw",
                                minWidth: "100vw",
                                maxWidth: "100vw",
                                height: "100vh",
                                flexShrink: 0,
                                overflow: "hidden",
                                position: "relative",
                                clipPath: "inset(0)",
                            }}
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
