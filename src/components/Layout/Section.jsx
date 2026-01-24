import React from 'react';

const Section = ({ children, className = "" }) => {
    return (
        <section className={`w-full lg:h-full ${className}`}>
            {children}
        </section>
    );
};

export default Section;
