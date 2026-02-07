import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Q-Stats — Free Quora & Reddit Marketing Insights",
  description:
    "Unlock hidden stats on every Quora question and Reddit post. See views, engagement, and opportunity rankings — free Chrome extension.",
  metadataBase: new URL("https://netanelbaruch.github.io"),
  openGraph: {
    title: "Q-Stats — Free Quora & Reddit Marketing Insights",
    description:
      "See views, engagement, and opportunity rankings on every Quora question and Reddit post. Free Chrome extension.",
    images: [`${basePath}/images/og-image.svg`],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q-Stats — Free Quora & Reddit Marketing Insights",
    description:
      "Unlock hidden stats on every Quora question and Reddit post. Free Chrome extension.",
    images: [`${basePath}/images/og-image.svg`],
  },
  icons: {
    icon: `${basePath}/images/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
