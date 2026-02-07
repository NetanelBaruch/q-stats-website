import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientText from "@/components/shared/GradientText";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="glow-purple absolute bottom-0 right-0 h-[500px] w-[600px] pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            How It <GradientText>Works</GradientText>
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Get started in under 30 seconds. No signup, no configuration.
          </p>
        </AnimatedSection>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting dashed line (desktop) */}
          <div className="absolute top-16 left-[16.6%] right-[16.6%] hidden md:block">
            <div className="border-t-2 border-dashed border-white/10" />
          </div>

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <AnimatedSection key={step.step} delay={0.15 * i}>
              <div className="relative text-center">
                {/* Step number */}
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/15 ring-1 ring-brand-red/30">
                  <span className="font-display text-lg font-bold text-brand-red-bright">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
