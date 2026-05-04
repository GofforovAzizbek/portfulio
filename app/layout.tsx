import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./ui/Cursor";

export const metadata: Metadata = {
  title: {
    default: "Developer Portfolio",
    template: "%s • Portfolio",
  },
  description:
    "Full Stack Developer. Building exceptional digital experiences with modern web technologies. Next.js, React, TypeScript, and more.",
  keywords: [
    "Developer",
    "Portfolio",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Developer Portfolio",
    description:
      "Full Stack Developer. Building exceptional digital experiences with modern web technologies.",
    type: "website",
    url: "https://yourportfolio.com",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio",
    description: "Full Stack Developer building modern web applications",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = theme === 'dark' || (theme === null && prefersDark);
                  document.documentElement.classList.toggle('dark', isDark);
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
