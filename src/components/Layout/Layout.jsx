import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from '@studio-freight/react-lenis';
import ThreeDBackground from '../Background/ThreeDBackground';
import './Layout.scss';

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Calculate the total width to scroll
        const sections = gsap.utils.toArray('.horizontal-section');
        const totalWidth = sections.length * 100; // 100vw per section

        const scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: () => `+=${containerRef.current.offsetWidth * (sections.length - 1)}`,
                // snap: 1 / (sections.length - 1), // Optional: snap to sections
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <ReactLenis root>
            <div className="layout-wrapper" ref={wrapperRef}>
                <ThreeDBackground />

                {/* Horizontal Scroll Container */}
                <div className="horizontal-scroll-container" ref={containerRef}>
                    {children}
                </div>

                {/* Optional: Footer or vertical sections can go here after the scroll ends */}
            </div>
        </ReactLenis>
    );
};

export default Layout;
