import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hugo Chaves Vásquez - Full-Stack Developer",
  description: "Full-Stack Developer Portfolio. React, Node.js, Next.js, NestJS, GraphQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
          <Navbar />
          <main>{children}</main>
          {/* Contact & Footer */}
          <section id="contact" className="border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
              <footer className="mt-10 pt-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
                © {new Date().getFullYear()} Hugo Chaves Vásquez
              </footer>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}