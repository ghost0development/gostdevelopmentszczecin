"use client";

import { useEffect, useCallback } from "react";

type SoundType = "hover" | "click" | "success" | "open" | "close";

const sounds: Record<SoundType, { frequency: number; duration: number; type: OscillatorType; volume: number }> = {
  hover: { frequency: 800, duration: 0.05, type: "sine", volume: 0.03 },
  click: { frequency: 600, duration: 0.08, type: "square", volume: 0.04 },
  success: { frequency: 523, duration: 0.15, type: "sine", volume: 0.05 },
  open: { frequency: 440, duration: 0.1, type: "triangle", volume: 0.04 },
  close: { frequency: 330, duration: 0.08, type: "sine", volume: 0.03 },
};

let audioCtx: AudioContext | null = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioCtx;
}

function playSound(type: SoundType) {
  try {
    const ctx = getAudioContext();
    const config = sounds[type];
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = config.type;
    oscillator.frequency.setValueAtTime(config.frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(config.volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + config.duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + config.duration);
  } catch {
    // Audio context not available
  }
}

export function useSound() {
  const play = useCallback((type: SoundType) => {
    playSound(type);
  }, []);

  return { play };
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const onInteraction = () => {
      // Initialize audio context on first user interaction
      getAudioContext();
      document.removeEventListener("click", onInteraction);
      document.removeEventListener("keydown", onInteraction);
    };

    document.addEventListener("click", onInteraction);
    document.addEventListener("keydown", onInteraction);

    return () => {
      document.removeEventListener("click", onInteraction);
      document.removeEventListener("keydown", onInteraction);
    };
  }, []);

  return <>{children}</>;
}

// Sound trigger component
export function SoundTrigger({ children }: { children: React.ReactNode }) {
  const { play } = useSound();

  return (
    <div
      onMouseEnter={() => play("hover")}
      onClick={() => play("click")}
    >
      {children}
    </div>
  );
}
