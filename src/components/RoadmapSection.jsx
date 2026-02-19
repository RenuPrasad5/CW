import React, { useRef, useState } from 'react';
import './RoadmapSection.css';
import roadmapImage from '../assets/images/Roadmap_section.jpg';

const RoadmapSection = () => {
    const spotlightRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!spotlightRef.current) return;
        const rect = spotlightRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightRef.current.style.setProperty('--mouse-x', `${x}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const roadmapPhases = [
        { phase: '01', status: 'ACTIVE', title: "Digital & Financial Foundations", desc: "Internet basics, money systems, centralized vs decentralized thinking." },
        { phase: '02', status: 'PLANNED', title: "Blockchain Fundamentals", desc: "Blocks, nodes, transactions, Bitcoin & Ethereum basics." },
        { phase: '03', status: 'PLANNED', title: "Cryptography for Blockchain", desc: "Hashing, keys, signatures, Merkle trees, zero-knowledge concepts." },
        { phase: '04', status: 'PLANNED', title: "Consensus Mechanisms", desc: "PoW, PoS, validators, decentralization trade-offs." },
        { phase: '05', status: 'PLANNED', title: "Smart Contracts & Virtual Machines", desc: "EVM concepts, gas, execution logic, contract risks." },
        { phase: '06', status: 'PLANNED', title: "DeFi Architecture", desc: "AMMs, lending, stablecoins, yield mechanics, protocol design." },
        { phase: '07', status: 'PLANNED', title: "Layer 2 & Scalability", desc: "Rollups, ZK, optimistic models, Ethereum scaling roadmap." },
        { phase: '08', status: 'PLANNED', title: "Tokenomics & Crypto Economics", desc: "Supply models, incentives, governance tokens, vesting." },
        { phase: '09', status: 'PLANNED', title: "NFTs, Gaming & Digital Ownership", desc: "NFTs, gaming economies, creator infrastructure." },
        { phase: '10', status: 'PLANNED', title: "Oracles & Data Layers", desc: "Chainlink, prediction markets, off-chain data trust." },
        { phase: '11', status: 'PLANNED', title: "Security, Audits & Attack Vectors", desc: "Exploits, audits, bridges, protocol risks." },
        { phase: '12', status: 'PLANNED', title: "On-Chain Analytics & Intelligence", desc: "Wallet tracking, whale flows, TVL, market signals." },
        { phase: '13', status: 'PLANNED', title: "Regulation, Compliance & Risk", desc: "Global laws, AML, custody, institutional constraints." },
        { phase: '14', status: 'PLANNED', title: "Building, DAOs & Ecosystem Contribution", desc: "Governance, open-source, protocol participation." },
        { phase: '15', status: 'PLANNED', title: "Institutional & Future Crypto Systems", desc: "Restaking, AI + crypto, cross-chain liquidity, future finance." }
    ];

    return (
        <section className="roadmap-v8-terminal">
            {/* Global Header: Now structured as a full-width header above the split layout */}
            <div className="roadmap-v8-global-header">
                <span className="roadmap-v8-pill">TERMINAL_ROADMAP_v3.1</span>
                <h2 className="roadmap-v8-title">
                    Roadmap to become Master in <svg width="500" height="70" className="inline-block overflow-visible align-top -mt-2">
                        <defs>
                            <linearGradient id="roadmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <text x="0" y="55" fill="url(#roadmapGrad)" style={{ fontWeight: 800, fontSize: '48px', fontFamily: 'inherit' }}>Crypto Industry</text>
                    </svg>
                </h2>
                <p className="roadmap-v8-subtitle">
                    A multi-phase progression through the architectural layers of the blockchain ecosystem.
                </p>
            </div>

            <div className="roadmap-v8-grid">
                {/* Left Side: Fixed Visual Canvas (45%) */}
                <div className="roadmap-v8-left-panel">
                    <div
                        className="roadmap-v8-canvas"
                        ref={spotlightRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div
                            className={`roadmap-v8-spotlight ${isHovered ? 'visible' : ''}`}
                            style={{
                                backgroundImage: `url(${roadmapImage})`,
                                maskImage: `radial-gradient(circle 350px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)`,
                                WebkitMaskImage: `radial-gradient(circle 350px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)`
                            }}
                        />
                        <div className="roadmap-v8-overlay"></div>
                    </div>
                </div>

                {/* Right Side: Independent Scrollable Content (55%) */}
                <div className="roadmap-v8-right-panel">
                    <div className="roadmap-v8-scroll-content">
                        <div className="roadmap-v8-timeline">
                            {roadmapPhases.map((phase, index) => (
                                <div key={index} className="roadmap-v8-item">
                                    <div className="node-track">
                                        <div className="node-dot"></div>
                                        {index !== roadmapPhases.length - 1 && <div className="node-line"></div>}
                                    </div>
                                    <div className="item-content">
                                        <div className="item-meta">
                                            <span className="item-id">[{phase.phase}]</span>
                                            <span className={`item-status ${phase.status.toLowerCase()}`}>{phase.status}</span>
                                        </div>
                                        <h3 className="item-title">{phase.title}</h3>
                                        <p className="item-desc">{phase.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
