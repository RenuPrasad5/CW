import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity,
    Box,
    Cpu,
    Globe,
    Zap,
    Shield,
    TrendingUp,
    Play,
    Server,
    Layers as LayersIcon,
    ArrowUpRight,
    Circle,
    Hexagon,
    ArrowLeft,
    Database,
    Lock,
    Coins,
    RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './BlockchainHub.css';

const BlockchainHub = () => {
    const navigate = useNavigate();
    const [selectedChain, setSelectedChain] = useState('Ethereum');
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState({
        tps: 15.4,
        blockHeight: 19124567,
        gas: 24,
        marketCap: '2.4T'
    });
    const [liveFeed, setLiveFeed] = useState([
        { hash: '0x4f2...3a1', value: '1.2 ETH', node: 'Mainnet-Node-07' },
        { hash: '0x8b1...9c2', value: '450 USDC', node: 'Beacon-L2-01' },
        { hash: '0x1d4...f5e', value: '0.05 ETH', node: 'Mainnet-Node-03' },
        { hash: '0x7e2...2b0', value: '12.4 LINK', node: 'Mainnet-Node-12' },
    ]);
    const [activeStage, setActiveStage] = useState(0);

    // Dynamic data simulation (In production, replace with Alchemy/Etherscan hooks)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);

        const metricInterval = setInterval(() => {
            setMetrics(prev => ({
                ...prev,
                tps: (Math.random() * (selectedChain === 'Solana' ? 3000 : 25)).toFixed(1),
                blockHeight: prev.blockHeight + 1,
                gas: Math.floor(Math.random() * 50) + 10
            }));

            // Slide in new live feed items
            const newTx = {
                hash: `0x${Math.random().toString(16).slice(2, 8)}...${Math.random().toString(16).slice(2, 5)}`,
                value: `${(Math.random() * 5).toFixed(2)} ${selectedChain === 'Ethereum' ? 'ETH' : 'SOL'}`,
                node: `Shard-${Math.floor(Math.random() * 20)}`
            };
            setLiveFeed(prev => [newTx, ...prev.slice(0, 3)]);
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearInterval(metricInterval);
        };
    }, [selectedChain]);

    const playLifecycle = () => {
        setActiveStage(1);
        setTimeout(() => setActiveStage(2), 2000);
        setTimeout(() => setActiveStage(3), 4000);
        setTimeout(() => setActiveStage(4), 6000);
        setTimeout(() => setActiveStage(0), 8000);
    };

    const chains = [
        { name: 'Ethereum', icon: <Hexagon />, color: '#6366f1' },
        { name: 'Solana', icon: <Zap />, color: '#14f195' },
        { name: 'Bitcoin', icon: <Database />, color: '#f7931a' },
        { name: 'Cardano', icon: <Circle />, color: '#0033ad' },
        { name: 'Polkadot', icon: <Circle />, color: '#e6007a' },
        { name: 'Avalanche', icon: <Zap />, color: '#e84142' },
        { name: 'Polygon', icon: <LayersIcon />, color: '#8247e5' },
        { name: 'Cosmos', icon: <Globe />, color: '#2e3439' },
        { name: 'Chainlink', icon: <Activity />, color: '#2a5ada' },
        { name: 'Arbitrum', icon: <LayersIcon />, color: '#28a0f0' },
        { name: 'Optimism', icon: <Circle />, color: '#ff0420' },
        { name: 'Sui', icon: <Zap />, color: '#6fbcf0' },
        { name: 'Aptos', icon: <Activity />, color: '#1ee3c0' },
        { name: 'Near', icon: <Globe />, color: '#000000' },
        { name: 'Stacks', icon: <Lock />, color: '#5546ff' },
        { name: 'Fantom', icon: <Zap />, color: '#1969ff' },
        { name: 'Hedera', icon: <Shield />, color: '#000000' },
        { name: 'Algorand', icon: <Globe />, color: '#000000' },
        { name: 'Tezos', icon: <Hexagon />, color: '#2c7df7' },
        { name: 'Litecoin', icon: <Database />, color: '#345d9d' },
        { name: 'Monero', icon: <Lock />, color: '#ff6600' },
        { name: 'Zcash', icon: <Lock />, color: '#f4b728' },
        { name: 'Stellar', icon: <Globe />, color: '#000000' },
        { name: 'VeChain', icon: <LayersIcon />, color: '#15bdff' },
        { name: 'EOS', icon: <Hexagon />, color: '#000000' }
    ];

    return (
        <div className="blockchain-hub">
            {/* Multi-blockchain Selector Sidebar */}
            <aside className="hub-sidebar">
                <div className="hub-nav-header">
                    <button className="back-to-terminal" onClick={() => navigate('/')}>
                        <ArrowLeft size={16} />
                        <span>Terminal</span>
                    </button>
                </div>
                <span className="sidebar-title">Networks ({chains.length})</span>
                <nav className="chain-list custom-scrollbar">
                    {chains.map(chain => (
                        <button
                            key={chain.name}
                            className={`chain-btn ${selectedChain === chain.name ? 'active' : ''}`}
                            onClick={() => setSelectedChain(chain.name)}
                        >
                            <span className="chain-icon" style={{ color: selectedChain === chain.name ? chain.color : '' }}>
                                {chain.icon}
                            </span>
                            <span>{chain.name}</span>
                        </button>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <div className="metric-card glass neon-glow">
                        <span className="metric-label">System Health</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <div className="pulse-node" style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></div>
                            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 700 }}>OPERATIONAL</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Terminal Viewport */}
            <main className="hub-viewport">
                {/* Real-Time Network Health Dashboard */}
                <section className="health-dashboard">
                    <div className="metric-card glass">
                        <div className="metric-header">
                            <span className="metric-label">Live TPS</span>
                            <Activity size={18} color="var(--hub-cyan)" />
                        </div>
                        {loading ? <div className="skeleton" style={{ height: 32, width: '60%' }}></div> : (
                            <div className="metric-value" style={{ color: 'var(--hub-cyan)' }}>{metrics.tps}</div>
                        )}
                        <div className="metric-chart">
                            <motion.div
                                style={{ height: 4, width: '100%', background: 'var(--hub-cyan)', opacity: 0.3, borderRadius: 2 }}
                                animate={{ scaleX: [1, 0.8, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                            />
                        </div>
                    </div>

                    <div className="metric-card glass">
                        <div className="metric-header">
                            <span className="metric-label">Block Height</span>
                            <Box size={18} color="var(--hub-indigo)" />
                        </div>
                        {loading ? <div className="skeleton" style={{ height: 32, width: '80%' }}></div> : (
                            <div className="metric-value">{metrics.blockHeight.toLocaleString()}</div>
                        )}
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Last block 2s ago</span>
                    </div>

                    <div className="metric-card glass">
                        <div className="metric-header">
                            <span className="metric-label">Avg Gas Fee</span>
                            <Zap size={18} color="var(--hub-emerald)" />
                        </div>
                        {loading ? <div className="skeleton" style={{ height: 32, width: '40%' }}></div> : (
                            <div className="metric-value" style={{ color: 'var(--hub-emerald)' }}>{metrics.gas} Gwei</div>
                        )}
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Standard Speed</span>
                    </div>

                    <div className="metric-card glass">
                        <div className="metric-header">
                            <span className="metric-label">Market Cap</span>
                            <TrendingUp size={18} color="var(--hub-rose)" />
                        </div>
                        {loading ? <div className="skeleton" style={{ height: 32, width: '70%' }}></div> : (
                            <div className="metric-value">{metrics.marketCap}</div>
                        )}
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>+2.45% 24h</span>
                    </div>
                </section>

                {/* Global Node Visualizer */}
                <section className="node-visualizer glass">
                    <div className="viz-header">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h2 className="viz-title">Global Validator Network</h2>
                                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Real-time node propagation & latency monitoring</p>
                            </div>
                            <div className="live-badge">
                                <RefreshCw size={14} className="spinning" />
                                LIVE FEED
                            </div>
                        </div>
                    </div>
                    <div className="map-container">
                        {/* Real "Gap" / Stylized Map Visualization */}
                        <svg viewBox="0 0 800 400" className="world-map-svg">
                            <path className="continent-path" d="M100,100 Q150,80 200,100 T300,120 T400,100 T500,130" />
                            <circle cx="150" cy="120" r="2" fill="var(--hub-accent)" opacity="0.4" />
                            <circle cx="220" cy="150" r="2" fill="var(--hub-accent)" opacity="0.4" />
                            <circle cx="450" cy="180" r="2" fill="var(--hub-accent)" opacity="0.4" />
                            <circle cx="580" cy="110" r="2" fill="var(--hub-accent)" opacity="0.4" />
                        </svg>

                        {/* Pulsing Node Hubs with strategic gaps */}
                        {[
                            { t: '20%', l: '20%', n: 'North America', status: 'Optimal' },
                            { t: '25%', l: '48%', n: 'Europe West', status: 'Optimal' },
                            { t: '45%', l: '75%', n: 'Asia Pacific', status: 'Optimal' },
                            { t: '65%', l: '35%', n: 'South America', status: '120ms' },
                            { t: '55%', l: '55%', n: 'Africa South', status: '150ms' }
                        ].map((hub, i) => (
                            <div key={i} style={{ position: 'absolute', top: hub.t, left: hub.l, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="pulse-node" style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--hub-cyan)', boxShadow: '0 0 15px var(--hub-cyan)' }}></div>
                                <div className="hub-tooltip glass">
                                    <span className="hub-name">{hub.n}</span>
                                    <span className="hub-status">{hub.status}</span>
                                </div>
                            </div>
                        ))}

                        {/* Connection Lines (Simulated Gap) */}
                        <div className="connection-line-1"></div>
                        <div className="connection-line-2"></div>
                    </div>
                </section>

                {/* Interactive Transaction Lifecycle */}
                <section className="tx-lifecycle glass">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2 className="viz-title">Transaction Lifecycle: {selectedChain}</h2>
                        <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={playLifecycle}>
                            <Play size={14} fill="currentColor" /> Play Demo
                        </button>
                    </div>

                    <div className="lifecycle-stages">
                        {[
                            { label: 'Broadcast', icon: <Server size={20} /> },
                            { label: 'Mempool', icon: <LayersIcon size={20} /> },
                            { label: 'Consensus', icon: <Shield size={20} /> },
                            { label: 'Finalization', icon: <Circle size={20} /> }
                        ].map((stage, i) => (
                            <div key={i} className={`stage-node ${activeStage === i + 1 ? 'active' : ''}`}>
                                {stage.icon}
                                <span className="stage-label">{stage.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ecosystem Bento Grid */}
                <section className="ecosystem-grid">
                    <div className="bento-card glass col-span-8 row-span-2">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Dominant Protocols</h3>
                            <span style={{ fontSize: '0.75rem', color: 'var(--hub-accent)' }}>Real-time TVL Sync</span>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <table style={{ width: '100%', textAlign: 'left', fontSize: '0.9rem', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ color: '#64748b', borderBottom: '1px solid var(--hub-border)' }}>
                                        <th style={{ padding: '1rem' }}>Protocol</th>
                                        <th>Category</th>
                                        <th>TVL</th>
                                        <th>User Growth</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: 'Lido Finance', cat: 'Liquid Staking', tvl: '$24.5B', growth: '+5.2%' },
                                        { name: 'Aave', cat: 'Lending', tvl: '$12.1B', growth: '+12.8%' },
                                        { name: 'Maker', cat: 'CDP', tvl: '$8.4B', growth: '-1.4%' },
                                        { name: 'Uniswap', cat: 'DEX', tvl: '$5.2B', growth: '+8.1%' },
                                    ].map((p, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                                            <td style={{ padding: '1.25rem 1rem', fontWeight: 600 }}>{p.name}</td>
                                            <td>{p.cat}</td>
                                            <td style={{ color: 'var(--hub-emerald)' }}>{p.tvl}</td>
                                            <td style={{ color: p.growth.startsWith('+') ? 'var(--hub-emerald)' : 'var(--hub-rose)' }}>{p.growth}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bento-card glass col-span-4" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), transparent)' }}>
                        <span className="metric-label">Security Audit Score</span>
                        <div className="metric-value" style={{ marginTop: '0.5rem' }}>98.4</div>
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>Network resilience: HIGH</p>
                    </div>

                    <div className="bento-card glass col-span-4">
                        <span className="metric-label">Whale Alerts</span>
                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ fontSize: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                <ArrowUpRight size={14} color="var(--hub-emerald)" />
                                <span>5,000 ETH to Coinbase</span>
                            </div>
                            <div style={{ fontSize: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                <ArrowUpRight size={14} color="var(--hub-rose)" />
                                <span>1.2M MATIC Inbound</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Live Block Explorer Feed Sidebar */}
            <aside className="hub-feed">
                <div className="feed-header">
                    <h2 style={{ fontSize: '0.9rem', fontWeight: 700 }}>Live Blocks</h2>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'red' }}></div>
                </div>

                <div className="feed-list">
                    <AnimatePresence>
                        {liveFeed.map((tx, i) => (
                            <motion.div
                                key={tx.hash}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="feed-item"
                                layout
                            >
                                <span className="tx-hash">{tx.hash}</span>
                                <div className="tx-details">
                                    <span>{tx.value}</span>
                                    <span>{tx.node}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="bento-card glass" style={{ marginTop: 'auto', padding: '1rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Network Latency</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--hub-cyan)' }}>14ms</div>
                </div>
            </aside>
        </div>
    );
};

export default BlockchainHub;
