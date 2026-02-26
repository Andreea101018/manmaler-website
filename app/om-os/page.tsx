"use client";

import { useI18n } from "../lib/i18n";
import Image from "next/image";
import teamImg from "@/public/team.jpg";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function About() {
  const { t } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCEBFF] via-[#F2EDE6] to-[#FFE5CC]" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            {t("about.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {t("about.story.title")}
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
            </div>

            {/* Mini trust bullets */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle size={18} className="text-[#D9772B]" />
                Professionel og pålidelig service
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle size={18} className="text-[#D9772B]" />
                Høj kvalitet og præcision
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle size={18} className="text-[#D9772B]" />
                Mange tilfredse kunder
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src={teamImg}
              alt="MANMALER team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 px-6 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            {t("about.values.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["1", "2", "3"].map((i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#D9772B]/10 flex items-center justify-center text-[#D9772B] font-bold text-xl">
                  {i}
                </div>

                <h3 className="font-semibold text-lg mb-4">
                  {t(`about.values.${i}.title` as any)}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`about.values.${i}.desc` as any)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE AREA */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t("about.area.title")}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {t("about.area.desc")}
          </p>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="relative py-28 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#D9772B]" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>

          <p className="text-lg mb-10 text-white/90">
            {t("cta.subtitle")}
          </p>

          <Link
            href="/kontakt"
            className="inline-block bg-white text-[#D9772B] px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}