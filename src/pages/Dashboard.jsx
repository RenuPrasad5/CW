import React from 'react';
import {
    featuredArticles,
    userStats,
    topCoins,
    marketSignals,
    recentDiscussions
} from '../data/mockData';
import {
    TrendingUp,
    TrendingDown,
    Award,
    Flame,
    BookOpen,
    Zap,
    Compass,
    Shield,
    PieChart,
    BarChart3,
    Activity,
    Users,
    MessageSquare,
    Bell,
    CheckCircle2,
    Target,
    ArrowUpRight,
    Star,
    Calendar,
    ArrowRight,
    Info
} from 'lucide-react';
import './Dashboard.css';
import useModeStore from '../store/modeStore';

const CompactMetric = ({ icon, label, value, color }) => (
    <div className="compact-metric glass">
        <div className="metric-icon" style={{ color: `var(--${color})`, background: `var(--${color}-low)` }}>
            {icon}
        </div>
        <div className="metric-data">
            <span className="metric-label">{label}</span>
            <span className="metric-value">{value}</span>
        </div>
    </div>
);

const MarketSignal = ({ coin, signal, strength }) => (
    <div className="market-signal glass shadow-soft">
        <div className="signal-info">
            <span className="signal-coin">{coin}</span>
            <span className="signal-type">{signal}</span>
        </div>
        <div className="signal-bar-bg">
            <div className="signal-bar-fill" style={{ width: `${strength}%` }}></div>
        </div>
        <span className="signal-strength">{strength}%</span>
    </div>
);

