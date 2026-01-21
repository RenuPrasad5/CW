import React from 'react';
import {
    User,
    Settings,
    Award,
    BookOpen,
    History,
    Shield,
    Bell,
    LogOut,
    ChevronRight,
    Star,
    CheckCircle2,
    Clock,
    Flame
} from 'lucide-react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container fade-in">
            <header className="page-header">
                <div className="page-title-group">
                    <div className="badge grad-primary">User Profile</div>
                    <h1>Your Professional Identity</h1>
                    <p>Manage your account, track certifications, and security settings.</p>
                </div>
            </header>

            <div className="profile-layout">
                <aside className="profile-sidebar">
                    <div className="profile-main-card glass">
                        <div className="profile-avatar-large">
                            <div className="avatar-content">K</div>
                            <div className="status-indicator"></div>
                        </div>
                        <h2>Karthik</h2>
                        <span className="user-email">karthik.p@cryptoworld.inc</span>
                        <div className="user-membership-badge">
                            <Star size={14} fill="currentColor" /> Pro Member
                        </div>
                        <div className="profile-stats-mini">
                            <div className="p-stat">
                                <span className="p-val">4.5k</span>
                                <span className="p-lbl">Reputation</span>
                            </div>
                            <div className="p-stat">
                                <span className="p-val">12</span>
                                <span className="p-lbl">Certs</span>
                            </div>
                            <div className="p-stat">
                                <span className="p-val">28</span>
                                <span className="p-lbl">Streak</span>
                            </div>
                        </div>
                        <button className="btn-primary-full">Edit Profile</button>
                    </div>

                    <div className="profile-menu-groups">
                        <div className="menu-group glass">
                            <button className="menu-item active">
                                <User size={18} /> Account Info
                            </button>
                            <button className="menu-item">
                                <Bell size={18} /> Notifications
                                <span className="menu-badge">3</span>
                            </button>
                            <button className="menu-item">
                                <Shield size={18} /> Security
                            </button>
                        </div>
                        <div className="menu-group glass">
                            <button className="menu-item">
                                <Settings size={18} /> Preferences
                            </button>
                            <button className="menu-item logout">
                                <LogOut size={18} /> Logout
                            </button>
                        </div>
                    </div>
                </aside>

                <main className="profile-main-content">
                    <div className="profile-sections">
                        <section className="profile-section glass">
                            <div className="section-head">
                                <h3><Award size={20} color="var(--accent-gold)" /> Verified Certificates</h3>
                                <button className="text-btn">View All</button>
                            </div>
                            <div className="cert-grid">
                                {[
                                    { title: 'DeFi Architecture Specialist', date: 'Jan 2024', level: 'Advanced' },
                                    { title: 'Blockchain Security Associate', date: 'Dec 2023', level: 'Intermediate' },
                                    { title: 'ZK-Proof Implementation', date: 'Nov 2023', level: 'Expert' }
                                ].map((cert, idx) => (
                                    <div key={idx} className="cert-card">
                                        <div className="cert-icon">
                                            <CheckCircle2 size={24} color="#10b981" />
                                        </div>
                                        <div className="cert-info">
                                            <h4>{cert.title}</h4>
                                            <p>{cert.date} • {cert.level}</p>
                                        </div>
                                        <button className="btn-icon"><ChevronRight size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="secondary-sections">
                            <section className="profile-section glass learning-history">
                                <div className="section-head">
                                    <h3><History size={20} color="var(--primary)" /> Recent Activity</h3>
                                </div>
                                <div className="activity-list">
                                    {[
                                        { action: 'Completed', target: 'L2 Scaling Deep Dive', time: '2h ago' },
                                        { action: 'Joined', target: 'Governance Discussion', time: '5h ago' },
                                        { action: 'Updated', target: 'Portfolio Tracker', time: '1d ago' },
                                        { action: 'Earned', target: 'Research Badge', time: '2d ago' }
                                    ].map((act, idx) => (
                                        <div key={idx} className="activity-item">
                                            <div className="act-dot"></div>
                                            <div className="act-content">
                                                <p><strong>{act.action}</strong> {act.target}</p>
                                                <span>{act.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="profile-section glass goals-card">
                                <div className="section-head">
                                    <h3><Flame size={20} color="#f97316" /> Monthly Goals</h3>
                                </div>
                                <div className="goals-progress">
                                    <div className="goal-item">
                                        <div className="goal-info">
                                            <span>Articles Read</span>
                                            <span>8/10</span>
                                        </div>
                                        <div className="p-bar"><div className="p-fill" style={{ width: '80%' }}></div></div>
                                    </div>
                                    <div className="goal-item">
                                        <div className="goal-info">
                                            <span>Quiz Accuracy</span>
                                            <span>92%</span>
                                        </div>
                                        <div className="p-bar"><div className="p-fill" style={{ width: '92%', background: '#10b981' }}></div></div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;
