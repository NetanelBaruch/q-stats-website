import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/shared/Button";
import GradientText from "@/components/shared/GradientText";
import { CHROME_STORE_URL } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative py-24">
      {/* Background glow */}
      <div className="glow-red absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start Finding Opportunities{" "}
            <GradientText>Today</GradientText>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">
            Join thousands of marketers who use Q-Stats to discover high-potential
            content opportunities on Quora and Reddit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Add to Chrome — It&apos;s Free
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
