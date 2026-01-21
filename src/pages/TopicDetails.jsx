import React, { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useModeStore from '../store/modeStore';
import {
    Brain,
    Blocks,
    Fingerprint,
    ArrowLeft,
    Zap,
    Clock,
    BookOpen,
    Star,
    PlayCircle,
    FileText,
    Globe,
    Binary
} from 'lucide-react';
import './TopicDetails.css';

const topicContent = {
    'deep-learning': {
        icon: <Brain size={32} />,
        Beginner: {
            title: 'Intro to AI in Crypto',
            level: 'Foundational',
            duration: '15 mins',
            description: 'Learn the basic concepts of how Artificial Intelligence and Machine Learning intersect with blockchain technology.',
            details: 'AI in crypto is primarily used for automation and basic security. At this level, we look at how bots execute trades and how simple filters protect users from spam.',
            modules: [
                { title: 'What is AI?', duration: '5m' },
                { title: 'Blockchain Basics', duration: '5m' },
                { title: 'The Intersection', duration: '5m' }
            ]
        },
        Analyst: {
            title: 'Predictive Analytics',
            level: 'Intermediate',
            duration: '45 mins',
            description: 'Explore neural networks and machine learning models for predictive analytics and market sentiment analysis.',
            details: 'Deep learning models analyzed at the analyst level focus on pattern recognition. We explore how sentiment analysis from social data and on-chain metrics can predict volatility.',
            modules: [
                { title: 'Neural Network Basics', duration: '12m' },
                { title: 'Market Sentiment Models', duration: '15m' },
                { title: 'Predictive Auditing', duration: '18m' }
            ]
        },
        Developer: {
            title: 'Engineering AI Protocols',
            level: 'Advanced',
            duration: '1.5 hours',
            description: 'Technical deep dive into zero-knowledge machine learning (zkML) and decentralized inference networks.',
            details: 'For developers, we focus on the integration of ML models directly into smart contracts. This involves understanding zkML—where cryptographic proofs verify the correct execution of a model without revealing weights.',
            modules: [
                { title: 'zkML Architectures', duration: '30m' },
                { title: 'On-chain Inference', duration: '30m' },
                { title: 'Decentralized Oracle Networks', duration: '30m' }
            ]
        },
        Investor: {
            title: 'AI Sector Investment',
            level: 'Strategic',
            duration: '30 mins',
            description: 'Evaluate the tokenomics and market landscape of the AI + Blockchain sector for long-term growth.',
            details: 'The investor perspective focuses on value capture. We analyze which protocols are building fundamental infrastructure versus those just chasing hype cycles.',
            modules: [
                { title: 'Sector Valuation', duration: '10m' },
                { title: 'Tokenomics Breakdown', duration: '10m' },
                { title: 'Risk vs Opportunity', duration: '10m' }
            ]
        }
    },
    'blockchain': {
        icon: <Blocks size={32} />,
        Beginner: {
            title: 'Blockchain for All',
            level: 'Introductory',
            duration: '20 mins',
            description: 'A simple guide to understanding what a blockchain is and why it matters in the modern world.',
            details: 'Imagine a digital notebook that everyone can see but no one can erase. That is a blockchain. We cover the shift from central servers to distributed ledgers.',
            modules: [
                { title: 'Digital Ledgers', duration: '5m' },
                { title: 'Nodes and Networks', duration: '10m' },
                { title: 'The Power of Trust', duration: '5m' }
            ]
        },
        Analyst: {
            title: 'Architectural Analysis',
            level: 'Advanced',
            duration: '1.5 hours',
            description: 'Deep dive into consensus mechanisms, node orchestration, and protocol scalability trilemmas.',
            details: 'Analysts study the trade-offs between different consensus models. We analyze Proof of Work vs. Proof of Stake and how modularity solves the scalability issue.',
            modules: [
                { title: 'Consensus Models', duration: '30m' },
                { title: 'The Scalability Trilemma', duration: '30m' },
                { title: 'Layer 2 Landscapes', duration: '30m' }
            ]
        },
        Developer: {
            title: 'Protocol Engineering',
            level: 'Expert',
            duration: '3 hours',
            description: 'Build and optimize distributed systems. From P2P networking to state transition functions.',
            details: 'Development focus is on implementation. We look at the networking layer, the virtual machine (EVM, SVM), and how to optimize gas consumption in state transitions.',
            modules: [
                { title: 'EVM Internals', duration: '1h' },
                { title: 'State Management', duration: '1h' },
                { title: 'Solidity Optimization', duration: '1h' }
            ]
        },
        Investor: {
            title: 'Infrastructure Valuation',
            level: 'Institutional',
            duration: '45 mins',
            description: 'Assessing the longevity and economic moats of various L1 and L2 infrastructure projects.',
            details: 'We evaluate the "moat" of infrastructure. Is the network effect growing? Is the inflation rate sustainable? We look at total value locked (TVL) vs. actual utility.',
            modules: [
                { title: 'Network Moats', duration: '15m' },
                { title: 'Fee Revenue Models', duration: '15m' },
                { title: 'Adoption Curves', duration: '15m' }
            ]
        }
    },
    'cryptography': {
        icon: <Fingerprint size={32} />,
        Beginner: {
            title: 'Privacy Basics',
            level: 'Foundational',
            duration: '15 mins',
            description: 'Understand how encryption keeps your digital money and information safe.',
            details: 'Cryptography is like a digital lock and key. We explain how your public and private keys work together to prove ownership without passwords.',
            modules: [
                { title: 'Digital Keys', duration: '5m' },
                { title: 'Secret Sharing', duration: '5m' },
                { title: 'Basic Security', duration: '5m' }
            ]
        },
        Analyst: {
            title: 'Security Auditing',
            level: 'Intermediate',
            duration: '1 hour',
            description: 'Analyzing the strength of cryptographic implementations and identifying mathematical vulnerabilities.',
            details: 'For analysts, we dig into the math of entropy and collision resistance. We study history\'s biggest cryptographic failures to prevent future ones.',
            modules: [
                { title: 'Entropy & Randomness', duration: '20m' },
                { title: 'Auditing Standards', duration: '20m' },
                { title: 'Attack Vectors', duration: '20m' }
            ]
        },
        Developer: {
            title: 'Cryptographic Implementation',
            level: 'Hardcore',
            duration: '2.5 hours',
            description: 'Implementing ZK-proofs, ring signatures, and elliptic curve math into production-ready code.',
            details: 'Developer level focuses on ZK circuits and noir/circom implementations. We build actual proofs that verify computations without revealing inputs.',
            modules: [
                { title: 'ZK-SNARK Circuits', duration: '1h' },
                { title: 'Elliptic Curve Math', duration: '45m' },
                { title: 'Post-Quantum Coding', duration: '45m' }
            ]
        },
        Investor: {
            title: 'The Privacy Sector',
            level: 'Strategic',
            duration: '40 mins',
            description: 'The trillion-dollar privacy market. Evaluating regulatory shifts and ZK-powered startups.',
            details: 'Privacy is the final frontier for institutional adoption. We analyze ZK-rollups as the primary investment thesis for the next decade of infrastructure growth.',
            modules: [
                { title: 'Regulatory Compliance', duration: '15m' },
                { title: 'Privacy Tech Moats', duration: '15m' },
                { title: 'VC Flows in ZK', duration: '10m' }
            ]
        }
    }
};

const TopicDetails = () => {
    const { topicId } = useParams();
    const { mode } = useModeStore();
    const navigate = useNavigate();
    const topic = topicContent[topicId];
    const content = topic ? topic[mode] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [topicId, mode]);

    if (!topic || !content) {
        return (
            <div className="topic-not-found">
                <h2>Topic or Mode Layer Not Found</h2>
                <Link to="/" className="btn-primary">Return Home</Link>
            </div>
        );
    }

    return (
        <div className={`topic-details-container fade-in mode-${mode.toLowerCase()}`}>
            <header className="content-header-integrated glass">
                <div className="header-nav">
                    <button className="back-link" onClick={() => navigate(-1)}>
                        <ArrowLeft size={16} />
                        <span>Back to Library</span>
                    </button>
                    <div className="header-status">
                        <span className={`mode-pill ${mode.toLowerCase()}`}>
                            <Binary size={12} /> {mode} Intelligence
                        </span>
                    </div>
                </div>

                <div className="header-main-integrated">
                    <div className="topic-icon-large glass">
                        {topic.icon}
                    </div>
                    <div className="header-text">
                        <div className="topic-meta">
                            <span className={`level-badge ${content.level.toLowerCase()}`}>{content.level}</span>
                            <span className="duration"><Clock size={14} /> {content.duration}</span>
                        </div>
                        <h1 className="reading-title">{content.title}</h1>
                        <p className="description-text">{content.description}</p>
                    </div>
                </div>
            </header>

            <div className="topic-content-grid">
                <section className="topic-main-info glass">
                    <div className="section-head">
                        <h3><BookOpen size={20} /> {mode} Insights Layer</h3>
                    </div>
                    <div className="paper-body">
                        <p className="primary-text">{content.details}</p>
                        <p className="academic-note">Note: This layer is dynamically generated based on your <strong>{mode}</strong> profile to provide the most relevant depth of information for your research workflows.</p>

                        <div className="key-takeaways">
                            <h4>{mode} Learning Outcomes</h4>
                            <ul>
                                <li><Star size={14} /> Core {mode.toLowerCase()} fundamentals mastery.</li>
                                <li><Star size={14} /> Domain-specific industry frameworks.</li>
                                <li><Star size={14} /> Optimized decision-making models.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <aside className="topic-curriculum">
                    <div className="curriculum-card glass">
                        <h3>{mode} Learning Path</h3>
                        <div className="module-list">
                            {content.modules.map((m, i) => (
                                <div key={i} className="module-item">
                                    <div className="module-info">
                                        <span className="num">0{i + 1}</span>
                                        <span className="m-title">{m.title}</span>
                                    </div>
                                    <span className="m-dur">{m.duration}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary-full">
                            <PlayCircle size={18} /> Start {mode} Module
                        </button>
                    </div>

                    <div className="resources-card glass">
                        <h3>Sector Assets</h3>
                        <div className="resource-list">
                            <button className="res-item">
                                <FileText size={16} /> {mode} Guideline PDF
                            </button>
                            <button className="res-item">
                                <Globe size={16} /> Industry Case Study
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TopicDetails;
