import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'NLP', 'Computer Vision', 'Scikit-learn']
    },
    {
      title: 'Development',
      icon: '💻',
      skills: ['React', 'Node.js', 'Python', 'TypeScript', 'GraphQL', 'Docker']
    },
    {
      title: 'Data & Cloud',
      icon: '☁️',
      skills: ['AWS', 'MongoDB', 'PostgreSQL', 'BigQuery', 'Spark', 'Kubernetes']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="holographic-grid"></div>
      <div className="skills-container">
        <h2 className="section-title">
          <span className="title-decorator">{"</>"}</span> Technical Arsenal
        </h2>
        
        <div className="skill-categories">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="card-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-grid">
                {category.skills.map((skill, idx) => (
                  <div className="skill-pill" key={idx}>
                    <span className="skill-name">{skill}</span>
                    <div className="hologram-effect"></div>
                  </div>
                ))}
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;