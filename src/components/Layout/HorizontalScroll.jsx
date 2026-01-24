import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

const HorizontalScroll = ({ children }) => {
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // Breakpoint for vertical vs horizontal
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Initialize Lenis for smooth scrolling
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            autoRaf: true, // Automatically handle requestAnimationFrame
            duration: 1.5,
            smoothWheel: true,
        });

        // Listen for the scroll event and log the event data
        lenis.on('scroll', (e) => {
            // console.log(e);
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const sectionCount = React.Children.count(children);

    // Transform scrollYProgress (0 -> 1) to x offset.
    // Dynamic calculation: shifts by -(N-1)/N * 100 %
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((sectionCount - 1) / sectionCount) * 100}%`]);

    if (isMobile) {
        return (
            <div className="mobile-layout flex flex-col gap-20 w-full overflow-x-hidden">
                {children}
            </div>
        );
    }

    return (
        // The "Ghost" container provides the vertical scrollable height
        <div ref={targetRef} style={{ height: `${sectionCount * 100}vh`, position: 'relative' }}>
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    width: "100vw", // Viewport window
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {/* 
                   Dynamic width based on section count.
                */}
                <motion.div
                    style={{ x, display: "flex", height: "100vh", width: `${sectionCount * 100}vw` }}
                    ref={containerRef}
                >
                    {/* This renders the sections side-by-side */}
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
