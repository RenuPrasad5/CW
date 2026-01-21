import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MessageSquare,
    Users,
    HelpCircle,
    Award,
    Star,
    TrendingUp,
    ChevronUp,
    MessageCircle,
    Search,
    Plus,
    ArrowLeft
} from 'lucide-react';
import './ResearchPillars.css';

const DiscussionItem = ({ title, author, answers, level, time }) => (
    <div className="glass glass-hover discussion-card-full no-border-radius" style={{ padding: '1.5rem' }}>
        <div className="discussion-inner">
            <div className="vote-control">
                <button className="text-btn" style={{ color: 'var(--text-muted)' }}><ChevronUp size={24} /></button>
                <span className="vote-num">{Math.floor(Math.random() * 50)}</span>
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', marginBottom: 0 }}>{level}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Posted by {author} • {time}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', cursor: 'pointer' }}>{title}</h3>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MessageCircle size={16} /> {answers} Answers</span>
                    <span className="expert-tag-gold"><Star size={16} /> Expert Verified</span>
                </div>
            </div>
        </div>
    </div>
);

const Community = () => {
    const navigate = useNavigate();
    return (
        <div className="community fade-in full-width-terminal">
            <div className="content-header-integrated glass no-border-radius">
                <div className="header-nav">
                    <button className="back-link" onClick={() => navigate('/')}>
                        <ArrowLeft size={16} />
                        <span>Back to Terminal</span>
                    </button>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="search-pill glass" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 1rem', borderRadius: '12px' }}>
                            <Search size={18} color="var(--text-muted)" />
                            <input type="text" placeholder="Search discussions..." style={{ background: 'none', border: 'none', padding: '0.75rem 0', color: 'var(--text-main)', outline: 'none' }} />
                        </div>
                        <button className="btn-primary"><Plus size={18} /> New Thread</button>
                    </div>
                </div>
                <div className="topic-hero-integrated" style={{ marginTop: '2rem' }}>
                    <div className="badge grad-primary">Knowledge Zone</div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Community Network</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Connect with 50,000+ crypto researchers and developers.</p>
                </div>
            </div>

            <div className="community-terminal-layout">
                <div className="terminal-gutter"></div>

                <div className="community-feed">
                    <div className="create-post-container no-border-radius">
                        <div className="post-input-wrapper">
                            <div className="user-mini-avatar">K</div>
                            <div className="input-area-box">
                                <textarea placeholder="Ask a question or share research insights..."></textarea>
                                <div className="input-actions-row">
                                    <div className="format-tools">
                                        <button className="tool-btn-subtle"><Plus size={18} /></button>
                                        <button className="tool-btn-subtle"><Users size={18} /></button>
                                        <button className="tool-btn-subtle"><MessageSquare size={18} /></button>
                                    </div>
                                    <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Post Insight</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feed-filters" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', padding: '0 1.5rem' }}>
                        {['Trending', 'Latest', 'Expert Pick', 'Unanswered'].map(filter => (
                            <button key={filter} className="glass btn-terminal-action">{filter}</button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid var(--border)' }}>
                        <DiscussionItem
                            title="How do ZK-Sync era fees compare to Optimism on mainnet?"
                            author="vitalik_fan"
                            answers={24}
                            level="Technical"
                            time="2h ago"
                        />
                        <DiscussionItem
                            title="Best practices for multi-sig wallet security in institutional setups."
                            author="custody_pro"
                            answers={15}
                            level="Security"
                            time="5h ago"
                        />
                        <DiscussionItem
                            title="Understanding the impact of EIP-4844 on Layer 2 profitability."
                            author="protocol_nerd"
                            answers={42}
                            level="Research"
                            time="8h ago"
                        />
                        <DiscussionItem
                            title="The upcoming regulatory framework in Hong Kong: What you need to know."
                            author="legal_eagle"
                            answers={31}
                            level="Regulation"
                            time="1d ago"
                        />
                    </div>
                </div>

                <aside className="community-sidebar">
                    <div className="glass sidebar-panel no-border-radius">
                        <div className="panel-title">
                            <Award size={24} color="var(--accent-gold)" />
                            <h2 style={{ fontSize: '1.2rem' }}>Top Contributors</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { name: "Satoshi_Vision", score: "4.5k", field: "Cryptography", color: "#6366f1" },
                                { name: "DeFi_Wizard", score: "3.2k", field: "Protocols", color: "#ec4899" },
                                { name: "Chain_Explorer", score: "2.8k", field: "On-chain Data", color: "#10b981" },
                            ].map((expert, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: expert.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>{expert.name[0]}</div>
                                        <div>
                                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{expert.name}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{expert.field}</div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontWeight: '700', color: 'var(--accent-gold)', fontSize: '0.9rem' }}>{expert.score}</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>XP</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass grad-primary no-border-radius" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}><HelpCircle size={20} /> Need Help?</h3>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Our mentors are available 24/7 in the beginner-friendly help center.</p>
                        <button style={{ background: 'white', color: 'var(--primary)', padding: '0.75rem 1.25rem', borderRadius: '10px', fontWeight: '700', width: '100%' }}>Join Help Center</button>
                    </div>

                    <div className="glass sidebar-panel no-border-radius">
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><TrendingUp size={18} color="var(--primary)" /> Trending Topics</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['#BitcoinETF', '#Layer2', '#ZKProofs', '#Solana', '#Airdrops', '#EigenLayer'].map(tag => (
                                <span key={tag} className="glass" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', borderRadius: '8px', cursor: 'pointer' }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Community;
