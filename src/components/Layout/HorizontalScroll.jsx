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

    // Transform scrollYProgress (0 -> 1) to x offset.
    // We map 0 -> 1 vertical progress to 0% -> -75% horizontal translation.
    // -75% because if we have 4 sections of 100vw each (total 400vw),
    // shifting by -300vw (75% of 400vw) brings the last section (4th) into full view.
    // If we shifted -100%, we'd scroll completely off the content.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    if (isMobile) {
        return (
            <div className="mobile-layout" style={{ display: 'flex', flexDirection: 'column' }}>
                {children}
            </div>
        );
    }

    return (
        // The "Ghost" container provides the vertical scrollable height
        // We set it to 400vh + extra to ensure we have enough track.
        <div ref={targetRef} style={{ height: "400vh", position: 'relative' }}>
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
                   We hardcode specific width for 4 sections for simplicity now. 
                   Better approach: calculate based on children count. 
                   4 sections * 100vw = 400vw width.
                */}
                <motion.div
                    style={{ x, display: "flex", height: "100vh", width: "400vw" }}
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
