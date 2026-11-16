import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import {
  CLINIC_PHONE,
  CLINIC_DISPLAY_PHONE,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  INSTAGRAM_URL,
  GBP_SHARE_URL,
} from '../seo';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'HydraFacial Glow',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Contact & Appointment Inquiry — ABSOLUT AURAA (Colaba)*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Treatment:* ${formData.treatment}\n` +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `\nSent from website contact page.`;

    const url = `https://wa.me/919082400696?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);

    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(false);
    }, 1000);
  };

  return (
    <>
      <SEOHead />

      {/* Header (Frame Sized) */}
      <section style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)', padding: 'clamp(3rem, 5vh, 4.25rem) 0', position: 'relative', width: '100%' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Contact &amp; Appointments</span>
          <h1 style={{ color: 'var(--white)', fontSize: 'var(--fs-h1)', marginBottom: '0.75rem', lineHeight: 'var(--lh-tight)' }}>
            Visit Our <span className="text-gradient-gold">Colaba Clinic</span>
          </h1>
          <p style={{ color: 'var(--taupe)', maxWidth: '720px', fontSize: 'var(--fs-body)', lineHeight: 1.7 }}>
            We welcome you to ABSOLUT AURAA Cosmetic Clinic in Colaba, Mumbai. Reach out directly via WhatsApp, phone, or request your consultation below.
          </p>
        </div>
      </section>

      {/* Main Grid (Frame Sized) */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {/* Left: Contact Details & Landmark Directions */}
            <div>
              <span className="section-label">Clinic Information</span>
              <h2 className="section-title">
                Get In Touch With <span>Our Concierge</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', marginBottom: '1.75rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Official Address</strong>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.6, fontSize: 'var(--fs-xs)' }}>
                      {CLINIC_ADDRESS.street},<br />
                      {CLINIC_ADDRESS.city} – {CLINIC_ADDRESS.pincode}, {CLINIC_ADDRESS.state}, India.
                    </p>
                    <a
                      href={GBP_SHARE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.72rem', color: 'var(--gold-dark)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '3px' }}
                    >
                      <Navigation size={11} />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Phone size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Phone &amp; WhatsApp</strong>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: 'var(--fs-xs)' }}>
                      <a href={`tel:${CLINIC_PHONE}`} style={{ color: 'var(--charcoal)', fontWeight: 600 }}>
                        {CLINIC_DISPLAY_PHONE}
                      </a>
                    </p>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Direct WhatsApp booking available 24/7</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Mail size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Email Inquiries</strong>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: 'var(--fs-xs)' }}>
                      <a href={`mailto:${CLINIC_EMAIL}`} style={{ color: 'var(--text-secondary)' }}>
                        {CLINIC_EMAIL}
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Clock size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Clinic Hours</strong>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.6, fontSize: 'var(--fs-xs)' }}>
                      Monday – Saturday: 10:00 AM – 7:00 PM<br />
                      Sunday: By Prior Appointment
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--gold-primary)', marginTop: '3px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Instagram Profile</strong>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: 'var(--fs-xs)' }}>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--gold-dark)', fontWeight: 600 }}
                      >
                        @absolutauraa
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Landmark Guidance */}
              <div className="luxury-card" style={{ padding: '1.25rem', background: 'var(--cream-warm)' }}>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.4rem' }}>
                  How to Reach Us (Colaba Landmarks)
                </h3>
                <ul style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>• <strong>From Colaba Causeway:</strong> Turn into 4th Pasta Lane near Sunrise Building.</li>
                  <li>• <strong>From Gateway of India / Taj Hotel:</strong> 4 mins drive south towards Pasta Lane.</li>
                  <li>• <strong>From Cuffe Parade / WTC:</strong> 5 mins drive via Captain Prakash Pethe Marg.</li>
                  <li>• <strong>Parking:</strong> Dedicated street and nearby pay-and-park slots available.</li>
                </ul>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div>
              <div className="luxury-card" style={{ padding: '1.75rem', border: '1.5px solid var(--gold-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
                  Request an <span>Appointment</span>
                </h3>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Fill out the form below to connect instantly with our Colaba clinic concierge.
                </p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <CheckCircle2 size={40} className="text-gold" style={{ margin: '0 auto 0.75rem' }} />
                    <h4>Redirecting to WhatsApp...</h4>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        placeholder="+91 90824 00696"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Treatment of Interest *</label>
                      <select
                        className="form-select"
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      >
                        <option value="HydraFacial Glow">HydraFacial Glow</option>
                        <option value="Acne Treatment">Acne Treatment</option>
                        <option value="Acne Scar Revision">Acne Scar Revision</option>
                        <option value="Pigmentation & Melasma">Pigmentation &amp; Melasma</option>
                        <option value="Diode Laser Hair Removal">Diode Laser Hair Removal</option>
                        <option value="Anti-Aging & Botox">Anti-Aging &amp; Botox</option>
                        <option value="Hair PRP Regrowth">Hair PRP Regrowth</option>
                        <option value="Consultation & Skin Analysis">Consultation & Skin Analysis</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message or Concerns</label>
                      <textarea
                        rows={2}
                        className="form-textarea"
                        placeholder="Tell us about your concerns or preferred timings..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', marginTop: '0.4rem' }}>
                      <Send size={15} />
                      <span>Send via WhatsApp Concierge</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section style={{ height: '360px', width: '100%', borderTop: '1px solid rgba(212,185,106,0.3)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5!2d72.832!3d18.917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzAxLjIiTiA3MsKwNDknNTUuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ABSOLUT AURAA Cosmetic Clinic location on Google Maps"
        />
      </section>
    </>
  );
};
