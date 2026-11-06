'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export function ScrollHeading({ children, className = '', as: Tag = 'h2' }) {
  const text = String(children);
  return <Tag className={`scroll-text ${className}`} aria-label={text}>
    {text.split(' ').map((word, index) => <span className="scroll-word" aria-hidden="true" key={index}>{word}{' '}</span>)}
  </Tag>;
}

export default function Motion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};
    const setup = () => {
      dispose();
      const reduced = preference.matches;
      const root = document.documentElement;
      const reveals = [...document.querySelectorAll('[data-reveal]')];
      const headings = [...document.querySelectorAll('.scroll-text')].map(element => ({ element, words: [...element.children] }));
      const photos = [...document.querySelectorAll('[data-parallax]')];
      let frame = 0;
      const clamp = value => Math.max(0, Math.min(1, value));
      const update = () => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        const maxScroll = document.documentElement.scrollHeight - vh;
        root.style.setProperty('--scroll-progress', String(maxScroll > 0 ? y / maxScroll : 0));
        root.style.setProperty('--hero-shift', `${reduced ? 0 : Math.min(y * .18, 180)}px`);
        if (!reduced) {
          headings.forEach(({ element, words }) => {
            const { top, height } = element.getBoundingClientRect();
            if (top > vh + 100 || top + height < -150) return;
            const progress = clamp((vh * .9 - top) / (vh * .36 + height * .3));
            words.forEach((word, index) => {
              const local = clamp(progress * (words.length + 2) - index);
              word.style.setProperty('--word-progress', String(local));
            });
          });
          photos.forEach(photo => {
            const rect = photo.parentElement.getBoundingClientRect();
            if (rect.top < vh && rect.bottom > 0) photo.style.setProperty('--photo-shift', `${Math.max(-32, Math.min(32, (vh / 2 - rect.top - rect.height / 2) * .07))}px`);
          });
        }
        frame = 0;
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
      let observer;
      let lenis;
      if (!reduced) {
        root.classList.add('motion-ready');
        observer = new IntersectionObserver(entries => entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }), { threshold: .08, rootMargin: '0px 0px -30px 0px' });
        reveals.forEach(element => observer.observe(element));
        lenis = new Lenis({ autoRaf: true, duration: 1.05, smoothWheel: true, syncTouch: false, anchors: { offset: -110 }, prevent: node => node.closest('dialog') });
      } else {
        root.classList.remove('motion-ready');
        reveals.forEach(element => element.classList.add('is-visible'));
        photos.forEach(photo => photo.style.setProperty('--photo-shift', '0px'));
      }
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule, { passive: true });
      update();
      dispose = () => {
        cancelAnimationFrame(frame);
        observer?.disconnect();
        lenis?.destroy();
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        root.classList.remove('motion-ready');
      };
    };
    setup();
    preference.addEventListener('change', setup);
    return () => { dispose(); preference.removeEventListener('change', setup); };
  }, []);
  return <div className="scroll-progress" aria-hidden="true" />;
}
