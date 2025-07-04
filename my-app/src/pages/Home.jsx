import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering Health Decisions with AI
        </h1>
        <p className="hero-subtitle">
          MediAssist AI provides accessible, AI-driven health insights — instantly and globally.
        </p>

        <div className="hero-warning">
          ⚠️ <strong>Disclaimer:</strong> This tool is not a diagnostic device. Please consult a healthcare professional.
        </div>

        <button className="cta-button" onClick={() => navigate('/text-qa')}>
          💬 Get Started with Health Q&A
        </button>
      </div>
    </section>
  );
}

export default Home;
