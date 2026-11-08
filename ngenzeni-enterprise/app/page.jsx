import Home from './components/Home';
import StructuredData from './components/StructuredData';
import { businessSchema, websiteSchema, pageMetadata } from './lib/site';

export const metadata = pageMetadata({
  title: 'Construction & Renovations in South Africa',
  description: 'Ngenzeni Enterprise offers building, renovations, roofing, paving and painting across South Africa. Based in Fleurhof, Gauteng. Call 072 605 3707.',
  path: '/',
});

export default function Page() {
  return <>
    <StructuredData data={{ '@context': 'https://schema.org', '@graph': [businessSchema, websiteSchema] }} />
    <Home />
  </>;
}
