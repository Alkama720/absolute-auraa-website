import { getServiceBySlug, SERVICES } from './data/services';
import { getAreaBySlug, SERVICE_AREAS } from './data/areas';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  schema?: object;
}

export const SITE_URL = 'https://absolutaura.flownware.com';
export const CLINIC_NAME = 'ABSOLUT AURAA Cosmetic Clinic';
export const CLINIC_PHONE = '+919082400696';
export const CLINIC_DISPLAY_PHONE = '+91 90824 00696';
export const CLINIC_EMAIL = 'absoluteauracosmeticclinic@gmail.com';
// Kept deliberately close to the Google Business Profile address so the NAP
// matches. The one intentional difference: GBP currently spells the road
// "Cawasja jahangir Rd", which is a typo for Cawasji Jahangir Road — fix it in
// GBP rather than copying the typo onto the site.
export const CLINIC_ADDRESS = {
  street:
    'Flat No. 1, Ground Floor, Sunrise Building, Cawasji Jahangir Road, 4th Pasta Lane, Colaba Market, Colaba',
  neighbourhood: 'Badhwar Park',
  city: 'Mumbai',
  state: 'Maharashtra',
  pincode: '400005',
  country: 'IN',
  // TODO: verify against the actual map pin in Google Business Profile.
  // These coordinates predate this work and have not been confirmed; a wrong
  // pin directly hurts local ranking and sends patients to the wrong street.
  latitude: 18.9178,
  longitude: 72.8324,
};
export const INSTAGRAM_URL = 'https://www.instagram.com/absolutauraa';
export const GBP_SHARE_URL = 'https://share.google/lN7GUZLshFsV4njCW';

// Google Knowledge Graph entity ID for this business, taken from the kgmid
// parameter on the Google Business Profile share link. Publishing it in the
// LocalBusiness schema gives Google an explicit link between this website and
// the Business Profile entity, instead of leaving it to infer the match from
// name and address alone.
export const GOOGLE_KG_ID = 'kg:/g/11myn6mcbv';
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Absolut+Auraa+Cosmetic+Clinic+Colaba+Mumbai';

