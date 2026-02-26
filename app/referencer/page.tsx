"use client";

import { useI18n } from "../lib/i18n";
import Image from "next/image";
import Link from "next/link";

import project1 from "@/public/project1.jpg";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.jpg";
import project4 from "@/public/project4.jpg";
import project5 from "@/public/project5.jpg";
import project6 from "@/public/project6.jpg";

export default function Projects() {
  const { t } = useI18n();

  const projects = [
    { img: project1, key: "1" },
    { img: project2, key: "2" },
    { img: project3, key: "3" },
    { img: project4, key: "4" },
    { img: project5, key: "5" },
    { img: project6, key: "6" },
  ];

  return (
    <div>
      {/* Hero */}

      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCEBFF] via-[#F2EDE6] to-[#FFE5CC]" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            {t("projects.title")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.key}
              className="rounded-xl overflow-hidden shadow-md group border border-border bg-card"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={p.img}
                  alt={t(`projects.${p.key}.title` as any)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-1 text-card-foreground">
                  {t(`projects.${p.key}.title` as any)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`projects.${p.key}.desc` as any)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* CTA */}
<section className="flex flex-col justify-center py-28 px-6 bg-[#D9772B] text-white flex-1">
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
    </div>
  );
}