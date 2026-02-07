import type { Metadata } from "next";
import GlassCard from "@/components/shared/GlassCard";
import GradientText from "@/components/shared/GradientText";
import AccordionItem from "@/components/shared/AccordionItem";
import {
  SUPPORT_EMAIL,
  GITHUB_ISSUES_URL,
  CHROME_STORE_URL,
  EXTENSION_VERSION,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support — Q-Stats",
  description: "Get help with Q-Stats. Installation guide, usage instructions, troubleshooting, and contact information.",
};

const TROUBLESHOOTING_FAQ = [
  {
    question: "Stats are not showing on a Quora question page",
    answer:
      "Make sure the extension is enabled (look for the Q-Stats icon in your Chrome toolbar). Try refreshing the page. The extension only works on individual Quora question pages — it does not activate on the homepage, profile pages, or login screens. If the issue persists, try disabling and re-enabling the extension.",
  },
  {
    question: "The extension icon is grayed out",
    answer:
      "A grayed-out icon means you are on a page that Q-Stats does not support. Navigate to a Quora question page or Reddit post page to activate the extension. The icon should become colored once on a supported page.",
  },
  {
    question: "Stats seem outdated or incorrect",
    answer:
      "Q-Stats fetches data from publicly available sources. Stats may have a slight delay depending on platform caching. Try refreshing the page to get the latest data. If the issue persists, please report it via GitHub Issues.",
  },
  {
    question: "The extension is slowing down my browser",
    answer:
      "Q-Stats is designed to be lightweight and should not noticeably affect performance. If you experience slowness, try disabling other extensions to isolate the issue. You can also try reinstalling Q-Stats from the Chrome Web Store.",
  },
  {
    question: "Can I use Q-Stats on Brave, Edge, or other Chromium browsers?",
    answer:
      "While Q-Stats is built for Google Chrome, it may work on other Chromium-based browsers like Brave or Microsoft Edge. Install it from the Chrome Web Store and test it. We do not officially support browsers other than Chrome at this time.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-display text-4xl font-bold mb-2">
          <GradientText>Support</GradientText>
        </h1>
        <p className="text-text-secondary mb-12 max-w-xl">
          Everything you need to get started with Q-Stats. If you can&apos;t find what you&apos;re
          looking for, reach out to us directly.
        </p>

        <div className="space-y-12">
          {/* Installation Guide */}
          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">Installation Guide</h2>
            <GlassCard hover={false}>
              <ol className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Open the Chrome Web Store",
                    desc: (
                      <>
                        Visit the{" "}
                        <a
                          href={CHROME_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-red-bright hover:underline"
                        >
                          Q-Stats listing on the Chrome Web Store
                        </a>
                        .
                      </>
                    ),
                  },
                  {
                    step: "2",
                    title: 'Click "Add to Chrome"',
                    desc: 'Click the blue "Add to Chrome" button and confirm the permissions prompt.',
                  },
                  {
                    step: "3",
                    title: "Pin the extension (optional)",
                    desc: "Click the puzzle icon in Chrome's toolbar and pin Q-Stats for quick access.",
                  },
                  {
                    step: "4",
                    title: "Start browsing",
                    desc: "Navigate to any Quora question or Reddit post. Stats will appear automatically as an overlay.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-sm font-bold text-brand-red-bright">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </GlassCard>
          </section>

          {/* Using on Quora */}
          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">Using Q-Stats on Quora</h2>
            <GlassCard hover={false}>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">Question Pages:</strong> Navigate to any
                  Quora question page. Q-Stats will display an overlay panel showing total views,
                  average monthly views, follower count, answer count, and the Opportunity Ranking.
                </p>
                <p>
                  <strong className="text-text-primary">Search Results:</strong> When you search
                  on Quora, Q-Stats adds micro-stat badges to each search result showing key metrics
                  at a glance — no need to open each question individually.
                </p>
                <p>
                  <strong className="text-text-primary">Related Questions:</strong> Use the toggle
                  in the Q-Stats panel to view stats for related questions suggested by Quora.
                </p>
              </div>
            </GlassCard>
          </section>

          {/* Using on Reddit */}
          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">Using Q-Stats on Reddit</h2>
            <GlassCard hover={false}>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">Post Pages:</strong> Navigate to any
                  Reddit post. Q-Stats displays a sidebar panel with the post score, comment count,
                  upvote ratio, post age, subreddit member count, and Opportunity Ranking.
                </p>
                <p>
                  <strong className="text-text-primary">Supported URLs:</strong> Q-Stats works on
                  both <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">www.reddit.com</code>{" "}
                  and <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">old.reddit.com</code>.
                </p>
              </div>
            </GlassCard>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">Troubleshooting</h2>
            <GlassCard hover={false}>
              {TROUBLESHOOTING_FAQ.map((item) => (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </GlassCard>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <GlassCard>
                <div className="text-2xl mb-3">Email</div>
                <p className="text-sm text-text-secondary mb-3">
                  Get in touch directly for support or feedback.
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-sm text-brand-red-bright hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </GlassCard>
              <GlassCard>
                <div className="text-2xl mb-3">GitHub Issues</div>
                <p className="text-sm text-text-secondary mb-3">
                  Report bugs or request features on GitHub.
                </p>
                <a
                  href={GITHUB_ISSUES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-red-bright hover:underline"
                >
                  Open an Issue
                </a>
              </GlassCard>
            </div>
          </section>

          {/* Version */}
          <section className="text-center pt-8 border-t border-white/5">
            <p className="text-sm text-text-secondary">
              Q-Stats Extension v{EXTENSION_VERSION}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
