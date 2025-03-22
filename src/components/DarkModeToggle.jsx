import React from 'react';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="mode-toggle-container">
      <button
        className={`mode-button dark-button ${darkMode ? 'active' : ''}`}
        onClick={() => !darkMode && toggleDarkMode()}
        aria-label="Dark Mode"
      >
        {/* No text, just the styled button */}
      </button>

      <button
        className={`mode-button light-button ${!darkMode ? 'active' : ''}`}
        onClick={() => darkMode && toggleDarkMode()}
        aria-label="Light Mode"
      >
      </button>
    </div>
  );
}

export default DarkModeToggle;