"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const konamiCode = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

export default function EasterEgg() {
  const [show, setShow] = useState(false);
  const [, setSequence] = useState<string[]>([]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const next = [...prev, e.code].slice(-konamiCode.length);
        if (next.join(",") === konamiCode.join(",")) {
          setShow(true);
          setTimeout(() => setShow(false), 5000);
          return [];
        }
        return next;
      });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed inset-0 z-[150] flex items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-[80px] mb-4"
            >
              👻
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold accent mb-2"
            >
              Złapałeś ducha!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted"
            >
              Konami Code działa. Jesteśmy pod wrażeniem.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
