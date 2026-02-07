"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GlassCard from "@/components/shared/GlassCard";
import GradientText from "@/components/shared/GradientText";
import { QUORA_FEATURES, REDDIT_FEATURES } from "@/lib/constants";

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState<"quora" | "reddit">("quora");
  const features = activeTab === "quora" ? QUORA_FEATURES : REDDIT_FEATURES;

  return (
    <section id="features" className="relative py-24">
      <div className="glow-red absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Powerful <GradientText>Marketing Insights</GradientText>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Get detailed statistics for every Quora question and Reddit post.
            All the data you need to make smarter content decisions.
          </p>
        </AnimatedSection>

        {/* Tab Toggle */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-12">
          <div className="glass inline-flex rounded-full p-1">
            <button
              onClick={() => setActiveTab("quora")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === "quora"
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/25"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Quora
            </button>
            <button
              onClick={() => setActiveTab("reddit")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === "reddit"
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/25"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Reddit
            </button>
          </div>
        </AnimatedSection>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.05 * i}>
              <GlassCard className="h-full">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
