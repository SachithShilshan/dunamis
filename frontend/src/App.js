// src/App.js
import React from "react";
import "./App.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="title">Δύναμις — Dýnamis</h1>
        <p className="subtitle">
          A path to build power, skill and unity. Internal • External • Integration • Growth
        </p>
        <div className="ctaRow">
          <a className="btn primary" href="#paths">Explore Paths</a>
          <a className="btn ghost" href="#about">About the System</a>
        </div>
      </div>
    </section>
  );
}

function PathsPreview() {
  return (
    <section id="paths" className="section">
      <div className="container">
        <h2>Choose your Path</h2>
        <div className="grid">
          <div className="card">
            <h3>External Dýnamis</h3>
            <p>Strength, technique, speed — train the visible power.</p>
            <a className="link" href="#external">Open Path</a>
          </div>
          <div className="card">
            <h3>Internal Dýnamis</h3>
            <p>Mind, breath, energy — cultivate inner control.</p>
            <a className="link" href="#internal">Open Path</a>
          </div>
          <div className="card">
            <h3>Integration Dýnamis</h3>
            <p>Unify mind & body: breath-strike connection and flow.</p>
            <a className="link" href="#integration">Open Path</a>
          </div>
          <div className="card">
            <h3>Non-Integration</h3>
            <p>Diagnose and fix imbalance — restore harmony.</p>
            <a className="link" href="#nonintegration">Open Path</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section alt">
      <div className="container">
        <h2>What is Dýnamis?</h2>
        <p>
          Dýnamis is a growth system—skill-based progression that builds power, clarity and harmony.
          This site is the entry point. Soon you’ll be able to sign up, track your Power Growth,
          and practice Skillsets like Punches → Punch 1.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>© {new Date().getFullYear()} Dýnamis — crafted for mastery</small>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Hero />
      <PathsPreview />
      <About />
      <Footer />
    </div>
  );
}

export default App;
