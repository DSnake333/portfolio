import React from 'react';

function Navigation({ activeTab, setActiveTab }) {
  const handleTabClick = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <>
      <div><a className="link" href="#" onClick={(e) => handleTabClick('home', e)}>Home<span className="dot" style={{ display: activeTab === 'home' ? 'inline-block' : 'none' }}></span></a></div>
      <div><a className="link" href="#" onClick={(e) => handleTabClick('projects', e)}>Projects<span className="dot" style={{ display: activeTab === 'projects' ? 'inline-block' : 'none' }}></span></a></div>
      <div><a className="link" href="#" onClick={(e) => handleTabClick('about', e)}>About Me<span className="dot" style={{ display: activeTab === 'about' ? 'inline-block' : 'none' }}></span></a></div>
      <div><a className="link" href="#" onClick={(e) => handleTabClick('contact', e)}>Contact<span className="dot" style={{ display: activeTab === 'contact' ? 'inline-block' : 'none' }}></span></a></div>
    </>
  );
}

export default Navigation;