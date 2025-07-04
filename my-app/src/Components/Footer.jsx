import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <h3 className="footer__brand">MediAssist AI</h3>
          <nav className="footer__links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://yourdocs.com" target="_blank" rel="noopener noreferrer">Docs</a>
            <a href="mailto:contact@mediassist.ai">Contact</a>
          </nav>
        </div>

        <div className="footer__legal">
          <p>© 2024 MediAssist AI. Licensed under MIT.</p>
          <p><strong>Disclaimer:</strong> This is not a medical device. For medical guidance, always consult a healthcare professional.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
