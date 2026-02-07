"use client";

import { motion } from "framer-motion";
import { Check, Zap, MessageCircle } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import type { Dictionary } from "@/i18n/get-dictionary";

export function SpeedFeatureSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col-reverse md:flex-row items-center gap-16">
      {/* Text */}
      <div className="w-full md:w-1/2">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-foreground">
            {dict.speedFeature.title}
          </h2>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {dict.speedFeature.description}
          </p>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Check className="w-4 h-4 text-playful" />
              {dict.speedFeature.pushNotifications}
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Visual - Floating notification cards */}
      <div className="w-full md:w-1/2 relative h-[400px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-playful rounded-full opacity-5" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-16 left-10 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-start gap-4 w-64 border border-neutral-50"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="contents"
          >
            <div className="w-10 h-10 rounded-full bg-cool/10 flex items-center justify-center shrink-0 text-cool">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">3s</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                AI analyzed and generated 3 suggestions
              </p>
              <p className="text-[10px] text-neutral-400 mt-2">Just now</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-24 right-6 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-start gap-4 w-64 border border-neutral-50 z-10"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="contents"
          >
            <div className="w-10 h-10 rounded-full bg-playful/10 flex items-center justify-center shrink-0 text-playful">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Reply Copied!</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Sweet tone selected. Paste and send to crush!
              </p>
              <p className="text-[10px] text-neutral-400 mt-2">12s ago</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
