"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: index * 0.08 },
  }),
};

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? "visible" : "hidden";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#10131c] via-[#0a0d16] to-[#05070d] text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12)_0%,_rgba(5,7,13,0.92)_65%)]" />
      <section className="mx-auto flex max-w-[1100px] flex-col gap-10 px-4 pb-16 pt-12 sm:gap-12 sm:px-6 lg:gap-14 lg:px-10 lg:pt-20">
        <motion.div initial={initialState} animate="visible" variants={fadeUp} className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
            Hizmetler
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Sosyal medyadan drone çekimine kadar tüm ihtiyaçlarınız tek ajans çatısında
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Rimex Medya, sosyal medya yönetimi, web tasarımı, bilgisayar bakım desteği, teknik eğitim
            programları ve prodüksiyon çekimleriyle işletmenize tam kapsamlı hizmet sunar. Yapay zekâ
            tasarım eğitimlerinden influencer koçluğuna, emlak ve şantiye çekimlerinden ürün reklam
            prodüksiyonuna kadar her çözümü uzman ekiplerle uçtan uca planlıyoruz.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              initial={initialState}
              animate="visible"
              variants={cardVariants}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_24px_70px_rgba(3,5,10,0.45)] sm:gap-5 sm:rounded-3xl sm:p-8"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">{service.title}</h2>
                <p className="text-xs text-slate-400 sm:text-sm">{service.description}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Teslimatlar
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
