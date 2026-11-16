/**
 * Gallery items and FAQ content.
 *
 * A duplicate copy of the invented patient testimonials used to live at the top
 * of this file. It was dead code (only GENERAL_FAQS is imported from here) but
 * it still shipped in the bundle and was waiting to be re-used by mistake, so it
 * was removed along with the real copy in src/data/testimonials.ts.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'treatment' | 'equipment';
  image: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Luxury Reception & Lounge',
    category: 'clinic',
    image: '/assets/images/clinic-reception.jpg',
    alt: 'ABSOLUT AURAA luxury reception and patient lounge in Colaba Mumbai'
  },
  {
    id: '2',
    title: 'Private Specialist Consultation Suite',
    category: 'clinic',
    image: '/assets/images/consultation-room.jpg',
    alt: 'Private consultation room with specialist Rizwana Sayed at ABSOLUT AURAA'
  },
  {
    id: '3',
    title: 'Clinical Treatment Room',
    category: 'clinic',
    image: '/assets/images/treatment-room.png',
    alt: 'Sterile high-tech treatment room at ABSOLUT AURAA Colaba'
  },
  {
    id: '4',
    title: 'Advanced FDA-Approved Lasers & Equipment',
    category: 'equipment',
    image: '/assets/images/treatment-equipment.jpg',
    alt: 'State of the art laser and aesthetic skin care equipment'
  },
  {
    id: '5',
    title: 'Serene Patient Waiting Lounge',
    category: 'clinic',
    image: '/assets/images/waiting-lounge.png',
    alt: 'Serene patient waiting area at ABSOLUT AURAA'
  },
  {
    id: '6',
    title: 'Medical-Grade Skincare Formulations',
    category: 'treatment',
    image: '/assets/images/product-display.jpg',
    alt: 'Skin specialist tested clinical skincare and post-care products'
  },
  {
    id: '7',
    title: 'Signature HydraFacial & Glow Therapy',
    category: 'treatment',
    image: '/assets/images/hydrafacial.png',
    alt: 'HydraFacial skin treatment session at ABSOLUT AURAA'
  },
  {
    id: '8',
    title: 'Laser Skin Rejuvenation & Toning',
    category: 'treatment',
    image: '/assets/images/treatment-laser.png',
    alt: 'Laser skin toning procedure at ABSOLUT AURAA Colaba'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: 'What treatments does ABSOLUT AURAA Cosmetic Clinic offer in Colaba?',
    answer: 'We specialize in comprehensive skin and aesthetic care: advanced acne and scar revision, melasma and pigmentation correction, signature HydraFacial, diode laser hair removal, anti-aging Botox & dermal fillers, PRP/GFC hair regrowth, and customized chemical peels.',
    category: 'General'
  },
  {
    question: 'Where in Colaba is the clinic located?',
    answer: 'Our clinic is located at Flat No. 1, Ground Floor, Sunrise Building, Cawasji Jahangir Road, 4th Pasta Lane, Colaba, Mumbai – 400005. We are easily reachable from Colaba Causeway, Gateway of India, and Cuffe Parade.',
    category: 'Location'
  },
  {
    question: 'Who leads the clinical treatments at ABSOLUT AURAA?',
    answer: 'Our treatments are led and curated by Rizwana Sayed, Certified Cosmetologist & Skin Therapist, along with certified aesthetic practitioners with over a decade of clinical experience in advanced skin therapies.',
    category: 'Specialist'
  },
  {
    question: 'Are the treatments safe for Indian skin types?',
    answer: 'Yes, 100%. All our laser systems, peels, and injectable formulations are FDA-approved and specifically calibrated for the nuances of Indian skin (Fitzpatrick skin types III to V) to ensure optimal results with zero risk of post-inflammatory hyperpigmentation.',
    category: 'Safety'
  },
  {
    question: 'How do I book an appointment or consultation?',
    answer: 'You can book directly via our online appointment form, call us at +91 98765 43210, or send a message directly on WhatsApp (+91 98765 43210). We offer flexible scheduling Monday to Saturday from 10:00 AM to 7:00 PM, and Sunday by prior appointment.',
    category: 'Booking'
  },
  {
    question: 'Is there any downtime after treatments like HydraFacial or Laser Toning?',
    answer: 'Most of our skin and laser procedures have zero to minimal downtime. For HydraFacial and Laser Toning, you can immediately resume your work, social engagements, or apply makeup.',
    category: 'Treatments'
  }
];
