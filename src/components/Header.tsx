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
  { label: "Score & Performance Tracker", href: "/score-performance-tracker" },
  { label: "Bi-Weekly Rules Quiz", href: "/bi-weekly-rules-quiz" },
  { label: "The Clubhouse Forum", href: "/clubhouse-forum" },
  { label: "Golf Jobs Board", href: "/golf-jobs-board" },
  { label: "Pricing & Bundles", href: "/pricing-bundles" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-white/90 shadow-sm backdrop-blur-md dark:border-emerald-500/10 dark:bg-zinc-950/90">
      <div className="mx-auto flex w-full h-16 max-w-7xl md:max-w-7xl xl:max-w-9xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-50 shrink-0 transition-opacity hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/asset/img/golf-swipe-logo.png"
            alt="Golf Swipe"
            width={140}
            height={32}
            priority
            className="h-7 w-auto sm:h-8"
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
                  className="rounded-md px-2.5 py-1.5 text-[13px] tracking-wide text-zinc-00 transition-colors hover:bg-emerald-50 hover:text-emerald-800 dark:text-zinc-300 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/10 bg-emerald-50/50 text-emerald-900 transition-colors hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 xl:hidden dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-400 dark:hover:bg-emerald-950/60 dark:focus-visible:ring-emerald-500"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                menuOpen ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                menuOpen ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <nav
        id="mobile-nav"
        className={`fixed right-0 top-0 z-40 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-zinc-950 xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="flex h-16 shrink-0 items-center border-b border-emerald-900/10 px-6 dark:border-emerald-500/10 sm:h-[4.5rem]">
          <Image
            src="/asset/img/golf-swipe-logo.png"
            alt="Golf Swipe"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
        </div>

        <ul className="flex-1 overflow-y-auto px-4 py-6">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className="border-b border-zinc-100 last:border-b-0 dark:border-zinc-800"
              style={{ animationDelay: menuOpen ? `${index * 40}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className="flex items-center rounded-lg px-3 py-3.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800 active:bg-emerald-100 dark:text-zinc-200 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400"
                onClick={() => setMenuOpen(false)}
              >
                <span className="mr-3 flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="shrink-0 border-t border-emerald-900/10 bg-emerald-50/50 px-6 py-4 dark:border-emerald-500/10 dark:bg-emerald-950/20">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
            Your all-in-one golf community
          </p>
        </div>
      </nav>
    </header>
  );
}