const Dashboard = () => {
    const { mode } = useModeStore();

    return (
        <div className={`dashboard-fintech fade-in mode-${mode.toLowerCase()}`}>
            {/* User Knowledge Overview */}
            <section className="knowledge-overview glass shadow-gold">
                <div className="ov-item">
                    <span className="ov-label">{mode} Score</span>
                    <h2 className="ov-value text-gradient">{userStats.knowledgeScore}%</h2>
                </div>
                <div className="ov-divider"></div>
                <div className="ov-item">
                    <span className="ov-label">Topics Explored</span>
                    <h2 className="ov-value">{userStats.lessonsCompleted}</h2>
                </div>
                <div className="ov-divider"></div>
                <div className="ov-item">
                    <span className="ov-label">Certificates</span>
                    <h2 className="ov-value">{userStats.certificatesEarned}</h2>
                </div>
                <div className="ov-divider"></div>
                <div className="ov-item">
                    <span className="ov-label">Active Streak</span>
                    <h2 className="ov-value">{userStats.readingStreak} Days</h2>
                </div>
                <div className="ov-divider"></div>
                <div className="ov-item">
                    <span className="ov-label">Reputation</span>
                    <h2 className="ov-value">Level {Math.floor(userStats.points / 500)}</h2>
                </div>
                <div className="ov-divider"></div>
                <div className="ov-item">
                    <span className="ov-label">User Tier</span>
                    <div className="ov-status">
                        <Star size={16} color="var(--gold)" fill="var(--gold)" />
                        <span className="status-tag verified">{mode} {userStats.accountStatus.split(' ')[1]}</span>
                    </div>
                </div>
            </section>

            {/* Split Middle Section */}
            <div className="dashboard-split-grid">
                {/* Left: Learning Path */}
                <div className="split-col">
                    <div className="section-head">
                        <h3><Compass size={20} className="text-primary" /> {mode} Roadmap</h3>
                        <button className="text-btn">Edit Path</button>
                    </div>
                    <div className="learning-nexus glass">
                        <div className="nexus-header">
                            <div className="nexus-info">
                                <h4>{mode === 'Beginner' ? 'Blockchain Fundamentals' : mode === 'Developer' ? 'Rust For Solana' : mode === 'Analyst' ? 'Advanced On-Chain Data' : 'Macro Portfolio Alpha'}</h4>
                                <p>{mode === 'Beginner' ? 'Module 1: What is a Ledger?' : 'Module 4: Advanced Architectures'}</p>
                            </div>
                            <div className="nexus-progress-circle">
                                <span>{mode === 'Beginner' ? '12%' : '65%'}</span>
                            </div>
                        </div>
                        <div className="next-lesson glass-inset">
                            <div className="lesson-icon"><Zap size={20} /></div>
                            <div className="lesson-details">
                                <span className="label">Next Up</span>
                                <p>{mode === 'Beginner' ? 'Your First Wallet' : mode === 'Developer' ? 'Writing BPF Hooks' : 'Implementing Plonk Proofs'}</p>
                            </div>
                            <button className="btn-primary-sm">Resume <ArrowRight size={14} /></button>
                        </div>
                    </div>
                </div>

                {/* Right: Market Pulse */}
                <div className="split-col">
                    <div className="section-head">
                        <h3><Activity size={20} className="text-rose" /> {mode} Pulse</h3>
                        <div className="live-tag">LIVE</div>
                    </div>
                    <div className="market-pulse-box glass">
                        <div className="pulse-mini-assets">
                            {topCoins.slice(0, 3).map(coin => (
                                <div key={coin.symbol} className="pulse-asset">
                                    <div className="asset-main">
                                        <span className="asset-sym">{coin.symbol}</span>
                                        <span className={`asset-chg ${coin.change >= 0 ? 'up' : 'down'}`}>
                                            {coin.change >= 0 ? '+' : ''}{coin.change}%
                                        </span>
                                    </div>
                                    <div className="mini-chart">
                                        <div className="spark-line"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="market-signals-row">
                            <div className="signal-card-mini">
                                <span className="lbl">{mode === 'Investor' ? 'Risk' : 'Volatility'}</span>
                                <span className="val low">{mode === 'Investor' ? 'Moderate' : 'Low'}</span>
                            </div>
                            <div className="signal-card-mini">
                                <span className="lbl">Sentiment</span>
                                <span className="val positive">Bullish</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intelligence Section */}
            <section className="intelligence-grid-aligned">
                <div className="intel-card glass">
                    <div className="intel-head">
                        <h3><BarChart3 size={18} /> {mode} Intelligence Summary</h3>
                        <Bell size={16} className="pulse-icon" />
                    </div>
                    <div className="intel-content-scroll">
                        <div className="signals-list">
                            {marketSignals.map((sig, i) => (
                                <MarketSignal key={i} {...sig} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="intel-card glass">
                    <div className="intel-head">
                        <h3><PieChart size={18} /> {mode} Insights</h3>
                        <button className="icon-btn-sm"><ArrowUpRight size={16} /></button>
                    </div>
                    <div className="intel-content-scroll">
                        <div className="watchlist-mini">
                            {topCoins.map(coin => (
                                <div key={coin.symbol} className="watch-item">
                                    <span>{coin.name}</span>
                                    <span className="p">${coin.price.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Community & Growth Grid */}
            <div className="bottom-grid">
                <div className="community-snap glass">
                    <div className="section-head">
                        <h3><Users size={20} /> Community Feed</h3>
                        <span className="rep-rank">{mode} Rank: #452</span>
                    </div>
                    <div className="discussions-list">
                        {recentDiscussions.map(disc => (
                            <div key={disc.id} className="disc-item">
                                <div className="disc-main">
                                    <p>{disc.title}</p>
                                    <div className="disc-meta">
                                        <span>by {disc.author}</span>
                                        {disc.expert && <span className="expert-tag"><Star size={10} fill="currentColor" /> Expert</span>}
                                    </div>
                                </div>
                                <div className="disc-replies">
                                    <MessageSquare size={14} /> {disc.replies}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="upcoming-events glass-inset">
                        <Calendar size={16} />
                        <span>{mode} Zoom: Protocol Analysis @ 14:00 GMT</span>
                    </div>
                </div>

                <div className="growth-visualizer glass">
                    <div className="section-head">
                        <h3><PieChart size={20} /> Personal Growth</h3>
                        <Info size={16} className="text-muted" />
                    </div>
                    <div className="growth-metrics">
                        <div className="growth-node">
                            <span className="node-val">{userStats.knowledgeScore}%</span>
                            <span className="node-lbl">Knowledge</span>
                        </div>
                        <div className="growth-node">
                            <span className="node-val">{userStats.confidenceIndex}%</span>
                            <span className="node-lbl">Confidence</span>
                        </div>
                        <div className="growth-node">
                            <span className="node-val">Tier 2</span>
                            <span className="node-lbl">Skill Rank</span>
                        </div>
                    </div>
                    <div className="performance-chart-placeholder glass-inset">
                        <div className="chart-line-anim"></div>
                        <span className="chart-label">Weekly {mode} Progress</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
