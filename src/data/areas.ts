export interface AreaItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  image: string;
  secondaryImage: string;
  landmarks: string[];
  popularTreatments: string[];
  distanceFromClinic: string;
  travelTime: string;
  localContent: string;
  faqs: { question: string; answer: string }[];
}

export const SERVICE_AREAS: AreaItem[] = [
  {
    id: 'colaba',
    slug: 'colaba',
    name: 'Colaba, South Mumbai',
    shortName: 'Colaba',
    tagline: 'Premier Cosmetic & skin clinic Located in the Heart of Colaba',
    description: 'Looking for the best skin clinic in Colaba? ABSOLUT AURAA Cosmetic Clinic is conveniently located at Sunrise Building, 4th Pasta Lane, Colaba. We provide world-class skin, hair, laser, and anti-aging treatments just steps away from Colaba Causeway and Gateway of India.',
    metaTitle: 'Cosmetologist in Colaba, Mumbai | Skin, Laser & Anti-Ageing Clinic',
    metaDescription: 'ABSOLUT AURAA is Colaba’s top cosmetic & skin clinic on 4th Pasta Lane. Advanced HydraFacial, laser hair removal, acne scars, Botox & PRP. Book appointment!',
    metaKeywords: 'cosmetologist in colaba, best cosmetologist in colaba, cosmetologist near me colaba, skin specialist colaba, skin clinic colaba, cosmetologist in colaba mumbai, laser hair removal colaba, hydrafacial colaba, cosmetologist 4th pasta lane colaba, best skin clinic near me colaba',
    image: '/assets/images/area-colaba.jpg',
    secondaryImage: '/assets/images/clinic-reception.jpg',
    landmarks: ['4th Pasta Lane', 'Badhwar Park', 'Colaba Market', 'Colaba Causeway', 'Gateway of India', 'Taj Mahal Palace Hotel', 'Strand Cinema Lane', 'Regal Cinema'],
    popularTreatments: ['HydraFacial Glow', 'Diode Laser Hair Removal', 'Acne Scar Revision', 'Botox & Dermal Fillers', 'Melasma Laser Toning'],
    distanceFromClinic: '0 km (Direct Clinic Location)',
    travelTime: 'Immediate Access',
    localContent: 'Situated right on 4th Pasta Lane, Cawasji Jahangir Road, ABSOLUT AURAA serves residents and visitors across Colaba with bespoke, clinical-grade aesthetic care in a tranquil, luxury environment. Whether you are living in Colaba or shopping at Causeway, our clinic offers effortless accessibility and discreet, private consultations.',
    faqs: [
      {
        question: 'Where is ABSOLUT AURAA clinic in Colaba?',
        answer: 'We are located at Flat No. 1, Ground Floor, Sunrise Building, Cawasji Jahangir Road, 4th Pasta Lane, Colaba, Mumbai – 400005 (near Colaba Market and Causeway).'
      },
      {
        question: 'Are walk-ins accepted or do I need an appointment?',
        answer: 'While we accommodate walk-ins when slots are available, we strongly recommend booking in advance via our website or WhatsApp (+91 98765 43210) to avoid wait times.'
      },
      {
        question: 'Is parking available near 4th Pasta Lane?',
        answer: 'Yes, street parking and nearby dedicated pay-and-park slots are available along Colaba Causeway and Strand Road.'
      }
    ]
  },
  {
    id: 'cuffe-parade',
    slug: 'cuffe-parade',
    name: 'Cuffe Parade & Maker Towers',
    shortName: 'Cuffe Parade',
    tagline: 'Luxury Aesthetic & Skin Care Just 5 Minutes from Cuffe Parade',
    description: 'Residents of Cuffe Parade seeking gold-standard cosmetic skin treatments, pain-free laser hair reduction, and personalized anti-aging therapies trust ABSOLUT AURAA Cosmetic Clinic in Colaba.',
    metaTitle: 'Skin specialist near cuffe parade Mumbai | Skin & Hair Clinic',
    metaDescription: 'Top-rated skin & laser clinic near Cuffe Parade & Maker Towers. Advanced Botox, HydraFacial, hair PRP & laser treatments at ABSOLUT AURAA Colaba (5 mins away).',
    metaKeywords: 'skin clinic cuffe parade, skin specialist near cuffe parade, botox clinic maker towers, laser hair removal cuffe parade mumbai, cosmetic clinic near world trade centre',
    image: '/assets/images/area-south-mumbai.jpg',
    secondaryImage: '/assets/images/consultation-room.jpg',
    landmarks: ['Maker Towers', 'World Trade Centre (WTC)', 'President Hotel', 'Jolly Maker Apartments', 'Cuffe Parade Residents Association'],
    popularTreatments: ['Anti-Aging & Botox', 'Signature HydraFacial', 'Hair PRP & GFC', 'Q-Switched Laser Toning', 'Skin Tightening'],
    distanceFromClinic: '1.2 km',
    travelTime: '5 mins drive',
    localContent: 'Just a 5-minute drive from Cuffe Parade, Maker Towers, and World Trade Centre, ABSOLUT AURAA provides high-net-worth residents and busy professionals with world-class skin rejuvenating treatments with zero social downtime.',
    faqs: [
      {
        question: 'How far is ABSOLUT AURAA from Cuffe Parade?',
        answer: 'Our clinic on 4th Pasta Lane is only 1.2 km from Cuffe Parade, approximately a 4 to 6-minute drive.'
      },
      {
        question: 'Do you offer non-surgical facelifts for mature skin?',
        answer: 'Yes, our combination of radiofrequency skin tightening, dermal filler liquid facelifts, and Botox offers remarkable lifting without surgical incisions.'
      }
    ]
  },
  {
    id: 'fort-mumbai',
    slug: 'fort-mumbai',
    name: 'Fort, Kala Ghoda & Fountain',
    shortName: 'Fort & Kala Ghoda',
    tagline: 'Premier Aesthetic Care Clinic Serving Professionals in Fort & Kala Ghoda',
    description: 'Corporate executives, art connoisseurs, and South Mumbai residents from Fort, Kala Ghoda, and Flora Fountain choose ABSOLUT AURAA for quick lunch-hour HydraFacials, laser treatments, and acne solutions.',
    metaTitle: 'Skin Clinic near Fort & Kala Ghoda Mumbai | ABSOLUT AURAA',
    metaDescription: 'Top cosmetic & skin clinic near Fort, Kala Ghoda & Flora Fountain Mumbai. Express lunchtime facials, laser hair removal & acne treatments at ABSOLUT AURAA Colaba.',
    metaKeywords: 'skin clinic fort mumbai, skin specialist kala ghoda, laser treatment flora fountain, hydrafacial near fort mumbai, best skin specialist south mumbai',
    image: '/assets/images/area-colaba.jpg',
    secondaryImage: '/assets/images/treatment-equipment.jpg',
    landmarks: ['Kala Ghoda Art Precinct', 'Flora Fountain', 'BSE Mumbai', 'Jehangir Art Gallery', 'Horniman Circle'],
    popularTreatments: ['Lunchtime HydraFacial', 'Acne & Blackhead Clearance', 'Chemical Peels', 'Under-Eye Dark Circle Fillers', 'Laser Toning'],
    distanceFromClinic: '2.5 km',
    travelTime: '8–10 mins drive',
    localContent: 'Conveniently accessible from Fort via Shahid Bhagat Singh Road, ABSOLUT AURAA is the go-to clinic for corporate executives seeking quick, high-impact aesthetic enhancements without interrupting their busy workday.',
    faqs: [
      {
        question: 'Can I get a HydraFacial during my lunch hour from Fort?',
        answer: 'Yes! Our 45-minute HydraFacial requires zero recovery time and leaves you looking radiant and refreshed for the rest of your workday.'
      }
    ]
  },
  {
    id: 'marine-drive-nariman-point',
    slug: 'marine-drive-nariman-point',
    name: 'Marine Drive & Nariman Point',
    shortName: 'Marine Drive',
    tagline: 'Exclusive Aesthetic Skin Care for Marine Drive & Nariman Point',
    description: 'Experience refined skincare and precision aesthetic care just a short drive from Nariman Point and Marine Drive. ABSOLUT AURAA delivers bespoke advanced skin treatments crafted for discerning clientele.',
    metaTitle: 'Cosmetic Clinic near Marine Drive & Nariman Point | ABSOLUT AURAA',
    metaDescription: 'Luxury skin, laser & anti-aging treatments near Marine Drive & Nariman Point Mumbai. Premium HydraFacial, dermal fillers, hair PRP at ABSOLUT AURAA Colaba.',
    metaKeywords: 'skin clinic marine drive, skin specialist nariman point, skin clinic near trident hotel, anti aging clinic marine drive mumbai, laser hair removal nariman point',
    image: '/assets/images/area-south-mumbai.jpg',
    secondaryImage: '/assets/images/clinic-interior.jpg',
    landmarks: ['Nariman Point Business District', 'Marine Drive Promenade', 'The Oberoi / Trident', 'NCPA', 'Air India Building'],
    popularTreatments: ['Pre-Event Red Carpet Facial', 'Dermal Fillers & Botox', 'Painless Full Body Laser', 'Pigmentation Correction', 'Hair Regrowth PRP'],
    distanceFromClinic: '2.8 km',
    travelTime: '8–12 mins drive',
    localContent: 'Minutes away from the iconic Marine Drive promenade and Nariman Point commercial towers, ABSOLUT AURAA provides a peaceful sanctuary where patients receive elite medical aesthetic care tailored to their lifestyle.',
    faqs: [
      {
        question: 'What are the most popular treatments for Nariman Point clients?',
        answer: 'Our HydraFacial glow, anti-fatigue under-eye rejuvenation, Botox wrinkle smoothing, and PRP hair thickening are exceptionally popular among professionals in this area.'
      }
    ]
  },
  {
    id: 'churchgate',
    slug: 'churchgate',
    name: 'Churchgate & Oval Maidan',
    shortName: 'Churchgate',
    tagline: 'Expert Professional skin care Serving Churchgate & Heritage Precinct',
    description: 'Just 10 minutes south of Churchgate Railway Station, ABSOLUT AURAA Cosmetic Clinic offers cutting-edge laser technologies, acne scar correction, and medical-grade facials.',
    metaTitle: 'Best Skin specialist & Skin Clinic near Churchgate Mumbai | ABSOLUT AURAA',
    metaDescription: 'Trusted skin, hair & laser clinic near Churchgate & Oval Maidan. Advanced chemical peels, acne treatments, hair PRP & HydraFacial at ABSOLUT AURAA Colaba.',
    metaKeywords: 'skin clinic churchgate, skin specialist churchgate station, acne treatment near oval maidan, laser hair reduction churchgate, beauty clinic south mumbai',
    image: '/assets/images/area-colaba.jpg',
    secondaryImage: '/assets/images/consultation-room.jpg',
    landmarks: ['Churchgate Station', 'Oval Maidan', 'Cricket Club of India (CCI)', 'Bombay High Court', 'Eros Cinema Precinct'],
    popularTreatments: ['Acne & Scar Therapy', 'Chemical Peels', 'Laser Hair Removal', 'Hair PRP Treatment', 'Skin Brightening'],
    distanceFromClinic: '2.6 km',
    travelTime: '10 mins drive',
    localContent: 'Easy direct access via Veer Nariman Road and Colaba Causeway connects Churchgate residents and college students directly to ABSOLUT AURAA for affordable, high-efficacy skincare and laser hair removal.',
    faqs: [
      {
        question: 'Do you offer student discounts or customized packages?',
        answer: 'Yes, we have budget-friendly acne clearance and laser hair reduction packages designed for college students and young professionals.'
      }
    ]
  },
  {
    id: 'south-mumbai',
    slug: 'south-mumbai',
    name: 'South Mumbai (SoBo)',
    shortName: 'South Mumbai',
    tagline: 'SoBo’s Destination for Luxury Aesthetics, Clear Skin & Permanent Laser Results',
    description: 'Serving Malabar Hill, Breach Candy, Kemps Corner, Altamount Road, and greater South Mumbai with gold-standard skin care, certified cosmetologists, and FDA-approved laser technology.',
    metaTitle: 'Best Cosmetic Clinic in South Mumbai | Skin & Aesthetic Care',
    metaDescription: 'ABSOLUT AURAA is South Mumbai’s premier aesthetic clinic in Colaba. Specialized in skin, hair, laser, anti-aging & bespoke professional skin care. Book consultation.',
    metaKeywords: 'cosmetic clinic south mumbai, cosmetologist sobo, best skin specialist south mumbai, laser clinic south mumbai, botox clinic malabar hill, aesthetic care mumbai',
    image: '/assets/images/area-south-mumbai.jpg',
    secondaryImage: '/assets/images/clinic-reception.jpg',
    landmarks: ['Malabar Hill', 'Breach Candy', 'Altamount Road', 'Kemps Corner', 'Pedder Road', 'Colaba'],
    popularTreatments: ['Full Body Laser Hair Removal', 'Non-Surgical Face Contouring', 'HydraFacial Glow', 'Melasma Treatment', 'Hair PRP Therapy'],
    distanceFromClinic: 'Centrally situated in South Mumbai',
    travelTime: '10–20 mins across SoBo',
    localContent: 'Discerning clients from across South Mumbai seek out ABSOLUT AURAA for our uncompromising commitment to safety, subtle natural results, and luxury clinical comfort in Colaba.',
    faqs: [
      {
        question: 'Why choose ABSOLUT AURAA over commercial clinic chains?',
        answer: 'Unlike high-volume commercial chains, ABSOLUT AURAA provides cosmetologist-led personalised care, ample consultation time, authentic imported machines, and bespoke protocols with no rushed treatments.'
      }
    ]
  }
];

export const getAreaBySlug = (slug: string): AreaItem | undefined => {
  return SERVICE_AREAS.find((a) => a.slug === slug);
};
