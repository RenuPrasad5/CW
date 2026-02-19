import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Settings as SettingsIcon, Bell, Shield, Eye, Globe, User, Activity } from 'lucide-react';
import './Settings.css';

const Settings = () => {
    const { user, userData } = useAuth();
    const [activeTab, setActiveTab] = useState('Account');

    const tabs = [
        { name: 'Account', icon: <User size={18} /> },
        { name: 'Security', icon: <Shield size={18} /> },
        { name: 'Notifications', icon: <Bell size={18} /> },
        { name: 'Appearance', icon: <Eye size={18} /> },
        { name: 'Network', icon: <Globe size={18} /> }
    ];

    return (
        <div className="settings-page">
            <div className="terminal-container">
                <header className="settings-header">
                    <div className="settings-title-wrap">
                        <SettingsIcon size={32} className="text-indigo-500" />
                        <div>
                            <h1>System Configuration</h1>
                            <p>Configure your terminal parameters and security protocols.</p>
                        </div>
                    </div>
                </header>

                <div className="settings-layout">
                    <aside className="settings-sidebar">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                className={`settings-tab-btn ${activeTab === tab.name ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                {tab.icon}
                                <span>{tab.name}</span>
                            </button>
                        ))}
                    </aside>

                    <main className="settings-content glass">
                        <section className="settings-section">
                            <h2 className="section-title">{activeTab} Parameters</h2>
                            <div className="divider"></div>

                            {activeTab === 'Account' && (
                                <div className="settings-grid">
                                    <div className="settings-item">
                                        <label>Display Identity</label>
                                        <input type="text" defaultValue={userData?.name || 'User'} className="settings-input" />
                                    </div>
                                    <div className="settings-item">
                                        <label>Email Interface</label>
                                        <input type="email" value={user?.email || ''} disabled className="settings-input disabled" />
                                    </div>
                                    <div className="settings-item">
                                        <label>Role Clearance</label>
                                        <div className="role-badge">{userData?.role || 'User'}</div>
                                    </div>
                                </div>
                            )}

                            {activeTab !== 'Account' && (
                                <div className="placeholder-content">
                                    <Activity size={48} className="text-slate-800 mb-4" />
                                    <p>Module encryption in progress. Additional parameters will be available in future patches.</p>
                                </div>
                            )}

                            <div className="settings-actions">
                                <button className="btn-secondary">Reset Defaults</button>
                                <button className="btn-primary">Apply Configuration</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Settings;
