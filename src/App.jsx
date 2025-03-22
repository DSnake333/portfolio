import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import DarkModeToggle from './components/DarkModeToggle';
import Navigation from './components/Navigation';
import TabContent from './components/TabContent';
import ShaderCanvas from './components/ShaderCanvas';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  // Default to dark mode (white text on black background)
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Remove intro screen after animation
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {showIntro && <IntroScreen />}

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="line"></div>

      <div className="container">
        <div className="content">
          <div className="heading">Dharshak Kamalendar</div>
          <div className="text">Designer and Developer</div>
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      <TabContent activeTab={activeTab} />

      <ShaderCanvas darkMode={darkMode} />
    </Router>
  );
}

export default App;