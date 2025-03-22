import React, { useState } from 'react';

function ProjectDisplay() {
  const [activeProject, setActiveProject] = useState(1);

  const showProject = (projectNumber) => {
    setActiveProject(projectNumber);
  };

  const videoLinks = {
    project1: "https://vimeo.com/1068282231?share=copy",
    project2: "https://vimeo.com/1068282196?share=copy",
    project3: "https://vimeo.com/1068282165?share=copy"
  };

  // Function to open video link in a new tab
  const openVideoLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="projects-container">
      <div className="project-buttons">
        <button
          onClick={() => showProject(1)}
          className={activeProject === 1 ? 'active' : ''}
        >1</button>
        <button
          onClick={() => showProject(2)}
          className={activeProject === 2 ? 'active' : ''}
        >2</button>
        <button
          onClick={() => showProject(3)}
          className={activeProject === 3 ? 'active' : ''}
        >3</button>
      </div>

      <div className="projects-content">
        {/* Project 1 */}
        <div className="project" id="project1" style={{ display: activeProject === 1 ? 'block' : 'none' }}>
          <h2>Football Match Analyzer</h2>
          <h4>Demo Video</h4>

          {/* Video link button */}
          <div className="video-link-container">
            <button
              className="video-link-button"
              onClick={() => openVideoLink(videoLinks.project1)}
            >
              <span className="video-icon">▶</span>
              <p>Watch Demo Video</p>
            </button>
            <span className="video-note">(Opens in new tab)</span>
          </div>

          <p>
            This project analyzes football matches from FBref.com by scraping match data with FastAPI and storing it in SQLite. It processes stats for defense, shots, passing, possession, and goalkeeping, then generates interactive Plotly visualizations. The Vue.js frontend fetches and displays these insights dynamically.
          </p>
          <br /><br />
          <a href="https://github.com/DSnake333/FootballMatchAnalysisFrontend" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <br /><br /><br />
          <a href="https://www.notion.so/Football-Match-Analyzer-1ac0b17d7d3380a1af0eed641e264ca4?pvs=4" target="_blank" rel="noopener noreferrer">Code Snippets</a>
        </div>

        {/* Project 2 */}
        <div className="project" id="project2" style={{ display: activeProject === 2 ? 'block' : 'none' }}>
          <h2>Ingredient Analysis Tool</h2>
          <h4>Demo Video</h4>

          {/* Video link button */}
          <div className="video-link-container">
            <button
              className="video-link-button"
              onClick={() => openVideoLink(videoLinks.project2)}
            >
              <span className="video-icon">▶</span>
              Watch Demo Video
            </button>
            <span className="video-note">(Opens in new tab)</span>
          </div>

          <p>
            This project allows users to upload an image of the ingredients list from the back of a food product. Using Optical Character Recognition (OCR), the tool extracts the ingredients as text. It then sends this data to the EDAMAM API to retrieve nutritional information. The tool further processes this information to provide users with an analysis in the form of text and graphs, explaining why the product is healthy or unhealthy and offering some basic recommendations.
          </p>
          <br /><br />
          <a href="https://github.com/DSnake333/nutritional-analysis" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <br /><br /><br />
          <a href="https://rowan-dietician-9c7.notion.site/Ingredient-Analysis-Tool-7f56c8c8b2054620a1b958e1201abfca?pvs=4" target="_blank" rel="noopener noreferrer">Code Snippets</a>
        </div>

        {/* Project 3 */}
        <div className="project" id="project3" style={{ display: activeProject === 3 ? 'block' : 'none' }}>
          <h2>Dream Analysis Tool</h2>
          <h4>Demo Video</h4>

          {/* Video link button */}
          <div className="video-link-container">
            <button
              className="video-link-button"
              onClick={() => openVideoLink(videoLinks.project3)}
            >
              <span className="video-icon">▶</span>
              Watch Demo Video
            </button>
            <span className="video-note">(Opens in new tab)</span>
          </div>

          <p>
            This project allows users to analyze and document their dreams. Users can input dream descriptions, sleep duration, and sleep cycles. The application uses libraries like spaCy, RAKE, and VADER for text and sentiment analysis, while WordCloud and Matplotlib provide visual insights. It features a secure dream journal to store entries and leverages Flask and Flask_SQLAlchemy for backend support. Explore and understand your dreams with advanced analysis and visualization.
          </p>
          <br /><br />
          <a href="https://github.com/DSnake333/dreamanalysis" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <br /><br /><br />
          <a href="https://rowan-dietician-9c7.notion.site/Dream-Analysis-Tool-eb47b05df9c647c7925c2c6cbab71100?pvs=25" target="_blank" rel="noopener noreferrer">Code Snippets</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;