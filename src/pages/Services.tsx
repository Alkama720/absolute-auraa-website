import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES } from '../data/services';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'skin', label: 'Skin Care & Peels' },
    { id: 'cosmetic', label: 'Medi-Facials' },
    { id: 'laser', label: 'Diode Laser' },
    { id: 'anti-aging', label: 'Anti-Aging & Botox' },
    { id: 'hair', label: 'Hair PRP & GFC' },
  ];

  return (
    <>
      <SEOHead />

      {/* Header (Frame Sized) */}
      <section style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)', padding: 'clamp(3rem, 5vh, 4.25rem) 0', position: 'relative', width: '100%' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Treatment Menu</span>
          <h1 style={{ color: 'var(--white)', fontSize: 'var(--fs-h1)', marginBottom: '0.75rem', lineHeight: 'var(--lh-tight)' }}>
            Advanced <span className="text-gradient-gold">Clinical &amp; Aesthetic Treatments</span>
          </h1>
          <p style={{ color: 'var(--taupe)', maxWidth: '720px', fontSize: 'var(--fs-body)', lineHeight: 1.7 }}>
            Curated clinical procedures designed to address acne, scars, pigmentation, hair thinning, unwanted hair, and facial rejuvenation with zero downtime.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid (Frame Sized) */}
      <section className="section" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn btn--sm ${
                  selectedCategory === cat.id ? 'btn--primary' : 'btn--secondary'
                }`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map((service) => (
              <div key={service.id} className="liquid-treatment-card">
                <div className="liquid-treatment-img-wrap" style={{ aspectRatio: '16 / 10', width: '100%' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  />
                  <span className="badge liquid-badge">
                    {service.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                  <Clock size={13} className="text-gold" />
                  <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>{service.duration}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.45rem' }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginBottom: '1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {service.excerpt}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1rem' }}>
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: 'var(--fs-xs)', color: 'var(--charcoal)' }}>
                      <CheckCircle2 size={13} className="text-gold" style={{ flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(212,185,106,0.25)',
                    paddingTop: '0.85rem',
                    marginTop: 'auto',
                  }}
                >
                  <div>
                    <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', display: 'block' }}>From</span>
                    <strong style={{ color: 'var(--gold-dark)', fontSize: '1.05rem' }}>{service.pricingStarting}</strong>
                  </div>

                  <Link to={`/services/${service.slug}`} className="btn btn--secondary btn--sm">
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation Banner (Frame Sized) */}
          <div
            className="luxury-card"
            style={{
              marginTop: '3rem',
              background: 'var(--gradient-dark)',
              color: 'var(--white)',
              textAlign: 'center',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            }}
          >
            <Sparkles size={28} className="text-gold" style={{ margin: '0 auto 0.75rem' }} />
            <h2 style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Unsure Which Treatment Is Best for Your Skin?
            </h2>
            <p style={{ color: 'var(--taupe)', maxWidth: '620px', margin: '0 auto 1.5rem', fontSize: 'var(--fs-body)' }}>
              Schedule a comprehensive digital skin assessment with Rizwana Sayed at our Colaba clinic for personalized medical recommendations.
            </p>
            <button onClick={onOpenBooking} className="btn btn--primary btn--lg">
              <Calendar size={15} />
              <span>Book Doctor Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
