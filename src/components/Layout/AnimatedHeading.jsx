import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ text, className = "" }) => {
    // Split text into words to handle spacing better, then characters
    const words = text.split(" ");

    // Flatten the array of words into an array of characters with spaces tracked
    // but simple character mapping is easier if we handle space rendering manually

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.03,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    let charCount = 0;

    return (
        <h2 className={`${className}`} aria-label={text}>
            {words.map((word, wIndex) => (
                <span key={wIndex} className="inline-block whitespace-nowrap pl-[0.05em]">
                    {word.split("").map((char, cIndex) => {
                        const index = charCount++;
                        return (
                            <motion.span
                                key={cIndex}
                                custom={index}
                                variants={letterVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                    &nbsp;&nbsp; {/* Force double space */}
                </span>
            ))}
        </h2>
    );
};

export default AnimatedHeading;
