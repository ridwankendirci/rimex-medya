"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logoImage from "../../2.png";
import { navigationLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 140], [1, 0.78]);
  const blur = useTransform(scrollY, [0, 140], ["blur(6px)", "blur(12px)"]);
  const background = useTransform(scrollY, [0, 140], [
    "rgba(8, 14, 24, 0.9)",
    "rgba(6, 12, 20, 0.58)",
  ]);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 sm:px-6 lg:px-10">
      <motion.div
        style={{
          opacity: isMounted ? opacity : 1,
          backdropFilter: isMounted ? blur : "blur(6px)",
          backgroundColor: isMounted ? background : "rgba(8, 14, 24, 0.9)",
        }}
        className="mt-4 flex w-full max-w-[1180px] items-center justify-between gap-6 rounded-3xl border border-slate-800/90 px-6 py-4 shadow-[0_24px_80px_rgba(5,8,15,0.65)]"
      >
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white tracking-wide">
          <span className="relative h-12 w-32 overflow-hidden sm:h-14 sm:w-48 md:h-16 md:w-56">
            <Image
              src={logoImage}
              alt="Rimex Medya"
              fill
              priority
              sizes="(min-width: 768px) 14rem, (min-width: 640px) 12rem, 8rem"
              className="object-cover"
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-end gap-3 pr-4 text-sm font-medium text-slate-200 md:flex">
          {navigationLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-3 py-2 transition hover:text-white ${
                  active ? "text-white" : ""
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-[#38bdf8]/20"
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/iletisim"
          className="hidden flex-none rounded-xl bg-[#38bdf8] px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg sm:ml-2 md:inline-flex"
        >
          Teklif Al
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col items-center justify-center gap-1 rounded-lg p-2 text-slate-200 transition hover:text-white md:hidden"
          aria-label="Menüyü aç/kapat"
        >
          <span className={`h-0.5 w-5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute top-24 left-4 right-4 rounded-2xl border border-slate-800/90 bg-slate-900/95 p-4 shadow-[0_24px_80px_rgba(5,8,15,0.65)] backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative rounded-xl px-4 py-3 text-sm font-medium transition hover:text-white ${
                      active ? "text-white bg-[#38bdf8]/20" : "text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#38bdf8] px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-[#0ea5e9]"
              >
                Teklif Al
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
