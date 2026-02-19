import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
    Bell,
    Menu,
    User,
    Settings,
    LogOut,
    ChevronDown,
    Zap,
    BarChart3,
    Code2,
    Wallet2,
    Globe,
    Database,
    FileSearch,
    LineChart,
    Wrench,
    Users2,
    ShieldCheck,
    ArrowLeft,
    AlertCircle,
    Info,
    Activity,
    Newspaper,
    HelpCircle,
    Layers as LayersIcon,
    Share2
} from 'lucide-react';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, userData, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const dropdownRef = useRef(null);
    const hamburgerRef = useRef(null);
    const notificationRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                setIsHamburgerOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsNotificationOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const modes = [
        { name: 'Beginner', icon: <Zap size={14} /> },
        { name: 'Analyst', icon: <BarChart3 size={14} /> },
        { name: 'Developer', icon: <Code2 size={14} /> },
        { name: 'Investor', icon: <Wallet2 size={14} /> }
    ];

    const navItems = [
        { title: 'Terminal', icon: <Globe size={18} />, path: '/' },
        { title: 'Encyclopedia', icon: <Database size={18} />, path: '/encyclopedia' },
        { title: 'Protocol Research', icon: <FileSearch size={18} />, path: '/research' },
        { title: 'Blockchain Hub', icon: <LayersIcon size={18} />, path: '/blockchain-hub' },
        { title: 'Intelligence Hub', icon: <LineChart size={18} />, path: '/intelligence' },
        { title: 'Analysis Tools', icon: <Wrench size={18} />, path: '/tools' },
        { title: 'Peer Review', icon: <Users2 size={18} />, path: '/community' },
        { title: 'Trust Center', icon: <ShieldCheck size={18} />, path: '/trust' },
        { title: 'News', icon: <Newspaper size={18} />, path: '/news' },
        { title: 'Blockchain', icon: <HelpCircle size={18} />, path: '/blockchain-hub' },
        { title: 'About Us', icon: <Info size={18} />, path: '/about' },
        { title: 'Settings', icon: <Settings size={18} />, path: '/settings' },
    ];

    const notifications = [
        { id: 1, title: 'Security Alert', message: 'New login detected', time: '2m ago', icon: <AlertCircle size={16} className="text-red" /> },
        { id: 2, title: 'Research Node', message: 'Solana v1.18 update verified', time: '1h ago', icon: <Info size={16} className="text-blue" /> },
        { id: 3, title: 'Network Pulse', message: 'Congestion detected on Ethereum', time: '3h ago', icon: <Activity size={16} className="text-amber" /> },
    ];

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
            setIsDropdownOpen(false);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleNavigate = (path) => {
        navigate(path);
        setIsDropdownOpen(false);
    };

    return (
        <header className="navbar glass">
            <div className="navbar-left">
                <div className="hamburger-container" ref={hamburgerRef}>
                    <button className="menu-btn visible" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
                        <Menu size={24} />
                    </button>
                    {isHamburgerOpen && (
                        <div className="hamburger-dropdown glass active">
                            {navItems.map((item) => (
                                item.path.includes('#') ? (
                                    <HashLink
                                        key={item.path}
                                        to={item.path}
                                        className="hamburger-item"
                                        onClick={() => setIsHamburgerOpen(false)}
                                    >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </HashLink>
                                ) : (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className="hamburger-item"
                                        onClick={() => setIsHamburgerOpen(false)}
                                    >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                )
                            ))}
                        </div>
                    )}
                </div>
                <div className="nav-brand">
                    <img src={logo} alt="CryptoWorld Logo" className="logo-circular-nav" />
                    <span className="brand-text-nav">Crypto World</span>
                </div>
            </div>

            <div className="navbar-center">
            </div>

            <div className="navbar-right">
                <nav className="nav-links-desktop">
                    <NavLink to="/blockchain-hub" className="nav-link-btn">Blockchain</NavLink>
                    <NavLink to="/news" className="nav-link-btn">News</NavLink>
                    <NavLink to="/about" className="nav-link-btn">About Us</NavLink>
                </nav>



                <div className="icon-group">

                    <div className="notification-container" ref={notificationRef}>
                        <button className="icon-btn" onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                            <Bell size={20} />
                            <span className="notification-dot"></span>
                        </button>
                        {isNotificationOpen && (
                            <div className="notification-dropdown glass active">
                                <div className="dropdown-header">
                                    <h3>Notifications</h3>
                                    <span className="mark-read">Mark all as read</span>
                                </div>
                                <div className="notification-list">
                                    {notifications.map(note => (
                                        <div key={note.id} className="notification-item">
                                            <div className="note-icon-wrap">
                                                {note.icon}
                                            </div>
                                            <div className="note-content">
                                                <p className="note-title">{note.title}</p>
                                                <p className="note-msg">{note.message}</p>
                                                <span className="note-time">{note.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="dropdown-footer">
                                    <button className="view-all">View All Activity</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="profile-container-nav" ref={dropdownRef}>
                        {user ? (
                            <>
                                <button
                                    className="profile-trigger-new"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <div className="profile-avatar-circle premium-avatar">
                                        {userData?.photoURL ? (
                                            <img src={userData.photoURL} alt="Profile" className="nav-avatar-img" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                        ) : (
                                            <span className="text-[12px] font-bold">{userData?.name?.[0] || user?.email?.[0] || 'U'}</span>
                                        )}
                                    </div>
                                    <div className="profile-info-nav">
                                        <span className="profile-name-nav">{userData?.name?.split(' ')[0] || 'User'}</span>
                                        <ChevronDown size={14} className={`dropdown-arrow ${isDropdownOpen ? 'rotate' : ''}`} />
                                    </div>
                                </button>

                                {isDropdownOpen && (
                                    <div className="profile-dropdown glass active">
                                        <div className="dropdown-header">
                                            <p className="user-name">{userData?.name || 'User Profile'}</p>
                                            <p className="user-email">{user?.email}</p>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <button className="dropdown-item" onClick={() => handleNavigate('/profile')}>
                                            <User size={16} /> Profile
                                        </button>
                                        <button className="dropdown-item" onClick={() => handleNavigate('/settings')}>
                                            <Settings size={16} /> Settings
                                        </button>
                                        <div className="dropdown-divider"></div>
                                        <button className="dropdown-item logout" onClick={handleLogout}>
                                            <LogOut size={16} /> Logout
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <button className="btn-primary-nav" onClick={() => navigate('/login')}>
                                <Zap size={14} /> Connect
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
