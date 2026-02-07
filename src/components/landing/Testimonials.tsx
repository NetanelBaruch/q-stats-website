import AnimatedSection from "@/components/shared/AnimatedSection";
import GlassCard from "@/components/shared/GlassCard";
import GradientText from "@/components/shared/GradientText";
import StarRating from "@/components/shared/StarRating";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Loved by <GradientText>Marketers</GradientText>
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            See what content creators and growth marketers say about Q-Stats.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={0.1 * i}>
              <GlassCard className="h-full flex flex-col">
                <StarRating rating={t.rating} />
                <p className="mt-4 text-sm text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple/20 font-display font-bold text-sm text-brand-purple">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
