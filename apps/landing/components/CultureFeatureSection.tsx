"use client";

import { motion } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import type { Dictionary } from "@/i18n/get-dictionary";

export function CultureFeatureSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-16">
      {/* Visual */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -top-4 -left-4 w-full h-full bg-playful rounded-[2rem] transform -rotate-2" />
        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl h-72 border border-neutral-100 flex flex-col">
          <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-xl shadow-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cool/10 flex items-center justify-center text-cool">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{dict.cultureFeature.badge}</p>
              <p className="text-sm font-bold text-foreground">Gen Z Vietnam</p>
            </div>
          </div>

          {/* Chat bubbles visual */}
          <div className="w-full h-full bg-gradient-to-br from-playful/5 via-cool/5 to-romantic/5 flex items-center justify-center p-8">
            <div className="space-y-3 w-full max-w-[240px]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-100 rounded-2xl rounded-tl-md px-4 py-2.5 self-start w-fit"
              >
                <p className="text-xs text-foreground">Tối nay rảnh không?</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-playful text-white rounded-2xl rounded-tr-md px-4 py-2.5 ml-auto w-fit"
              >
                <p className="text-xs">Rảnh chứ! Đi đâu nào?</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-cool/10 border border-cool/20 rounded-xl px-3 py-2 flex items-center justify-center gap-1.5"
              >
                <Check className="w-3 h-3 text-cool" />
                <p className="text-[10px] text-cool font-semibold">
                  AI: Natural Gen Z tone
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <BlurFade delay={0.2} inView>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-foreground">
            {dict.cultureFeature.title}
          </h2>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {dict.cultureFeature.description}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
