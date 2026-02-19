import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    BarChart3,
    Wrench,
    Users,
    ShieldCheck,
    Search,
    User,
    Menu,
    X,
    Bell,
    TrendingUp,
    Globe,
    FileSearch,
    Database,
    LineChart,
    Users2,
    CheckCircle,
    Layers as LayersIcon
} from 'lucide-react';
import logo from '../assets/logo.png';
import './Sidebar.css';

const Sidebar = ({ isOpen, setIsOpen }) => {

    const navItems = [
        { title: 'Terminal', icon: <Globe size={20} />, path: '/' },
        { title: 'Encyclopedia', icon: <Database size={20} />, path: '/encyclopedia' },
        { title: 'Protocol Research', icon: <FileSearch size={20} />, path: '/research' },
        { title: 'Blockchain Hub', icon: <LayersIcon size={20} />, path: '/blockchain-hub' },
        { title: 'Intelligence Hub', icon: <LineChart size={20} />, path: '/intelligence' },
        { title: 'Analysis Tools', icon: <Wrench size={20} />, path: '/tools' },
        { title: 'Peer Review', icon: <Users2 size={20} />, path: '/community' },
        { title: 'Trust Center', icon: <ShieldCheck size={20} />, path: '/trust' },
    ];

    return (
        <>
            <aside className={`sidebar glass ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-title">{item.title}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <NavLink to="/profile" className="user-short" onClick={() => setIsOpen(false)}>
                        <div className="avatar">K</div>
                        <div className="user-info">
                            <p className="username">Karthik</p>
                            <p className="user-tier">Pro Member</p>
                        </div>
                    </NavLink>
                </div>
            </aside>
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default Sidebar;
