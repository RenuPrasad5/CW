import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Terminal, Lock, Mail, ShieldCheck, Globe, ArrowRight, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, logout } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(location.state?.message || '');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const userCredential = await login(formData.email, formData.password);
            const user = userCredential.user;

            // Strict: Block access if email is not verified
            if (!user.emailVerified) {
                setError("Terminal access denied. Please verify your email to authenticate.");
                await logout();
                setLoading(false);
                return;
            }

            // Persistence handled by context, but we navigate here
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);
            let msg = "Authentication failed. Please check your credentials.";
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                msg = "Invalid email or password.";
            } else if (error.code === 'auth/too-many-requests') {
                msg = "Too many failed attempts. Account temporarily locked.";
            }
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-background">
                <div className="glow-effect top-left"></div>
                <div className="glow-effect bottom-right"></div>
                <div className="animated-grid"></div>
            </div>

            <div className="login-card glass">
                <div className="login-card-header">
                    <div className="terminal-logo mb-6">
                        <Terminal size={48} className="text-indigo-500" />
                    </div>
                    <h1 className="text-3xl font-black text-white mb-2 tracking-tighter">Terminal Access</h1>
                    <p className="text-slate-400 font-medium leading-relaxed">Enter credentials to establish a secure link with the world intelligence system.</p>
                </div>

                {error && (
                    <div className="error-banner">
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-input-group">
                        <label>Email Interface</label>
                        <div className="login-input-wrapper">
                            <Mail className="input-icon" size={18} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="name@company.com"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="login-input-group">
                        <label>Security Key</label>
                        <div className="login-input-wrapper">
                            <Lock className="input-icon" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                placeholder="••••••••"
                                required
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-[11px] mb-8">
                        <label className="flex items-center gap-2 text-slate-500 cursor-pointer hover:text-slate-400">
                            <input type="checkbox" className="accent-indigo-500" /> Remember Session
                        </label>
                        <Link to="#" className="text-indigo-400 font-bold hover:underline">Revoke Access?</Link>
                    </div>

                    <button type="submit" className="login-submit h-12" disabled={loading}>
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                Authenticating...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Establish Link <ArrowRight size={18} />
                            </span>
                        )}
                    </button>
                </form>

                <div className="login-footer mt-10">
                    <p className="text-slate-500">Unregistered? <Link to="/register" className="text-indigo-400 font-bold hover:text-indigo-300">Initialize Identity</Link></p>
                </div>

                <div className="login-security-badges mt-8">
                    <div className="security-badge">
                        <ShieldCheck size={14} className="text-emerald-500" />
                        <span>Verified Auth</span>
                    </div>
                    <div className="security-badge">
                        <Globe size={14} className="text-indigo-400" />
                        <span>E2E Encrypted</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
