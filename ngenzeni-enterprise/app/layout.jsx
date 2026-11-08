import './globals.css';
import 'lenis/dist/lenis.css';
import { site, isPreview } from './lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  icons: { icon: '/icon.svg' },
  robots: isPreview ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};
export const viewport = { themeColor: '#102134' };

export default function RootLayout({ children }) {
  return <html lang="en-ZA"><body>{children}</body></html>;
}
