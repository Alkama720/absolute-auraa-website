import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { CLINIC_PHONE, CLINIC_DISPLAY_PHONE } from '../seo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Treatments', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Areas Served', path: '/service-areas/colaba' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className="nav-header"
        style={{
          boxShadow: isScrolled ? '0 4px 20px rgba(44, 36, 22, 0.08)' : 'none',
        }}
      >
        <div className="container nav-inner">
          <Link to="/" className="nav-brand" aria-label="ABSOLUT AURAA Homepage">
            <img
              src="/assets/images/logo.png"
              alt="ABSOLUT AURAA Cosmetic Clinic Logo"
              className="nav-logo-img"
              width={46}
              height={46}
            />
            <div>
              <span className="nav-brand-text">Absolut Auraa</span>
              <span className="nav-brand-sub">Cosmetic Clinic • Colaba</span>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="btn btn--secondary btn--sm"
              aria-label="Call clinic"
            >
              <Phone size={14} className="text-gold" />
              <span>{CLINIC_DISPLAY_PHONE}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn btn--primary btn--sm"
              aria-label="Book a consultation appointment"
            >
              <Calendar size={14} />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav" role="dialog" aria-modal="true">
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)' }}>
            <Sparkles size={16} />
            <span style={{ fontSize: 'var(--fs-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Dermatology &amp; Aesthetic Medicine
            </span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${
                location.pathname === link.path ? 'active' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn--primary btn--lg"
              style={{ width: '100%' }}
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${CLINIC_PHONE}`}
              className="btn btn--secondary btn--lg"
              style={{ width: '100%' }}
            >
              <Phone size={16} />
              <span>Call {CLINIC_DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
