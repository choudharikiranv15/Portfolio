import React from 'react';

const Section = ({ children, className = "" }) => {
    return (
        <section className={`w-full min-h-screen lg:min-h-0 lg:h-full relative overflow-hidden ${className}`}>
            {children}
        </section>
    );
};

export default Section;
