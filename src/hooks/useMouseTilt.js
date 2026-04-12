import { useRef, useEffect } from 'react';

export const useMouseTilt = (options = {}) => {
  const { maxTilt = 15, perspective = 1000, scale = 1.05 } = options;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;
    let rect = el.getBoundingClientRect();
    
    // Update rect on resize to prevent stale bounds
    const updateRect = () => { rect = el.getBoundingClientRect(); };
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);

    const handleMouseMove = (e) => {
      // Don't calculate if mouse is far from the element (performance)
      const xObj = rect.left + rect.width / 2;
      const yObj = rect.top + rect.height / 2;
      
      const px = e.clientX;
      const py = e.clientY;

      // Calculate percentage from center (-1 to 1)
      const xPercent = (px - xObj) / (rect.width / 2);
      const yPercent = (py - yObj) / (rect.height / 2);

      // Clamp to bounds slightly larger than the card
      const clampedX = Math.max(-1.5, Math.min(1.5, xPercent));
      const clampedY = Math.max(-1.5, Math.min(1.5, yPercent));

      // Inverse relationship: moving mouse Right (positive X) tilts card Right (positive rotateY)
      // Moving mouse Down (positive Y) tilts card Down (negative rotateX)
      const rotateX = clampedY * -maxTilt;
      const rotateY = clampedX * maxTilt;

      // Calculate a light glare angle based on mouse
      const glareAngle = Math.atan2(yPercent, xPercent) * (180 / Math.PI) - 90;

      rafId = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        el.style.setProperty('--glare-angle', `${glareAngle}deg`);
        el.style.setProperty('--mouse-x', `${(xPercent + 1) * 50}%`);
        el.style.setProperty('--mouse-y', `${(yPercent + 1) * 50}%`);
      });
    };

    const handleMouseLeave = () => {
      rafId = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        el.style.setProperty('--glare-opacity', '0');
      });
    };

    const handleMouseEnter = () => {
      updateRect();
      el.style.setProperty('--glare-opacity', '1');
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [maxTilt, perspective, scale]);

  return ref;
};
