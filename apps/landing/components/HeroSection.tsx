"use client";

import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PhoneMockupBack } from "@/components/PhoneMockupBack";
import type { Dictionary } from "@/i18n/get-dictionary";

export function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
      <div className="relative bg-playful rounded-[2.5rem] p-8 md:p-16 overflow-hidden min-h-[850px] flex flex-col md:block shadow-2xl shadow-playful/20">
        {/* Animated grid background */}
        <AnimatedGridPattern
          className="absolute inset-0 opacity-10 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          numSquares={30}
          maxOpacity={0.3}
          duration={3}
        />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-xl mt-8 md:mt-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cool" />
            {dict.hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white whitespace-pre-line">
            {dict.hero.title}
          </h1>

          <p className="text-xl md:text-2xl font-normal text-white/80 mb-10 max-w-md leading-relaxed">
            {dict.hero.subtitle}
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#"
              className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-neutral-900 transition-transform hover:scale-105 flex items-center gap-3 border border-white/10 shadow-lg"
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
              className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-neutral-900 transition-transform hover:scale-105 flex items-center gap-3 border border-white/10 shadow-lg"
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
        </motion.div>

        {/* Hero Phones Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="relative md:absolute md:top-10 md:-right-24 mt-16 md:mt-0 flex justify-center md:block transform scale-90 md:scale-100"
        >
          {/* Back Phone */}
          <div className="absolute top-10 -left-16 md:-left-44 hidden lg:block z-0">
            <div className="transform rotate-[-8deg]">
              <div className="relative">
                <PhoneMockupBack dict={dict} />
                <BorderBeam size={300} duration={10} borderWidth={2} />
              </div>
            </div>
          </div>

          {/* Front Phone */}
          <div className="relative z-10">
            <PhoneMockup dict={dict} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
