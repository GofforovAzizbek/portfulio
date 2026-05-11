import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Azizbek_G'afforov",
    template: "Azizbek_G'afforov",
  },
  description:
    "Full-stack developer portfolio focused on modern web apps, secure APIs, and clean UI/UX. Next.js, React, TypeScript, TailwindCSS.",
  keywords: [
    "Full-stack developer",
    "Next.js portfolio",
    "React developer",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "PostgreSQL",
    "API security",
    "Cybersecurity",
    "Web developer",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Azizbek_G'afforov | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer portfolio focused on modern web apps, secure APIs, and clean UI/UX.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azizbek_G'afforov | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer portfolio focused on modern web apps, secure APIs, and clean UI/UX.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
