"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb } from "lucide-react";
import { DynIcon } from "@/components/DynIcon";
import type { Dictionary } from "@/i18n/get-dictionary";

const colorMap: Record<string, string> = {
  playful: "border-playful bg-playful/5",
  cool: "border-cool bg-cool/5",
  romantic: "border-romantic bg-romantic/5",
};

export function PhoneMockup({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative w-[340px] h-[700px] bg-white rounded-[3.5rem] border-[12px] border-white shadow-2xl z-10 overflow-hidden ring-1 ring-black/5">
      <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
        {/* Notch */}
        <div className="mx-auto mt-2 w-28 h-6 bg-black rounded-full" />

        {/* App Header */}
        <div className="px-6 mt-6 mb-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-playful/10 flex items-center justify-center text-playful">
              <Heart className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-foreground">Crush</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-[10px] font-medium">Online</span>
            <div className="w-2 h-2 rounded-full bg-cool" />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 px-4 py-4 space-y-3 overflow-hidden">
          {/* Incoming message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex justify-start"
          >
            <div className="bg-neutral-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
              <p className="text-sm text-foreground">
                {dict.phoneMockup.incomingMessage}
              </p>
            </div>
          </motion.div>

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.3 }}
            className="flex justify-start"
          >
            <div className="bg-neutral-100 rounded-2xl px-4 py-3 flex gap-1">
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </motion.div>
        </div>

        {/* AI Suggestions Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="bg-white border-t border-neutral-100 rounded-t-3xl px-4 py-5 space-y-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
        >
          <p className="text-xs font-semibold text-foreground px-1 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            {dict.phoneMockup.suggestionsTitle}
          </p>

          {dict.phoneMockup.suggestions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.15, duration: 0.3 }}
              className={`border-l-4 ${colorMap[s.color] || "border-neutral-200"} rounded-xl px-3 py-2.5 cursor-pointer hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <DynIcon name={s.icon} className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                  {s.label}
                </span>
              </div>
              <p className="text-xs text-foreground">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="w-32 h-1 bg-neutral-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}
