import React from 'react';

const Section = ({ children, className = "", style = {} }) => {
    return (
        <section
            className={`relative flex flex-col justify-center w-full md:min-w-[100vw] min-h-screen md:h-screen py-20 px-4 md:px-24 md:py-16 border-r border-[var(--border-color)] overflow-hidden md:overflow-visible ${className}`}
            style={{
                // Layout handled by classes now
                ...style
            }}
        >
            {children}
        </section>
    );
};

export default Section;
