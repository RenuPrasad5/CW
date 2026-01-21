import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Lock, FileText, TrendingUp, ArrowLeft } from 'lucide-react';
import './ResearchPillars.css';

const PremiumCard = ({ title, desc, icon }) => (
    <div className="glass no-border-radius" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ marginBottom: '0.75rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{desc}</p>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'rgba(245, 158, 11, 0.1)' }}>
            <Lock size={60} />
        </div>
        <button className="btn-terminal-action" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-gold)' }}>Preview Report</button>
    </div>
);

const Premium = () => {
    const navigate = useNavigate();
    return (
        <div className="premium fade-in full-width-terminal">
            <div className="content-header-integrated glass no-border-radius">
                <div className="header-nav">
                    <button className="back-link" onClick={() => navigate('/')}>
                        <ArrowLeft size={16} />
                        <span>Back to Terminal</span>
                    </button>
                    <button className="btn-gold" style={{ width: 'auto' }}>Upgrade Now</button>
                </div>
                <div className="topic-hero-integrated" style={{ marginTop: '2rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Premium Research Layer</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Advanced reports and professional investment theses.</p>
                </div>
            </div>

            <div className="premium-reports-grid">
                <PremiumCard
                    title="Q3 Trend Report"
                    desc="Deep dive into the emerging Layer 2 ecosystem and ZK-rollups."
                    icon={<TrendingUp size={32} />}
                />
                <PremiumCard
                    title="Tokenomics Audit"
                    desc="Expert breakdown of the top 50 projects' supply dynamics."
                    icon={<FileText size={32} />}
                />
                <PremiumCard
                    title="Institutional Alpha"
                    desc="What major hedge funds are looking at in the current macro climate."
                    icon={<Crown size={32} />}
                />
            </div>
        </div>
    );
};

export default Premium;
