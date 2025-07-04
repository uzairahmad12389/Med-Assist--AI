import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          MediAssist <span>AI</span>
        </Link>

        <button
          className={`navbar__toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`navbar__links ${open ? 'show' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/text-qa" onClick={closeMenu}>Text Q&A</NavLink>
          <NavLink to="/image-analysis" onClick={closeMenu}>Image Analysis</NavLink>
          <NavLink to="/voice-input" onClick={closeMenu}>Voice Input</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;