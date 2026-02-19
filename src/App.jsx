import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Market from './pages/Market';
import Tools from './pages/Tools';
import Community from './pages/Community';
import Premium from './pages/Premium';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TopicDetails from './pages/TopicDetails';
import Encyclopedia from './pages/Encyclopedia';
import ProtocolResearch from './pages/ProtocolResearch';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import Register from './pages/Register';
import Login from './pages/Login';
import HelpCenter from './pages/HelpCenter';
import BlockchainHub from './pages/BlockchainHub';
import BlockchainEcosystem from './pages/BlockchainEcosystem';
import Settings from './pages/Settings';
import './App.css';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const fullWidthPaths = ['/', '/news', '/encyclopedia', '/research', '/tools', '/market', '/intelligence', '/community', '/trust', '/dashboard', '/blockchain-hub', '/blockchain-ecosystem'];
  const isFullWidth = fullWidthPaths.includes(location.pathname);

  return (
    <div className="app-container">
      <main className="main-content">
        {!['/login', '/register'].includes(location.pathname) && <Navbar />}

        <div className={isFullWidth ? 'full-width-layout' : 'page-wrapper container'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encyclopedia" element={<Encyclopedia />} />
            <Route path="/research" element={<ProtocolResearch />} />
            <Route path="/library/:topicId" element={<TopicDetails />} />
            <Route path="/market" element={<Market />} />
            <Route path="/intelligence" element={<Market />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/community" element={<Community />} />
            <Route path="/trust" element={<Premium />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/blockchain-hub" element={<BlockchainHub />} />
            <Route path="/blockchain-ecosystem" element={<BlockchainEcosystem />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
