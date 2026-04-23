import { useEffect } from 'react';

export default function GlobalEffects() {
  useEffect(() => {
    // Reveal Intersection Observer
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    const observerNodes = document.querySelectorAll('.reveal');
    observerNodes.forEach((r) => obs.observe(r));

    // Cursor Movement
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    let reqId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      reqId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMouseMove);
    loop();

    // Custom Cursor Hover Effects
    const addHover = (sel: string) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursor?.classList.add('hov');
          ring?.classList.add('hov');
        });
        el.addEventListener('mouseleave', () => {
          cursor?.classList.remove('hov');
          ring?.classList.remove('hov');
        });
      });
    };
    
    // Defer a bit so components have time to mount
    const timeoutId = setTimeout(() => {
      addHover('a, button, .food-card, .gallery-item, .menu-item, .res-private-card');
      observerNodes.forEach((r) => obs.observe(r)); // Re-observe just in case
    }, 500);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(reqId);
      clearTimeout(timeoutId);
      observerNodes.forEach((r) => obs.unobserve(r));
    };
  }, []);

  return null;
}
