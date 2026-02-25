"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Forside", href: "/" },
    { name: "Ydelser", href: "/ydelser" },
    { name: "Referencer", href: "/referencer" },
    { name: "Om os", href: "/om-os" },
    { name: "Kontakt", href: "/kontakt" },
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

        {/* CTA */}
        <Link
          href="/kontakt"
          className="bg-[#D9772B] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#B85E1F] transition"
        >
          Få et tilbud
        </Link>

      </div>
    </header>
  );
}