import React from "react";
import "./About.css";
import profileImage from "../assets/pp.jpg"; // Update this path

const About = () => {
  const skills = [
    { name: "AI/ML", icon: "🤖" },
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "Django", icon: "🚀" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Cloud", icon: "☁️" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Aabhash Basnet"
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">
            <span className="title-decorator">//</span> About Me
          </h2>

          <div className="bio-card">
            <p className="bio-text">
              Passionate software developer specializing in AI-powered solutions
              and "Enthusiastic software developer with a focus on AI solutions
              and full-stack development. I am passionate about building
              applications that combine modern technology with user-friendly
              designs."
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
