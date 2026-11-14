import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from './useReducedMotion';

// Fades an element up when it scrolls into view. Opacity only, never visibility,
// so hidden items stay reachable by keyboard; focusing one reveals it at once.
// With reduced motion the element is left alone.
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    gsap.set(el, { opacity: 0, y: 24 });
    const show = () => {
      io.disconnect();
      gsap.to(el, { opacity: 1, y: 0, duration: 0.7, delay, ease: 'power3.out' });
    };
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && show(),
      { threshold: 0.15 },
    );
    io.observe(el);
    el.addEventListener('focusin', show);

    return () => {
      io.disconnect();
      el.removeEventListener('focusin', show);
      gsap.killTweensOf(el);
      gsap.set(el, { clearProps: 'opacity,transform' });
    };
  }, [reduced, delay]);

  return ref;
}
