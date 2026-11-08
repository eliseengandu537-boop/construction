import { absoluteUrl, isPreview } from './lib/site';

export default function robots() {
  return isPreview
    ? { rules: { userAgent: '*', disallow: '/' } }
    : { rules: { userAgent: '*', allow: '/' }, sitemap: absoluteUrl('/sitemap.xml') };
}
