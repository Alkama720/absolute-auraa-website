import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Star,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Zap,
  Activity,
  Heart,
  Tag,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { SERVICES } from '../data/services';
import { GENERAL_FAQS } from '../data/faqs';
import {
  CLINIC_PHONE,
  CLINIC_DISPLAY_PHONE,
  CLINIC_ADDRESS,
  GBP_SHARE_URL,
} from '../seo';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'skin', label: 'Skin & Acne' },
    { id: 'cosmetic', label: 'Medi-Facials' },
    { id: 'laser', label: 'Diode Laser' },
    { id: 'anti-aging', label: 'Anti-Aging & Botox' },
    { id: 'hair', label: 'Hair PRP & GFC' },
  ];

  return (
    <>
      <SEOHead />

      {/* ================= 1. HERO SECTION (100% FRAME FIT) ================= */}
      <section className="hero-wrapper" aria-label="Welcome to ABSOLUT AURAA">
        <img
          src="/assets/images/clinic-signboard.jpeg"
          alt="ABSOLUT AURAA Cosmetic Clinic Colaba Mumbai"
          className="hero-bg-img"
          fetchPriority="high"
        />
        <div className="hero-overlay" />

        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Column: Headline, Chips, Description & Actions */}
            <div className="hero-left-card">
              <div className="hero-pill-badge">
                <Sparkles size={13} className="text-gold" />
                <span>Colaba, South Mumbai • Aesthetic Skin care</span>
              </div>

              <h1 className="hero-title text-hero">
                Where Clinical Science Meets <span className="text-gradient-gold">Bespoke Elegance</span>
              </h1>

              {/* Treatment Focus Chips */}
              <div className="hero-chips-row">
                <span className="hero-chip">
                  <Activity size={12} className="text-gold" />
                  <span>Skin Rejuvenation</span>
                </span>
                <span className="hero-chip">
                  <Zap size={12} className="text-gold" />
                  <span>Diode Laser</span>
                </span>
                <span className="hero-chip">
                  <Heart size={12} className="text-gold" />
                  <span>Anti-Aging &amp; Botox</span>
                </span>
                <span className="hero-chip">
                  <Sparkles size={12} className="text-gold" />
                  <span>Hair PRP</span>
                </span>
                <Link
                  to="/pricing"
                  className="hero-chip"
                  style={{
                    textDecoration: 'none',
                    borderColor: 'var(--gold-light)',
                    background: 'rgba(212,185,106,0.22)',
                  }}
                >
                  <Tag size={12} className="text-gold" />
                  <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>Rate Card (From ₹1,000)</span>
                </Link>
              </div>

              <p className="hero-description">
                Experience refined cosmetic medicine and clinical-grade treatments in the heart of South Mumbai. Real clinical results delivered with gentle, patient-first care.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-row">
                <button onClick={onOpenBooking} className="btn btn--primary btn--lg">
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </button>

                <Link
                  to="/pricing"
                  className="btn btn--secondary btn--lg"
                  style={{ borderColor: 'var(--gold)', color: 'var(--white)', backgroundColor: 'rgba(212,185,106,0.15)' }}
                >
                  <Tag size={15} className="text-gold" />
                  <span>View Price List</span>
                </Link>

                <Link to="/services" className="btn btn--glass btn--lg">
                  <span>Explore Treatments</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Specialist Endorsement Strip */}
              <div className="hero-doctor-badge">
                <img
                  src="/assets/images/doctor-portrait.jpg"
                  alt="Rizwana Sayed Cosmetologist"
                  className="hero-doctor-img"
                />
                <div>
                  <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: 'var(--fs-small)' }}>
                    Led by Rizwana Sayed
                  </div>
                  {/* Years-of-experience figure removed until the real number is
                      confirmed. Add it back with the actual figure — unverified
                      experience claims are an E-E-A-T liability on a medical site. */}
                  <div style={{ color: 'var(--gold-light)', fontSize: 'var(--fs-xs)' }}>
                    Certified Cosmetologist &amp; Skin Specialist
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Glass Consultation & Highlights Card */}
            <div>
              <div className="hero-glass-card">
                {/* Reviews link.
                    This block previously showed a hardcoded "4.9 / 5.0", "240+ Verified
                    Patient Reviews" and a "Google Verified" badge, none of which came
                    from any real data source. Instead of restating a number we cannot
                    prove, send visitors to the live Google profile where they can read
                    the real reviews — which is also what actually helps local ranking. */}
                <div className="hero-rating-box">
                  <a
                    href={GBP_SHARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      color: 'var(--white)',
                      textDecoration: 'none',
                      fontSize: 'var(--fs-small)',
                      fontWeight: 600,
                    }}
                  >
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                      ))}
                    </div>
                    <span>Read our Google reviews</span>
                  </a>
                </div>

                {/* Clinical Highlights List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div className="hero-feature-item">
                    <div className="hero-feature-icon">
                      <Zap size={14} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: 'var(--fs-small)' }}>Painless Triple Diode Laser</strong>
                      <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--taupe)', margin: 0 }}>Integrated -4°C sapphire ice cooling for Indian skin.</p>
                    </div>
                  </div>

                  <div className="hero-feature-item">
                    <div className="hero-feature-icon">
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: 'var(--fs-small)' }}>Signature HydraFacial &amp; Peels</strong>
                      <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--taupe)', margin: 0 }}>Vortex deep pore clearance with instant glass glow.</p>
                    </div>
                  </div>

                  <div className="hero-feature-item">
                    <div className="hero-feature-icon">
                      <Award size={14} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: 'var(--fs-small)' }}>Acne Scars, Pigmentation &amp; Botox</strong>
                      <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--taupe)', margin: 0 }}>Fractional laser, PRP microneedling &amp; natural fillers.</p>
                    </div>
                  </div>
                </div>

                {/* Location Pill & Action */}
                <div style={{ borderTop: '1px solid rgba(212,185,106,0.2)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--taupe)', fontSize: 'var(--fs-xs)', marginBottom: '0.85rem' }}>
                    <MapPin size={13} className="text-gold" style={{ flexShrink: 0 }} />
                    <span>Sunrise Bldg, 4th Pasta Lane, Colaba, Mumbai</span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="btn btn--primary btn--lg"
                    style={{ width: '100%' }}
                  >
                    <Calendar size={15} />
                    <span>Schedule In-Clinic Visit</span>
                  </button>

                  <Link
                    to="/pricing"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      marginTop: '0.75rem',
                      fontSize: 'var(--fs-xs)',
                      color: 'var(--gold-light)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(212, 185, 106, 0.12)',
                      border: '1px solid rgba(212, 185, 106, 0.28)',
                    }}
                  >
                    <Tag size={13} className="text-gold" />
                    <span>View Transparent Price List (All 42 Rates) →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip.
              Every figure here is checkable. The previous version claimed "12+ Years
              of Excellence", "8,500+ Happy Patients", a "4.9 Google Star Rating" and
              "100% FDA-Approved Tech" — none of which came from a real source. On a
              medical site those are the exact claims a Google quality rater probes,
              and a patient can disprove the rating in one click. */}
          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <div className="hero-trust-num">42</div>
              <div className="hero-trust-text">Treatments Offered</div>
            </div>
            <div className="hero-trust-item">
              <div className="hero-trust-num">Colaba</div>
              <div className="hero-trust-text">4th Pasta Lane, SoBo</div>
            </div>
            <div className="hero-trust-item">
              <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="hero-trust-num" style={{ fontSize: '1.4rem' }}>Published</div>
                <div className="hero-trust-text">Rate Card &mdash; No Hidden Costs</div>
              </Link>
            </div>
            <div className="hero-trust-item">
              <a
                href={GBP_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="hero-trust-num" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                  <Star size={20} fill="#FBBC05" color="#FBBC05" />
                </div>
                <div className="hero-trust-text">Reviews on Google</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. ABOUT STORY & PHILOSOPHY (FRAME FIT) ================= */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2">
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 20px 48px rgba(44,36,22,0.12)', border: '1.5px solid rgba(212, 185, 106, 0.35)', aspectRatio: '4 / 3.2', width: '100%' }}>
                <img
                  src="/assets/images/area-south-mumbai.jpg"
                  alt="Personalized clinical aesthetic consultation at ABSOLUT AURAA Colaba"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
                />
              </div>

              {/* Floating Experience Badge with Liquid Glass Styling */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-0.75rem',
                  right: '-0.5rem',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 247, 242, 0.85) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(212, 185, 106, 0.6)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.85rem 1.25rem',
                  boxShadow: '0 12px 32px rgba(44, 36, 22, 0.15)',
                  textAlign: 'center',
                }}
              >
                {/* Was "12+ Years in Colaba" — an unsourced figure. Replaced with the
                    location itself, which is verifiable against the Google listing.
                    Put the years back once the real founding year is confirmed. */}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--gold-dark)', lineHeight: 1.15 }}>
                  4th Pasta Lane
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--charcoal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Colaba, South Mumbai
                </div>
              </div>
            </div>

            <div>
              <span className="section-label">Our Philosophy</span>
              <h2 className="section-title">
                Refined Skincare Designed Exclusively for <span>You</span>
              </h2>

              <p style={{ marginBottom: '0.85rem', fontSize: 'var(--fs-body)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Located at <strong>Sunrise Building, 4th Pasta Lane, Colaba</strong>, ABSOLUT AURAA was founded on the principle that exceptional skin requires clinical mastery harmonized with genuine personalized warmth.
              </p>

              <p style={{ marginBottom: '1.25rem', fontSize: 'var(--fs-body)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Under the clinical direction of <strong>Rizwana Sayed</strong> (Certified Cosmetologist &amp; Skin Therapist), every treatment protocol is customized to your unique dermal physiology — ensuring safe, natural, and long-lasting transformations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>FDA-Approved Systems</strong>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>Calibrated for Indian skin types.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                  <Award size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Certified Specialists</strong>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>Meticulous aesthetic protocols.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn--secondary">
                  <span>About Clinic</span>
                  <ArrowRight size={14} />
                </Link>
                <button onClick={onOpenBooking} className="btn btn--primary">
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SERVICES & TREATMENTS (FRAME FIT) ================= */}
      <section className="section" id="treatments" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label--center">Clinical Expertise</span>
            <h2 className="section-title">
              Signature <span>Treatments &amp; Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive clinical and aesthetic solutions tailored for acne, scars, pigmentation, hair restoration, and anti-aging in South Mumbai.
            </p>
          </div>

          {/* Category Filter Tabs */}
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
                onClick={() => setActiveCategory(cat.id)}
                className={`btn btn--sm ${activeCategory === cat.id ? 'btn--primary' : 'btn--secondary'
                  }`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid-3">
            {filteredServices.map((service) => (
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

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.45rem' }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginBottom: '1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {service.excerpt}
                </p>

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
                    <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', display: 'block' }}>Starting from</span>
                    <strong style={{ color: 'var(--gold-dark)', fontSize: '1.05rem' }}>{service.pricingStarting}</strong>
                  </div>

                  <Link to={`/services/${service.slug}`} className="btn btn--secondary btn--sm">
                    <span>Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.25rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/pricing" className="btn btn--primary btn--lg">
              <Tag size={16} />
              <span>Official Price List (All 42 Rates)</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/services" className="btn btn--secondary btn--lg">
              <span>Full Clinical Menu</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 4. BEFORE & AFTER RESULTS (FRAME FIT) ================= */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label--center">Verified Transformations</span>
            <h2 className="section-title">
              Real Patients • <span>Real Results</span>
            </h2>
            <p className="section-subtitle">
              Drag the interactive comparison slider below to see the noticeable textural improvement and luminous radiance achieved with our tailored protocols.
            </p>
          </div>

          <BeforeAfterSlider
            beforeImage="/assets/images/before-transformation.jpg"
            afterImage="/assets/images/after-transformation.jpg"
            beforeAlt="Patient before clinical acne and skin revision treatment"
            afterAlt="Patient after customized skincare protocol at ABSOLUT AURAA"
            title="Acne Clearance & Skin Texture Transformation"
          />

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>
              *Results may vary depending on individual skin condition, adherence to post-care regimens, and session count.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5. SPECIALIST SHOWCASE (FRAME FIT) ================= */}
      <section className="section" style={{ backgroundColor: 'var(--cream-warm)' }}>
        <div className="container">
          <div className="luxury-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: 'var(--white)' }}>
            <div className="grid-2">
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '4 / 4.2', width: '100%' }}>
                <img
                  src="/assets/images/doctor-portrait.jpg"
                  alt="Rizwana Sayed — Lead Cosmetologist & Skin Therapist at ABSOLUT AURAA Colaba"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 58%', display: 'block' }}
                />
              </div>

              <div>
                <span className="section-label">Meet Your Specialist</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', marginBottom: '0.2rem' }}>
                  Rizwana Sayed
                </h2>
                <p style={{ color: 'var(--gold-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                  Certified Cosmetologist &amp; Skin Therapist • Lead Practitioner
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.85rem', fontSize: 'var(--fs-body)' }}>
                  With over a decade of specialized training in cosmetic skincare, advanced facial therapies, and aesthetic rejuvenation, <strong>Rizwana Sayed</strong> brings a meticulous eye for detail and an artist’s precision to every patient consultation.
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: 'var(--fs-body)' }}>
                  Her patient-first philosophy ensures you receive honest guidance, scientifically validated treatments, and natural-looking transformations without unnecessary over-treatment.
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button onClick={onOpenBooking} className="btn btn--primary">
                    <Calendar size={15} />
                    <span>Book with Rizwana</span>
                  </button>
                  <a href={`tel:${CLINIC_PHONE}`} className="btn btn--secondary">
                    <Phone size={15} />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. GOOGLE REVIEWS (FRAME FIT) ================= */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label--center">Patient Stories</span>
            <h2 className="section-title">
              What Our <span>Patients Say</span>
            </h2>
          </div>

          <ReviewCarousel />
        </div>
      </section>

      {/* ================= 7. CLINIC GALLERY (FRAME FIT) ================= */}
      <section className="section" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label--center">Our Space</span>
            <h2 className="section-title">
              Inside <span>ABSOLUT AURAA</span>
            </h2>
            <p className="section-subtitle">
              Step inside our serene, luxury aesthetic sanctuary located on 4th Pasta Lane, Colaba.
            </p>
          </div>

          <div className="grid-3">
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <img
                src="/assets/images/clinic-signboard.jpeg"
                alt="ABSOLUT AURAA official clinic signboard"
                loading="lazy"
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <img
                src="/assets/images/consultation-room.jpg"
                alt="Doctor consultation suite"
                loading="lazy"
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <img
                src="/assets/images/treatment-equipment.jpg"
                alt="FDA approved treatment equipment"
                loading="lazy"
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/gallery" className="btn btn--secondary">
              <span>Explore Full Photo Gallery</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 8. FAQ ACCORDION (FRAME FIT) ================= */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <span className="section-label section-label--center">Frequently Asked Questions</span>
            <h2 className="section-title">
              Common <span>Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about visiting ABSOLUT AURAA Cosmetic Clinic in Colaba.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {GENERAL_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`liquid-faq-card ${openFaqIndex === idx ? 'liquid-faq-card--open' : ''}`}
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--charcoal)', fontWeight: 600 }}>
                    {faq.question}
                  </h3>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={18} className="text-gold" style={{ flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  )}
                </div>

                {openFaqIndex === idx && (
                  <p style={{ marginTop: '0.65rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: 'var(--fs-small)' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. LOCATION & CONTACT SECTION (FRAME FIT) ================= */}
      <section className="section" style={{ backgroundColor: 'var(--cream-warm)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-label">Visit Our Clinic</span>
              <h2 className="section-title">
                Prime Location in <span>Colaba, Mumbai</span>
              </h2>

              <p style={{ marginBottom: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 'var(--fs-body)' }}>
                Conveniently located in South Mumbai on 4th Pasta Lane, just off Colaba Causeway. Enjoy private, serene appointments in an elegant atmosphere.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Official Clinic Address</strong>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {CLINIC_ADDRESS.street}, {CLINIC_ADDRESS.city} – {CLINIC_ADDRESS.pincode}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Clock size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Consultation Hours</strong>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      Monday – Saturday: 10:00 AM – 7:00 PM<br />
                      Sunday: By Prior Appointment
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Phone size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--charcoal)', fontSize: 'var(--fs-small)' }}>Direct Contact</strong>
                    <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      <a href={`tel:${CLINIC_PHONE}`} style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>
                        {CLINIC_DISPLAY_PHONE}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenBooking} className="btn btn--primary">
                  <Calendar size={15} />
                  <span>Request Consultation</span>
                </button>
                <Link to="/contact" className="btn btn--secondary">
                  <span>Directions &amp; Parking</span>
                </Link>
              </div>
            </div>

            {/* Google Map Embed */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', minHeight: '340px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5!2d72.832!3d18.917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzAxLjIiTiA3MsKwNDknNTUuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ABSOLUT AURAA Cosmetic Clinic location in Colaba Mumbai"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
