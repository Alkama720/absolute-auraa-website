import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageMeta, SITE_URL, CLINIC_ADDRESS } from '../seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = (props) => {
  const location = useLocation();
  const defaultMeta = getPageMeta(location.pathname);

  const title = props.title || defaultMeta.title;
  const description = props.description || defaultMeta.description;
  const keywords = props.keywords || defaultMeta.keywords;
  const canonical = props.canonical || defaultMeta.canonical;
  const ogImage = props.ogImage || defaultMeta.ogImage || `${SITE_URL}/assets/images/clinic-reception.jpg`;
  const schema = props.schema || defaultMeta.schema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ABSOLUT AURAA Cosmetic Clinic" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo meta tags.
          Google does not use these for ranking — the coordinates that matter are
          the ones in the LocalBusiness JSON-LD below, and the Business Profile
          itself. They are included because some directories, scrapers and
          non-Google engines still read them, and they cost nothing. */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content={`${CLINIC_ADDRESS.city}, ${CLINIC_ADDRESS.state}`} />
      <meta
        name="geo.position"
        content={`${CLINIC_ADDRESS.latitude};${CLINIC_ADDRESS.longitude}`}
      />
      <meta
        name="ICBM"
        content={`${CLINIC_ADDRESS.latitude}, ${CLINIC_ADDRESS.longitude}`}
      />

      {/* Structured Data JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
