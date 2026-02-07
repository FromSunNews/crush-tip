"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { DynIcon } from "@/components/DynIcon";
import type { Dictionary } from "@/i18n/get-dictionary";

export function FeaturesSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 mb-24">
      <BlurFade delay={0.1} inView>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-foreground">
          {dict.features.title}
        </h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {dict.featuresList.map((f, i) => (
          <BlurFade key={i} delay={0.15 * (i + 1)} inView>
            <MagicCard
              className="flex flex-col gap-4 items-start p-6 cursor-pointer bg-background"
              gradientColor="rgba(255,107,107,0.05)"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: i === 0 ? f.color : `${f.color}15`,
                  color: i === 0 ? "white" : f.color,
                  boxShadow: i === 0 ? `0 10px 25px ${f.color}30` : "none",
                }}
              >
                <DynIcon name={f.icon} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
