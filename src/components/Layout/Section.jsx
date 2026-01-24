import React from 'react';

const Section = ({ children, className = "", style = {} }) => {
    return (
        <section
            className={`w-full h-full overflow-hidden ${className}`}
            style={{
                position: 'relative',
                ...style
            }}
        >
            {children}
        </section>
    );
};

export default Section;
