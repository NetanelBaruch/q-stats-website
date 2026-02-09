import type { Metadata } from "next";
import GlassCard from "@/components/shared/GlassCard";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — Q-Stats",
  description: "Q-Stats privacy policy. Learn about what data Q-Stats does and does not collect.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-text-secondary mb-10">Last updated: February 2026</p>

        <GlassCard hover={false} className="prose-invert">
          <div className="space-y-8 text-text-secondary leading-relaxed text-sm">
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Overview
              </h2>
              <p>
                Q-Stats (&ldquo;the Extension&rdquo;) is a Chrome browser extension that displays
                publicly available statistics for Quora questions and Reddit posts. We are committed
                to protecting your privacy. This policy explains exactly what data the Extension
                accesses and how it is used.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Data We Access
              </h2>
              <p>
                The Extension reads the URL of the current page you are viewing in order to
                determine whether it is a supported Quora or Reddit page and to fetch the relevant
                public statistics. This is the <strong className="text-text-primary">only</strong>{" "}
                data the Extension reads from your browser.
              </p>
              <p className="mt-3">
                All statistics displayed by Q-Stats are sourced from publicly available Quora and
                Reddit data. No private or authenticated information is accessed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Data We Do NOT Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>No personal information (name, email, address, etc.)</li>
                <li>No browsing history or tracking of any kind</li>
                <li>No analytics, telemetry, or usage statistics</li>
                <li>No cookies or local storage for tracking purposes</li>
                <li>No account creation or login required</li>
                <li>No data is sent to any third-party server</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Server-Side Storage
              </h2>
              <p>
                Q-Stats does not operate any server-side infrastructure. There is no database,
                no server, and no backend storage of any kind. All processing happens locally
                in your browser.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Browser Permissions Explained
              </h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-text-primary">tabs</strong> — Used to detect when you
                  navigate to a supported Quora or Reddit page so the Extension can activate.
                </li>
                <li>
                  <strong className="text-text-primary">
                    Host permissions (quora.com, reddit.com)
                  </strong>{" "}
                  — Required to inject the stats overlay and fetch public data on Quora and
                  Reddit pages.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Third-Party Services
              </h2>
              <p>
                The Extension does not integrate with any third-party analytics, advertising,
                or tracking services. It does not share any data with any third party.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Changes to This Policy
              </h2>
              <p>
                If we make material changes to this privacy policy, we will update this page
                and the &ldquo;Last updated&rdquo; date above. We encourage you to review this
                page periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this privacy policy, please contact us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-brand-red-bright hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