export const getBaseBusinessSchema = () => ({
  '@context': 'https://schema.org',
  // HealthAndBeautyBusiness, not MedicalBusiness. The clinic is led by a
  // certified cosmetologist, not a registered skin specialist (MD/DDVL), so
  // declaring a medical practice in structured data would be a false claim to
  // Google — and misrepresenting medical credentials is a far bigger problem
  // than an SEO one. Switch back to MedicalBusiness only if a qualified
  // doctor is actually on record for the practice.
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${SITE_URL}/#clinic`,
  name: CLINIC_NAME,
  alternateName: ['Absolut Auraa', 'Absolute Auraa Clinic', 'Absolute Auraa Colaba'],
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo.png`,
  image: `${SITE_URL}/assets/images/clinic-reception.jpg`,
  description: 'Cosmetic and skin clinic at Badhwar Park, 4th Pasta Lane, Colaba, Mumbai, offering skin, hair, laser, anti-ageing and aesthetic treatments led by Rizwana Sayed.',
  telephone: CLINIC_PHONE,
  email: CLINIC_EMAIL,
  priceRange: '₹₹',
  paymentAccepted: 'Cash, Credit Card, UPI, Net Banking, EMI',
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC_ADDRESS.street,
    addressLocality: CLINIC_ADDRESS.city,
    addressRegion: CLINIC_ADDRESS.state,
    postalCode: CLINIC_ADDRESS.pincode,
    addressCountry: CLINIC_ADDRESS.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CLINIC_ADDRESS.latitude,
    longitude: CLINIC_ADDRESS.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    INSTAGRAM_URL,
    GBP_SHARE_URL,
    GOOGLE_MAPS_URL,
  ],
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'Google Knowledge Graph',
    value: GOOGLE_KG_ID,
  },
  hasMap: GOOGLE_MAPS_URL,
  // The clinic is a walk-in location, not a mobile service, so areaServed
  // states the neighbourhoods patients realistically travel from. Keep this
  // to genuinely nearby areas — claiming a wider radius than the business can
  // rank for dilutes relevance rather than extending reach.
  areaServed: [
    { '@type': 'Place', name: 'Colaba, Mumbai' },
    { '@type': 'Place', name: 'Cuffe Parade, Mumbai' },
    { '@type': 'Place', name: 'Fort, Mumbai' },
    { '@type': 'Place', name: 'Nariman Point, Mumbai' },
    { '@type': 'Place', name: 'Churchgate, Mumbai' },
    { '@type': 'Place', name: 'South Mumbai' },
  ],
  // NOTE: aggregateRating is deliberately omitted.
  // Google's structured data policy prohibits review markup that does not
  // reflect genuine, verifiable reviews collected by this business. Hardcoding
  // a rating here (it previously claimed 4.9 from 240 reviews) risks a manual
  // action for structured data spam, which is enforced more strictly on
  // health/medical businesses. Re-add this block ONLY with the real rating and
  // review count taken from the live Google Business Profile, and keep it in
  // sync — a stale number is the same violation.
  founder: {
    '@type': 'Person',
    name: 'Rizwana Sayed',
    jobTitle: 'Certified Cosmetologist & Skin Therapist',
    description:
      'Certified cosmetologist specialising in clinical facial therapies, chemical peels, laser skin rejuvenation and aesthetic skin and hair treatments.',
  },
  // `medicalSpecialty: ['Skin care', ...]` was removed. That property asserts
  // the business practises skin care as a medical specialty, which is not the
  // case here. `knowsAbout` states the areas of expertise truthfully without
  // claiming a medical qualification.
  knowsAbout: [
    'Cosmetology',
    'Skin care',
    'Laser hair removal',
    'Chemical peels',
    'Anti-ageing treatments',
    'Hair PRP therapy',
  ],
});

export const getPageMeta = (pathname: string): PageMeta => {
  // Normalize trailing slashes
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath.startsWith('/services/')) {
    const slug = cleanPath.replace('/services/', '');
    const service = getServiceBySlug(slug);
    if (service) {
      return {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: service.metaKeywords,
        canonical: `${SITE_URL}/services/${service.slug}/`,
        ogImage: `${SITE_URL}${service.image}`,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            getBaseBusinessSchema(),
            {
              // `Service`, not `MedicalProcedure` — these are cosmetic
              // treatments offered by a cosmetologist, and marking them as
              // medical procedures would repeat the credential claim the
              // business schema no longer makes.
              '@type': 'Service',
              '@id': `${SITE_URL}/services/${service.slug}/#service`,
              name: service.title,
              description: service.description,
              serviceType: service.shortTitle,
              provider: {
                '@type': 'HealthAndBeautyBusiness',
                name: CLINIC_NAME,
                url: SITE_URL,
              },
              areaServed: { '@type': 'Place', name: 'Colaba, Mumbai' },
              offers: {
                '@type': 'Offer',
                price: service.pricingStarting.replace(/[^0-9]/g, ''),
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
                { '@type': 'ListItem', position: 3, name: service.shortTitle, item: `${SITE_URL}/services/${service.slug}/` },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ],
        },
      };
    }
  }

  if (cleanPath.startsWith('/service-areas/')) {
    const areaSlug = cleanPath.replace('/service-areas/', '');
    const area = getAreaBySlug(areaSlug);
    if (area) {
      return {
        title: area.metaTitle,
        description: area.metaDescription,
        keywords: area.metaKeywords,
        canonical: `${SITE_URL}/service-areas/${area.slug}/`,
        ogImage: `${SITE_URL}/assets/images/clinic-reception.jpg`,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            getBaseBusinessSchema(),
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Areas Served', item: `${SITE_URL}/contact/` },
                { '@type': 'ListItem', position: 3, name: area.name, item: `${SITE_URL}/service-areas/${area.slug}/` },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: area.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ],
        },
      };
    }
  }

  switch (cleanPath) {
    case '/about':
      return {
        title: 'About ABSOLUT AURAA Cosmetic Clinic Colaba | Lead Specialist Rizwana Sayed',
        description: 'Meet Rizwana Sayed and our expert team at ABSOLUT AURAA, Colaba Mumbai. Over a decade of excellence in clinical skin care, advanced medical facials & FDA-approved laser treatments.',
        keywords: 'about absolut auraa, rizwana sayed cosmetologist, skin clinic colaba history, luxury skin clinic mumbai, aesthetic clinic south mumbai',
        canonical: `${SITE_URL}/about/`,
        ogImage: `${SITE_URL}/assets/images/doctor-portrait.jpg`,
      };
    case '/services':
      return {
        title: 'Treatments & Services | Skin care, Skin, Hair & Laser Clinic Colaba',
        description: 'Explore all cosmetic & advanced skin treatments at ABSOLUT AURAA Colaba: HydraFacial, Diode Laser Hair Removal, Acne Scars, Botox, Fillers, Pigmentation & Hair PRP.',
        keywords: 'skin treatments colaba, laser clinic mumbai, hydrafacial cost colaba, botox clinic mumbai, prp hair therapy colaba, aesthetic services south mumbai',
        canonical: `${SITE_URL}/services/`,
        ogImage: `${SITE_URL}/assets/images/clinic-interior.jpg`,
      };
    case '/pricing':
      return {
        title: 'Treatment Price List & Rates | ABSOLUT AURAA Cosmetic Clinic Colaba',
        description: 'Official rate card for ABSOLUT AURAA, Colaba Mumbai. Transparent prices for HydraFacial (₹4,500), Hair GFC (₹5,000), Botox (₹450/unit), Diode Laser, HIFU & Peels.',
        keywords: 'absolut auraa price list, skin clinic prices colaba, hydrafacial cost mumbai, laser hair removal price colaba, botox cost per unit mumbai, prp hair cost colaba, hifu cost mumbai',
        canonical: `${SITE_URL}/pricing/`,
        ogImage: `${SITE_URL}/assets/images/clinic-reception.jpg`,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            getBaseBusinessSchema(),
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Treatment Price List', item: `${SITE_URL}/pricing/` },
              ],
            },
          ],
        },
      };
    case '/gallery':
      return {
        title: 'Clinic Interior & Treatment Gallery | ABSOLUT AURAA Colaba Mumbai',
        description: 'Take a virtual tour of ABSOLUT AURAA Cosmetic Clinic in Colaba Mumbai. View our luxury consultation suites, treatment rooms & FDA-approved laser technology.',
        keywords: 'absolut auraa gallery, skin clinic interior colaba, aesthetic clinic photos mumbai, laser equipment photos colaba',
        canonical: `${SITE_URL}/gallery/`,
        ogImage: `${SITE_URL}/assets/images/clinic-reception.jpg`,
      };
    case '/contact':
      return {
        title: 'Contact ABSOLUT AURAA | Book Appointment at Colaba Mumbai Clinic',
        description: 'Visit ABSOLUT AURAA at Sunrise Building, 4th Pasta Lane, Colaba, Mumbai. Call +91 90824 00696 or chat on WhatsApp to schedule your private skin consultation.',
        keywords: 'contact absolut auraa, skin clinic phone number colaba, 4th pasta lane cosmetic clinic, book cosmetologist appointment colaba, clinic directions colaba',
        canonical: `${SITE_URL}/contact/`,
        ogImage: `${SITE_URL}/assets/images/clinic-reception.jpg`,
      };
    case '/':
    default:
      return {
        title: 'Cosmetologist in Colaba, Mumbai | ABSOLUT AURAA Skin & Laser Clinic',
        description: 'Cosmetologist-led skin, hair and laser clinic on 4th Pasta Lane, Colaba. Acne, pigmentation, laser hair removal, HydraFacial, anti-ageing and hair PRP. Call to book a consultation.',
        keywords: 'cosmetologist in colaba, cosmetologist colaba mumbai, best cosmetologist in colaba, skin specialist colaba, cosmetic clinic colaba mumbai, cosmetologist colaba, laser hair removal colaba, hydrafacial south mumbai, acne treatment colaba, hair prp colaba',
        canonical: `${SITE_URL}/`,
        ogImage: `${SITE_URL}/assets/images/clinic-reception.jpg`,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            getBaseBusinessSchema(),
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: CLINIC_NAME,
              publisher: {
                '@id': `${SITE_URL}/#clinic`,
              },
            },
          ],
        },
      };
  }
};

export const ALL_ROUTES = [
  '/',
  '/about',
  '/services',
  '/pricing',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  ...SERVICE_AREAS.map((a) => `/service-areas/${a.slug}`),
  '/gallery',
  '/contact',
];
