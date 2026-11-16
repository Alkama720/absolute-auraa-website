import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Navigation, Phone, Calendar, CheckCircle2, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { getAreaBySlug, SERVICE_AREAS } from '../data/areas';
import { CLINIC_PHONE, CLINIC_DISPLAY_PHONE } from '../seo';

interface ServiceAreaProps {
  onOpenBooking: () => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const area = getAreaBySlug(slug || '');

  if (!area) {
    return <Navigate to="/service-areas/colaba" replace />;
  }

  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      <SEOHead />

      {/* ── 1. Hero Header Banner with Background Image ── */}
      <section style={{ backgroundColor: 'var(--charcoal-dark)', color: 'var(--white)', padding: 'clamp(3.5rem, 6vh, 4.75rem) 0', position: 'relative', overflow: 'hidden', width: '100%' }}>
        <img
          src={area.image}
          alt={`Aesthetic Clinic serving ${area.name}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.28,
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(22, 16, 8, 0.95) 0%, rgba(22, 16, 8, 0.82) 50%, rgba(22, 16, 8, 0.65) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem', fontSize: 'var(--fs-xs)', color: 'var(--taupe)' }}>
            <Link to="/" style={{ color: 'var(--gold-light)' }}>Home</Link>
            <span>/</span>
            <span>Areas Served</span>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>{area.shortName}</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span className="hero-pill-badge" style={{ marginBottom: '0.85rem' }}>
              <MapPin size={12} className="text-gold" />
              <span>{area.name} Local Service Hub</span>
            </span>

            <h1 style={{ color: 'var(--white)', fontSize: 'var(--fs-h1)', marginBottom: '0.85rem', lineHeight: 'var(--lh-tight)' }}>
              Best Skin &amp; Cosmetic Clinic in <span className="text-gradient-gold">{area.name}</span>
            </h1>

            <p style={{ color: 'var(--taupe)', fontSize: 'var(--fs-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {area.tagline}. Advanced skin care, HydraFacial, laser hair reduction, and anti-aging treatments led by Rizwana Sayed at Sunrise Building, 4th Pasta Lane, Colaba.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn--primary btn--lg">
                <Calendar size={15} />
                <span>Book Consultation for {area.shortName}</span>
              </button>
              <a href={`tel:${CLINIC_PHONE}`} className="btn btn--glass btn--lg">
                <Phone size={15} />
                <span>Call {CLINIC_DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 4K High-Res Visual Clinic Showcase ── */}
      <section className="section" style={{ backgroundColor: 'var(--cream-warm)', padding: 'clamp(2.5rem, 4vh, 3.5rem) 0' }}>
        <div className="container">
          <div className="responsive-2col">
            {/* Primary 4K Clinic Treatment Suite */}
            <div className="luxury-card" style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '280px', marginBottom: '0.85rem' }}>
                <img
                  src={area.image}
                  alt={`ABSOLUT AURAA treatment suite in ${area.name}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge liquid-badge">
                  <Sparkles size={11} className="text-gold" />
                  <span>FDA-Approved Clinical Laser Suite</span>
                </span>
              </div>
              <div style={{ padding: '0.25rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--charcoal)', marginBottom: '0.35rem' }}>
                  State-of-the-Art Treatment Rooms
                </h3>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Equipped with US-FDA approved Diode Laser, medical HydraFacial systems, and advanced clinical technology for gentle, permanent results.
                </p>
              </div>
            </div>

            {/* Secondary 4K Consultation Lounge */}
            <div className="luxury-card" style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '280px', marginBottom: '0.85rem' }}>
                <img
                  src={area.secondaryImage}
                  alt={`ABSOLUT AURAA consultation lounge serving ${area.name}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge liquid-badge">
                  <ShieldCheck size={11} className="text-gold" />
                  <span>Private 1-on-1 Consultation</span>
                </span>
              </div>
              <div style={{ padding: '0.25rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--charcoal)', marginBottom: '0.35rem' }}>
                  Serene &amp; Confidential Ambience
                </h3>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Personalized skin and hair analysis in a tranquil, luxury environment just {area.travelTime} from {area.shortName}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Main Details, Treatments & FAQs ── */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <div>
              <span className="section-label">Local Professional skin care</span>
              <h2 className="section-title">
                Serving Residents &amp; Professionals of <span>{area.shortName}</span>
              </h2>

              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                {area.description}
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: 'var(--fs-body)' }}>
                {area.localContent}
              </p>

              {/* Landmarks */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Nearby Landmarks &amp; Access Points
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {area.landmarks.map((l, i) => (
                  <span key={i} className="badge">
                    <Navigation size={11} />
                    {l}
                  </span>
                ))}
              </div>

              {/* Popular Treatments */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Most Requested Treatments in {area.shortName}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {area.popularTreatments.map((t, i) => (
                  <div key={i} className="luxury-card" style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>{t}</strong>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.85rem' }}>
                Frequently Asked Questions for {area.shortName} Patients
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {area.faqs.map((faq, i) => (
                  <div key={i} className="liquid-faq-card">
                    <strong style={{ color: 'var(--charcoal)', display: 'block', marginBottom: '0.25rem', fontSize: 'var(--fs-small)' }}>
                      {faq.question}
                    </strong>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel, Distance & Navigation Sidebar */}
            <div className="sticky-sidebar">
              {/* Distance Card */}
              <div className="luxury-card" style={{ padding: '1.5rem', border: '1.5px solid var(--gold-light)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <Clock size={18} className="text-gold" />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--charcoal)', margin: 0 }}>
                    Distance &amp; Travel Info
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem', fontSize: 'var(--fs-small)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212,185,106,0.15)', paddingBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>Distance from {area.shortName}:</span>
                    <strong style={{ fontSize: 'var(--fs-xs)' }}>{area.distanceFromClinic}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212,185,106,0.15)', paddingBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>Estimated Travel Time:</span>
                    <strong style={{ fontSize: 'var(--fs-xs)', color: 'var(--gold-dark)' }}>{area.travelTime}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>Clinic Address:</span>
                    <span style={{ textAlign: 'right', maxWidth: '200px', fontSize: 'var(--fs-xs)' }}>
                      Sunrise Bldg, 4th Pasta Lane, Colaba
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn btn--primary btn--lg"
                  style={{ width: '100%', marginBottom: '0.65rem' }}
                >
                  <Calendar size={15} />
                  <span>Book Consultation</span>
                </button>

                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="btn btn--secondary"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Phone size={13} />
                  <span>Call {CLINIC_DISPLAY_PHONE}</span>
                </a>
              </div>

              {/* Other Areas Nav */}
              <div className="luxury-card" style={{ padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Explore Other South Mumbai Hubs</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {otherAreas.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/service-areas/${a.slug}`}
                      className="btn btn--secondary btn--sm"
                    >
                      <MapPin size={11} />
                      <span>{a.shortName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Bottom Full-Width Consultation Banner ── */}
      <section style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)', padding: 'clamp(2.5rem, 4vh, 3.5rem) 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="section-label section-label--center" style={{ color: 'var(--gold-light)' }}>Colaba Sanctuary</span>
          <h2 style={{ color: 'var(--white)', fontSize: 'var(--fs-h2)', marginBottom: '0.75rem' }}>
            Transform Your Skin with <span className="text-gradient-gold">ABSOLUT AURAA</span>
          </h2>
          <p style={{ color: 'var(--taupe)', fontSize: 'var(--fs-body)', marginBottom: '1.5rem', lineHeight: 1.65 }}>
            Personalized treatment plans crafted specifically for your skin goals. Schedule your private consultation at our 4th Pasta Lane clinic today.
          </p>
          <button onClick={onOpenBooking} className="btn btn--primary btn--lg">
            <Calendar size={15} />
            <span>Book Your Appointment Now</span>
          </button>
        </div>
      </section>
    </>
  );
};
