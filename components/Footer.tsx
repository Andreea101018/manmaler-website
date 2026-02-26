"use client";

import { useI18n } from "@/app/lib/i18n";

export default function Footer() {
  const { lang } = useI18n();

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold mb-4">MANMALER</h3>
          <p>
            {lang === "da"
              ? "Professionel maler i Danmark."
              : "Professional painter in Denmark."}
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            {lang === "da" ? "Kontakt" : "Contact"}
          </h3>
          <p>Telefon: +45 00 00 00 00</p>
          <p>Email: kontakt@manmaler.dk</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            {lang === "da" ? "Adresse" : "Address"}
          </h3>
          <p>Denmark</p>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} MANMALER.{" "}
        {lang === "da"
          ? "Alle rettigheder forbeholdes."
          : "All rights reserved."}
      </div>
    </footer>
  );
}