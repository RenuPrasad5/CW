import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle2, ShieldAlert, Maximize2, Info, Search, ExternalLink, Key, Lock, Activity, ShieldCheck, Fingerprint } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const SecuritySkeleton = () => (
    <div className="animate-in fade-in duration-500">
        {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="px-6 py-12 border-b border-slate-900/30">
                <div className="h-6 w-1/4 skeleton-pulse mb-4"></div>
                <div className="h-4 w-1/2 skeleton-pulse"></div>
            </div>
        ))}
    </div>
);

const SecurityHub = () => {
    const { address, isConnected } = useAccount();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <SecuritySkeleton />;

    const auditFeed = [
        { project: 'Uniswap v4', status: 'Verified', findings: '0', criticality: 'None', date: 'JAN_24', network: 'Ethereum' },
        { project: 'Aave v3', status: 'Verified', findings: '1', criticality: 'Low', date: 'FEB_24', network: 'Multi-Chain' },
        { project: 'Lido Finance', status: 'Verified', findings: '3', criticality: 'None', date: 'DEC_23', network: 'Ethereum' },
        { project: 'MakerDAO', status: 'Verified', findings: '0', criticality: 'None', date: 'MAR_24', network: 'Ethereum' },
        { project: 'EigenLayer', status: 'Verification_Active', findings: '8', criticality: 'Medium', date: 'MAR_24', network: 'Ethereum' },
        { project: 'Curve Finance', status: 'Verified', findings: '2', criticality: 'Low', date: 'JAN_24', network: 'Ethereum' },
        { project: 'Compound v3', status: 'Verified', findings: '0', criticality: 'None', date: 'FEB_24', network: 'Ethereum' },
        { project: 'Stargate v2', status: 'Verification_Active', findings: '5', criticality: 'Medium', date: 'APR_24', network: 'Omnichain' },
        { project: 'Morpho Blue', status: 'Verified', findings: '1', criticality: 'Low', date: 'MAR_24', network: 'Ethereum' },
        { project: 'Renzo Protocol', status: 'Critical', findings: '15', criticality: 'High', date: 'APR_24', network: 'Ethereum' },
    ];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Session Security Perimeter */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-white/[0.05]">
                <div className="py-8 px-6 border-r border-b md:border-b-0 border-white/[0.05]">
                    <div className="flex items-center gap-3 mb-6">
                        <Fingerprint size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Authority Interface</span>
                    </div>
                    <div className="mb-8 font-black">
                        <ConnectButton />
                    </div>
                    {isConnected ? (
                        <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                            <ShieldCheck size={14} /> Perimeter Established
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-amber-500 text-[10px] font-black uppercase tracking-widest">
                            <Activity size={14} className="animate-pulse" /> Awaiting Auth Signature
                        </div>
                    )}
                </div>

                <div className="py-8 px-6 border-r border-b md:border-b-0 border-white/[0.05] bg-white/[0.02]">
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldAlert size={16} className="text-rose-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Infinite Approvals Found</span>
                    </div>
                    <div className="text-3xl font-black text-white mb-2">{isConnected ? '4 Detected' : '--'}</div>
                    <p className="text-[10px] text-slate-600 font-bold uppercase mb-6 tracking-tight">Active permissions identified on tier-3 smart contracts.</p>
                    {isConnected && (
                        <a
                            href={`https://revoke.cash/address/${address}`}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] font-black text-rose-500 uppercase tracking-widest hover:text-rose-400 transition-colors"
                        >
                            Execute Revocation Protocol <ExternalLink size={12} />
                        </a>
                    )}
                </div>

                <div className="py-8 px-6 bg-white/[0.04]">
                    <div className="flex items-center gap-3 mb-4">
                        <Key size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Integrity Score</span>
                    </div>
                    <div className="text-3xl font-black text-white mb-2">92/100</div>
                    <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-4">
                        <div className="h-full bg-emerald-500" style={{ width: '92%' }}></div>
                    </div>
                </div>
            </div>

            {/* Protocol Integrity Stream - Continuous Hub View */}
            <div className="w-full">
                <div className="py-10 px-6 flex justify-between items-end border-b border-white/[0.05]">
                    <div>
                        <h2 className="text-sm font-black text-white uppercase tracking-widest mb-1">Protocol Integrity Stream</h2>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Real-time audit telemetry and vulnerability disclosure logs</p>
                    </div>
                    <div className="flex items-center gap-4 text-[9px] font-black text-slate-600 uppercase tracking-widest">
                        <span>Cluster: 0xAud_Sigma</span>
                        <div className="h-3 w-px bg-white/[0.1]"></div>
                        <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-500"></div> Sync Active</span>
                    </div>
                </div>

                <div className="overflow-x-auto border-b border-white/[0.05]">
                    <table className="terminal-table-edge w-full">
                        <thead>
                            <tr>
                                <th className="px-6">Protocol Identifier</th>
                                <th>Current Network</th>
                                <th>Integrity Status</th>
                                <th>Audit Observations</th>
                                <th>Verification Sig.</th>
                                <th className="px-6 text-right">Risk Vector</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auditFeed.map((audit, i) => (
                                <tr key={i} className={`hover:bg-white/[0.03] transition-colors border-b border-white/[0.02] last:border-0 ${audit.criticality === 'High' ? 'bg-rose-500/[0.03]' : ''}`}>
                                    <td className="px-6 py-6 font-black">
                                        <div className="flex items-center gap-4">
                                            {audit.criticality === 'High' && <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>}
                                            <div className="text-[13px] font-black text-white uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">
                                                {audit.project}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{audit.network}</span>
                                    </td>
                                    <td>
                                        <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${audit.status === 'Verified' ? 'text-emerald-500' :
                                            audit.status === 'Critical' ? 'text-rose-500' : 'text-amber-500'
                                            }`}>
                                            {audit.status === 'Verified' ? <CheckCircle2 size={12} /> :
                                                audit.status === 'Critical' ? <AlertTriangle size={12} /> :
                                                    <Activity size={12} className="animate-spin-slow" />}
                                            {audit.status}
                                        </div>
                                    </td>
                                    <td className="metric-mono text-slate-400 text-xs text-right md:text-left">
                                        {audit.findings} Vulnerabilities Logged
                                    </td>
                                    <td className="metric-mono text-slate-600 text-[10px] font-bold italic tracking-tighter hidden md:table-cell">
                                        {audit.date} // 0xSecAuth_{i + 100}
                                    </td>
                                    <td className="px-6 text-right">
                                        <div className={`inline-flex px-3 py-1 rounded-sm text-[9px] font-black uppercase tracking-widest ${audit.criticality === 'High' ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]' :
                                            audit.criticality === 'Medium' ? 'text-amber-500 border border-amber-500/20 bg-amber-500/5' :
                                                audit.criticality === 'Low' ? 'text-indigo-400 border border-indigo-500/20 bg-indigo-500/5' :
                                                    'text-slate-700 border border-white/[0.05]'
                                            }`}>
                                            {audit.criticality} RISK ADVISORY
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Managed Advisory Perimeter */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/[0.05] divide-x divide-white/[0.05]">
                <div className="py-10 px-6 hover:bg-white/[0.01] transition-colors group">
                    <div className="flex items-center gap-3 mb-6">
                        <Info size={16} className="text-indigo-400" />
                        <h3 className="text-[11px] font-black text-white uppercase tracking-widest">Protocol Metadata Clusters</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-bold tracking-tight mb-8">
                        Audit telemetry is sourced from multiple security standard clusters. Critical alerts are pushed
                        directly to the session autority with <span className="text-white">sub-50ms latency</span>.
                    </p>
                    <div className="flex items-center gap-6 text-[9px] font-black text-slate-700 uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> API_SYNC_ACTIVE</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> ORACLE_HEALTH_100%</span>
                    </div>
                </div>

                <div className="py-10 px-6 hover:bg-white/[0.01] transition-colors group">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield size={16} className="text-amber-500" />
                        <h3 className="text-[11px] font-black text-white uppercase tracking-widest">Global Risk Projections</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-bold tracking-tight mb-8">
                        Risk vectors are calculated based on TVL exposure, contract complexity, and historical audit frequency.
                        A <span className="text-white">Zero-Limit strategy</span> is recommended for all non-verified protocols.
                    </p>
                    <button className="text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-white transition-colors">
                        Expand Risk Disclosure Documents →
                    </button>
                </div>
            </div>

            <div className="h-20"></div>
        </div>
    );
};

export default SecurityHub;
