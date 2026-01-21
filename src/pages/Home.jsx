import React from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    Shield,
    BarChart3,
    Globe,
    ArrowRight,
    Users,
    Cpu,
    TrendingUp,
    Search,
    Brain,
    Blocks,
    Fingerprint,
    Coins,
    LineChart,
    Network,
    Scale,
    ShieldCheck,
    Database,
    FileSearch,
    BookOpen,
    Wrench,
    Users2
} from 'lucide-react';
import RoadmapSection from '../components/RoadmapSection';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Research Terminal Hero */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-badge fade-in">
                        <span className="pulse-dot"></span>
                        Institutional Research Interface v4.0
                    </div>
                    <h1 className="hero-title fade-in">
                        The Operating System for <span className="text-gradient">Crypto Knowledge</span>
                    </h1>
                    <p className="hero-description fade-in">
                        A high-fidelity research ecosystem for professionals. Access structured intelligence, protocol breakdowns, and institutional-grade analysis tools.
                    </p>
                    <div className="hero-cta fade-in">
                        <Link to="/encyclopedia" className="btn-primary-large">
                            Access Encyclopedia <ArrowRight size={20} />
                        </Link>
                        <Link to="/research" className="btn-glass-large">
                            Research Terminal
                        </Link>
                    </div>
                    <div className="hero-stats fade-in">
                        <div className="stat-item">
                            <h3>25k+</h3>
                            <p>Knowledge Nodes</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>1,200+</h3>
                            <p>Protocol Audits</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>99.9%</h3>
                            <p>Data Integrity</p>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-float">
                        <div className="float-card glass card-1">
                            <LineChart size={24} color="var(--primary)" />
                            <div className="card-info">
                                <span>Intelligence</span>
                                <p>Sector Gamma</p>
                            </div>
                        </div>
                        <div className="float-card glass card-2">
                            <ShieldCheck size={24} color="#10b981" />
                            <div className="card-info">
                                <span>Verification</span>
                                <p>Editor Approved</p>
                            </div>
                        </div>
                        <div className="float-card glass card-3">
                            <Database size={24} color="#f59e0b" />
                            <div className="card-info">
                                <span>Archival State</span>
                                <p>Immutable</p>
                            </div>
                        </div>
                    </div>
                    <div className="glow-circle"></div>
                </div>
            </section>

            {/* The Pillars of Intelligence Section */}
            <section className="learning-matrix-section">
                <div className="section-header-cnt">
                    <span className="sub-title">System Architecture</span>
                    <h2 className="title-matrix">The <span className="text-gradient">Research Pillars</span></h2>
                    <p className="section-desc">A multidimensional knowledge model designed for analysts, developers, and institutional researchers.</p>
                </div>

                <div className="matrix-grid">
                    {[
                        {
                            title: 'Knowledge',
                            desc: 'Deep structured encyclopedia of crypto, blockchain, and decentralized architectures.',
                            icon: <BookOpen size={30} />,
                            path: '/encyclopedia',
                            grad: 'grad-1'
                        },
                        {
                            title: 'Research',
                            desc: 'Granular protocol breakdowns, tokenomics models, and risk architecture analysis.',
                            icon: <FileSearch size={30} />,
                            path: '/research',
                            grad: 'grad-2'
                        },
                        {
                            title: 'Tools',
                            desc: 'Interactive simulators, comparison engines, and quantitative modeling tools.',
                            icon: <Wrench size={30} />,
                            path: '/tools',
                            grad: 'grad-3'
                        },
                        {
                            title: 'Intelligence',
                            desc: 'Real-time market insights, sentiment tracking, and contextual trend reports.',
                            icon: <LineChart size={30} />,
                            path: '/intelligence',
                            grad: 'grad-1'
                        },
                        {
                            title: 'Community',
                            desc: 'Peer review systems, expert validation, and collaborative article improvement.',
                            icon: <Users2 size={30} />,
                            path: '/community',
                            grad: 'grad-2'
                        },
                        {
                            title: 'Trust Layer',
                            desc: 'Immutable source references, editor verification, and community truth scores.',
                            icon: <ShieldCheck size={30} />,
                            path: '/trust',
                            grad: 'grad-3'
                        }
                    ].map((item, idx) => (
                        <Link to={item.path} key={idx} className="matrix-card glass">
                            <div className={`matrix-icon-wrapper ${item.grad}`}>
                                {item.icon}
                            </div>
                            <div className="matrix-content">
                                <h3 className="matrix-title">{item.title}</h3>
                                <p className="matrix-description">{item.desc}</p>
                                <div className="matrix-footer">
                                    <span className="explore-text">Initialize Node</span>
                                    <ArrowRight size={16} className="arrow-hover" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Strategic Roadmap Section */}
            <RoadmapSection />

            {/* Platform Comparison Engine Preview */}
            <section className="comparison-preview-section container">
                <div className="glass comparison-card">
                    <div className="comparison-header">
                        <h2>Advanced Comparison Engine</h2>
                        <p>Analyze differences between protocols, architectures, and assets side-by-side.</p>
                    </div>
                    <div className="comparison-mock">
                        <div className="mock-row header">
                            <div>Feature</div>
                            <div>Proof of Work</div>
                            <div>Proof of Stake</div>
                        </div>
                        <div className="mock-row">
                            <div>Security</div>
                            <div className="high">Physical Energy</div>
                            <div className="high">Economic Stake</div>
                        </div>
                        <div className="mock-row">
                            <div>Sustainability</div>
                            <div className="low">Resource Intensive</div>
                            <div className="high">Energy Efficient</div>
                        </div>
                    </div>
                    <Link to="/tools" className="text-btn">Launch Full Comparison Engine <ArrowRight size={16} /></Link>
                </div>
            </section>

            {/* Trusted Verification Section */}
            <section className="trust-section glass">
                <div className="section-header-cnt">
                    <p className="tiny-title">VERIFIED DATA SOURCES</p>
                </div>
                <div className="logos-scroll">
                    {[
                        "ETH Foundation", "NIST", "IEEE", "Chainlink Research", "Aave Labs", "Uniswap Core"
                    ].map((logo, idx) => (
                        <div key={idx} className="trust-logo">{logo}</div>
                    ))}
                    {[
                        "ETH Foundation", "NIST", "IEEE", "Chainlink Research", "Aave Labs", "Uniswap Core"
                    ].map((logo, idx) => (
                        <div key={idx + 6} className="trust-logo">{logo}</div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="final-cta">
                <div className="cta-content glass">
                    <div className="cta-text">
                        <h2>Scale Your Intelligence</h2>
                        <p>Access the definitive knowledge layer for the next financial system.</p>
                    </div>
                    <Link to="/encyclopedia" className="btn-white-large">Enter Workspace</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
