"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "./lib/i18n";

import project1 from "@/public/project1.jpg";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.jpg";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="flex flex-col">
      
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center text-center overflow-hidden">
        
        <div className="absolute inset-0">
          <Image
            src="/hero4.png"
            alt="Professionel malerarbejde"
            fill
            className="object-cover object-[80%_center]"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-3xl text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professionel maler i Danmark
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/90">
            Kvalitetsbevidst malerarbejde til private og erhverv.
            Indendørs og udendørs maling udført med præcision og omhu.
          </p>

          <div className="flex justify-center gap-5">
            <Link
              href="/kontakt"
              className="bg-[#D9772B] hover:bg-[#B85E1F] text-white px-8 py-3 rounded-md font-semibold transition"
            >
              Få et tilbud
            </Link>

            <Link
              href="/ydelser"
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Se vores ydelser
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 pb-24 bg-gradient-to-br from-[#DCEBFF] via-[#F2EDE6] to-[#FFE5CC]">
        <div className="max-w-6xl mx-auto -mt-10 z-20 relative">
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12">
            <h2 className="text-3xl font-semibold text-center mb-12 text-[#2B2B2B]">
              Vores Ydelser
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-[#E6DFD6] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold mb-3 text-lg">Indendørs maling</h3>
                <p className="text-[#6B6B6B]">
                  Professionel maling af vægge, lofter og træværk.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#E6DFD6] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold mb-3 text-lg">Udendørs maling</h3>
                <p className="text-[#6B6B6B]">
                  Facader, træværk og vedligeholdelse af bygninger.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#E6DFD6] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold mb-3 text-lg">Erhvervsløsninger</h3>
                <p className="text-[#6B6B6B]">
                  Malerarbejde til kontorer, butikker og virksomheder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            {t("projects.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[project1, project2, project3].map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md group"
              >
                <Image
                  src={img}
                  alt={t(`projects.${index + 1}.title` as any)}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold">
                    {t(`projects.${index + 1}.title` as any)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`projects.${index + 1}.desc` as any)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/referencer"
              className="text-[#D9772B] font-semibold hover:underline"
            >
              {t("nav.projects")} →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F2EDE6] px-6 bg-gradient-to-br from-[#DCEBFF] via-[#F2EDE6] to-[#FFE5CC]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Hvad siger vores kunder?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="italic mb-4">
                "Fantastisk arbejde og meget professionelt."
              </p>
              <p className="font-semibold">— Mette, København</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="italic mb-4">
                "Pålidelig og flot resultat."
              </p>
              <p className="font-semibold">— Lars, Roskilde</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-card-foreground">
              {t("why.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("why.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { emoji: "🎨", key: "experience" },
              { emoji: "🏆", key: "quality" },
              { emoji: "💰", key: "pricing" },
              { emoji: "🤝", key: "reliable" },
            ].map((item) => (
              <div
                key={item.key}
                className="text-center p-6 rounded-xl bg-warm-surface hover:shadow-md transition"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold mb-3 text-lg text-foreground">
                  {t(`why.${item.key}.title` as any)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`why.${item.key}.desc` as any)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
<section className="py-28 px-6 bg-[#D9772B] text-white">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      {t("cta.title")}
    </h2>

    <p className="text-lg mb-10 text-white/90">
      {t("cta.subtitle")}
    </p>

    <Link
      href="/kontakt"
      className="inline-block bg-white text-[#D9772B] px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition"
    >
      {t("cta.button")}
    </Link>

  </div>
</section>

    </main>
  );
}