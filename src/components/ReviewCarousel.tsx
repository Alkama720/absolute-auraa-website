import React from 'react';
import { Star, ExternalLink, PenLine } from 'lucide-react';
import { GBP_SHARE_URL, CLINIC_NAME } from '../seo';

/**
 * Google Reviews panel.
 *
 * This deliberately renders NO testimonial content of its own. The previous
 * version cycled through six hardcoded "patient stories" that were each
 * flagged `verified: true` in the source data. Publishing invented patient
 * endorsements for a medical clinic is both a Google policy problem and a
 * consumer-protection one, so the section now sends people to the clinic's
 * real Google Business Profile instead.
 *
 * Sending visitors to the live profile is also the better local-SEO move:
 * profile views, clicks and new reviews are genuine ranking signals, whereas
 * on-site testimonial text is not.
 */
export const ReviewCarousel: React.FC = () => {
  return (
    <div
      className="luxury-card"
      style={{
        maxWidth: '840px',
        margin: '0 auto',
        padding: 'clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.3rem',
          marginBottom: '1.25rem',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="#FBBC05" color="#FBBC05" />
        ))}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
          lineHeight: 1.6,
          color: 'var(--charcoal)',
          marginBottom: '0.85rem',
        }}
      >
        Every review of {CLINIC_NAME} lives on Google, written by patients who
        actually visited the clinic in Colaba.
      </p>

      <p
        style={{
          fontSize: 'var(--fs-small)',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          maxWidth: '58ch',
          margin: '0 auto 2rem',
        }}
      >
        We do not reproduce them here, because a review you can verify yourself
        is worth more than one printed on our own website. Read them in full —
        including the ratings and dates — directly on our Google profile.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.85rem',
          justifyContent: 'center',
        }}
      >
        <a
          href={GBP_SHARE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>Read reviews on Google</span>
          <ExternalLink size={16} aria-hidden="true" />
        </a>

        <a
          href={GBP_SHARE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <PenLine size={16} aria-hidden="true" />
          <span>Write a review</span>
        </a>
      </div>
    </div>
  );
};

export default ReviewCarousel;
