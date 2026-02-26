import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MANMALER – Professionel Maler i Danmark",
    template: "%s | MANMALER",
  },
  description:
    "Professionel maler i Danmark. Indendørs og udendørs maling udført med høj kvalitet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body
        className={`${jakarta.className} flex flex-col min-h-screen`}
      >
        <Providers>
          <Header />

          <main className="flex flex-col flex-1">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}