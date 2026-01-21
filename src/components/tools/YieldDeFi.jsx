import React, { useState, useEffect } from 'react';
import { Zap, Clock, ShieldCheck, Coins, ArrowUpRight, ChevronRight, Activity, Percent } from 'lucide-react';

const YieldSkeleton = () => (
    <div className="animate-in fade-in duration-500 w-full">
        {[1, 2, 3].map(i => (
            <div key={i} className="signal-row py-8">
                <div className="w-10 h-10 skeleton-pulse rounded-lg"></div>
                <div className="flex-1 space-y-2">
                    <div className="h-4 w-1/4 skeleton-pulse"></div>
                    <div className="h-3 w-1/2 skeleton-pulse"></div>
                </div>
            </div>
        ))}
    </div>
);

const YieldDeFi = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <YieldSkeleton />;

    const opportunities = [
        { platform: 'Aave v3', asset: 'USDC', apy: '8.24', risk: 'Low', tvl: '1.24B' },
        { platform: 'Lido', asset: 'stETH', apy: '3.85', risk: 'Low', tvl: '22.1B' },
        { platform: 'GMX', asset: 'GLP', apy: '14.12', risk: 'Mid', tvl: '452M' },
        { platform: 'Curve', asset: 'crvUSD', apy: '11.45', risk: 'Low', tvl: '85M' },
    ];

    const unlocks = [
        { project: 'Arbitrum', ticker: 'ARB', amount: '1.2B', date: 'Mar 16, 2024', percentage: 15.2, impact: 'High' },
        { project: 'Aptos', ticker: 'APT', amount: '24.8M', date: 'Feb 11, 2024', percentage: 2.1, impact: 'Low' },
        { project: 'Starknet', ticker: 'STRK', amount: '64M', date: 'Apr 15, 2024', percentage: 4.2, impact: 'Mid' },
    ];

    return (
        <div className="animate-in slide-in-from-bottom-4 duration-700">
            {/* Yield Shields & High Level Intelligence */}
            <div className="terminal-row-container">
                <div className="signal-row">
                    <div className="signal-icon-box text-emerald-500 bg-emerald-500/5"><ShieldCheck size={18} /></div>
                    <div className="signal-content">
                        <div className="signal-info">
                            <h4 className="signal-title">Yield Shield v2.4 Active</h4>
                            <p className="signal-summary">Real-time contract audit verification and oracle deviation monitoring enabled.</p>
                        </div>
                        <div className="signal-metrics">
                            <div className="metric-v2">
                                <span className="metric-v2-label">Security Score</span>
                                <span className="metric-v2-value text-emerald-500">98/100</span>
                            </div>
                            <div className="metric-v2">
                                <span className="metric-v2-label">Alert Sensitivity</span>
                                <span className="metric-v2-value text-white">Institutional</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="signal-row">
                    <div className="signal-icon-box text-amber-500 bg-amber-500/5"><Coins size={18} /></div>
                    <div className="signal-content">
                        <div className="signal-info">
                            <h4 className="signal-title">Aggregated Vault TVL</h4>
                            <p className="signal-summary">Consolidated liquidity across all high-conviction yield strategies.</p>
                        </div>
                        <div className="signal-metrics">
                            <div className="metric-v2">
                                <span className="metric-v2-label">Aggregate TVL</span>
                                <span className="metric-v2-value text-white">$24.89B</span>
                            </div>
                            <div className="metric-v2">
                                <span className="metric-v2-label">Vault Utilization</span>
                                <span className="metric-v2-value text-indigo-400">82.1%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Yield Opportunities Matrix */}
            <div className="w-full">
                <div className="px-6 py-4 bg-slate-900/40 border-b border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Zap size={16} className="text-amber-500" />
                        <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Alpha_Yield_Vaults.Matrix</h3>
                    </div>
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest italic">Filters: APY {'>'} 3% | Audit Verified</span>
                </div>
                <table className="terminal-table-edge">
                    <thead>
                        <tr>
                            <th>Platform Identifier</th>
                            <th>Vault Asset</th>
                            <th>Realized APY</th>
                            <th>Platform TVL</th>
                            <th>Risk Vector</th>
                        </tr>
                    </thead>
                    <tbody>
                        {opportunities.map((opp, i) => (
                            <tr key={i}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded bg-slate-900 border border-slate-800 flex items-center justify-center font-black text-amber-500 text-[10px]">
                                            {opp.platform[0]}
                                        </div>
                                        <span className="text-[13px] font-black text-white uppercase tracking-tighter">{opp.platform}</span>
                                    </div>
                                </td>
                                <td className="font-mono text-slate-300 font-bold uppercase text-[11px]">{opp.asset}</td>
                                <td className="text-[14px] font-black text-white tracking-tighter">{opp.apy}%</td>
                                <td className="font-mono text-slate-500 font-bold italic text-[11px]">${opp.tvl}</td>
                                <td>
                                    <div className="inline-flex px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                        {opp.risk} Risk
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Token Unlocks System */}
            <div className="mt-8">
                <div className="px-6 py-4 bg-slate-900/40 border-b border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Clock size={16} className="text-indigo-400" />
                        <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Inflation_Monitor: Unlocks.exe</h3>
                    </div>
                    <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Global Schedule Sync</span>
                </div>
                <table className="terminal-table-edge">
                    <thead>
                        <tr>
                            <th>Ecosystem Asset</th>
                            <th>Allocation Volume</th>
                            <th>Event Timeline</th>
                            <th>Supply Shock %</th>
                            <th>Market Influence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unlocks.map((u, i) => (
                            <tr key={i}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-black text-slate-600 text-[9px]">
                                            {u.ticker[0]}
                                        </div>
                                        <span className="text-[12px] font-black text-white uppercase tracking-tighter">{u.project}</span>
                                    </div>
                                </td>
                                <td className="font-mono text-xs">
                                    <span className="text-white font-bold">{u.amount} {u.ticker}</span>
                                </td>
                                <td className="text-slate-500 font-bold italic text-[11px] uppercase">{u.date}</td>
                                <td className="text-indigo-400 font-black text-[13px] tracking-tighter">{u.percentage}%</td>
                                <td>
                                    <div className={`inline-flex px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter ${u.impact === 'High' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' :
                                            u.impact === 'Mid' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                                'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                        }`}>
                                        {u.impact} IMPACT
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="h-20"></div>
        </div>
    );
};

export default YieldDeFi;
