import { ImageResponse } from 'next/og';
import { site } from './lib/site';

export const alt = 'Ngenzeni Enterprise — Construction and renovations across South Africa';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '58px 68px', background: '#102134', color: '#fffaf5', borderTop: '14px solid #ff7912' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 33, fontWeight: 700, letterSpacing: 3 }}>NGENZENI</span>
        <span style={{ fontSize: 18, color: '#ff963f', marginTop: 7 }}>ENTERPRISE (PTY) LTD</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
        <span>Strong foundations.</span><span>New possibilities.</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span style={{ fontSize: 27 }}>Construction &amp; renovations across South Africa</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 23, color: '#ff963f' }}><span>www.ngenzeni.co.za</span><span>{site.displayPhone}</span></div>
      </div>
    </div>,
    size,
  );
}
