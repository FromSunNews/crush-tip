"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import type { Dictionary } from "@/i18n/get-dictionary";

export function ProblemSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <BlurFade delay={0.1} inView>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 max-w-2xl mx-auto text-foreground">
          {dict.problemSection.title}
        </h2>
      </BlurFade>
      <BlurFade delay={0.2} inView>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {dict.problemSection.subtitle}
        </p>
      </BlurFade>
    </section>
  );
}
