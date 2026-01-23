import React from 'react';

const Section = ({ children, className = "", style = {} }) => {
    return (
        <section
            className={className}
            style={{
                minWidth: "100vw", // Force it to take full screen width in the horizontal strip
                height: "100vh",
                display: "flex",
                flexDirection: "column", // Internal content can stack vertically
                justifyContent: "center",
                padding: "4rem 6rem",
                borderRight: "1px solid var(--border-color)", // Visual separator like Swipewire
                position: "relative",
                ...style
            }}
        >
            {children}
        </section>
    );
};

export default Section;
