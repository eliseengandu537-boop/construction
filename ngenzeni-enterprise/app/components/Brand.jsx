import Link from 'next/link';

export default function Brand({ footer = false, href = '#home' }) {
  return <Link className={`brand ${footer ? 'brand-light' : ''}`} href={href} aria-label="Ngenzeni Enterprise home">
    <img className="brand-logo" src={footer ? '/assets/ngenzeni-logo-footer.webp' : '/assets/ngenzeni-logo.webp'} width={footer ? 1944 : 1942} height={809} alt="Ngenzeni Enterprise (PTY) LTD" />
  </Link>;
}
