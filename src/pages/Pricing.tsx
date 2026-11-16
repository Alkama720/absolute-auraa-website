import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Tag,
  Clock,
  Info,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PRICING_DATA, PRICING_CATEGORIES, PricingItem } from '../data/pricing';
import { CLINIC_PHONE, CLINIC_DISPLAY_PHONE } from '../seo';

interface PricingProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filtered pricing data based on category and search query
  const filteredItems = useMemo(() => {
    return PRICING_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all'
          ? true
          : selectedCategory === 'special'
          ? item.isSpecial
          : item.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const pricingFaqs = [
    {
      q: 'Are consultation charges adjusted against treatment costs?',
      a: 'Yes. When you proceed with a personalized treatment plan or package on the same day as your consultation, your initial diagnostic evaluation fee is credited toward your procedure.',
    },
    {
      q: 'Why do some treatments say "Depends on area"?',
      a: 'Procedures like Thread Lifts, Meso Lipo, Endo Lift, and Hair Transplants depend heavily on the surface area, laxity grade, or total graft units required. During your in-clinic consultation, Rizwana Sayed provides an exact, transparent quote tailored to your anatomy.',
    },
    {
      q: 'Are multi-session package discounts available?',
      a: 'Absolutely. We offer customized 3-session, 6-session, and annual maintenance packages with savings of up to 30%–45% off single-session rates for treatments like Diode Laser Hair Removal, HydraFacials, and Acne Scar Revision.',
    },
    {
      q: 'What payment modes are accepted at your Colaba clinic?',
      a: 'We accept all major Credit/Debit Cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, Cash, and 0% interest EMI options on eligible multi-session clinical plans.',
    },
    {
      q: 'Are these treatments safe for sensitive and Indian skin phototypes?',
      a: '100% safe. Every protocol and energy-based device (including our triple-wavelength Diode laser, RF Microneedling, and Pico lasers) is specifically calibrated for Fitzpatrick skin phototypes III to V, eliminating risks of post-inflammatory pigmentation or burns.',
    },
  ];

  return (
    <>
      <SEOHead />

      {/* ================= 1. LUXURY HERO BANNER ================= */}
      <section
        style={{
          backgroundColor: 'var(--charcoal)',
          color: 'var(--white)',
          padding: 'clamp(3rem, 6vh, 4.5rem) 0 3rem',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(212, 185, 106, 0.25)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(212,185,106,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(212, 185, 106, 0.15)',
                border: '1px solid rgba(212, 185, 106, 0.35)',
                color: 'var(--gold-light)',
                fontSize: 'var(--fs-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={13} className="text-gold" />
              <span>Official Clinic Rate Card • 100% Transparent</span>
            </div>

            <h1
              style={{
                color: 'var(--white)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              Skin &amp; Cosmetic <span className="text-gradient-gold">Treatment Price List</span>
            </h1>

            <p
              style={{
                color: 'var(--taupe)',
                fontSize: 'var(--fs-body)',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              Clear, transparent pricing for all skin, hair, laser, and anti-aging treatments at ABSOLUT AURAA, Colaba. No hidden clinic surcharges, only certified clinical-grade care.
            </p>

            {/* Quick Guarantees Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--fs-small)', color: 'var(--white)' }}>
                <ShieldCheck size={16} className="text-gold" />
                <span>FDA-Approved Technology</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--fs-small)', color: 'var(--white)' }}>
                <Award size={16} className="text-gold" />
                <span>Led by Certified Cosmetologist</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--fs-small)', color: 'var(--white)' }}>
                <Tag size={16} className="text-gold" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. CONTROLS & FILTER SECTION ================= */}
      <section
        style={{
          backgroundColor: 'var(--cream)',
          padding: '2rem 0 1rem',
          borderBottom: '1px solid rgba(212, 185, 106, 0.2)',
          position: 'sticky',
          top: '70px',
          zIndex: 20,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Search Bar & View Mode Toggle */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  flex: '1 1 280px',
                  maxWidth: '480px',
                }}
              >
                <Search
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search treatment (e.g. Hydra Facial, PRP, Botox, Laser)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1.5px solid rgba(212, 185, 106, 0.4)',
                    backgroundColor: 'var(--white)',
                    fontSize: 'var(--fs-small)',
                    color: 'var(--charcoal)',
                    outline: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      fontSize: 'var(--fs-small)',
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* View Toggle (Cards vs Table) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'var(--white)',
                  padding: '0.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(212, 185, 106, 0.3)',
                }}
              >
                <button
                  onClick={() => setViewMode('cards')}
                  className={`btn btn--sm ${viewMode === 'cards' ? 'btn--primary' : 'btn--ghost'}`}
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.35rem 0.85rem' }}
                >
                  Cards View
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`btn btn--sm ${viewMode === 'table' ? 'btn--primary' : 'btn--ghost'}`}
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.35rem 0.85rem' }}
                >
                  Rate Sheet Table
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              {PRICING_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`btn btn--sm ${
                    selectedCategory === cat.id ? 'btn--primary' : 'btn--secondary'
                  }`}
                  style={{
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--fs-xs)',
                    padding: '0.4rem 1rem',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. PRICING CONTENT DISPLAY ================= */}
      <section className="section" style={{ backgroundColor: 'var(--cream)', minHeight: '600px' }}>
        <div className="container">
          {/* Results Count & Disclaimers */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.75rem',
              gap: '1rem',
            }}
          >
            <div>
              <span style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>
                Showing <strong>{filteredItems.length}</strong> of <strong>{PRICING_DATA.length}</strong> treatments
              </span>
              {selectedCategory !== 'all' && (
                <span style={{ marginLeft: '0.5rem', fontSize: 'var(--fs-xs)', color: 'var(--gold)' }}>
                  (Filtered by category)
                </span>
              )}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'var(--fs-xs)',
                color: 'var(--charcoal)',
                backgroundColor: 'rgba(212, 185, 106, 0.15)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(212, 185, 106, 0.3)',
              }}
            >
              <Info size={14} className="text-gold" />
              <span>Prices in Indian Rupees (INR) • Inclusive of Clinical Sterilization</span>
            </div>
          </div>

          {/* If No Results */}
          {filteredItems.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(212, 185, 106, 0.3)',
              }}
            >
              <Search size={36} className="text-gold" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No treatments found</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                We couldn't find any treatment matching "{searchQuery}". Try another keyword or browse all treatments.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn btn--secondary"
              >
                Reset Search
              </button>
            </div>
          ) : viewMode === 'cards' ? (
            /* CARDS GRID VIEW */
            <div className="grid-3" style={{ gap: '1.5rem' }}>
              {filteredItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    id={item.slug}
                    style={{
                      backgroundColor: 'var(--white)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1.5px solid rgba(212, 185, 106, 0.28)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 8px 24px rgba(44, 36, 22, 0.05)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(212, 185, 106, 0.16)';
                      e.currentTarget.style.borderColor = 'var(--gold)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 36, 22, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(212, 185, 106, 0.28)';
                    }}
                  >
                    {/* Header Bar */}
                    <div
                      style={{
                        padding: '1.25rem 1.25rem 0.75rem',
                        borderBottom: '1px solid rgba(212, 185, 106, 0.15)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: 'var(--gold)',
                          }}
                        >
                          {item.categoryLabel}
                        </span>

                        {item.badge && (
                          <span
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 600,
                              padding: '0.2rem 0.55rem',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: 'rgba(212, 185, 106, 0.18)',
                              color: 'var(--charcoal)',
                              border: '1px solid rgba(212, 185, 106, 0.4)',
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <h3
                        style={{
                          fontSize: '1.2rem',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          color: 'var(--charcoal)',
                          lineHeight: 1.25,
                          minHeight: '2.5rem',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {item.name}
                      </h3>
                    </div>

                    {/* Price Showcase Block */}
                    <div
                      style={{
                        padding: '1rem 1.25rem',
                        backgroundColor: 'rgba(253, 251, 247, 0.7)',
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid rgba(212, 185, 106, 0.12)',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                          <span
                            style={{
                              fontSize: '1.45rem',
                              fontWeight: 800,
                              fontFamily: 'var(--font-display)',
                              color: 'var(--charcoal)',
                            }}
                          >
                            {item.priceDisplay}
                          </span>

                        </div>

                        {item.sessions && (
                          <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', display: 'block' }}>
                            {item.sessions}
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Description & Clinical Benefits */}
                    <div
                      style={{
                        padding: '1.25rem',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <p
                        style={{
                          fontSize: 'var(--fs-small)',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                          marginBottom: '1rem',
                        }}
                      >
                        {item.shortDescription}
                      </p>

                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: '0 0 1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem',
                          flex: 1,
                        }}
                      >
                        {item.benefits.map((b, i) => (
                          <li
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: 'var(--fs-xs)',
                              color: 'var(--charcoal)',
                              lineHeight: 1.45,
                            }}
                          >
                            <CheckCircle2
                              size={14}
                              className="text-gold"
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Card Action Buttons */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.5rem',
                          marginTop: 'auto',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid rgba(212, 185, 106, 0.15)',
                        }}
                      >
                        <button
                          onClick={() => onOpenBooking(item.name)}
                          className="btn btn--primary btn--sm"
                          style={{ flex: 1, justifyContent: 'center' }}
                        >
                          <Calendar size={14} />
                          <span>Book Now</span>
                        </button>

                        <a
                          href={`https://wa.me/${CLINIC_PHONE.replace('+', '')}?text=${encodeURIComponent(
                            `Hi Absolut Auraa, I would like to inquire about the ${item.name} (${item.priceDisplay}) listed on your official price list.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--secondary btn--sm"
                          style={{ padding: '0.4rem 0.65rem' }}
                          aria-label={`Inquire about ${item.name} on WhatsApp`}
                        >
                          <MessageCircle size={15} className="text-gold" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* RATE SHEET TABLE VIEW */
            <div
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(212, 185, 106, 0.3)',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(44, 36, 22, 0.05)',
              }}
            >
              <div style={{ overflowX: 'auto' }}>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    textAlign: 'left',
                    fontSize: 'var(--fs-small)',
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        backgroundColor: 'var(--charcoal)',
                        color: 'var(--white)',
                        borderBottom: '2px solid var(--gold)',
                      }}
                    >
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 600 }}>Treatment Name</th>
                      <th style={{ padding: '1rem 1rem', fontWeight: 600 }}>Category</th>
                      <th style={{ padding: '1rem 1rem', fontWeight: 600 }}>Sessions / Scope</th>
                      <th style={{ padding: '1rem 1rem', fontWeight: 600, textAlign: 'right' }}>Official Rate</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 600, textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item, idx) => (
                      <tr
                        key={item.id}
                        style={{
                          backgroundColor: idx % 2 === 0 ? 'var(--white)' : 'rgba(253, 251, 247, 0.7)',
                          borderBottom: '1px solid rgba(212, 185, 106, 0.15)',
                        }}
                      >
                        <td style={{ padding: '0.85rem 1.25rem', fontWeight: 600, color: 'var(--charcoal)' }}>
                          <div>{item.name}</div>
                          <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', fontWeight: 400 }}>
                            {item.shortDescription}
                          </div>
                        </td>
                        <td style={{ padding: '0.85rem 1rem' }}>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              padding: '0.2rem 0.5rem',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: 'rgba(212, 185, 106, 0.15)',
                              color: 'var(--charcoal)',
                              fontWeight: 600,
                            }}
                          >
                            {item.categoryLabel}
                          </span>
                        </td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>
                          {item.sessions || 'Per Session'}
                        </td>
                        <td
                          style={{
                            padding: '0.85rem 1rem',
                            textAlign: 'right',
                            fontWeight: 700,
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.05rem',
                            color: 'var(--charcoal)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.priceDisplay}
                        </td>
                        <td style={{ padding: '0.85rem 1.25rem', textAlign: 'center' }}>
                          <button
                            onClick={() => onOpenBooking(item.name)}
                            className="btn btn--primary btn--sm"
                            style={{ padding: '0.35rem 0.75rem', fontSize: 'var(--fs-xs)' }}
                          >
                            Book
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= 4. RATE CARD OFFICIAL BANNER & DISCLAIMER ================= */}
          <div
            style={{
              marginTop: '3.5rem',
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1.5px solid rgba(212, 185, 106, 0.4)',
              boxShadow: '0 16px 40px rgba(44, 36, 22, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              {/* Left Pillar */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 185, 106, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={24} className="text-gold" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--charcoal)' }}>
                    Expert Medical Protocol
                  </h4>
                  <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    All treatments are performed by experts for safe &amp; effective results.
                  </p>
                </div>
              </div>

              {/* Right Pillar */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 185, 106, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Award size={24} className="text-gold" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--charcoal)' }}>
                    Personalized Treatment Plans
                  </h4>
                  <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    Prices may vary depending on the treatment plan recommended by the doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Clinic Tagline */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(212, 185, 106, 0.25)',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                }}
              >
                REVEAL YOUR BEST • RESTORE YOUR CONFIDENCE
              </span>
            </div>
          </div>

          {/* ================= 5. FREQUENTLY ASKED QUESTIONS ================= */}
          <div style={{ marginTop: '4rem' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-label section-label--center">Clinic Transparency</span>
              <h2 className="section-title">
                Pricing &amp; Booking <span>FAQs</span>
              </h2>
              <p className="section-subtitle">
                Everything you need to know about our rates, consultations, and payment options.
              </p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {pricingFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--white)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(212, 185, 106, 0.25)',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(44, 36, 22, 0.04)',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '1.15rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--charcoal)',
                        fontSize: 'var(--fs-body)',
                        fontWeight: 600,
                      }}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="text-gold" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
                      ) : (
                        <ChevronDown size={18} className="text-gold" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
                      )}
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.25rem 1.25rem',
                          color: 'var(--text-muted)',
                          fontSize: 'var(--fs-small)',
                          lineHeight: 1.65,
                          borderTop: '1px solid rgba(212, 185, 106, 0.1)',
                        }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= 6. FINAL BOOKING / WHATSAPP CTA ================= */}
          <div
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--charcoal)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 5vw, 3rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(212, 185, 106, 0.3)',
            }}
          >
            <h3
              style={{
                color: 'var(--white)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              Need a Customized Treatment Package?
            </h3>
            <p
              style={{
                color: 'var(--taupe)',
                maxWidth: '650px',
                margin: '0 auto 2rem',
                fontSize: 'var(--fs-body)',
                lineHeight: 1.65,
              }}
            >
              Speak directly with our clinical coordinator or schedule an in-depth skin &amp; hair analysis with Rizwana Sayed at our Colaba clinic.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <button onClick={() => onOpenBooking('')} className="btn btn--primary btn--lg">
                <Calendar size={18} />
                <span>Book In-Clinic Consultation</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_PHONE.replace('+', '')}?text=${encodeURIComponent(
                  'Hi Absolut Auraa, I am visiting your website pricing page and would like to consult with the doctor.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--glass btn--lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Coordinator</span>
              </a>

              <a href={`tel:${CLINIC_PHONE}`} className="btn btn--glass btn--lg">
                <Phone size={18} />
                <span>Call {CLINIC_DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
