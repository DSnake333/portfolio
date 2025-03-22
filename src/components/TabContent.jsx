import React from 'react';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';

function TabContent({ activeTab }) {
  return (
    <>
      <div className={`tab-content ${activeTab === 'home' ? 'active-tab' : ''}`} id="home">
        <Home />
      </div>
      <div className={`tab-content ${activeTab === 'projects' ? 'active-tab' : ''}`} id="projects">
        <Projects />
      </div>
      <div className={`tab-content ${activeTab === 'about' ? 'active-tab' : ''}`} id="about">
        <About />
      </div>
      <div className={`tab-content ${activeTab === 'contact' ? 'active-tab' : ''}`} id="contact">
        <Contact />
      </div>
    </>
  );
}

export default TabContent;