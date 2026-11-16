/**
 * Patient testimonials.
 *
 * This file previously contained six invented patient stories, each marked
 * `verified: true`. Fabricated patient endorsements for a medical clinic are a
 * Google policy violation and a consumer-protection risk, so they were removed.
 *
 * The reviews section now links to the clinic's real Google Business Profile
 * (see `src/components/ReviewCarousel.tsx`).
 *
 * If you later want testimonials on the site, only add entries that are real,
 * given with the patient's consent, and reproduced accurately. Do not invent
 * names, treatments, dates or ratings, and do not set `verified: true` unless
 * the review genuinely exists on a platform where a visitor can check it.
 */

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [];
