import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { featuredArticles } from '../data/mockData';
import {
    BookOpen,
    Search,
    Filter,
    Clock,
    Bookmark,
    ChevronRight,
    Book,
    FileText,
    Shield,
    Activity,
    Layers as LayersIcon,
    ArrowLeft
} from 'lucide-react';
import './Library.css';

const categoryInfo = {
    'All': {
        title: 'Global Research Database',
        description: 'Access the complete collection of peer-reviewed research, technical guides, and market reports.',
        stats: '500+ Articles • 12 Topics'
    },
    'Basics': {
        title: 'Blockchain Fundamentals',
        description: 'The bedrock of decentralization. Learn about consensus mechanisms, cryptography, and node architectures.',
        stats: '45 Articles • 5 Learning Paths'
    },
    'DeFi': {
        title: 'Decentralized Finance',
        description: 'Explore the future of money. From AMMs and lending protocols to yield aggregators and liquid staking.',
        stats: '120 Articles • expert level'
    },
    'Security': {
        title: 'Cybersecurity & Auditing',
        description: 'Critical knowledge for protecting assets. Learn about smart contract vulnerabilities and op-sec.',
        stats: '85 Articles • Certified'
    },
    'Infrastructure': {
        title: 'Layer 1 & Layer 2 Systems',
        description: 'Deep dive into scaling solutions, rollups, and interoperability between blockchain networks.',
        stats: '72 Articles • Institutional'
    }
};

const Library = () => {
    const navigate = useNavigate();
    const [activeCat, setActiveCat] = useState('All');

    const filteredArticles = activeCat === 'All'
        ? featuredArticles
        : featuredArticles.filter(a => a.category === activeCat);

    return (
        <div className="library fade-in">
            <div className="content-header-integrated glass">
                <div className="header-nav">
                    <button className="back-link" onClick={() => navigate(-1)}>
                        <ArrowLeft size={16} />
                        <span>Back to Terminal</span>
                    </button>
                    <div className="library-actions">
                        <div className="search-pill glass">
                            <Search size={18} color="var(--text-muted)" />
                            <input type="text" placeholder="Search research papers, articles, guides..." />
                        </div>
                    </div>
                </div>
                <div className="topic-hero-integrated" style={{ marginTop: '2rem' }}>
                    <div className="badge grad-primary">Knowledge Hub</div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Master the Ecosystem</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Structured learning paths from blockchain basics to quantitative research.</p>
                </div>
            </div>

            <div className="library-layout">
                <aside className="library-sidebar">
                    <div className="category-list glass">
                        <h3>Categories</h3>
                        {['All', 'Basics', 'DeFi', 'Security', 'Infrastructure', 'Legal', 'History', 'Tokenomics'].map(cat => (
                            <button
                                key={cat}
                                className={`cat-item ${activeCat === cat ? 'active' : ''}`}
                                onClick={() => setActiveCat(cat)}
                            >
                                {cat === 'DeFi' ? <Activity size={16} /> :
                                    cat === 'Security' ? <Shield size={16} /> :
                                        cat === 'Basics' ? <Book size={16} /> : <FileText size={16} />}
                                {cat}
                                <ChevronRight size={14} className="arrow" />
                            </button>
                        ))}
                    </div>

                    {categoryInfo[activeCat] && (
                        <div className="category-info-card glass fade-in" key={activeCat}>
                            <h4>{categoryInfo[activeCat].title}</h4>
                            <p>{categoryInfo[activeCat].description}</p>
                            <span className="info-stats">{categoryInfo[activeCat].stats}</span>
                        </div>
                    )}

                    <div className="reading-stats glass grad-primary">
                        <h4>Your Progress</h4>
                        <div className="progress-bar">
                            <div className="fill" style={{ width: '65%' }}></div>
                        </div>
                        <p>12 of 18 Essential Guides read</p>
                        <button className="glass">Resume Reading</button>
                    </div>
                </aside>

                <main className="library-main">
                    <div className="featured-article glass">
                        <div className="content">
                            <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>Editor's Choice</span>
                            <h2>The Evolution of Modular Blockchains: Celestia & Beyond</h2>
                            <p>An in-depth research piece on why modularity is the future of blockchain scaling and how it differs from traditional monolithic structures.</p>
                            <div className="meta">
                                <span><Clock size={14} /> 15 min read</span>
                                <span>Fundamental Analysis</span>
                            </div>
                            <button className="btn-white">Continue Reading</button>
                        </div>
                        <div className="visual">
                            <LayersIcon size={80} color="rgba(255,255,255,0.2)" />
                        </div>
                    </div>

                    <div className="section-header">
                        <h2>Advanced Research</h2>
                        <button className="text-btn">View All</button>
                    </div>

                    <div className="article-grid">
                        {filteredArticles.map(article => (
                            <div key={article.id} className="article-card-alt glass glass-hover">
                                <div className="card-image">
                                    <img src={article.image} alt={article.title} />
                                    <button className="bookmark-overlay"><Bookmark size={18} /></button>
                                </div>
                                <div className="card-content">
                                    <div className="card-meta">
                                        <span className="tag">{article.category}</span>
                                        <span className="time"><Clock size={12} /> {article.readTime}</span>
                                    </div>
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <div className="card-footer">
                                        <div className="author">
                                            <div className="avatar-sm">{article.author[0]}</div>
                                            <span>{article.author}</span>
                                        </div>
                                        <button className="read-more">Read <ChevronRight size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Library;

