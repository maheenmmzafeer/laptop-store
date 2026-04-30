'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const TOTAL_FRAMES = 64;
const SCROLL_MULTIPLIER = 8;

function frameUrl(i: number): string {
  const n = String(i).padStart(3, '0');
  return `/Laptop_frames/Laptop_${n}.png`;
}

export default function FrameSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useRef<HTMLImageElement[]>([]);
  const currentIdx = useRef(0);
  const rafId = useRef<number | null>(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameUrl(i);
      img.onload = img.onerror = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setAllLoaded(true);
          setTimeout(() => setOverlayVisible(true), 300);
        }
      };
      imgs.push(img);
    }
    frames.current = imgs;
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = frames.current[index];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const cW = canvas.width;
    const cH = canvas.height;
    const scale = Math.max(cW / (img.naturalWidth || img.width), cH / (img.naturalHeight || img.height)) * 1.2;
    const dW = (img.naturalWidth || img.width) * scale;
    const dH = (img.naturalHeight || img.height) * scale;
    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, (cW - dW) / 2, (cH - dH) / 2, dW, dH);
  };

  useEffect(() => {
    const syncSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentIdx.current);
    };
    syncSize();
    window.addEventListener('resize', syncSize);
    return () => window.removeEventListener('resize', syncSize);
  }, [allLoaded]);

  useEffect(() => {
    if (!allLoaded) return;
    gsap.registerPlugin(ScrollTrigger);

    // Using gsap.context for automatic cleanup
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * (SCROLL_MULTIPLIER - 1)}`,
        pin: pinRef.current, // Pin the child, not the trigger
        scrub: 0.5,
        onUpdate: (self) => {
          const targetIdx = Math.round(self.progress * (TOTAL_FRAMES - 1));
          const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetIdx));
          if (clamped === currentIdx.current) return;
          currentIdx.current = clamped;
          if (rafId.current !== null) cancelAnimationFrame(rafId.current);
          rafId.current = requestAnimationFrame(() => drawFrame(clamped));
        },
      });
    });

    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      ctx.revert(); // This safely kills the triggers and reverts DOM changes
    };
  }, [allLoaded]);

  return (
    <section ref={containerRef} style={{ width: '100%', position: 'relative' }}>
      <div
        ref={pinRef}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          background: '#090b10',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(9,11,16,0.55) 0%, rgba(9,11,16,0.15) 40%, rgba(9,11,16,0.55) 100%)',
            pointerEvents: 'none',
          }}
        />

        {!allLoaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#090b10',
              zIndex: 30,
            }}
          >
            <div style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Loading experience…
            </div>
            <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${loadProgress}%`, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', borderRadius: '2px', transition: 'width 0.15s ease' }} />
            </div>
            <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#64748b' }}>{loadProgress}%</div>
          </div>
        )}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            padding: '2rem',
            opacity: overlayVisible ? 1 : 0,
            transform: overlayVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            pointerEvents: overlayVisible ? 'auto' : 'none',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.875rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', fontSize: '0.75rem', fontWeight: 500, color: '#94a3b8', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', animation: 'heroPulse 2s ease-in-out infinite' }} />
            New arrivals just dropped
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.02em', textAlign: 'center', color: '#f1f5f9', fontFamily: 'var(--font-outfit), sans-serif', marginBottom: '1.25rem', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            Find Your Perfect<br /><span style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #818cf8 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Laptop</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#94a3b8', maxWidth: '34rem', textAlign: 'center', lineHeight: 1.65, marginBottom: '2.25rem', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
            Curated high-performance laptops for gaming, development and everyday use — all in one place.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: '#fff', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(59,130,246,0.45)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>Shop Now</Link>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)', color: '#f1f5f9', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', transition: 'background 0.2s ease, border-color 0.2s ease' }}>About Us</Link>
          </div>

          <div style={{ position: 'absolute', bottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: 'heroBounce 2s ease-in-out infinite' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll to reveal</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
