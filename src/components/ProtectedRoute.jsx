import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Optional: check if email is verified
    if (!user.emailVerified) {
        // You might want to redirect to a "Verify Email" page or show a notice
        // For now, let's just allow it or redirect based on user requirements.
        // The user said: "prevent login until email is verified".
        // So if the user is logged in but not verified, we should probably logout and show a message,
        // or redirect to a verification notice page.
        return <Navigate to="/login" state={{ from: location, message: "Please verify your email first." }} replace />;
    }

    return children;
};

export default ProtectedRoute;
