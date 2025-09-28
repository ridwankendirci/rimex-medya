"use client";

import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const contactChannels = [
  {
    title: "Ajans ile Hızlı İletişim",
    description: "Sosyal medya yönetimi, web tasarım ve prodüksiyon talepleriniz için hemen görüşelim.",
    value: "info@rimexmedya.com",
    link: "mailto:info@rimexmedya.com",
  },
];

const serviceTags = [
  "Sosyal Medya Yönetimi",
  "Web Tasarım & Otomasyon",
  "Drone & Şantiye Çekimleri",
  "Yapay Zekâ Prompt Eğitimi",
  "Influencer Koçluğu",
];

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#09101f] to-[#04070d] text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14)_0%,_rgba(4,7,13,0.92)_70%)]" />
      <section className="mx-auto flex max-w-[1080px] flex-col gap-10 px-4 pb-16 pt-12 sm:gap-12 sm:px-6 lg:gap-14 lg:px-10 lg:pt-20">
        <motion.header initial={initial} animate="visible" variants={fadeUp} className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
            İletişim
          </span>
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Sosyal medya, web tasarım, eğitim ve prodüksiyon projeleriniz için bize ulaşın
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Rimex Medya ekibi; sosyal medya yönetimi, internet sitesi kurulumları, drone çekimleri ve bilgisayar teknik destek projelerinizde size özel yol haritası hazırlar. Formu doldurun ya da arayın, ihtiyacınızı birlikte planlayalım.
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceTags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={initial}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-2 space-y-6 rounded-[20px] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_28px_90px_rgba(3,5,10,0.6)] sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10"
          >
            <h2 className="text-xl font-semibold text-white sm:text-2xl">İletişim Formu</h2>
            <p className="text-sm text-slate-400">
              Dilerseniz formu doldurun, ekip üyemiz en geç 1 iş günü içinde dönüş yapsın.
            </p>
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Adınız Soyadınız</span>
                  <input type="text" name="name" placeholder="Adınız Soyadınız" className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:outline-none" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>E-posta</span>
                  <input type="email" name="email" placeholder="ornek@domain.com" className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:outline-none" />
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Telefon</span>
                <input type="tel" name="phone" placeholder="+90 5XX XXX XX XX" className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:outline-none" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>İlgilendiğiniz hizmet</span>
                <select name="service" className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-[#38bdf8] focus:outline-none">
                  <option value="">Seçiniz</option>
                  <option>Sosyal Medya Yönetimi</option>
                  <option>Web Tasarım & Otomasyon</option>
                  <option>Bilgisayar Arıza & Bakım</option>
                  <option>Drone / Prodüksiyon Çekimi</option>
                  <option>Teknik Eğitim</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Projeniz hakkında notlar</span>
                <textarea name="message" rows={4} placeholder="Beklentilerinizi bizimle paylaşın." className="w-full resize-none rounded-2xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:outline-none" />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl bg-[#38bdf8] px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg">
                Talep Gönder
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={initial}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col gap-6"
          >
            {contactChannels.map((channel, index) => (
              <div key={channel.title} className="rounded-[24px] border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{`0${index + 1}`}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{channel.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{channel.description}</p>
                {channel.link ? (
                  <a href={channel.link} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] transition hover:text-[#0ea5e9]">
                    {channel.value}
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <span className="mt-4 inline-block text-sm text-slate-200">{channel.value}</span>
                )}
              </div>
            ))}

            <div className="rounded-[24px] border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              <h3 className="text-lg font-semibold text-white">Çalışma Saatleri</h3>
              <p className="mt-2">
                Hafta içi 09:00 - 19:00 arası ofis ve stüdyo hizmetleri, hafta sonu randevu ile çekim ve eğitim desteği veriyoruz.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">Online toplantı seçenekleri</p>
              <p className="mt-2">
                Zoom, Google Meet veya Teams üzerinden projelerinizi değerlendirebiliriz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
