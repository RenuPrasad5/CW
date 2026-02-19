import React, { useState, useEffect, useRef } from 'react';
import {
    User,
    Mail,
    Shield,
    Key,
    LogOut,
    Trash2,
    Camera,
    Globe,
    Info,
    Clock,
    CheckCircle,
    AlertCircle,
    Save,
    ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db, storage, auth as firebaseAuth } from '../firebase/config';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updatePassword, deleteUser, sendPasswordResetEmail } from 'firebase/auth';
import './Profile.css';

const Profile = () => {
    const { user, userData, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const fileInputRef = useRef(null);

    // Form states
    const [formData, setFormData] = useState({
        displayName: '',
        username: '',
        bio: '',
        country: '',
        role: 'Beginner'
    });

    useEffect(() => {
        if (userData) {
            setFormData({
                displayName: userData.displayName || userData.name || '',
                username: userData.username || '',
                bio: userData.bio || '',
                country: userData.country || '',
                role: userData.role || 'Beginner'
            });
        }
    }, [userData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'bio' && value.length > 160) return;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const userRef = doc(db, 'users', user.uid);
            await updateDoc(userRef, {
                ...formData,
                updatedAt: new Date().toISOString()
            });
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
        } catch (error) {
            console.error("Update error:", error);
            setMessage({ type: 'error', text: 'Failed to update profile.' });
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        try {
            const storageRef = ref(storage, `avatars/${user.uid}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            const userRef = doc(db, 'users', user.uid);
            await updateDoc(userRef, { photoURL: downloadURL });

            setMessage({ type: 'success', text: 'Profile picture updated!' });
        } catch (error) {
            console.error("Upload error:", error);
            setMessage({ type: 'error', text: 'Failed to upload image.' });
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordReset = async () => {
        try {
            await sendPasswordResetEmail(firebaseAuth, user.email);
            setMessage({ type: 'success', text: 'Password reset link sent to your email.' });
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to send reset email.' });
        }
    };

    const handleDeleteAccount = async () => {
        try {
            // In production, you might want to re-authenticate the user first
            await deleteUser(user);
            await logout();
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to delete account. You may need to login again to perform this sensitive operation.' });
            setShowDeleteModal(false);
        }
    };

    if (!user) return null;

    return (
        <div className="profile-page-container">
            <div className="profile-max-width">

                {message.text && (
                    <div className={`status-msg ${message.type}`}>
                        {message.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                        {message.text}
                    </div>
                )}

                {/* SECTION 1: HEADER */}
                <section className="profile-section-card">
                    <div className="profile-header-content">
                        <div className="avatar-upload-wrapper">
                            <img
                                src={userData?.photoURL || 'https://via.placeholder.com/120'}
                                alt="Profile"
                                className="profile-avatar-large"
                            />
                            <div className="avatar-edit-overlay" onClick={() => fileInputRef.current.click()}>
                                <Camera size={18} />
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                                accept="image/*"
                            />
                        </div>
                        <div className="profile-header-info">
                            <h1>{formData.displayName || 'Set Name'}</h1>
                            <p className="username">@{formData.username || 'username'}</p>
                            <div className="profile-badge-group">
                                <span className="role-badge">{formData.role}</span>
                                <span className="role-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>Verified Holder</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: BASIC INFORMATION */}
                <section className="profile-section-card">
                    <h2 className="section-title"><User size={20} className="text-blue-500" /> Basic Information</h2>
                    <form onSubmit={handleSaveProfile} className="profile-form">
                        <div className="profile-form-grid">
                            <div className="input-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={formData.displayName}
                                    onChange={handleInputChange}
                                    className="profile-input"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="input-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="profile-input"
                                    placeholder="choose_username"
                                />
                            </div>
                            <div className="input-group">
                                <label>Email Address (Read-only)</label>
                                <input
                                    type="email"
                                    value={user.email}
                                    disabled
                                    className="profile-input"
                                />
                            </div>
                            <div className="input-group">
                                <label>Country / Region</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="profile-input"
                                    placeholder="e.g. United States"
                                />
                            </div>
                            <div className="input-group lg:col-span-2">
                                <label>Bio</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    className="profile-input profile-textarea"
                                    placeholder="Write a short bio about your crypto research interests..."
                                ></textarea>
                                <span className="char-limit">{formData.bio.length} / 160</span>
                            </div>
                        </div>
                        <button type="submit" className="save-btn" disabled={loading}>
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </form>
                </section>

                {/* SECTION 3: SECURITY & ACCOUNT */}
                <section className="profile-section-card">
                    <h2 className="section-title"><Shield size={20} className="text-blue-500" /> Security & Account</h2>
                    <div className="security-status-grid">
                        <div className="status-item">
                            <div className="status-label">
                                <Mail size={18} />
                                <span>Email Verification</span>
                            </div>
                            <span className={`status-value ${user.emailVerified ? 'verified' : 'unverified'}`}>
                                {user.emailVerified ? 'Verified' : 'Unverified'}
                            </span>
                        </div>
                        <div className="status-item">
                            <div className="status-label">
                                <Key size={18} />
                                <span>Password Management</span>
                            </div>
                            <button className="action-btn" onClick={handlePasswordReset}>Change Password</button>
                        </div>
                        <div className="status-item">
                            <div className="status-label">
                                <Info size={18} />
                                <span>Auth Provider</span>
                            </div>
                            <span className="status-value uppercase">{user.providerData[0]?.providerId || 'Email'}</span>
                        </div>
                        <div className="status-item">
                            <div className="status-label">
                                <Clock size={16} />
                                <span>Last Intelligence Login</span>
                            </div>
                            <span className="status-value">{new Date(user.metadata.lastSignInTime).toLocaleDateString()}</span>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: SYSTEM INFO */}
                <section className="profile-section-card">
                    <h2 className="section-title"><Globe size={20} className="text-blue-500" /> System Information</h2>
                    <div className="system-info-grid">
                        <div className="info-item">
                            <span className="info-label">Account Created</span>
                            <span className="info-text">{new Date(user.metadata.creationTime).toLocaleDateString()}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Current Access Mode</span>
                            <span className="info-text uppercase">{formData.role} Research Hub</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Active Session ID</span>
                            <span className="info-text">{user.uid.substring(0, 12)}...</span>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: DANGER ZONE */}
                <section className="profile-section-card danger-zone">
                    <h2 className="section-title danger-title"><AlertCircle size={20} /> Danger Zone</h2>
                    <div className="danger-options">
                        <button className="logout-btn-profile" onClick={() => logout()}>
                            <LogOut size={18} style={{ marginRight: '8px' }} /> Logout
                        </button>
                        <button className="delete-btn" onClick={() => setShowDeleteModal(true)}>
                            <Trash2 size={18} style={{ marginRight: '8px' }} /> Delete Account
                        </button>
                    </div>
                </section>

            </div>

            {/* Delete Account Modal */}
            {showDeleteModal && (
                <div className="modal-overlay">
                    <div className="modal-content glass">
                        <h3>Delete Your Intelligence Account?</h3>
                        <p>This action is irreversible. All your research bookmarks, saved protocols, and profile data will be purged from the terminal.</p>
                        <div className="modal-actions">
                            <button className="action-btn" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                            <button className="delete-btn" onClick={handleDeleteAccount}>Confirm Deletion</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
