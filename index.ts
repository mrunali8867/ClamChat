"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/** Counts up from 0 in seconds. Returns formatted MM:SS string. */
export function useSessionTimer(active: boolean) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setSeconds(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

/** Counts down from initialSecs. Returns remaining secs + formatted string. */
export function useCountdown(initialSecs: number, active: boolean, onComplete?: () => void) {
  const [remaining, setRemaining] = useState(initialSecs);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setRemaining(initialSecs);
  }, [initialSecs]);

  useEffect(() => {
    if (!active) return;
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current!);
          onComplete?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active, onComplete]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  return { remaining, formatted: `${mm}:${ss}` };
}

/** Rotating quotes with fade-out/in transition. */
export function useQuoteRotator(quotes: { text: string; author: string }[], intervalMs = 5000) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % quotes.length);
        setVisible(true);
      }, 500);
    }, intervalMs);
    return () => clearInterval(id);
  }, [quotes.length, intervalMs]);

  return { quote: quotes[index], visible };
}

/** Mouse-follow cursor glow on desktop. */
export function useCursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const glow = document.createElement("div");
    glow.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(124,58,237,0.06), transparent 70%);
      transition: left 0.1s ease, top 0.1s ease;
    `;
    document.body.appendChild(glow);
    glowRef.current = glow;

    const handleMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      glow.remove();
    };
  }, []);
}

/** Starfield canvas animation. */
export function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Star = { x: number; y: number; r: number; a: number; speed: number; phase: number };
    let stars: Star[] = [];
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() / 1000;
      stars.forEach((s) => {
        s.a = 0.3 + 0.6 * Math.abs(Math.sin(t * s.speed * 10 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,181,253,${s.a})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [canvasRef]);
}
