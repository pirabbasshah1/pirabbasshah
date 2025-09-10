import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./ThemeToggle";
import HireMeForm from "@/components/HireMeForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pir Abbas Shah — Data Scientist | AI Engineer",
  description:
    "Data Scientist & AI Engineer specializing in analytics, ML, and AI applications that turn complex data into actionable insights.",
  openGraph: {
    title: "Pir Abbas Shah — Data Scientist | AI Engineer",
    description:
      "Data Scientist & AI Engineer specializing in analytics, ML, and AI applications that turn complex data into actionable insights.",
    type: "website",
    url: "/",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <a href="#hero" className="font-semibold tracking-tight">Pir Abbas Shah</a>
            <nav className="hidden sm:flex gap-5 text-sm items-center">
              <a href="#about" className="hover:underline underline-offset-4">About</a>
              <a href="#skills" className="hover:underline underline-offset-4">Skills</a>
              <a href="#experience" className="hover:underline underline-offset-4">Experience</a>
              <a href="#certifications" className="hover:underline underline-offset-4">Certifications</a>
              <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
              <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
              <a href="https://www.linkedin.com/in/pir-abbas-shah-138b36275/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">LinkedIn</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">
          {children}
        </main>
        <footer className="mx-auto max-w-5xl px-6 py-10">
          <HireMeForm />
          <p className="mt-8 text-sm opacity-80">© {new Date().getFullYear()} Pir Abbas Shah. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
