"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tak for din henvendelse! ✓");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCEBFF] via-[#F2EDE6] to-[#FFE5CC]" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            {t("contact.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6">
              Send os en besked
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D9772B] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D9772B] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D9772B] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D9772B] focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D9772B] text-white py-3 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                {t("contact.send")}
              </button>
            </form>

            {/* Reassurance */}
            <div className="mt-6 text-sm text-gray-600 flex items-center gap-2">
              <CheckCircle size={16} className="text-[#D9772B]" />
              Vi svarer typisk indenfor 24 timer.
            </div>
          </div>

          {/* INFO PANEL */}
          <div className="space-y-10">
            <h2 className="text-2xl font-semibold">
              {t("contact.info.title")}
            </h2>

            <div className="space-y-8">

              {[
                {
                  icon: Phone,
                  title: "Telefon",
                  value: t("contact.info.phone"),
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: t("contact.info.email"),
                },
                {
                  icon: MapPin,
                  title: t("footer.address"),
                  value: t("contact.info.address"),
                },
                {
                  icon: Clock,
                  title: t("contact.info.hours"),
                  value: `${t("contact.info.hours.weekdays")} • ${t("contact.info.hours.weekend")}`,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-[#F8F8F8] hover:bg-[#F2EDE6] transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D9772B]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#D9772B]" size={22} />
                    </div>

                    <div>
                      <p className="font-semibold mb-1">
                        {item.title}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Call CTA */}
            <div className="p-8 rounded-2xl bg-[#D9772B] text-white">
              <h3 className="font-semibold text-lg mb-3">
                Foretrækker du at ringe?
              </h3>
              <p className="text-white/90 mb-4 text-sm">
                Vi står klar til at hjælpe dig.
              </p>
              <a
                href={`tel:${t("contact.info.phone")}`}
                className="inline-block bg-white text-[#D9772B] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Ring nu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}