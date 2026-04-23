import { useEffect, useRef } from 'react';

export default function HeroImageSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frameCount = 240;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const loadedImages: HTMLImageElement[] = [];
    
    // Preload first frame
    const preloadFirst = new Image();
    preloadFirst.src = `/safp/frame_000_delay-0.033s.jpg`;
    preloadFirst.onload = () => {
        canvas.width = preloadFirst.naturalWidth;
        canvas.height = preloadFirst.naturalHeight;
        ctx.drawImage(preloadFirst, 0, 0, canvas.width, canvas.height);
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `/safp/frame_${frameNum}_delay-0.033s.jpg`;
        loadedImages.push(img);
    }

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        
        // 350vh container height - 100vh sticky inner = 250vh scrub space
        const scrollRange = window.innerHeight * 2.5; 
        
        // Frame calculation
        let fraction = scrollTop / scrollRange;
        if (fraction < 0) fraction = 0;
        if (fraction > 1) fraction = 1;
        const frameIndex = Math.min(frameCount - 1, Math.floor(fraction * frameCount));
        
        requestAnimationFrame(() => {
            const img = loadedImages[frameIndex];
            if (img && img.complete && img.naturalWidth !== 0) {
               ctx.clearRect(0, 0, canvas.width, canvas.height);
               ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>

      <div className="hero-food-image has-image" id="heroImageWrap" style={{ animation: 'none', transform: 'translateY(-25%)' }}>
        <canvas 
          ref={canvasRef} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
        {/* Blending overlay to make black edges seamlessly transition */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 40%, #000000 70%)', pointerEvents: 'none' }}></div>
      </div>
    </div>
  );
}
