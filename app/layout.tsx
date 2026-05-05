import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Luxe Laptop Store",
  description: "Tech Luxe Laptop Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Premium Demo Disclaimer */}
        <div className="fixed bottom-8 right-8 z-[100] group pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-silver-500 to-silver-900 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
          <div className="relative bg-[#0a0a0a]/40 backdrop-blur-xl border border-silver-700/30 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-silver-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-silver-100"></span>
            </div>
            <p className="text-[11px] tracking-[0.3em] text-silver-100 uppercase font-bold mix-blend-screen drop-shadow-md">
              Demo Experience
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
