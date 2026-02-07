"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap } from "lucide-react";
import { DynIcon } from "@/components/DynIcon";
import type { Dictionary } from "@/i18n/get-dictionary";

export function PhoneMockupBack({ dict }: { dict: Dictionary }) {
  return (
    <div className="w-[320px] h-[680px] bg-white rounded-[3rem] border-[10px] border-white shadow-2xl overflow-hidden ring-1 ring-black/5">
      <div className="w-full h-full bg-neutral-50 flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-12 pb-4 bg-white flex justify-between items-center shadow-sm z-10">
          <span className="text-xs text-muted-foreground">&larr;</span>
          <span className="font-semibold text-foreground text-sm">AI Analysis</span>
          <span className="text-xs text-muted-foreground">&bull;&bull;&bull;</span>
        </div>

        {/* Analysis Visual */}
        <div className="h-1/2 w-full bg-gradient-to-b from-playful/5 to-cool/5 relative flex items-center justify-center p-6">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-32 h-32 rounded-full bg-playful/10 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-playful/20 flex items-center justify-center">
              <BrainCircuit className="w-8 h-8 text-playful" />
            </div>
          </motion.div>

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cool/10 flex items-center justify-center text-cool">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Status</p>
              <p className="text-sm font-bold text-foreground">Analyzing context...</p>
            </div>
          </div>
        </div>

        {/* Results Timeline */}
        <div className="flex-1 bg-white rounded-t-[2rem] -mt-6 p-6 relative z-10">
          <div className="w-12 h-1 bg-neutral-200 rounded-full mx-auto mb-6" />
          <h3 className="font-bold text-base mb-4">Suggestions Ready</h3>
          <div className="space-y-4 pl-2">
            {dict.phoneMockup.suggestions.map((s, i) => (
              <div key={i} className="flex gap-3 relative">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i === 0 ? "bg-playful" : "bg-neutral-300"
                    } outline outline-4 outline-white`}
                  />
                  {i < 2 && <div className="w-0.5 h-full bg-neutral-200 my-1" />}
                </div>
                <div className="pb-1 flex items-start gap-2">
                  <DynIcon name={s.icon} className="w-3.5 h-3.5 mt-0.5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      {s.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
