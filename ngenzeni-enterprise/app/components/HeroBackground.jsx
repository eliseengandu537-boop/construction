'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroBackground() {
  const videoRef = useRef(null);
  const sceneRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection;
    const update = () => {
      setPlaying(false);
      setEnabled(!motion.matches && !connection?.saveData);
    };
    update();
    motion.addEventListener('change', update);
    connection?.addEventListener?.('change', update);
    return () => {
      motion.removeEventListener('change', update);
      connection?.removeEventListener?.('change', update);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;
    let inView = true;
    video.muted = true;
    const syncPlayback = () => {
      if (inView && !document.hidden) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    }, { threshold: .05 });
    observer.observe(sceneRef.current);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, [enabled]);

  return <div className="hero-photo" ref={sceneRef} aria-hidden="true">
    <img src="/assets/construction-poster.jpg" alt="" width={1920} height={1080} fetchPriority="high" />
    {enabled && <video
      ref={videoRef}
      className={`hero-video${playing ? ' is-playing' : ''}`}
      src="/assets/construction-background.mp4"
      poster="/assets/construction-poster.jpg"
      width={1920}
      height={1080}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      onError={() => { setPlaying(false); setEnabled(false); }}
    />}
  </div>;
}
