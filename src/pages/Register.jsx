import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, Mail, User, CheckCircle, ShieldCheck, Zap, Phone, ArrowRight, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const { signup, logout } = useAuth(); // Added logout

    // State
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!acceptedTerms) {
            setError("You must accept the terms and conditions");
            return;
        }

        setLoading(true);
        try {
            // 1. Create account & Send Verification (Handled in context)
            await signup(formData.email, formData.password, {
                name: formData.fullName,
                role: 'user'
            });

            // 2. Immediately sign out to enforce manual login after verification
            await logout();

            setSuccess(true);
            // Automatic redirect after 10 seconds
            setTimeout(() => navigate('/login'), 10000);
        } catch (error) {
            console.error(error);
            const msg = error.code === 'auth/email-already-in-use'
                ? 'Email is already registered.'
                : error.message;
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="register-container">
                <div className="register-form-section" style={{ flex: 1, textAlign: 'center' }}>
                    <div className="success-card glass" style={{ maxWidth: '500px', margin: '0 auto', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="success-icon-wrap" style={{ width: '80px', height: '80px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <CheckCircle size={40} color="#10b981" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-4">Verification Sent</h2>
                        <p className="text-slate-400 font-medium leading-relaxed mb-10">
                            An activation link has been dispatched to <span className="text-indigo-400 font-bold">{formData.email}</span>.<br />
                            Verify your identity to unlock terminal access.
                        </p>
                        <Link to="/login" className="btn-primary" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', gap: '8px' }}>
                            Proceed to Login <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="register-container">
            <div className="register-split">
                <div className="register-visual">
                    <div className="visual-overlay"></div>
                    <div className="visual-content">
                        <div className="brand-badge">
                            <ShieldCheck size={20} />
                            <span>Institutional Intelligence</span>
                        </div>
                        <h1 className="visual-title">Join the <span className="grad-text">Network</span></h1>
                        <p className="visual-subtitle">Simplified access to the world's most advanced crypto knowledge ecosystem.</p>

                        <div className="trust-badges">
                            <div className="trust-item">
                                <div className="trust-icon"><Shield size={18} /></div>
                                <span>Zero-Knowledge Policy</span>
                            </div>
                            <div className="trust-item">
                                <div className="trust-icon"><Lock size={18} /></div>
                                <span>Military-Grade Auth</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="register-form-section">
                    <div className="form-header">
                        <h2 className="text-3xl font-black text-white mb-2">Initialize Account</h2>
                        <p className="text-slate-400">Establish your credentials for terminal access.</p>
                    </div>

                    {error && (
                        <div className="error-banner">
                            <AlertCircle size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="input-group">
                            <label><User size={14} className="text-indigo-400" /> Full Name</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label><Mail size={14} className="text-indigo-400" /> Email Address</label>
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label><Lock size={14} className="text-indigo-400" /> Password</label>
                                <div className="input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        value={formData.password}
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

                            <div className="input-group">
                                <label><Shield size={14} className="text-indigo-400" /> Confirm</label>
                                <div className="input-wrapper">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="terms-checkbox-wrap">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={acceptedTerms}
                                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                <span className="label-text">I accept the <Link to="/terms" className="text-indigo-400 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-400 hover:underline">Privacy Policy</Link></span>
                            </label>
                        </div>

                        <button type="submit" className="btn-primary auth-submit h-12" disabled={loading}>
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                    Initializing...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Zap size={18} /> Initialize Access
                                </span>
                            )}
                        </button>
                    </form>

                    <div className="auth-footer mt-8">
                        <p className="text-slate-500">Already an operative? <Link to="/login" className="text-indigo-400 font-bold hover:text-indigo-300">Log in here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
