import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jackson Eng | Product & AI Leader",
  description:
    "Portfolio of Jackson Eng – product & AI leader building data-informed, human-centered products across wellness, fintech, AI, and SaaS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WE17JZFSQL"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WE17JZFSQL');
        `}
      </Script>
        {children}
      </body>
    </html>
  );
}