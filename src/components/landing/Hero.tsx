"use client";

import { motion } from "framer-motion";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import GradientText from "@/components/shared/GradientText";
import { CHROME_STORE_URL } from "@/lib/constants";

function FloatingStatsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="animate-float"
    >
      <div className="glass rounded-2xl p-6 max-w-sm mx-auto shadow-2xl shadow-brand-red/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-lg bg-brand-red/20 flex items-center justify-center text-sm">
            📊
          </div>
          <div>
            <p className="text-xs text-text-secondary">Question Stats</p>
            <p className="text-sm font-display font-semibold">How to learn marketing?</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Total Views", value: "1.2M" },
            { label: "Monthly Avg", value: "45.2K" },
            { label: "Followers", value: "8,341" },
            { label: "Answers", value: "127" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/5 p-3 text-center"
            >
              <p className="text-lg font-display font-bold text-text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-text-secondary mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs text-text-secondary">Opportunity:</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < 4 ? "text-brand-purple" : "text-text-secondary/30"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-brand-purple">High</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glows */}
      <div className="glow-hero absolute inset-0 pointer-events-none" />
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="green" className="mb-6">
                Free Forever
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Unlock Hidden Stats on{" "}
              <GradientText>Quora & Reddit</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-lg text-lg text-text-secondary leading-relaxed"
            >
              See views, engagement, and opportunity rankings on every question and post.
              Find the best content opportunities in seconds — no account needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                Add to Chrome — It&apos;s Free
              </Button>
              <Button href="#features" variant="secondary">
                See Features
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex items-center gap-6 text-sm text-text-secondary"
            >
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No account required
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No data collected
              </span>
            </motion.div>
          </div>

          {/* Right: Floating mock panel */}
          <div className="hidden lg:block">
            <FloatingStatsPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
