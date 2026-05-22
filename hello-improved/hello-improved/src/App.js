import React, { useState, useEffect } from 'react';
import { User, Linkedin, Mail, Phone } from 'lucide-react';
import './App.css';

function Header({ toggleAbout, showAbout }) {
  return (
    <header className="header">
      <div className="header-name">
        <span className="name-hello">Hello, I'm </span>
        <span className="name-bold">Zhe Wei</span>
        <span className="name-dot">.</span>
      </div>
      <nav className="icon-row" aria-label="Contact and links">
        <button
          onClick={toggleAbout}
          className={`icon-btn ${showAbout ? 'icon-btn--active' : ''}`}
          aria-label="About me"
          title="About me"
          aria-expanded={showAbout}
        >
          <User className="icon" strokeWidth={1} />
        </button>
        <span className="divider" aria-hidden="true" />
        <a
          href="https://www.linkedin.com/in/czhewei/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <Linkedin className="icon" strokeWidth={1} />
        </a>
        <a
          href="mailto:czhewei.work@gmail.com"
          className="icon-btn"
          aria-label="Send email"
          title="Email"
        >
          <Mail className="icon" strokeWidth={1} />
        </a>
        <a
          href="tel:+6596747271"
          className="icon-btn"
          aria-label="Call phone number"
          title="Phone"
        >
          <Phone className="icon" strokeWidth={1} />
        </a>
      </nav>
    </header>
  );
}

function AboutSection() {
  const aboutText = [
    "I am currently a DevOps Engineer with experience across financial services, information technology and identity security.",
    "Through cloud technologies, containerisation and automation, I help teams deliver software faster and more reliably, while building infrastructure that is efficient, scalable, and resilient.",
    "Previously, I worked in the Built Environment industry, where I was involved in architectural and project management work. Spending years in architecture taught me that good design is intentional, user-centered, and deeply tied to context. It also taught me to think in layers: structure, flow and experience.",
    "That perspective continues to shape how I approach building modern infrastructure and delivering software today.",
  ];

  return (
    <section className="about-section" aria-label="About me">
      {aboutText.map((paragraph, index) => (
        <p key={index} className="about-paragraph" style={{ animationDelay: `${index * 60}ms` }}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`app-root ${mounted ? 'app-root--visible' : ''}`}>
      <main className="app-center">
        <Header toggleAbout={() => setShowAbout(!showAbout)} showAbout={showAbout} />
        {showAbout && <AboutSection />}
      </main>
      <footer className="app-footer">
        <span>© {new Date().getFullYear()} Zhe Wei</span>
      </footer>
    </div>
  );
}

export default App;
