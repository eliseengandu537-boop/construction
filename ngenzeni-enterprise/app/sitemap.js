import { services } from './content';
import { absoluteUrl } from './lib/site';

export default function sitemap() {
  return ['/', ...services.map(service => `/services/${service.slug}`), '/privacy-policy']
    .map(path => ({ url: absoluteUrl(path) }));
}
