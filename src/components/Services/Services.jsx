import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Services.scss';
import { FaShieldAlt, FaBrain } from 'react-icons/fa';
import AnimatedHeading from '../Layout/AnimatedHeading';

const cards = [
    {
        id: 'soc',
        label: 'SOC ANALYST',
        icon: <FaShieldAlt aria-hidden="true" />,
        accentColor: '#a855f7',
        front: 'Investigating security alerts across 15+ client environments — triaging identity, email, cloud, and endpoint threats with precision and speed.',
        skills: [
            'Fluency SIEM',
            'Microsoft Defender',
            'Microsoft Entra ID',
            'SentinelOne',
            'Phishing Analysis',
            'Alert Triage',
        ],
    },
    {
        id: 'ai',
        label: 'AI ENGINEERING',
        icon: <FaBrain aria-hidden="true" />,
        accentColor: '#6366f1',
        front: 'Building AI-powered applications, agentic workflows, and evidence-grounded investigation systems that reason before they respond.',
        skills: [
            'Python',
            'LLMs',
            'RAG',
            'AI Agents',
            'Multi-Agent Systems',
            'Semantic Search',
        ],
    },
];

const FlipCard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const handleTouchStart = useCallback(() => {
        setIsTouch(true);
    }, []);

    const handleTap = useCallback(() => {
        if (isTouch) setFlipped(prev => !prev);
    }, [isTouch]);

    const handleMouseEnter = useCallback(() => {
        if (!isTouch) setFlipped(true);
    }, [isTouch]);

    const handleMouseLeave = useCallback(() => {
        if (!isTouch) setFlipped(false);
    }, [isTouch]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setFlipped(prev => !prev);
        }
    }, []);

    return (
        <div
            className={`flip-card${flipped ? ' is-flipped' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`${card.label} — press Enter or Space to flip`}
            aria-pressed={flipped}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onClick={handleTap}
            onKeyDown={handleKeyDown}
        >
            <div className="flip-card__inner">
                {/* FRONT */}
                <div className="flip-card__face flip-card__front" aria-hidden={flipped}>
                    <div className="flip-card__accent" style={{ background: card.accentColor }} />
                    <div className="flip-card__icon" style={{ color: card.accentColor }}>
                        {card.icon}
                    </div>
                    <h3 className="flip-card__title">{card.label}</h3>
                    <p className="flip-card__desc">{card.front}</p>
                </div>

                {/* BACK */}
                <div className="flip-card__face flip-card__back" aria-hidden={!flipped}>
                    <div className="flip-card__accent" style={{ background: card.accentColor }} />
                    <h3
                        className="flip-card__title flip-card__title--back"
                        style={{ color: card.accentColor }}
                    >
                        {card.label}
                    </h3>
                    <ul className="flip-card__skills" aria-label={`${card.label} skills`}>
                        {card.skills.map(skill => (
                            <li key={skill} className="flip-card__skill-chip">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Services = () => (
    <div className="services-container">
        <div className="services-header">
            <AnimatedHeading
                text="CORE COMPETENCIES"
                className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-3 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            />
            <div className="h-1 w-16 lg:w-20 bg-purple-500" />
        </div>

        <div className="services-grid services-grid--two">
            {cards.map(card => (
                <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <FlipCard card={card} />
                </motion.div>
            ))}
        </div>
    </div>
);

export default Services;


