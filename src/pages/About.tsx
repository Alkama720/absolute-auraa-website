import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Calendar, Phone, MapPin, Star } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CLINIC_PHONE, CLINIC_DISPLAY_PHONE, CLINIC_ADDRESS, GBP_SHARE_URL } from '../seo';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEOHead />

      {/* Page Header (Frame Sized) */}
      <section style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)', padding: 'clamp(3rem, 5vh, 4.25rem) 0', position: 'relative', width: '100%' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>About Our Clinic</span>
          <h1 style={{ color: 'var(--white)', fontSize: 'var(--fs-h1)', marginBottom: '0.75rem', lineHeight: 'var(--lh-tight)' }}>
            A Legacy of <span className="text-gradient-gold">Luminous Skin in Colaba</span>
          </h1>
          <p style={{ color: 'var(--taupe)', maxWidth: '720px', fontSize: 'var(--fs-body)', lineHeight: 1.7 }}>
            Discover how ABSOLUT AURAA Cosmetic Clinic has established itself as Colaba’s most trusted destination for clinical skin care, bespoke facial aesthetics, and painless laser treatments.
          </p>
        </div>
      </section>

      {/* Doctor Profile & Story (Frame Sized) */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2">
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', maxHeight: '440px' }}>
                <img
                  src="/assets/images/doctor-portrait.jpg"
                  alt="Rizwana Sayed — Certified Cosmetologist & Skin Therapist"
                  loading="lazy"
                  style={{ width: '100%', height: '440px', objectFit: 'cover', objectPosition: 'center 58%', display: 'block' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-0.85rem',
                  right: '-0.65rem',
                  background: 'var(--gradient-card)',
                  border: '1.5px solid var(--gold-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1.15rem',
                  boxShadow: 'var(--shadow-md)',
                  textAlign: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px', color: '#FBBC05', marginBottom: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
                {/* Review count removed — it was hardcoded, not read from Google.
                    Link to the live profile instead so the number is always true. */}
                <a
                  href={GBP_SHARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--charcoal)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}
                >
                  Reviews on Google
                </a>
              </div>
            </div>

            <div>
              <span className="section-label">Clinical Leadership</span>
              <h2 className="section-title">
                Meet <span>Rizwana Sayed</span>
              </h2>
              <p style={{ color: 'var(--gold-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                Certified Cosmetologist &amp; Skin Therapist • Founder of ABSOLUT AURAA
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.85rem', fontSize: 'var(--fs-body)' }}>
                With more than a decade of specialized practice in aesthetic care, Rizwana Sayed has cultivated an international standard of clinical excellence in the heart of South Mumbai. Her clinical philosophy is founded on precision diagnostic analysis, ethical consultations, and individualized treatment journeys.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: 'var(--fs-body)' }}>
                "Every patient who walks through our doors is unique. We never advocate for cookie-cutter treatments. Our mission is to enhance your natural beauty with evidence-based, medically safe techniques."
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--fs-small)', color: 'var(--charcoal)' }}>Specialized in Melasma, Acne Scars &amp; Indian Skin Phototypes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--fs-small)', color: 'var(--charcoal)' }}>Expert in Medical HydraFacials, Chemical Peels &amp; Diode Laser</span>
                </div>
                {/* An "Over 8,500+ Successful In-Clinic Procedures" line sat here.
                    It was not sourced from any clinic record, and a specific figure
                    like that is exactly the kind of claim a Google quality rater
                    checks on a medical (YMYL) page. Add it back only with a real,
                    defensible number from the clinic's own records. */}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenBooking} className="btn btn--primary">
                  <Calendar size={15} />
                  <span>Book Consultation with Rizwana</span>
                </button>
                <a href={`tel:${CLINIC_PHONE}`} className="btn btn--secondary">
                  <Phone size={15} />
                  <span>{CLINIC_DISPLAY_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence (Frame Sized) */}
      <section className="section" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label--center">Our Core Pillars</span>
            <h2 className="section-title">
              Why Discerning Patients Choose <span>ABSOLUT AURAA</span>
            </h2>
            <p className="section-subtitle">
              Every facet of your clinic experience is crafted with uncompromising standards of hygiene, clinical precision, and luxury comfort.
            </p>
          </div>

          <div className="grid-3">
            <div className="luxury-card">
              <ShieldCheck size={30} className="text-gold" style={{ marginBottom: '0.85rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>FDA-Approved Technology</h3>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We invest exclusively in gold-standard medical devices — including triple-wavelength diode lasers, vacuum vortex facials, and medical centrifuges for PRP.
              </p>
            </div>

            <div className="luxury-card">
              <Award size={30} className="text-gold" style={{ marginBottom: '0.85rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>Ethical &amp; Transparent</h3>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                No hidden costs, no aggressive upselling. We provide transparent assessments, set realistic expectations, and prioritize long-term skin health.
              </p>
            </div>

            <div className="luxury-card">
              <HeartHandshake size={30} className="text-gold" style={{ marginBottom: '0.85rem' }} />
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>Bespoke Aftercare</h3>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Your journey continues well beyond your clinic appointment with dedicated follow-ups, customized home regimens, and 24/7 patient support.
              </p>
            </div>
          </div>

          {/* Location Badge Strip */}
          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: 'var(--fs-small)',
              textAlign: 'center',
              flexWrap: 'wrap',
            }}
          >
            <MapPin size={15} className="text-gold" />
            <span>Located at {CLINIC_ADDRESS.street}, {CLINIC_ADDRESS.city} – {CLINIC_ADDRESS.pincode}</span>
          </div>
        </div>
      </section>
    </>
  );
};
