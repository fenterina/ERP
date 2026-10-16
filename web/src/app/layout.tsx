import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ERP workspace",
  description: "A modern ERP workspace for managing your business.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { const theme = localStorage.getItem("theme"); if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) document.documentElement.classList.add("dark"); } catch (_) {}`,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
