"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const cursorText = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text" | "grab">("default");

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], .cursor-pointer, input, textarea, select")) {
        setCursorType("pointer");
      } else if (el.closest("h1, h2, h3, h4, h5, h6")) {
        setCursorType("text");
      } else if (el.closest("[draggable='true']")) {
        setCursorType("grab");
      } else {
        setCursorType("default");
      }
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (dot.current) {
        dot.current.style.transform = `translate(${target.current.x - 4}px, ${target.current.y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.current.x - 16}px, ${pos.current.y - 16}px)`;
      }
      if (cursorText.current) {
        cursorText.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y - 30}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  const ringSize = cursorType === "pointer" ? 40 : cursorType === "text" ? 60 : cursorType === "grab" ? 50 : 32;

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
      >
        <motion.div
          animate={{
            scale: cursorType === "pointer" ? 1.5 : 1,
            backgroundColor: cursorType === "pointer" ? "#fff" : "#c8ff00",
          }}
          transition={{ duration: 0.2 }}
          className="w-2 h-2 rounded-full"
        />
      </div>

      {/* Ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 pointer-events-none z-[9997] hidden md:block"
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            borderColor: cursorType === "pointer" ? "rgba(200, 255, 0, 0.5)" : "rgba(200, 255, 0, 0.2)",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border rounded-full flex items-center justify-center"
        >
          {cursorType === "pointer" && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mono text-[8px] text-accent"
            >
              OK
            </motion.span>
          )}
          {cursorType === "grab" && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mono text-[8px] text-accent"
            >
              ✋
            </motion.span>
          )}
        </motion.div>
      </div>
    </>
  );
}
