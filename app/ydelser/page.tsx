"use client";

import Link from "next/link";
import { useI18n } from "../lib/i18n";
import {
  CheckCircle,
  Paintbrush,
  Wrench,
  Layers,
  Hammer,
} from "lucide-react";

export default function Services() {
  const { t } = useI18n();

  const categories = [
    { icon: Paintbrush, key: "category1", items: 8 },
    { icon: Layers, key: "category2", items: 7 },
    { icon: Wrench, key: "category3", items: 7 },
    { icon: Hammer, key: "category4", items: 6 },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCEBFF] via-[#F2EDE6] to-[#FFE5CC]" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("services.extended.hero.title")}
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-10">
            {t("services.extended.hero.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#D9772B]" />
                {t(`services.extended.hero.trust${i}` as any)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-[#D9772B]/10 flex items-center justify-center">
                    <Icon className="text-[#D9772B]" size={28} />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold">
                    {t(`services.extended.${category.key}.title` as any)}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {Array.from({ length: category.items }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="text-[#D9772B] flex-shrink-0 mt-1"
                      />
                      <span>
                        {t(
                          `services.extended.${category.key}.item${i + 1}` as any
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#D9772B]" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services.extended.cta.title")}
          </h2>

          <p className="text-lg mb-10 text-white/90">
            {t("services.extended.cta.subtitle")}
          </p>

          <Link
            href="/kontakt"
            className="inline-block bg-white text-[#D9772B] px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            {t("services.extended.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}