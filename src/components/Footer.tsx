import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle, Award } from 'lucide-react';
import { SERVICES } from '../data/services';
import { SERVICE_AREAS } from '../data/areas';
import {
  CLINIC_NAME,
  CLINIC_PHONE,
  CLINIC_DISPLAY_PHONE,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  INSTAGRAM_URL,
  GBP_SHARE_URL,
} from '../seo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper" aria-label="Clinic Footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img
                src="/assets/images/logo.png"
                alt="ABSOLUT AURAA"
                width={42}
                height={42}
                style={{ borderRadius: '50%', border: '1px solid var(--gold-light)' }}
              />
              <div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)' }}>
                  Absolut Auraa
                </span>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Cosmetic Clinic
                </span>
              </div>
            </div>

            <p style={{ fontSize: 'var(--fs-small)', color: 'var(--taupe)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Beauty, cosmetic &amp; personal care • Skin &amp; Aesthetic Care.
              Skin • Hair • Laser • Anti-Aging Refined Treatments. Real Results.
              📍 Mumbai Colaba.
            </p>

            <div style={{ display: 'flex', gap: '0.875rem' }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
                style={{ color: 'var(--white)', borderColor: 'rgba(212,185,106,0.4)', borderRadius: 'var(--radius-full)' }}
                aria-label="Instagram Profile"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@absolutauraa</span>
              </a>
              <a
                href={GBP_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
                style={{ color: 'var(--white)', borderColor: 'rgba(212,185,106,0.4)', borderRadius: 'var(--radius-full)' }}
                aria-label="Google Business Profile & Map"
              >
                <MapPin size={14} className="text-gold" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Treatments */}
          <div>
            <h4 className="footer-heading">Specialized Treatments</h4>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="footer-link">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/pricing" className="footer-link" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                  ✦ Official Price List (All 42 Rates)
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served in South Mumbai */}
          <div>
            <h4 className="footer-heading">South Mumbai Hubs</h4>
            <ul className="footer-links">
              {SERVICE_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link to={`/service-areas/${a.slug}`} className="footer-link">
                    {a.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Clinic Hours */}
          <div>
            <h4 className="footer-heading">Colaba Clinic Details</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: 'var(--fs-small)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  {CLINIC_ADDRESS.street}, {CLINIC_ADDRESS.city} – {CLINIC_ADDRESS.pincode}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <a href={`tel:${CLINIC_PHONE}`} style={{ color: 'var(--white)', fontWeight: 600 }}>
                  {CLINIC_DISPLAY_PHONE}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <a href={`mailto:${CLINIC_EMAIL}`} style={{ color: 'var(--taupe)' }}>
                  {CLINIC_EMAIL}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
                <Clock size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ color: 'var(--white)' }}>Mon – Sat: 10:00 AM – 7:00 PM</div>
                  <div style={{ color: 'var(--text-muted)' }}>Sunday: By Prior Appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={14} className="text-gold" />
              <span>Certified Cosmetologist &amp; Skin Therapist: <strong>Rizwana Sayed</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={14} className="text-gold" />
              <span>FDA-Approved Clinical Technologies</span>
            </div>
          </div>

          <div>
            © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved. Colaba, Mumbai.
          </div>
        </div>
      </div>
    </footer>
  );
};
