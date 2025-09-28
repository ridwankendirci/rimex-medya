"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "10%", left: "8%", size: 8, delay: 0 },
  { top: "32%", left: "18%", size: 10, delay: 0.4 },
  { top: "68%", left: "12%", size: 12, delay: 0.8 },
  { top: "18%", left: "72%", size: 14, delay: 0.2 },
  { top: "40%", left: "88%", size: 9, delay: 0.6 },
  { top: "75%", left: "70%", size: 11, delay: 1 },
  { top: "55%", left: "46%", size: 13, delay: 1.2 },
];

export function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22)_0%,_rgba(11,17,23,0.9)_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18)_0%,_transparent_60%)]" />
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-sky-400/60 blur-[1px]"
          style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0.15, 0.8, 0.2], y: [-4, 6, -4] }}
          transition={{
            duration: 6 + index * 0.6,
            repeat: Infinity,
            delay: particle.delay,
            ease: [0, 0, 1, 1],
          }}
        />
      ))}
    </div>
  );
}
