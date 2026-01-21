import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
    Newspaper
} from 'lucide-react';
import logo from '../assets/logo.png';
import useModeStore from '../store/modeStore';
import './Navbar.css';

const Navbar = () => {
    const { mode: researchMode, setMode } = useModeStore();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isModeOpen, setIsModeOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const dropdownRef = useRef(null);
    const modeRef = useRef(null);
    const hamburgerRef = useRef(null);
    const notificationRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (modeRef.current && !modeRef.current.contains(event.target)) {
                setIsModeOpen(false);
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
        { title: 'Intelligence Hub', icon: <LineChart size={18} />, path: '/intelligence' },
        { title: 'Analysis Tools', icon: <Wrench size={18} />, path: '/tools' },
        { title: 'Peer Review', icon: <Users2 size={18} />, path: '/community' },
        { title: 'Trust Center', icon: <ShieldCheck size={18} />, path: '/trust' },
        { title: 'News', icon: <Newspaper size={18} />, path: '/news' },
        { title: 'About Us', icon: <Info size={18} />, path: '/about' },
        { title: 'Settings', icon: <Settings size={18} />, path: '/profile' },
    ];

    const notifications = [
        { id: 1, title: 'Security Alert', message: 'New login from Mumbai, India', time: '2m ago', icon: <AlertCircle size={16} className="text-red" /> },
        { id: 2, title: 'Research Node', message: 'Solana v1.18 update verified', time: '1h ago', icon: <Info size={16} className="text-blue" /> },
        { id: 3, title: 'Network Pulse', message: 'Congestion detected on Ethereum', time: '3h ago', icon: <Activity size={16} className="text-amber" /> },
    ];

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
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className="hamburger-item"
                                    onClick={() => setIsHamburgerOpen(false)}
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
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
                    <button className="nav-link-btn">Service</button>
                    <NavLink to="/news" className="nav-link-btn">News</NavLink>
                    <NavLink to="/about" className="nav-link-btn">About Us</NavLink>
                </nav>

                <div className="research-mode-container" ref={modeRef}>
                    <button className="mode-trigger glass" onClick={() => setIsModeOpen(!isModeOpen)}>
                        <span className="mode-label">Mode:</span>
                        <span className="mode-value">{researchMode}</span>
                        <ChevronDown size={14} className={isModeOpen ? 'rotate' : ''} />
                    </button>
                    {isModeOpen && (
                        <div className="mode-dropdown glass active">
                            {modes.map(mode => (
                                <button
                                    key={mode.name}
                                    className={`mode-item ${researchMode === mode.name ? 'active' : ''}`}
                                    onClick={() => {
                                        setMode(mode.name);
                                        setIsModeOpen(false);
                                    }}
                                >
                                    {mode.icon}
                                    {mode.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

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
                        <button
                            className="profile-trigger-new"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <div className="profile-avatar-circle premium-avatar">
                                <User size={18} />
                            </div>
                            <div className="profile-info-nav">
                                <span className="profile-name-nav">Karthik</span>
                                <ChevronDown size={14} className={`dropdown-arrow ${isDropdownOpen ? 'rotate' : ''}`} />
                            </div>
                        </button>

                        {isDropdownOpen && (
                            <div className="profile-dropdown glass active">
                                <div className="dropdown-header">
                                    <p className="user-name">Karthik</p>
                                    <p className="user-email">karthik.p@cryptoworld.inc</p>
                                </div>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item">
                                    <User size={16} /> Profile
                                </button>
                                <button className="dropdown-item">
                                    <Settings size={16} /> Settings
                                </button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item logout">
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
