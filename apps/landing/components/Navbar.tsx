"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Download } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function Navbar({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = locale === "vi" ? "en" : "vi";
  const localePath = pathname.replace(`/${locale}`, `/${toggleLocale}`);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-playful flex items-center justify-center text-white shadow-lg shadow-playful/20">
            <Heart className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {dict.nav.logo}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-playful transition-colors">
            {dict.nav.features}
          </a>
          <a href="#how-it-works" className="hover:text-playful transition-colors">
            {dict.nav.howItWorks}
          </a>
          <a href="#testimonials" className="hover:text-playful transition-colors">
            {dict.nav.testimonials}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={localePath}
            className="text-xs font-bold px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
          >
            {toggleLocale.toUpperCase()}
          </Link>
          <a
            href="#download"
            className="bg-playful text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-playful/90 transition-colors flex items-center gap-2 shadow-md shadow-playful/20"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{dict.nav.cta}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
