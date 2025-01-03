import React from "react";
import "@/Components/About/AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      {/* About Section */}
      <section id="about" className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm a passionate <span className="highlight">Web Developer</span> dedicated to creating responsive, scalable, and user-friendly websites.
            With a strong focus on <span className="highlight">modern web technologies</span>, I specialize in building clean and interactive web applications that provide seamless user experiences.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-container">
        <div className="education-content">
          <h2 className="education-title">Education</h2>
          <div className="education-card-container">
            {/* Mobile View */}
            <div className="education-mobile">
              <div className="education-card">
                <h3 className="education-card-title">Study Level: HSSC</h3>
                <p><strong>Institution:</strong> FG Boys Inter College, Karachi Cantt</p>
                <p><strong>Duration:</strong> Ongoing</p>
                <p><strong>Percentage:</strong> -</p>
              </div>
              <div className="education-card">
                <h3 className="education-card-title">Study Level: SSC</h3>
                <p><strong>Institution:</strong>Fg boys school, karachi Cantt</p>
                <p><strong>Duration:</strong> Completed</p>
                <p><strong>Percentage:</strong> 76%</p>
              </div>
            </div>

            {/* Desktop View */}
            <div className="education-desktop">
              <table className="education-table">
                <thead>
                  <tr>
                    <th>Study Level</th>
                    <th>Institution</th>
                    <th>Duration</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HSSC</td>
                    <td>FG Boys Inter College, Karachi Cantt</td>
                    <td>Ongoing</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>SSC</td>
                    <td>Fg boys school, karachi Cantt</td>
                    <td>Completed</td>
                    <td>76%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
