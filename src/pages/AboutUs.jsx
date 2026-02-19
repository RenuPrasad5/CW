import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import founderImg from '../assets/images/founder.jpg';

const TerminalIntro = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const terminalLines = [
        "> INITIALIZING_SYSTEM_BOOT...",
        "> LOADING_CRYPTOGRAPHIC_FRAMEWORKS...",
        "> ESTABLISHING_NEURAL_RESEACH_NODE...",
        "> ACCESS_GRANTED: WELCOME_TO_CRYPTOWORLD",
        "> DECODING_VISION..."
    ];

    useEffect(() => {
        if (currentLine < terminalLines.length) {
            const timer = setTimeout(() => {
                setLines(prev => [...prev, terminalLines[currentLine]]);
                setCurrentLine(prev => prev + 1);
            }, 400);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(onComplete, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentLine, onComplete]);

    return (
        <motion.div
            className="terminal-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="terminal-content">
                {lines.map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {line}
                    </motion.p>
                ))}
                <motion.div
                    className="cursor"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                />
            </div>
        </motion.div>
    );
};

const SectionReveal = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const AboutUs = () => {
    const navigate = useNavigate();
    const [showIntro, setShowIntro] = useState(true);
    const { scrollYProgress } = useScroll();

    // Scale timeline line as user scrolls
    const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us-page">
            {/* Header with Back Button */}
            <div className="about-page-header">
                <button className="back-to-terminal-btn" onClick={() => navigate('/')}>
                    <ArrowLeft size={16} />
                    Back to Terminal
                </button>
            </div>

            <AnimatePresence>
                {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="about-hero">
                <motion.div
                    className="hero-glow"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{ repeat: Infinity, duration: 10 }}
                />
                <motion.h1
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    The Architecture of<br />Digital Truth.
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    CryptoWorld is not a platform. It is a commitment to the clarity, intelligence, and long-term
                    understanding required to navigate the frontier of decentralized finance.
                </motion.p>

                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="mouse-wheel" />
                </motion.div>
            </section>

            {/* Redesigned Manifesto Section */}
            <SectionReveal className="manifesto-section">
                <div className="manifesto-intro">
                    <div className="section-label">THE SIGNAL</div>
                    <h2 className="section-title">Moving Beyond the Noise.</h2>
                    <p>In a world of constant digital turbulence, we seek the signal within the chaos.</p>
                </div>

                <div className="manifesto-blocks-container">
                    <div className="manifesto-block">
                        <motion.div
                            className="block-hover-effect"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        />
                        <h3>Comprehension is the final barrier to adoption.</h3>
                        <p>
                            The crypto industry moves at a speed that often outpaces our ability to understand it.
                            In the rush for yield and the frenzy of price action, the fundamental architectural shifts
                            are often ignored.
                        </p>
                    </div>

                    <div className="manifesto-block">
                        <motion.div
                            className="block-hover-effect"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        />
                        <h3>Our Institutional Purpose</h3>
                        <p>
                            To create a permanent research node in the cryptographic ecosystem. A place where
                            builders and investors can find un-biased, deep-dive intelligence that treats protocols
                            as technical systems.
                        </p>
                    </div>
                </div>
            </SectionReveal>

            {/* Company Journey */}
            <section className="about-sections-wrapper">
                <div className="about-journey-section">
                    <SectionReveal>
                        <div className="section-label">THE CHRONICLES</div>
                        <h2 className="section-title">The Company Journey</h2>
                    </SectionReveal>

                    <div className="journey-timeline">
                        <motion.div
                            className="timeline-progress-line"
                            style={{ height: lineHeight }}
                        />
                        <div className="journey-item">
                            <SectionReveal className="journey-item-reveal">
                                <div className="journey-year">2024</div>
                                <div className="journey-content">
                                    <h3>Genesis Proto-Node</h3>
                                    <p>Launched as a specialized research hub for internal protocol auditing and data normalization.</p>
                                </div>
                            </SectionReveal>
                        </div>
                        <div className="journey-item">
                            <SectionReveal className="journey-item-reveal">
                                <div className="journey-year">2025</div>
                                <div className="journey-content">
                                    <h3>Ecosystem Expansion</h3>
                                    <p>Opened our neural knowledge graph to the public, providing institutional-grade tools to retail analysts.</p>
                                </div>
                            </SectionReveal>
                        </div>
                        <div className="journey-item">
                            <SectionReveal className="journey-item-reveal">
                                <div className="journey-year">PRESENT</div>
                                <div className="journey-content">
                                    <h3>The Master Terminal</h3>
                                    <p>Evolved into a complete crypto education ecosystem, mapping the architectural future of finance.</p>
                                </div>
                            </SectionReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose & Goal */}
            <SectionReveal className="about-purpose-section">
                <div className="purpose-grid">
                    <motion.div
                        className="purpose-card"
                        whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.4)" }}
                    >
                        <div className="purpose-icon">🎯</div>
                        <h3>Our Goal</h3>
                        <p>To eliminate information asymmetry and empower a new generation of informed crypto participants.</p>
                    </motion.div>
                    <motion.div
                        className="purpose-card highlight"
                        whileHover={{ y: -10 }}
                    >
                        <div className="purpose-icon">⚡</div>
                        <h3>Our Purpose</h3>
                        <p>A world where decentralized finance is understood with the same rigour as traditional physics.</p>
                    </motion.div>
                </div>
            </SectionReveal>

            {/* About Me */}
            <section className="about-me-section">
                <div className="me-grid">
                    <motion.div
                        className="me-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="founder-image-placeholder">
                            <img src={founderImg} alt="Founder" className="founder-image" />
                            <div className="founder-glow"></div>
                        </div>
                        <span className="founder-tag">SYSTEM_ARCHITECT</span>
                    </motion.div>
                    <SectionReveal className="me-text">
                        <div className="section-label">BEHIND THE CODE</div>
                        <h2>The About Me Narrative</h2>
                        <p>
                            Founded by a collective of security researchers and financial engineers,
                            CryptoWorld was born from a singular frustration: the lack of clear,
                            uncompromised intelligence in the blockchain space.
                        </p>
                        <p>
                            We are builders first. Our philosophy is rooted in the belief that the
                            next financial layer should be open, transparent, and—most importantly—comprehensible.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Offerings */}
            <section className="about-offerings-section">
                <SectionReveal>
                    <div className="section-label">CORE CAPABILITIES</div>
                    <h2 className="section-title">Our Offerings</h2>
                </SectionReveal>
                <div className="offerings-grid">
                    {[
                        { id: '01', title: "Deep-Dive Research", text: "100+ page protocol audits that dissect tokenomics, code, and narrative risks." },
                        { id: '02', title: "Institutional Tools", text: "Proprietary analytics engines for on-chain movement and market intelligence." },
                        { id: '03', title: "Curated Education", text: "Structured learning paths designed by industry experts to take you from zero to master master." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="offering-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="offering-num">{item.id}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Achievements & Achievements */}
            <SectionReveal className="about-achievements-section">
                <div className="achievements-stat-grid">
                    <div className="stat-unit">
                        <span className="stat-value">50K+</span>
                        <span className="stat-desc">Analyzed Protocols</span>
                    </div>
                    <div className="stat-unit">
                        <span className="stat-value">120+</span>
                        <span className="stat-desc">Research Partners</span>
                    </div>
                    <div className="stat-unit">
                        <span className="stat-value">1M+</span>
                        <span className="stat-desc">Query Requests</span>
                    </div>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>"CryptoWorld turned the noise of CT into a clear, actionable signal. Their research is unmatched."</p>
                        <div className="testimonial-author">— Institutional Analyst, NY</div>
                    </div>
                    <div className="testimonial-card">
                        <p>"The only platform that explains the 'why' behind the protocol, not just the 'what'."</p>
                        <div className="testimonial-author">— DeFi Developer, Berlin</div>
                    </div>
                </div>
            </SectionReveal>

            {/* Future Vision */}
            <SectionReveal className="about-future-section">
                <div className="future-content">
                    <div className="section-label">THE HORIZON</div>
                    <h2>Our Future Vision</h2>
                    <p>
                        Integrating AI-driven predictive modeling with on-chain reality to create
                        the world's first preventative risk node for decentralized finance.
                        The frontier is just beginning.
                    </p>
                </div>
            </SectionReveal>

            {/* Call to Action */}
            <SectionReveal className="about-cta-section">
                <motion.div
                    className="cta-box glass"
                    whileHover={{ scale: 1.02 }}
                >
                    <h2>Ready to explore the architecture?</h2>
                    <p>Join the thousands of analysts who are building the future with CryptoWorld.</p>
                    <motion.button
                        className="cta-btn-premium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/community')}
                    >Access Intelligence Terminal</motion.button>
                </motion.div>
            </SectionReveal>

            <footer className="manifesto-footer">
                EST. 2024 // CRYPTOWORLD ECOSYSTEM PROTOCOL // DOCUMENT_v1.0
            </footer>
        </div>
    );
};

export default AboutUs;
