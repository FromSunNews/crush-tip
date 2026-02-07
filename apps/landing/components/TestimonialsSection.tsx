"use client";

import { Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { DynIcon } from "@/components/DynIcon";
import type { Dictionary } from "@/i18n/get-dictionary";

export function TestimonialsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 mb-24">
      <BlurFade delay={0.1} inView>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12 text-center text-foreground">
          {dict.testimonials.title}
        </h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dict.testimonialsList.map((t, i) => (
          <BlurFade key={i} delay={0.15 * (i + 1)} inView>
            <MagicCard
              className={`p-10 rounded-[2.5rem] cursor-pointer ${
                i === 0
                  ? "bg-playful/5 border border-playful/10"
                  : "bg-secondary"
              }`}
              gradientColor={i === 0 ? "rgba(255,107,107,0.08)" : "rgba(0,0,0,0.02)"}
            >
              <div className={`text-2xl mb-6 ${i === 0 ? "text-playful" : "text-neutral-400"}`}>
                &ldquo;
              </div>
              <p className="text-xl font-medium mb-8 leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
                  <DynIcon name={t.avatar} className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.age} {dict.testimonials.ageLabel}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
