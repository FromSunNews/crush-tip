"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { DynIcon } from "@/components/DynIcon";
import type { Dictionary } from "@/i18n/get-dictionary";

export function HowItWorksSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="how-it-works"
      className="max-w-7xl mx-auto px-6 py-12 bg-secondary rounded-[3rem] mb-24"
    >
      <div className="p-8 md:p-12">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
            {dict.howItWorks.title}
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.steps.map((step, i) => (
            <BlurFade key={i} delay={0.15 * (i + 1)} inView>
              <div className="bg-background rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100">
                <div className="relative z-10">
                  <span className="text-6xl font-semibold text-playful/10 absolute -top-4 -right-4">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mb-6 text-white">
                    <DynIcon name={step.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
