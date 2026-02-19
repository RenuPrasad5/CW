import React from 'react';
import { Link } from 'react-router-dom';
import {
    LineChart,
    ShieldCheck,
    Database,
    ArrowRight
} from 'lucide-react';
import RoadmapSection from '../components/RoadmapSection';
import SupportSection from '../components/SupportSection';
import './Home.css';

const GradientText = ({ text }) => {
    // Fulfilling the "Apply gradient" requirement WITHOUT using background-clip:text
    // Using SVG for strictly compliant gradient text
    return (
        <svg viewBox="0 0 420 60" className="inline-block h-[1.15em] align-baseline overflow-visible" style={{ width: '420px' }}>
            <defs>
                <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <text x="0" y="45" fill="url(#text-grad)" className="font-extrabold text-[52px]">
                {text}
            </text>
        </svg>
    );
};

const Home = () => {
    return (
        <div className="home-container bg-[#020617]">
            {/* Institutional Research Hero */}
            <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-[#020617]">
                {/* Visual Glow */}
                <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

                <div className="container max-w-[1440px] px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column (60%) */}
                        <div className="lg:col-span-7 flex flex-col items-start translate-y-[-10px]">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 transition-all duration-300">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></span>
                                <span className="text-xs font-semibold text-indigo-400/90 tracking-widest">
                                    Institutional Research Interface v4.0
                                </span>
                            </div>

                            {/* Heading */}
                            <div className="mb-8">
                                <h1 className="text-white text-[56px] font-[900] leading-[1.1] tracking-tight m-0">
                                    The Operating System for<br />
                                    <svg width="600" height="70" className="inline-block overflow-visible align-top mt-1">
                                        <defs>
                                            <linearGradient id="cryptoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        <text x="0" y="55" fill="url(#cryptoGrad)" style={{ fontWeight: 950, fontSize: '56px', fontFamily: 'inherit' }}>Crypto Knowledge</text>
                                    </svg>
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-slate-400/90 text-[19px] leading-[1.6] max-w-[580px] mb-12 font-medium">
                                A high-fidelity research ecosystem for professionals. Access structured intelligence, protocol breakdowns, and institutional-grade analysis tools.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex items-center gap-6 mb-20">
                                <Link to="/encyclopedia" className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[#6366f1] text-white font-bold text-lg hover:bg-[#4f46e5] transition-all duration-300 shadow-[0_8px_25px_rgba(99,102,241,0.4)]">
                                    Access Encyclopedia <ArrowRight size={22} strokeWidth={2.5} />
                                </Link>
                                <Link to="/research" className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                                    Research Terminal
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-16 border-t border-white/5 pt-10">
                                <div className="flex flex-col gap-1">
                                    <span className="text-white text-[28px] font-black leading-none">25k+</span>
                                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Knowledge Nodes</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10"></div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white text-[28px] font-black leading-none">1,200+</span>
                                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Protocol Audits</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10"></div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white text-[28px] font-black leading-none">99.9%</span>
                                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Data Integrity</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (40%) - Floating Cards */}
                        <div className="lg:col-span-5 relative h-[500px] w-full flex items-center justify-center">

                            {/* Intelligence Card - Top Right */}
                            <div className="absolute top-[0%] right-[0%] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-2xl z-20 w-[280px] animate-float">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                    <LineChart size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Intelligence</p>
                                    <p className="text-white text-lg font-extrabold">Sector Gamma</p>
                                </div>
                            </div>

                            {/* Verification Card - Middle Left */}
                            <div className="absolute top-[35%] left-[0%] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-2xl z-20 w-[280px] animate-float" style={{ animationDelay: '-2.5s' }}>
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                    <ShieldCheck size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Verification</p>
                                    <p className="text-white text-lg font-extrabold">Editor Approved</p>
                                </div>
                            </div>

                            {/* Archival Card - Bottom Right */}
                            <div className="absolute bottom-[0%] right-[5%] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-2xl z-20 w-[280px] animate-float" style={{ animationDelay: '-5s' }}>
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                    <Database size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Archival State</p>
                                    <p className="text-white text-lg font-extrabold">Immutable</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* The Pillars of Intelligence Section */}
            <section className="learning-matrix-section bg-[#020617] py-32 px-8">
                <div className="container max-w-[1440px] mx-auto">
                    <div className="flex flex-col mb-20 border-b border-white/5 pb-12">
                        <div className="mb-6">
                            <span className="text-indigo-400 text-sm font-bold uppercase tracking-[0.3em] mb-4 block">System Architecture</span>
                            <h2 className="text-white text-[56px] font-black leading-tight tracking-tight whitespace-nowrap">
                                The <svg width="450" height="70" className="inline-block overflow-visible align-top">
                                    <defs>
                                        <linearGradient id="pillarsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <text x="0" y="55" fill="url(#pillarsGrad)" style={{ fontWeight: 900, fontSize: '56px', fontFamily: 'inherit' }}>Research Pillars</text>
                                </svg>
                            </h2>
                        </div>
                        <div className="max-w-2xl">
                            <p className="text-slate-400 text-xl leading-relaxed font-medium">
                                A multidimensional knowledge model designed for analysts, developers, and institutional researchers.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Matrix Cards (Keeping existing structure but cleaning for design) */}
                        {[
                            { title: 'Knowledge', desc: 'Deep structured encyclopedia of crypto, blockchain, and decentralized architectures.', link: '/encyclopedia' },
                            { title: 'Research', desc: 'Granular protocol breakdowns, tokenomics models, and risk architecture analysis.', link: '/research' },
                            { title: 'Tools', desc: 'Interactive simulators, comparison engines, and quantitative modeling tools.', link: '/tools' },
                            { title: 'Intelligence', desc: 'Real-time market insights, sentiment tracking, and contextual trend reports.', link: '/intelligence' },
                            { title: 'Community', desc: 'Peer review systems, expert validation, and collaborative article improvement.', link: '/community' },
                            { title: 'Trust Layer', desc: 'Immutable source references, editor verification, and community truth scores.', link: '/trust' }
                        ].map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.link}
                                className="bg-slate-900/20 backdrop-blur-lg border border-white/5 rounded-3xl p-10 hover:bg-slate-900/40 hover:border-indigo-500/30 transition-all duration-500 cursor-pointer group no-underline block"
                            >
                                <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">{item.desc}</p>
                                <div className="flex items-center gap-3 text-indigo-400 font-bold group-hover:gap-5 transition-all">
                                    Initialize Node <ArrowRight size={20} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <RoadmapSection />
            <SupportSection />
        </div>
    );
};

export default Home;
