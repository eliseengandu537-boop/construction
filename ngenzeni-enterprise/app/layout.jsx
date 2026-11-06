import './globals.css';
import 'lenis/dist/lenis.css';

export const metadata = {
  title: 'Ngenzeni Enterprise | The foundation for what comes next',
  description: 'Construction, renovations and property improvements with Ngenzeni Enterprise (PTY) LTD. Speak with Director Slingene Sigubudu on 072 605 3707 about your next project.',
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: 'Ngenzeni Enterprise (PTY) LTD',
    description: 'Your vision. Strong foundations. New possibilities.',
    type: 'website',
    locale: 'en_ZA',
  },
};
export const viewport = { themeColor: '#102134' };

export default function RootLayout({ children }) {
  return <html lang="en-ZA"><body>{children}</body></html>;
}
