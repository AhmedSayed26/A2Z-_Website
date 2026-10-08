"use client";

import { useEffect, useRef, useState } from "react";

// Animates a value like "+120" from 0 up to its number once it scrolls into view.
export default function CountUp({ value, duration = 1600, ...rest }) {
  const match = String(value).match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? Number(match[2]) : 0;
  const suffix = match ? match[3] : "";

  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    let frame;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  if (!match) return <span {...rest}>{value}</span>;

  return (
    <span ref={ref} {...rest}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
