import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    TrendingUp,
    Shield,
    Database,
    Zap,
    Activity,
    Clock,
    Globe
} from 'lucide-react';
import MarketTerminal from '../components/tools/MarketTerminal';
import OnChainAlpha from '../components/tools/OnChainAlpha';
import SecurityHub from '../components/tools/SecurityHub';
import './Tools.css';
import './ResearchPillars.css';

const TickerTape = () => {
    const data = [
        { sym: 'BTC', price: '94,231', chg: '+2.4%' },
        { sym: 'ETH', price: '2,745', chg: '-1.1%' },
        { sym: 'SOL', price: '184', chg: '+5.6%' },
        { sym: 'ARB', price: '0.94', chg: '+0.5%' },
        { sym: 'TIA', price: '6.2', chg: '-4.3%' },
        { sym: 'SUI', price: '3.4', chg: '+12.1%' },
    ];

    const doubledData = [...data, ...data, ...data];

    return (
        <div className="w-full bg-slate-950 border-b border-slate-800 py-3 overflow-hidden z-[60] relative">
            <div className="animate-ticker-v2">
                {doubledData.map((item, idx) => (
                    <div key={idx} className="ticker-item-v2">
                        <span className="text-[11px] font-black text-white uppercase tracking-tighter">{item.sym}/USD</span>
                        <span className="text-[11px] font-mono font-bold text-slate-400">{item.price}</span>
                        <span className={`text-[10px] font-mono font-bold ${item.chg.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {item.chg}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Tools = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Market Intelligence');

    const tabs = [
        {
            id: 'Market Intelligence',
            label: 'Market Intelligence',
            description: 'Aggregate market data, volatility metrics, and global prediction markets.'
        },
        {
            id: 'On-Chain Signals',
            label: 'On-Chain Signals',
            description: 'Real-time whale flows, ecosystem TVL tracking, and upcoming token unlock schedules.'
        },
        {
            id: 'Security & Risk',
            label: 'Security & Risk',
            description: 'Wallet permission monitoring, protocol audit integrity, and central risk advisories.'
        }
    ];

    const activeTabData = tabs.find(t => t.id === activeTab);

    const renderActiveComponent = () => {
        switch (activeTab) {
            case 'Market Intelligence': return <MarketTerminal />;
            case 'On-Chain Signals': return <OnChainAlpha />;
            case 'Security & Risk': return <SecurityHub />;
            default: return <MarketTerminal />;
        }
    };

    return (
        <div className="tools-terminal-wrapper full-width-terminal">
            <TickerTape />

            <div className="border-b border-slate-900/40">
                <button
                    onClick={() => navigate('/')}
                    className="back-link-subtle"
                >
                    <ArrowLeft size={14} /> Back to Terminal
                </button>
            </div>

            <nav className="tools-sticky-nav">
                <div className="flex items-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`nav-tab-link ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            <header className="section-desc-box">
                <h1 className="section-desc-title">{activeTabData.label}</h1>
                <p className="section-desc-text">{activeTabData.description}</p>
            </header>

            <main className="content-area-terminal">
                {renderActiveComponent()}
            </main>

            <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950/50">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                    <div className="flex items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        <span>Real-time Sync Active</span>
                        <div className="h-3 w-px bg-slate-800"></div>
                        <span>&copy; 2026 CryptoWorld Intelligence</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Tools;
