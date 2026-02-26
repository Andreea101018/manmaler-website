"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/app/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useI18n();

  const navItems = [
    { name: lang === "da" ? "Forside" : "Home", href: "/" },
    { name: lang === "da" ? "Ydelser" : "Services", href: "/ydelser" },
    { name: lang === "da" ? "Referencer" : "Projects", href: "/referencer" },
    { name: lang === "da" ? "Om os" : "About", href: "/om-os" },
    { name: lang === "da" ? "Kontakt" : "Contact", href: "/kontakt" },
  ];

  return (
    <header className="bg-[#F8F3EC] border-b border-[#E6DFD6] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1">

        {/* Logo */}
        <Link href="/" className="flex items-center -my-4">
          <Image
            src="/logo2.png"
            alt="MANMALER Logo"
            width={300}
            height={120}
            priority
            className="h-28 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#F1C9A9] text-[#8B4513]"
                    : "text-[#4B4B4B] hover:bg-[#F7E0CE]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Language Switch */}
          <div className="flex items-center bg-[#EFE7DE] rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setLang("da")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "da"
                  ? "bg-white shadow text-[#8B4513]"
                  : "text-[#6B6B6B]"
              }`}
            >
              DA
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "en"
                  ? "bg-white shadow text-[#8B4513]"
                  : "text-[#6B6B6B]"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <Link
            href="/kontakt"
            className="bg-[#D9772B] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#B85E1F] transition"
          >
            {lang === "da" ? "Få et tilbud" : "Get a quote"}
          </Link>

        </div>

      </div>
    </header>
  );
}