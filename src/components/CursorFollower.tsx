"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (dot.current) {
        dot.current.style.transform = `translate(${target.current.x - 4}px, ${target.current.y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.current.x - 16}px, ${pos.current.y - 16}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 w-8 h-8 border border-accent/30 rounded-full pointer-events-none z-[9997] hidden md:block transition-[width,height,border-color] duration-300"
      />
    </>
  );
}
