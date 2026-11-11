export const site = {
  url: 'https://www.ngenzeni.co.za',
  name: 'Ngenzeni Enterprise',
  legalName: 'Ngenzeni Enterprise (PTY) LTD',
  phone: '+27105160856',
  displayPhone: '010 516 0856',
  email: 'info@ngenzeni.co.za',
  director: 'Slingene Sigubudu',
  registration: '2021/619191/07',
  address: {
    streetAddress: 'Unit 13 Complex, Cornflower Crescent',
    addressLocality: 'Fleurhof',
    addressRegion: 'Gauteng',
    postalCode: '1709',
    addressCountry: 'ZA',
  },
};

export const absoluteUrl = (path = '/') => new URL(path, site.url).toString();
export const isPreview = process.env.VERCEL_ENV === 'preview';

export function pageMetadata({ title, description, path }) {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      type: 'website',
      locale: 'en_ZA',
      images: [{ url: absoluteUrl('/opengraph-image'), width: 1200, height: 630, alt: `${site.legalName} — Construction and renovations across South Africa` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteUrl('/opengraph-image')],
    },
  };
}

export const businessSchema = {
  '@type': 'GeneralContractor',
  '@id': absoluteUrl('/#business'),
  name: site.name,
  legalName: site.legalName,
  url: absoluteUrl('/'),
  description: 'Construction, renovations and property improvements across South Africa, with a company address in Fleurhof, Gauteng.',
  telephone: site.phone,
  email: site.email,
  logo: absoluteUrl('/assets/ngenzeni-logo.webp'),
  address: { '@type': 'PostalAddress', ...site.address },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  identifier: { '@type': 'PropertyValue', propertyID: 'CIPC registration number', value: site.registration },
  contactPoint: { '@type': 'ContactPoint', telephone: site.phone, email: site.email, contactType: 'Project enquiries' },
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: absoluteUrl('/'),
  name: site.name,
  alternateName: site.legalName,
  inLanguage: 'en-ZA',
  publisher: { '@id': businessSchema['@id'] },
};
