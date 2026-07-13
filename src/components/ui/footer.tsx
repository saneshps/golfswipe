"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Meet-Up Map & Calendar", href: "/meet-up-map-calendar" },
  { label: "Golf Travel Hub", href: "/golf-travel-hub" },
  { label: "GPS Course Maps & Shot Planner", href: "/gps-course-maps-shot-planner" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const socialButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-950/40 text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-6 left-4 z-40 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-600 via-emerald-700 to-[#03372b] text-white shadow-[0_8px_30px_rgba(5,46,22,0.45)] transition-all duration-500 ease-out sm:bottom-8 sm:left-6 sm:h-14 sm:w-14 ${
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      } hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-[0_12px_36px_rgba(16,185,129,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`}
    >
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(140,193,41,0.35), transparent 50%, rgba(16,185,129,0.25))",
        }}
        aria-hidden="true"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative h-5 w-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative mt-auto w-full overflow-hidden border-t border-emerald-500/10 bg-zinc-950 text-zinc-300">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-zinc-950 to-zinc-950"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {/* Column 1 — Social media */}
            <div className="flex flex-col items-center gap-5 md:items-start">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
                Follow Us
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={socialButtonClass}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
              <p className="max-w-xs text-center text-sm leading-relaxed text-zinc-400 md:text-left">
                Join the global golf community. Stay connected for tips, events, and gear drops.
              </p>
            </div>

            {/* Column 2 — Logo */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Link
                href="/"
                className="group inline-flex transition-transform duration-300 hover:scale-[1.02]"
              >
                <Image
                  src="/asset/img/golf-swipe-logo.png"
                  alt="Golf Swipe"
                  width={180}
                  height={42}
                  className="h-14 w-auto brightness-0 invert transition-opacity duration-300 group-hover:opacity-90 sm:h-16 lg:h-[4.5rem]"
                />
              </Link>
              <p className="max-w-[16rem] text-sm leading-relaxed text-zinc-400">
                Your all-in-one golf community in your pocket.
              </p>
            </div>

            {/* Column 3 — Quick links */}
            <div className="flex flex-col items-center gap-5 md:items-end">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
                Quick Links
              </p>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col items-center gap-2.5 md:items-end">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors duration-200 hover:text-emerald-400"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-emerald-500/60 transition-all duration-200 group-hover:w-2 group-hover:bg-emerald-400"
                          aria-hidden="true"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="relative border-t border-emerald-500/10 bg-black/20">
          <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
            <p className="text-xs text-zinc-500 sm:text-sm">
              &copy; {currentYear} Golf Swipe. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500 sm:text-sm">
              <Link href="#" className="transition-colors hover:text-emerald-400">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-emerald-400">
                Terms of Service
              </Link>
              <Link href="#" className="transition-colors hover:text-emerald-400">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <BackToTopButton />
    </>
  );
}
