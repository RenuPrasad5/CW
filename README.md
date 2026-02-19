# Crypto World 🌐

A premium, production-ready Crypto Intelligence and SaaS platform built with **React**, **Vite**, and **Firebase**. This platform provides institutional-grade research tools, market terminal interfaces, and a robust user authentication system.

## ✨ Features

- **🛡️ Secure Authentication System**:
    - Complete Firebase Auth implementation.
    - Strict Email Verification gatekeeping.
    - Persistent user sessions with `onAuthStateChanged`.
    - Real-time Firestore user profile synchronization.
- **🎨 Modern Web3 UI/UX**:
    - Dark mode institutional design.
    - Glassmorphism UI components with backdrop blurs.
    - Smooth micro-interactions and transitions using CSS variables.
    - Fully responsive layout for Desktop, Tablet, and Mobile.
- **👤 User Management**:
    - Interactive User Profile page with avatar upload capabilities (Firebase Storage).
    - Functional "Settings" terminal for account and security configuration.
    - Global Navbar with dynamic user dropdown and notification system.
- **📊 Intelligence Tools**:
    - Market Terminal, Encyclopedia, Protocol Research, and News modules.
    - Dedicated "Analysis Tools" section.

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Vanilla CSS (CSS Modules approach), Lucide React (Icons)
- **Backend/Services**: 
    - Firebase Authentication (Identity management)
    - Cloud Firestore (NoSQL database for user metadata)
    - Firebase Storage (Profile image hosting)

## 🛠️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RenuPrasad5/CW.git
   cd CW
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   Update `src/firebase/config.js` with your Firebase project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/components/`: Reusable UI components (Navbar, ProtectedRoute, etc.)
- `src/context/`: Global state management (AuthContext)
- `src/firebase/`: Firebase configuration and initialization
- `src/pages/`: Main application pages (Home, Login, Register, Profile, Settings, Tools, etc.)
- `src/assets/`: Static assets and images

## 🔒 Security Note

This project uses high-security practices including:
- **Email Verification**: Users must verify their email before accessing protected routes.
- **Protected Routes**: Sensitive pages are guarded by the `ProtectedRoute` component.
- **Environment Variables**: Template provided in `.env.example` for secure credential management.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
