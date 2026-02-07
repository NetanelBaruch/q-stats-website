import Image from "next/image";
import Link from "next/link";
import { CHROME_STORE_URL, SUPPORT_EMAIL, GITHUB_ISSUES_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-base">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/icon-128.png`}
                alt="Q-Stats"
                width={28}
                height={28}
              />
              <span className="font-display text-lg font-bold">Q-Stats</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Free marketing insights for Quora and Reddit. Unlock hidden stats to find the
              best content opportunities.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 font-display text-sm font-semibold text-text-primary">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Chrome Web Store
                  </a>
                </li>
                <li>
                  <Link
                    href="/#features"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-sm font-semibold text-text-primary">
                Legal & Help
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <a
                    href={GITHUB_ISSUES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Report a Bug
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold text-text-primary">
              Contact
            </h3>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Q-Stats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
