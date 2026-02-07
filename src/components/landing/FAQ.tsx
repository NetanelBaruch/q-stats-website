import AnimatedSection from "@/components/shared/AnimatedSection";
import AccordionItem from "@/components/shared/AccordionItem";
import GradientText from "@/components/shared/GradientText";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="relative mx-auto max-w-3xl px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass rounded-2xl p-6 sm:p-8">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
