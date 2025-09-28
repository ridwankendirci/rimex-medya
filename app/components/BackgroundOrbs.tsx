"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const orbs = [
  {
    size: 320,
    initial: { x: -180, y: -160 },
    animate: { x: -120, y: -40 },
    color: "rgba(56, 189, 248, 0.14)",
    duration: 18,
    delay: 0,
  },
  {
    size: 260,
    initial: { x: 220, y: -140 },
    animate: { x: 160, y: -60 },
    color: "rgba(99, 102, 241, 0.12)",
    duration: 20,
    delay: 3,
  },
  {
    size: 280,
    initial: { x: -260, y: 180 },
    animate: { x: -180, y: 120 },
    color: "rgba(56, 189, 248, 0.1)",
    duration: 22,
    delay: 5,
  },
  {
    size: 220,
    initial: { x: 200, y: 220 },
    animate: { x: 260, y: 160 },
    color: "rgba(14, 165, 233, 0.12)",
    duration: 24,
    delay: 1,
  },
];

export function BackgroundOrbs() {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const baseLayer = (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-[-30%] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12)_0%,_rgba(7,11,18,0.92)_70%)]" />
    </div>
  );

  if (!isMounted || shouldReduceMotion) {
    return baseLayer;
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-[-30%] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12)_0%,_rgba(7,11,18,0.92)_70%)]" />
      {orbs.map((orb, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full blur-[80px]"
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
          }}
          initial={orb.initial}
          animate={{
            x: [orb.initial.x, orb.animate.x, orb.initial.x],
            y: [orb.initial.y, orb.animate.y, orb.initial.y],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: [0.42, 0, 0.58, 1] as const,
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
