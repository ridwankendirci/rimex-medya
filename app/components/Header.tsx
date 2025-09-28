"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
          <span className="relative h-14 w-48 overflow-hidden sm:h-16 sm:w-56">
            <Image
              src={logoImage}
              alt="Rimex Medya"
              fill
              priority
              sizes="(min-width: 768px) 14rem, 12rem"
              className="object-cover"
            />
          </span>
        </Link>
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
          className="hidden flex-none rounded-xl bg-[#38bdf8] px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg sm:ml-2 sm:inline-flex"
        >
          Teklif Al
        </Link>
      </motion.div>
    </header>
  );
}
