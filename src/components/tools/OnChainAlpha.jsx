import React, { useState, useEffect } from 'react';
import { Database, TrendingUp, UserCheck, Repeat, Zap, Globe, ArrowUpDown, ChevronRight, Activity, Bell, Layers, Clock, TrendingDown } from 'lucide-react';

const SignalSkeleton = () => (
    <div className="animate-in fade-in duration-500">
        {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="px-6 py-12 border-b border-slate-900/30">
                <div className="h-6 w-1/4 skeleton-pulse mb-4"></div>
                <div className="h-4 w-1/2 skeleton-pulse"></div>
            </div>
        ))}
    </div>
);

const OnChainAlpha = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <SignalSkeleton />;

    // Institutional composite data for top 15 ecosystems
    const chains = [
        { name: 'Ethereum', tvl: '54.2B', inflow: '+1.2B', activity: 98, trend: '+4.2%', share: 100, vector: 'Expansion' },
        { name: 'Solana', tvl: '8.4B', inflow: '+840M', activity: 95, trend: '+12.1%', share: 15.5, vector: 'Velocity_High' },
        { name: 'Bitcoin', tvl: '2.1B', inflow: '+120M', activity: 82, trend: '+2.4%', share: 3.8, vector: 'Steady' },
        { name: 'BSC', tvl: '5.1B', inflow: '-240M', activity: 88, trend: '-1.2%', share: 9.4, vector: 'Consolidation' },
        { name: 'Arbitrum', tvl: '3.8B', inflow: '+180M', activity: 92, trend: '+3.1%', share: 7.0, vector: 'Expansion' },
        { name: 'Base', tvl: '2.4B', inflow: '+320M', activity: 96, trend: '+18.4%', share: 4.4, vector: 'Velocity_Max' },
        { name: 'Optimism', tvl: '1.9B', inflow: '+45M', activity: 84, trend: '+0.8%', share: 3.5, vector: 'Steady' },
        { name: 'Avalanche', tvl: '1.2B', inflow: '-12M', activity: 76, trend: '-0.4%', share: 2.2, vector: 'Neutral' },
        { name: 'Polygon', tvl: '0.9B', inflow: '-85M', activity: 74, trend: '-2.1%', share: 1.6, vector: 'Reduced' },
        { name: 'Tron', tvl: '8.1B', inflow: '+42M', activity: 68, trend: '+0.2%', share: 14.9, vector: 'Yield_Target' },
        { name: 'zkSync', tvl: '0.4B', inflow: '+18M', activity: 72, trend: '+1.4%', share: 0.7, vector: 'Early_Cycle' },
        { name: 'Linea', tvl: '0.5B', inflow: '+24M', activity: 70, trend: '+2.2%', share: 0.9, vector: 'Expansion' },
        { name: 'Blast', tvl: '1.4B', inflow: '+110M', activity: 78, trend: '+5.6%', share: 2.5, vector: 'Sentiment_High' },
        { name: 'Mantle', tvl: '0.3B', inflow: '+9M', activity: 62, trend: '+0.9%', share: 0.5, vector: 'Strategic' },
        { name: 'Sui', tvl: '0.8B', inflow: '+160M', activity: 90, trend: '+24.5%', share: 1.4, vector: 'Velocity_High' },
    ].sort((a, b) => {
        // Simple composite score: (activity * 0.4) + (trend parseFloat * 0.6) - just to demonstrate ranking logic
        const getScore = (c) => (c.activity * 0.4) + (parseFloat(c.trend) * 10);
        return getScore(b) - getScore(a);
    });

    const WhaleAlerts = [
        { wallet: '0x88e...41d', type: 'Exchange Deposit', amt: '12,452 ETH', time: '2m ago', risk: 'High' },
        { wallet: '0x34a...92b', type: 'Protocol Withdrawal', amt: '$42M USDC', time: '8m ago', risk: 'Low' },
        { wallet: 'vitalik.eth', type: 'DEX Swap', amt: '4,500 ETH', time: '1h ago', risk: 'Neutral' },
        { wallet: 'JumpTrading', type: 'Liquidation Event', amt: '$12.4M', time: '2h ago', risk: 'Extreme' },
        { wallet: 'Cumberland', type: 'OTC Settlement', amt: '1,200 BTC', time: '3h ago', risk: 'High' },
    ];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Real-time KPI Stream */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-slate-900/40">
                {[
                    { label: 'Network Velocity', val: '8.4M TPS', status: 'Optimal', icon: Zap, color: 'text-indigo-400' },
                    { label: 'Whale Netflow', val: '+$1.42B', status: 'Accumulation', icon: Repeat, color: 'text-emerald-500' },
                    { label: 'Ecosystem Growth', val: '+24.8%', status: 'Expansion', icon: Activity, color: 'text-emerald-500' },
                    { label: 'Bridge Volume', val: '$842M', status: 'High Traffic', icon: Layers, color: 'text-white' },
                ].map((kpi, i) => (
                    <div key={i} className="p-10 border-r last:border-r-0 border-slate-900/40 hover:bg-slate-900/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <kpi.icon size={16} className="text-slate-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{kpi.label}</span>
                        </div>
                        <div className="text-3xl font-black text-white mb-2">{kpi.val}</div>
                        <div className={`text-[11px] font-bold ${kpi.color}`}>
                            Current State: {kpi.status}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-x divide-slate-900/40 border-b border-slate-900/40">
                {/* Ecosystem Liquidity Matrix - Continuous Stream (8 columns) */}
                <div className="lg:col-span-8 px-0 border-b lg:border-b-0">
                    <div className="p-12 pb-8">
                        <h2 className="text-sm font-black text-white uppercase tracking-widest mb-1">Ecosystem Liquidity Matrix</h2>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Chain-level concentration and flow vectors</p>
                    </div>

                    <table className="terminal-table-edge w-full">
                        <thead>
                            <tr>
                                <th className="pl-12 w-16">Rank</th>
                                <th>Blockchain Network</th>
                                <th>Asset Concentration (TVL)</th>
                                <th>Net Flow (24h)</th>
                                <th>Liquidity Share</th>
                                <th className="pr-12 text-right">State Vector</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chains.map((chain, i) => (
                                <tr key={i} className="hover:bg-slate-900/40 transition-colors border-b border-slate-900/20 last:border-0">
                                    <td className="pl-12 metric-mono text-slate-500 text-xs">#{i + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded bg-slate-950 border border-slate-900 flex items-center justify-center font-black text-indigo-400 text-[10px]">
                                                {chain.name[0]}
                                            </div>
                                            <div>
                                                <div className="text-[13px] font-black text-white uppercase tracking-tighter">{chain.name}</div>
                                                <div className="text-[9px] text-slate-600 font-black uppercase tracking-widest">{chain.trend} Trend</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="metric-mono text-white font-bold">${chain.tvl}</td>
                                    <td className={`metric-mono font-bold ${chain.inflow.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {chain.inflow}
                                    </td>
                                    <td className="w-48">
                                        <div className="h-1 w-full bg-slate-950 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${parseFloat(chain.trend) > 5 ? 'bg-indigo-500' : 'bg-slate-700'}`}
                                                style={{ width: `${chain.share}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                    <td className="pr-12 text-right">
                                        <div className={`text-[10px] font-black inline-flex items-center gap-1.5 uppercase ${chain.vector.includes('High') || chain.vector.includes('Max') || chain.vector === 'Expansion' ? 'text-emerald-500' :
                                                chain.vector === 'Reduced' ? 'text-rose-500' : 'text-slate-500'
                                            }`}>
                                            {chain.vector}
                                            {chain.inflow.startsWith('+') ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Live Whale Stream (4 columns) */}
                <div className="lg:col-span-4 p-0 bg-slate-900/5">
                    <div className="p-12 pb-8 flex justify-between items-center">
                        <div>
                            <h3 className="text-[11px] font-black text-white uppercase tracking-widest">Live Flow Intelligence</h3>
                            <p className="text-[9px] text-slate-500 font-bold uppercase mt-1">Institutional scale wallet movements</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] font-black text-rose-500 uppercase tracking-widest animate-pulse">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> LIVE
                        </div>
                    </div>

                    <div className="divide-y divide-slate-900/40">
                        {WhaleAlerts.map((alert, i) => (
                            <div key={i} className="p-10 hover:bg-slate-900/20 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="metric-mono text-[11px] text-indigo-400 font-bold border-b border-indigo-500/30">{alert.wallet}</span>
                                    <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">{alert.time}</span>
                                </div>
                                <div className="text-2xl font-black text-white mb-3 group-hover:text-indigo-400 transition-colors">{alert.amt}</div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Repeat size={14} className="text-slate-500" />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{alert.type}</span>
                                    </div>
                                    <div className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${alert.risk === 'Extreme' ? 'bg-rose-600 text-white' :
                                            alert.risk === 'High' ? 'text-rose-500 border border-rose-500/20' :
                                                'text-slate-600 border border-slate-900'
                                        }`}>
                                        {alert.risk} IMPACT
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Sector: Combined Yield/Unlocks View */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-slate-900/40 border-b border-slate-900/40">
                <div className="p-12">
                    <div className="flex items-center gap-3 mb-10">
                        <Zap size={18} className="text-amber-500" />
                        <h3 className="text-sm font-black text-white uppercase tracking-widest">Alpha Yield Opportunities</h3>
                    </div>
                    <div className="space-y-2">
                        {[
                            { platform: 'Aave v3', asset: 'USDC', apy: '8.24', tvl: '1.24B' },
                            { platform: 'Lido Finance', asset: 'stETH', apy: '3.85', tvl: '22.1B' },
                            { platform: 'Ether.fi', asset: 'weETH', apy: '4.12', tvl: '4.2B' },
                            { platform: 'Ethena', asset: 'sUSDe', apy: '12.45', tvl: '2.8B' },
                        ].map((opp, i) => (
                            <div key={i} className="flex items-center gap-6 p-6 hover:bg-slate-900/20 transition-colors group border-b border-slate-900/10 last:border-0">
                                <div className="w-10 h-10 rounded bg-slate-950 border border-slate-900 flex items-center justify-center font-black text-indigo-400">
                                    {opp.platform[0]}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[13px] font-black text-white uppercase group-hover:text-indigo-400 transition-colors">{opp.platform}</span>
                                        <span className="text-indigo-400 font-extrabold text-lg">{opp.apy}%</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                        <span>{opp.asset} Strategy</span>
                                        <span>TVL: ${opp.tvl}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-12">
                    <div className="flex items-center gap-3 mb-10">
                        <Clock size={18} className="text-slate-400" />
                        <h3 className="text-sm font-black text-white uppercase tracking-widest">Asset Release Schedule</h3>
                    </div>
                    <div className="space-y-2">
                        {[
                            { project: 'Arbitrum', ticker: 'ARB', amount: '1.2B', date: 'MAR 2024', pct: 15.2 },
                            { project: 'Starknet', ticker: 'STRK', amount: '64M', date: 'APR 2024', pct: 4.2 },
                            { project: 'Celestia', ticker: 'TIA', amount: '175M', date: 'OCT 2024', pct: 12.8 },
                            { project: 'Optimism', ticker: 'OP', amount: '31M', date: 'MAY 2024', pct: 2.1 },
                        ].map((u, i) => (
                            <div key={i} className="flex items-center gap-6 p-6 border-b border-slate-900/10 last:border-0 hover:bg-slate-900/20 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                <div className="flex-1 flex items-center justify-between">
                                    <div>
                                        <div className="text-[13px] font-black text-white uppercase tracking-tighter">{u.project}</div>
                                        <div className="text-[10px] text-slate-600 font-bold uppercase">{u.date} RELEASE</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="metric-mono text-sm text-white font-bold">{u.amount} {u.ticker}</div>
                                        <div className="text-[10px] text-rose-500 font-black uppercase tracking-tighter">{u.pct}% OF SUPPLY</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-20"></div>
        </div>
    );
};

export default OnChainAlpha;
