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
  title: "GolfSwipe",
  description: "The worlds fastest growing borderless golf marketplace",
  icons: {
    icon: [
      { url: "/asset/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/asset/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/asset/img/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/asset/img/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
