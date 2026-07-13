"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Meet-Up Map & Calendar", href: "/meet-up-map-calendar" },
  { label: "Golf Travel Hub", href: "/golf-travel-hub" },
  { label: "GPS Course Maps & Shot Planner", href: "/gps-course-maps-shot-planner" },
  // { label: "Score & Performance Tracker", href: "/score-performance-tracker" },
  // { label: "Bi-Weekly Rules Quiz", href: "/bi-weekly-rules-quiz" },
  // { label: "The Clubhouse Forum", href: "/clubhouse-forum" },
  // { label: "Golf Jobs Board", href: "/golf-jobs-board" },
  // { label: "Pricing & Bundles", href: "/pricing-bundles" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-white shadow-sm backdrop-blur-md dark:border-emerald-500/10 dark:bg-zinc-950/95">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[6rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            <Image
              src="/asset/img/golf-swipe-logo.png"
              alt="Golf Swipe"
              width={140}
              height={32}
              priority
              className="h-12 w-auto sm:h-12 lg:h-16 xl:h-20"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden flex-1 items-center justify-end xl:flex"
            aria-label="Main navigation"
          >
            <ul className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-2.5 py-1.5 text-[15px] tracking-wide text-zinc-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800 dark:text-zinc-300 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger button — mobile & tablet only */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-900/10 bg-emerald-50/50 text-emerald-900 transition-colors hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 xl:hidden dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-400 dark:hover:bg-emerald-950/60 dark:focus-visible:ring-emerald-500"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                  menuOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                  menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay — above header when open */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      {/* Mobile menu panel */}
      <nav
        id="mobile-nav"
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(100vw,20rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden dark:bg-zinc-950 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-emerald-900/10 px-4 dark:border-emerald-500/10 sm:h-[4.5rem] sm:px-6">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/asset/img/golf-swipe-logo.png"
              alt="Golf Swipe"
              width={120}
              height={28}
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/10 bg-emerald-50/50 text-emerald-900 transition-colors hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-400 dark:hover:bg-emerald-950/60"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 sm:px-4">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-zinc-100 last:border-b-0 dark:border-zinc-800"
            >
              <Link
                href={link.href}
                className="flex items-center rounded-lg px-3 py-3.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800 active:bg-emerald-100 dark:text-zinc-200 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400"
                onClick={closeMenu}
              >
                <span className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="shrink-0 border-t border-emerald-900/10 bg-emerald-50/50 px-4 py-4 dark:border-emerald-500/10 dark:bg-emerald-950/20 sm:px-6">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
            Your all-in-one golf community
          </p>
        </div>
      </nav>
    </>
  );
}
