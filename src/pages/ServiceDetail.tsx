import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Phone,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { getServiceBySlug, SERVICES } from '../data/services';
import { CLINIC_PHONE, CLINIC_DISPLAY_PHONE } from '../seo';

interface ServiceDetailProps {
  onOpenBooking: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEOHead />

      {/* Hero Header (Frame Sized) */}
      <section style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)', padding: 'clamp(3rem, 5vh, 4.25rem) 0', position: 'relative', width: '100%' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem', fontSize: 'var(--fs-xs)', color: 'var(--taupe)' }}>
            <Link to="/" style={{ color: 'var(--gold-light)' }}>Home</Link>
            <span>/</span>
            <Link to="/services" style={{ color: 'var(--gold-light)' }}>Services</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>{service.shortTitle}</span>
          </div>

          <div style={{ maxWidth: '760px' }}>
            <span className="badge" style={{ marginBottom: '0.85rem', background: 'rgba(212,185,106,0.2)', color: 'var(--gold-light)', borderColor: 'var(--gold-light)' }}>
              <Sparkles size={12} />
              <span>{service.badge}</span>
            </span>
            <h1 style={{ color: 'var(--white)', fontSize: 'var(--fs-h1)', marginBottom: '0.85rem', lineHeight: 'var(--lh-tight)' }}>
              {service.title} in <span className="text-gradient-gold">Colaba, Mumbai</span>
            </h1>
            <p style={{ color: 'var(--taupe)', fontSize: 'var(--fs-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {service.excerpt}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn--primary btn--lg">
                <Calendar size={15} />
                <span>Book This Treatment</span>
              </button>
              <a href={`tel:${CLINIC_PHONE}`} className="btn btn--glass btn--lg">
                <Phone size={15} />
                <span>Call {CLINIC_DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Quick Info Strip (Frame Sized) */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {/* Left: Detailed Clinical Content */}
            <div>
              <span className="section-label">Treatment Overview</span>
              <h2 className="section-title">
                Comprehensive <span>{service.shortTitle}</span> Protocol
              </h2>

              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {service.description}
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.85rem', marginTop: '1.5rem' }}>
                Key Benefits &amp; Clinical Advantages
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                {service.benefits.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Step by Step Procedure */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                Step-by-Step Clinical Procedure
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {service.procedureSteps.map((step, idx) => (
                  <div key={idx} className="luxury-card" style={{ padding: '1rem 1.25rem' }}>
                    <strong style={{ color: 'var(--gold-dark)', fontSize: '0.95rem', display: 'block', marginBottom: '0.25rem' }}>
                      {step.title}
                    </strong>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Candidates & Recovery */}
              <div className="grid-2" style={{ gap: '1rem', marginBottom: '2rem' }}>
                <div className="luxury-card" style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.35rem' }}>
                    Ideal Candidates
                  </h4>
                  <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {service.candidates}
                  </p>
                </div>

                <div className="luxury-card" style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '0.35rem' }}>
                    Recovery &amp; Downtime
                  </h4>
                  <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {service.recovery}
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                Frequently Asked Questions about {service.shortTitle}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {service.faqs.map((faq, i) => (
                  <div key={i} className="liquid-faq-card">
                    <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                      <HelpCircle size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--charcoal)', display: 'block', marginBottom: '0.25rem', fontSize: 'var(--fs-small)' }}>
                          {faq.question}
                        </strong>
                        <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Action Booking Card */}
            <div className="sticky-sidebar">
              <div className="luxury-card" style={{ padding: '1.5rem', border: '1.5px solid var(--gold-light)' }}>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.15rem', aspectRatio: '16 / 10', width: '100%' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  />
                </div>

                <div style={{ marginBottom: '1.15rem' }}>
                  <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', display: 'block' }}>Investment starting at</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--gold-dark)', lineHeight: 1.1 }}>
                    {service.pricingStarting}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>*Customized packages available upon consultation</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem', fontSize: 'var(--fs-small)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212,185,106,0.15)', paddingBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>Duration:</span>
                    <strong style={{ fontSize: 'var(--fs-xs)' }}>{service.duration}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212,185,106,0.15)', paddingBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>Downtime:</span>
                    <strong style={{ fontSize: 'var(--fs-xs)' }}>{service.recoveryTime}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212,185,106,0.15)', paddingBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>Clinic Location:</span>
                    <strong style={{ fontSize: 'var(--fs-xs)' }}>4th Pasta Lane, Colaba</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>Doctor In-Charge:</span>
                    <strong style={{ fontSize: 'var(--fs-xs)', color: 'var(--gold-dark)' }}>Rizwana Sayed</strong>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn btn--primary btn--lg"
                  style={{ width: '100%', marginBottom: '0.65rem' }}
                >
                  <Calendar size={15} />
                  <span>Book Appointment Now</span>
                </button>

                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="btn btn--secondary"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Phone size={13} />
                  <span>Call to Inquire</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Treatments (Frame Sized) */}
      <section className="section" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label--center">Explore More</span>
            <h2 className="section-title">Complementary <span>Treatments</span></h2>
          </div>

          <div className="grid-3">
            {otherServices.map((s) => (
              <div key={s.id} className="liquid-treatment-card">
                <div className="liquid-treatment-img-wrap" style={{ aspectRatio: '16 / 10', width: '100%' }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  />
                  <span className="badge liquid-badge">{s.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>{s.title}</h3>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginBottom: '1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {s.excerpt}
                </p>
                <Link to={`/services/${s.slug}`} className="btn btn--secondary btn--sm" style={{ alignSelf: 'flex-start' }}>
                  <span>View Details</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
