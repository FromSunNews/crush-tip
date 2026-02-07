"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SparklesText } from "@/components/ui/sparkles-text";
import { DynIcon } from "@/components/DynIcon";
import type { Dictionary } from "@/i18n/get-dictionary";

export function ToneStylesSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
      <div className="bg-foreground rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[450px]">
        {/* Content */}
        <div className="relative z-10 w-full md:w-1/2">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-playful/20 text-playful text-xs font-semibold border border-playful/20 mb-6">
              <Sparkles className="w-3 h-3" />
              {dict.toneStyles.badge}
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight whitespace-pre-line">
              {dict.toneStyles.title}
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-neutral-400 text-lg mb-8 max-w-sm">
              {dict.toneStyles.subtitle}
            </p>
          </BlurFade>
        </div>

        {/* Tone Cards */}
        <div className="relative z-10 mt-12 md:mt-0 w-full max-w-xs transform md:translate-x-10">
          <BlurFade delay={0.3} inView>
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative space-y-3">
              <div className="flex justify-between items-center mb-4">
                <SparklesText
                  className="text-sm font-bold text-foreground"
                  sparklesCount={3}
                >
                  Reply Tones
                </SparklesText>
                <div className="bg-cool/10 text-cool px-2 py-1 rounded-md text-xs font-bold">
                  Active
                </div>
              </div>

              {dict.toneStyles.tones.map((tone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-xl p-4 border border-neutral-100 hover:shadow-md transition-shadow"
                  style={{ borderLeftColor: tone.color, borderLeftWidth: 4 }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <DynIcon name={tone.icon} className="w-5 h-5" style={{ color: tone.color }} />
                    <span className="text-sm font-bold text-foreground">
                      {tone.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-8">
                    &ldquo;{tone.example}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 -z-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-playful/20 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
