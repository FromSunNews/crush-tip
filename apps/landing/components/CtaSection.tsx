"use client";

import { Apple, Play } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import type { Dictionary } from "@/i18n/get-dictionary";

export function CtaSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="download" className="max-w-7xl mx-auto px-6 mb-24 text-center">
      <BlurFade delay={0.1} inView>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground whitespace-pre-line">
          {dict.cta.title}
        </h2>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          {dict.cta.subtitle}
        </p>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-neutral-900 transition-transform hover:scale-105 flex items-center gap-3 border border-neutral-800 shadow-lg"
          >
            <Apple className="w-7 h-7" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-none font-medium text-neutral-400">
                Download on the
              </span>
              <span className="text-base font-semibold leading-tight">
                App Store
              </span>
            </div>
          </a>
          <a
            href="#"
            className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-neutral-900 transition-transform hover:scale-105 flex items-center gap-3 border border-neutral-800 shadow-lg"
          >
            <Play className="w-6 h-6" fill="currentColor" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-none font-medium text-neutral-400">
                GET IT ON
              </span>
              <span className="text-base font-semibold leading-tight">
                Google Play
              </span>
            </div>
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
