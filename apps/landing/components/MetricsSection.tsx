"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import type { Dictionary } from "@/i18n/get-dictionary";

export function MetricsSection({ dict }: { dict: Dictionary }) {
  const metrics = [
    dict.metrics.users,
    dict.metrics.tones,
    dict.metrics.rating,
    dict.metrics.speed,
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 border-b border-neutral-100">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
        {metrics.map((m, i) => (
          <BlurFade key={i} delay={0.1 * i} inView>
            <div className="text-center md:text-left">
              <p className={`text-3xl font-semibold tracking-tight ${i === 1 ? "text-playful" : "text-foreground"}`}>
                {m.value.match(/\d+/) ? (
                  <>
                    <NumberTicker
                      value={parseInt(m.value.match(/\d+/)![0])}
                      className={i === 1 ? "text-playful" : "text-foreground"}
                    />
                    {m.value.replace(/\d+/, "")}
                  </>
                ) : (
                  m.value
                )}
              </p>
              <p className="text-sm text-muted-foreground">{m.label}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
