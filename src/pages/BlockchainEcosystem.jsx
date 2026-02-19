import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Zap,
    Shield,
    Cpu,
    Globe,
    Server,
    ArrowRight,
    Share2,
    Database,
    Fingerprint,
    Box,
    Network,
    Lock,
    Scale,
    Activity,
    Users
} from 'lucide-react';
import './BlockchainEcosystem.css';

const BlockchainEcosystem = () => {
    const [stats, setStats] = useState({
        nodes: 18452,
        blockTime: '12s',
        tps: 24,
        health: '99.9%'
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                ...prev,
                nodes: prev.nodes + Math.floor(Math.random() * 5),
                tps: (Math.random() * 30 + 10).toFixed(1)
            }));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="ecosystem-page">
            {/* 1. HERO SECTION */}
            <header className="eco-hero">
                <div className="hero-visual-bg">
                    <div className="network-grid"></div>
                </div>

                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <span className="hero-badge">Architectural Protocol v2.5</span>
                    <h1 className="hero-title">
                        The Operating System for <br />
                        <span className="text-gradient">Distributed Intelligence</span>
                    </h1>
                    <p className="hero-desc">
                        A master-level breakdown of the blockchain ecosystem. From cryptographic primitives
                        to global multi-chain settlement layers.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#how-it-works" className="btn-primary" style={{ padding: '1rem 2rem', borderRadius: '14px' }}>
                            Initialize Node <ArrowRight size={18} />
                        </a>
                        <Link to="/research" className="btn-glass" style={{ padding: '1rem 2rem', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            View Terminal
                        </Link>
                    </div>
                </motion.div>
            </header>

            {/* 2. HOW BLOCKCHAIN WORKS FLOW */}
            <section id="how-it-works" className="eco-section">
                <div className="section-header">
                    <h2 className="section-title">The Transaction Lifecycle</h2>
                    <p style={{ color: 'var(--eco-muted)' }}>How value moves from digital signature to immutable finality.</p>
                </div>

                <div className="step-flow">
                    {[
                        { num: '01', title: 'Initiation', icon: <Fingerprint />, desc: 'A user signs a transaction with a private key, broadcasting it to the P2P network.' },
                        { num: '02', title: 'Propagation', icon: <Share2 />, desc: 'Nodes verify the signature and propagate the TX into their local mempools.' },
                        { num: '03', title: 'Consensus', icon: <Cpu />, desc: 'Validators group transactions into a block and solve cryptographic proofs (PoS/PoW).' },
                        { num: '04', title: 'Settlement', icon: <Database />, desc: 'The block is appended to the chain. State is updated across all nodes permanently.' },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            className="step-card eco-glass"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="step-num">{step.num}</span>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--eco-muted)', marginTop: '1rem' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. BLOCKCHAIN NODE TYPES */}
            <section className="eco-section" style={{ background: 'rgba(255,255,255,0.01)' }}>
                <div className="section-header">
                    <h2 className="section-title">Terminal Node Infrastructure</h2>
                    <p style={{ color: 'var(--eco-muted)' }}>The diverse layers of network participation and data integrity.</p>
                </div>

                <div className="node-grid">
                    {[
                        { title: 'Full Node', tag: 'Core', desc: 'Maintains a complete copy of the ledger. Validates all rules and transactions.' },
                        { title: 'Validator Node', tag: 'Consensus', desc: 'Participates in block production. Staked nodes that secure the network.' },
                        { title: 'Light Node', tag: 'Client', desc: 'Stores only block headers. Used for mobile wallets and fast sync.' },
                        { title: 'Archive Node', tag: 'History', desc: 'Stores entire historical state. Used by block explorers and analysts.' },
                        { title: 'RPC Node', tag: 'Gateway', desc: 'Provides the API interface for DApps to interact with the blockchain.' },
                        { title: 'Miner / Proposer', tag: 'Genesis', desc: 'Specialized hardware nodes solving PoW puzzles or sequencing PoS transactions.' },
                    ].map((node, i) => (
                        <div key={i} className="node-card eco-glass">
                            <span className="node-tag">{node.tag}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Server size={20} color="var(--eco-accent)" />
                                <h3>{node.title}</h3>
                            </div>
                            <p>{node.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. LIVE NETWORK SNAPSHOT */}
            <section className="eco-section">
                <div className="eco-snapshot eco-glass">
                    <div className="stat-box">
                        <span className="stat-val text-gradient">{stats.nodes.toLocaleString()}</span>
                        <span className="stat-lbl">Active Nodes</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-val" style={{ color: 'var(--eco-accent)' }}>{stats.blockTime}</span>
                        <span className="stat-lbl">Block Time</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-val">{stats.tps}</span>
                        <span className="stat-lbl">Current TPS</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-val" style={{ color: '#10b981' }}>{stats.health}</span>
                        <span className="stat-lbl">Uptime Status</span>
                    </div>
                </div>
            </section>

            {/* 5. ECOSYSTEM MAP */}
            <section className="eco-section">
                <div className="section-header">
                    <h2 className="section-title">The Stack Architecture</h2>
                    <p style={{ color: 'var(--eco-muted)' }}>Layered intelligence model of the blockchain industry.</p>
                </div>

                <div className="eco-map-container">
                    {[
                        { label: 'Layer 0: Network', tags: ['P2P Protocol', 'TCP/IP Interop', 'Hardware Infrastructure'] },
                        { label: 'Layer 1: Settlement', tags: ['Ethereum', 'Bitcoin', 'Solana', 'Avalanche'] },
                        { label: 'Layer 2: Scaling', tags: ['Arbitrum', 'Optimism', 'zkSync', 'Starknet'] },
                        { label: 'Layer 3: App Layers', tags: ['DeFi Hubs', 'NFT Marketplaces', 'Social Fi', 'Game Fi'] },
                        { label: 'Data Layer: Oracles', tags: ['Chainlink', 'Pyth', 'Graph Protocol', 'Arweave'] },
                    ].map((layer, i) => (
                        <div key={i} className="eco-layer eco-glass">
                            <div className="layer-info">
                                <h4>{layer.label}</h4>
                            </div>
                            <div className="layer-tags">
                                {layer.tags.map((tag, j) => (
                                    <span key={j} className="layer-pill">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. USE CASES BENTO */}
            <section className="eco-section">
                <div className="section-header">
                    <h2 className="section-title">Real-World Utility</h2>
                </div>

                <div className="use-case-grid">
                    <div className="use-case-card eco-glass col-8">
                        <Activity className="use-case-icon" size={32} />
                        <h3>Decentralized Finance (DeFi)</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--eco-muted)', marginTop: '0.5rem' }}>Global permissionless liquidity, lending, and sophisticated trading engines.</p>
                    </div>
                    <div className="use-case-card eco-glass col-4">
                        <Fingerprint className="use-case-icon" size={32} />
                        <h3>Identity (DID)</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--eco-muted)', marginTop: '0.5rem' }}>Self-sovereign digital identity and verification protocols.</p>
                    </div>
                    <div className="use-case-card eco-glass col-4">
                        <Box className="use-case-icon" size={32} />
                        <h3>NFTs & Gaming</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--eco-muted)', marginTop: '0.5rem' }}>Immutable ownership and provable digital scarcity for assets.</p>
                    </div>
                    <div className="use-case-card eco-glass col-8" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1), transparent)' }}>
                        <Zap className="use-case-icon" size={32} />
                        <h3>Enterprise & Supply Chain</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--eco-muted)', marginTop: '0.5rem' }}>Transparent logistics tracking and institutional asset tokenization.</p>
                    </div>
                </div>
            </section>

            {/* 7. SECURITY & CONSENSUS */}
            <section className="eco-section" style={{ borderTop: '1px solid var(--eco-border)' }}>
                <div className="node-grid">
                    <div className="eco-glass" style={{ padding: '3rem' }}>
                        <Lock size={40} color="var(--eco-accent)" />
                        <h2 style={{ marginTop: '1.5rem', fontSize: '1.75rem', fontWeight: 800 }}>Security First</h2>
                        <p style={{ marginTop: '1rem', color: 'var(--eco-muted)', lineHeight: '1.7' }}>
                            Blockchains achieve security through **Game Theory** and **Cryptography**.
                            By incentivizing nodes to follow the rules and penalizing malicious behavior (Slashing),
                            the network maintains a single version of the truth across thousands of independent entities.
                        </p>
                    </div>
                    <div className="eco-glass" style={{ padding: '3rem' }}>
                        <Scale size={40} color="var(--eco-accent)" />
                        <h2 style={{ marginTop: '1.5rem', fontSize: '1.75rem', fontWeight: 800 }}>Proof of Stake</h2>
                        <p style={{ marginTop: '1rem', color: 'var(--eco-muted)', lineHeight: '1.7' }}>
                            Validators lock up tokens as collateral. The system chooses block producers based on their stake.
                            This reduces energy consumption by 99% while increasing economic barrier to entry for attackers.
                        </p>
                    </div>
                    <div className="eco-glass" style={{ padding: '3rem' }}>
                        <Activity size={40} color="var(--eco-accent)" />
                        <h2 style={{ marginTop: '1.5rem', fontSize: '1.75rem', fontWeight: 800 }}>Immutability</h2>
                        <p style={{ marginTop: '1rem', color: 'var(--eco-muted)', lineHeight: '1.7' }}>
                            Once a block is settled, altering a single transaction would require re-computing every subsequent
                            block in the chain—a feat mathematically impossible for modern computing clusters.
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="eco-section" style={{ textAlign: 'center' }}>
                <div className="cta-container eco-glass" style={{ padding: '5rem 2rem', background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Scale Your Intelligence</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--eco-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Ready to dive deeper into the protocol mechanics? Access our advanced research
                        terminal used by institutional analysts.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/research" className="btn-primary" style={{ padding: '1.1rem 2.5rem', borderRadius: '16px' }}>
                            Protocol Research <Share2 size={18} />
                        </Link>
                        <Link to="/#roadmap" className="btn-glass" style={{ padding: '1.1rem 2.5rem', borderRadius: '16px' }}>
                            Learning Roadmap
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlockchainEcosystem;
