"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoImage from "../../2.png";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Splash süresi (ms)
  const DURATION = 2200; // ~2.2s

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const t = setTimeout(() => setVisible(false), DURATION);
    return () => clearTimeout(t);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 1 }}
            animate={{ scale: [0.88, 1.15, 0.88] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.42, 0, 0.58, 1],
            }}
            className="relative h-44 w-[32rem] sm:h-56 sm:w-[40rem]"
          >
            <Image
              src={logoImage}
              alt="Rimex Medya"
              fill
              priority
              sizes="(min-width: 640px) 18rem, 16rem"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
