import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacksonx Eng | Product & AI Leader",
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
        {children}
      </body>
    </html>
  );
}