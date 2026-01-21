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
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const fullWidthPaths = ['/news', '/encyclopedia', '/research', '/tools', '/market', '/intelligence', '/community', '/trust'];
  const isFullWidth = fullWidthPaths.includes(location.pathname);

  return (
    <div className="app-container">
      <main className="main-content">
        <Navbar />

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
