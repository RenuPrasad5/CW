import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Mail, HelpCircle } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './HelpCenter.css';

const HelpCenter = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        subject: '',
        category: 'Account Support',
        message: '',
        email: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'support_tickets'), {
                ...formData,
                type: 'help_center_ticket',
                createdAt: serverTimestamp()
            });
            alert('Your request has been filed successfully. Our team will contact you shortly.');
            navigate('/');
        } catch (error) {
            console.error("Error submitting ticket: ", error);
            alert('Error submitting request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="help-center-page">
            <div className="container">
                <button className="back-link" onClick={() => navigate(-1)}>
                    <ArrowLeft size={16} /> Back to Terminal
                </button>

                <div className="help-content-wrap glass">
                    <div className="help-header-hero">
                        <div className="help-icon-box">
                            <HelpCircle size={40} className="text-primary" />
                        </div>
                        <h1>Institutional Help Desk</h1>
                        <p>File a formal inquiry with our protocol analysis team.</p>
                    </div>

                    <form className="help-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Direct Email Address</label>
                                <div className="input-with-icon">
                                    <Mail size={18} className="icon" />
                                    <input
                                        type="email"
                                        placeholder="institutional@example.com"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Inquiry Category</label>
                                <select
                                    className="form-select"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>Account Support</option>
                                    <option>Protocol Queries</option>
                                    <option>Data Verification</option>
                                    <option>Institutional Partnership</option>
                                    <option>Compliance & Legal</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Interaction Subject</label>
                            <input
                                type="text"
                                placeholder="Summary of the inquiry"
                                required
                                value={formData.subject}
                                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>Detailed Intelligence Briefing</label>
                            <textarea
                                placeholder="Describe your request in detail for our analysts..."
                                required
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-ticket-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Transmitting...' : (
                                <>
                                    File Request <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
