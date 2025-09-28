"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HeroParticles } from "./components/HeroParticles";
import { stats } from "@/lib/content";

const highlightCards = [
  {
    title: "Sosyal Medya Yönetimi",
    description:
      "Instagram, TikTok ve YouTube için içerik planı, çekim ve reklam optimizasyonunu tek elde yönetiyoruz.",
    href: "/hizmetler",
    cta: "Sosyal medya paketlerini incele",
  },
  {
    title: "Web Tasarım ve Otomasyon",
    description:
      "Programlama, tasarım ve otomasyon entegrasyonları ile satışa hazır web deneyimleri kuruyoruz.",
    href: "/hizmetler",
    cta: "Site çözümlerini keşfet",
  },
  {
    title: "Teknik Eğitim ve Destek",
    description:
      "Excel, SolidWorks, AutoCAD eğitimleri ile bilgisayar bakım ve format hizmetini paketledik.",
    href: "/hizmetler",
    cta: "Eğitim ve destek detayları",
  },
  {
    title: "Prodüksiyon ve Drone Çekimleri",
    description:
      "Drone, emlak, şantiye ve ürün çekimleriyle markanıza profesyonel görsel içerikler sunuyoruz.",
    href: "/hizmetler",
    cta: "Çekim hizmetlerini görün",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? "visible" : "hidden";
  const transition = { duration: 0.7, ease: "easeOut" };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: shouldReduceMotion ? 0 : index * 0.1 },
    }),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1e29] via-[#111827] to-[#05070d] text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18)_0%,_rgba(5,7,13,0.9)_65%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18)_0%,_rgba(5,7,13,0)_70%)]" />
      </div>

      <main className="mx-auto flex max-w-[1200px] flex-col gap-20 px-6 pb-16 pt-12 lg:px-10 lg:pt-16">
        <motion.section
          initial={initialState}
          animate="visible"
          variants={fadeUp}
          className="relative overflow-hidden rounded-[36px] border border-slate-800/80 bg-slate-900/85 p-10 shadow-[0_40px_120px_rgba(3,5,10,0.65)]"
        >
          <HeroParticles />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                Rimex Medya
              </div>
              <h1 className="text-4xl leading-tight sm:text-5xl">
                Rimex Medya ile sosyal medya, eğitim, web ve prodüksiyon ihtiyaçlarınızı tek merkezde çözün.
              </h1>
              <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Ajans ekibimiz; sosyal medya yönetiminden internet sitesi tasarımına, bilgisayar bakım desteklerinden drone çekimlerine kadar tüm hizmetleri uçtan uca yönetir. Yapay zekâ tasarım eğitimleri, influencer koçluğu ve sektörel prodüksiyon çözümleriyle işletmenizi dijitalde bir üst seviyeye taşır.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#38bdf8] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Projenizi konuşalım
                </Link>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-700 px-6 py-3 text-sm font-semibold text-[#38bdf8] transition hover:bg-[#38bdf8]/10"
                >
                  Hizmetlerimizi görün
                </Link>
              </div>
            </div>
            <motion.div
              initial={initialState}
              animate="visible"
              variants={fadeUp}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="flex-1 rounded-3xl border border-slate-800/70 bg-slate-950/40 p-6 backdrop-blur"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Güven veren rakamlar
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Sosyal medya, web, eğitim ve prodüksiyon projelerinde elde ettiğimiz sonuçlar.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    custom={index}
                    initial={initialState}
                    animate="visible"
                    variants={cardVariants}
                    className="group flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-left transition hover:border-[#38bdf8]/40 hover:bg-slate-900"
                  >
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                      0{index + 1}
                      <span className="h-1 w-6 rounded-full bg-[#38bdf8]/60" />
                    </div>
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="text-sm font-medium text-slate-200">{item.label}</p>
                    {"description" in item && (
                      <p className="text-xs text-slate-400">{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={initialState}
          animate="visible"
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-2"
        >
          {highlightCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial={initialState}
              animate="visible"
              variants={cardVariants}
              className="group relative flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition hover:-translate-y-1 hover:border-[#38bdf8]/40 hover:bg-slate-900"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-[#38bdf8]/10 opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="text-sm text-slate-400">{card.description}</p>
              <Link
                href={card.href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] transition hover:text-[#0ea5e9]"
              >
                {card.cta}
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={initialState}
          animate="visible"
          variants={fadeUp}
          className="rounded-[32px] border border-slate-800/80 bg-slate-900/70 p-10 text-slate-300"
        >
          <h2 className="text-3xl font-semibold text-white">
            Neden Rimex Medya ile çalışmalısınız?
          </h2>
          <p className="mt-4 max-w-3xl">
            Rimex Medya, işletmelerin dijital vitrinini güncellemek ve operasyonlarını hızlandırmak için uçtan uca çözümler üretir. Sosyal medya yönetimi, internet sitesi geliştirme, teknik eğitimler ve görsel prodüksiyon hizmetlerini aynı çatı altında sunarak süreçlerinizi tek merkezden yönetmenizi sağlar.
          </p>
          <ul className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#38bdf8]" />
              <span>
                Sosyal medya hesaplarınızı içerik üretimi, reklam yönetimi ve influencer eğitimleriyle büyütürüz.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#38bdf8]" />
              <span>
                Web sitelerinizi tasarım, içerik ve otomasyon entegrasyonlarıyla satışa hazır hale getiririz.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#38bdf8]" />
              <span>
                Teknik ekiplerinize Excel, SolidWorks ve AutoCAD eğitimleri verir, bilgisayar bakım süreçlerinizi yönetiriz.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#38bdf8]" />
              <span>
                Drone, emlak ve şantiye çekimleriyle markanızın hikâyesini güçlü görsellerle anlatırız.
              </span>
            </li>
          </ul>
        </motion.section>

        <footer className="mt-8 flex flex-col gap-4 pb-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rimex Medya. Tüm hakları saklıdır.</p>
          <div className="flex items-center justify-center gap-6">
            <Link href="/kvkk" className="transition hover:text-[#38bdf8]">
              KVKK
            </Link>
            <Link href="/cerez-politikasi" className="transition hover:text-[#38bdf8]">
              Çerez Politikası
            </Link>
            <Link href="/site-haritasi" className="transition hover:text-[#38bdf8]">
              Site Haritası
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
