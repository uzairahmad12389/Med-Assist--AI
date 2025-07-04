import './About.css';

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">About MediAssist AI</h2>
      <p className="about-subtitle">
        Empowering healthcare access through AI-powered guidance, built for everyone.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <div className="icon">🌐</div>
          <h3>Accessible</h3>
          <p>Inclusive by design — supports multiple input types and accessible UX for all users.</p>
        </div>

        <div className="about-card">
          <div className="icon">💻</div>
          <h3>Open Source</h3>
          <p>Collaborative and transparent. Built to evolve with community contribution and innovation.</p>
        </div>

        <div className="about-card">
          <div className="icon">🎓</div>
          <h3>Educational</h3>
          <p>Focuses on knowledge sharing, not diagnosis. Promotes awareness, not replacement of doctors.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
