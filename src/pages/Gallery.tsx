import React, { useState } from 'react';
import { Calendar, X, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { GALLERY_ITEMS } from '../data/gallery';

interface GalleryProps {
  onOpenBooking: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <>
      <SEOHead />

      {/* Header (Frame Sized) */}
      <section style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)', padding: 'clamp(3rem, 5vh, 4.25rem) 0', position: 'relative', width: '100%' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Virtual Clinic Tour</span>
          <h1 style={{ color: 'var(--white)', fontSize: 'var(--fs-h1)', marginBottom: '0.75rem', lineHeight: 'var(--lh-tight)' }}>
            Inside <span className="text-gradient-gold">ABSOLUT AURAA</span>
          </h1>
          <p style={{ color: 'var(--taupe)', maxWidth: '720px', fontSize: 'var(--fs-body)', lineHeight: 1.7 }}>
            Explore our state-of-the-art treatment suites, serene consultation lounges, and FDA-approved laser technology at our 4th Pasta Lane clinic in Colaba.
          </p>
        </div>
      </section>

      {/* Gallery Grid (Frame Sized) */}
      <section className="section" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'clinic', label: 'Clinic & Lounges' },
              { id: 'treatment', label: 'Treatments & Skincare' },
              { id: 'equipment', label: 'Advanced Lasers & Tech' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`btn btn--sm ${filter === f.id ? 'btn--primary' : 'btn--secondary'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="luxury-card"
                style={{ padding: '0.65rem', cursor: 'pointer' }}
                onClick={() => setActiveImage(item.image)}
              >
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '16 / 11', width: '100%' }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.4s ease' }}
                  />
                </div>
                <div style={{ padding: '0.65rem 0.4rem 0.2rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--charcoal)' }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button onClick={onOpenBooking} className="btn btn--primary btn--lg">
              <Calendar size={15} />
              <span>Book Your In-Person Visit</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveImage(null)}
          style={{ zIndex: 1000 }}
        >
          <div style={{ maxWidth: '850px', width: '100%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage}
              alt="Expanded view"
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
            />
            <button
              onClick={() => setActiveImage(null)}
              className="btn btn--primary btn--sm"
              style={{ position: 'absolute', top: '1rem', right: '1rem' }}
            >
              <X size={14} />
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
