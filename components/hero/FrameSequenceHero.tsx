"use client";

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function FrameSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 37;

  // Text refs for animations
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/Laptop_frames/Laptop_${frameNumber}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useGSAP(() => {
    if (!canvasRef.current || images.length !== frameCount) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderFrame = (index: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[index];
      
      // Calculate aspect ratio to cover the screen
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth, drawHeight, drawX, drawY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    // Resize canvas to match display size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(0);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // GSAP Animation Sequence
    const frameObj = { frame: 0 };

    // Master timeline with labels for snapping
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        snap: {
          snapTo: "labels", // Snaps to the labels in the timeline
          duration: { min: 0.3, max: 0.6 }, // Duration of snap
          delay: 0.1, // Wait 0.1s after scrolling stops before snapping
          ease: "power2.inOut"
        }
      }
    });

    // Set initial text states
    gsap.set(text1Ref.current, { opacity: 0, scale: 0.8 });
    gsap.set(text2Ref.current, { opacity: 0, x: 50 });
    gsap.set(text3Ref.current, { opacity: 0, y: 50 });

    // Build the timeline sequence with resting state labels
    tl.addLabel("start") // Frame 0, Initial Title Visible
      
      // Transition to Step 1
      .to('.hero-title-group', { opacity: 0, y: -50, duration: 1 }, "start")
      .to(frameObj, {
        frame: 12,
        snap: "frame",
        ease: "power2.inOut",
        duration: 2,
        onUpdate: () => renderFrame(frameObj.frame)
      }, "start")
      .to(text1Ref.current, { opacity: 1, scale: 1, duration: 1 }, "start+=1")
      
      .addLabel("step1") // Frame 12, "UNLEASHED" Visible
      
      // Transition to Step 2
      .to(text1Ref.current, { opacity: 0, scale: 1.2, duration: 1 }, "step1")
      .to(frameObj, {
        frame: 24,
        snap: "frame",
        ease: "power2.inOut",
        duration: 2,
        onUpdate: () => renderFrame(frameObj.frame)
      }, "step1")
      .to(text2Ref.current, { opacity: 1, x: 0, duration: 1 }, "step1+=1")
      
      .addLabel("step2") // Frame 24, "Architecture" Visible
      
      // Transition to Step 3
      .to(text2Ref.current, { opacity: 0, x: -50, duration: 1 }, "step2")
      .to(frameObj, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "power2.inOut",
        duration: 2,
        onUpdate: () => renderFrame(frameObj.frame)
      }, "step2")
      .to(text3Ref.current, { opacity: 1, y: 0, duration: 1 }, "step2+=1")
      
      .addLabel("step3"); // Frame 36, "Era" Visible

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [images, frameCount]);

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-tech-dark snap-start">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {images.length !== frameCount && (
          <div className="absolute inset-0 flex items-center justify-center bg-tech-dark z-0">
            <div className="w-8 h-8 border-2 border-silver-700 border-t-silver-100 rounded-full animate-spin"></div>
          </div>
        )}
        
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />
        
        {/* Initial Hero Title */}
        <div className="hero-title-group absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-silver-100 mix-blend-difference">
            TECH LUXE
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-silver-300 font-light tracking-widest mix-blend-difference">
            BEYOND PERFORMANCE
          </p>
        </div>

        {/* Animated Text 1 */}
        <div ref={text1Ref} className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none opacity-0">
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-silver-100 mix-blend-difference">
            UNLEASHED
          </h2>
        </div>

        {/* Animated Text 2 */}
        <div ref={text2Ref} className="absolute inset-y-0 left-10 md:left-24 flex flex-col justify-center z-10 pointer-events-none opacity-0">
          <p className="text-xl text-silver-500 uppercase tracking-widest mb-2">Architecture</p>
          <h2 className="text-4xl md:text-6xl font-light text-silver-100 mix-blend-difference max-w-sm leading-tight">
            Silicone forged in <span className="font-bold">fire.</span>
          </h2>
        </div>

        {/* Animated Text 3 */}
        <div ref={text3Ref} className="absolute bottom-24 left-0 right-0 flex flex-col items-center justify-center z-10 pointer-events-none opacity-0">
          <h2 className="text-3xl md:text-5xl font-light text-silver-100 mix-blend-difference">
            A new era begins.
          </h2>
        </div>
        
        <div className="hero-title-group absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse z-10 pointer-events-none">
          <span className="text-xs tracking-widest uppercase mb-2 text-silver-300 mix-blend-difference">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-silver-300 to-transparent mix-blend-difference"></div>
        </div>
      </div>
    </section>
  );
}
