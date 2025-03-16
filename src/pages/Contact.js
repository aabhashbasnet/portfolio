import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="title-decorator">//</span> Contact
        </h2>
        <p className="contact-info">
          I'm always excited to connect and collaborate. Whether you have a question, a proposal, or just want to say hi, feel free to reach out.
        </p>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:your-aabhashbasnet25@gmail.com">aabhashbasnet25@gmail.com</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/aabhash-basnet/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/aabhash-basnet
              </a>
            </p>
          </div>
          <div className="contact-card">
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/aabhashbasnet"
                target="_blank"
                rel="noreferrer"
              >
                github.com/aabhashbasnet
              </a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Twitter</h3>
            <p>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                @yourusername
              </a>
            </p>
          </div>
        </div>
        <p className="final-message">
          Let's build something amazing together! I look forward to hearing from you.
        </p>
      </div>
    </section>
  );
};

export default Contact;
