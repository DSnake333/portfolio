import React from 'react';

function About() {
  return (
    <>
      <p>
        Greetings! I'm Dharshak, a Bangalore-born, Chennai-based enthusiast of football, video games, and music. Transitioning from a career in music to a passion for development and design, I'm driven by the principles of minimalism and innovation.
      </p>
      <br /><br />
      <h2>Technical Proficiencies:</h2>
      <ul>
        <li>
          <span className="skill">Python, HTML, CSS, and JavaScript:</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: '75%' }}>75%</div>
          </div>
        </li>
        <li>
          <span className="skill">NLP, Flask, and SQL:</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: '50%' }}>50%</div>
          </div>
        </li>
        <li>
          <span className="skill">Multimedia Expertise (Maya, Adobe After Effects, Photoshop, Illustrator, Premiere Pro, and Substance Painter):</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: '65%' }}>65%</div>
          </div>
        </li>
      </ul>
      <br />
      <h2>Portfolio Highlights:</h2>
      <ul>
        <li>My portfolio showcases a diverse range of projects in web development, design, and multimedia production. From elegant websites to eye-catching animations, I've got it covered.</li>
        <li>User-Centric Solutions: I thrive on creating experiences that engage users and deliver tangible results. Whether it's an intuitive interface or a stunning visual campaign, I'm all about impact.</li>
      </ul>
      <br />
      <h2>Why Me?</h2>
      <ul>
        <li>My skill set aligns with industry standards and best practices. I'm equally comfortable with frontend and backend technologies, making me an ideal candidate for roles that demand versatility.</li>
        <li>Commitment to Excellence: I don't settle for mediocrity. I'm driven to excel, constantly seeking ways to improve and innovate.</li>
      </ul>
      <br />
      <h2>Let's Collaborate:</h2>
        <p>In this ever-evolving tech and design landscape, I'm eager to collaborate and push boundaries. Together, we can create something remarkable. Looking forward to connecting with you.</p>
    </>
  );
}

export default About;