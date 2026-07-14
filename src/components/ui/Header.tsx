"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Contact Us", href: "/contact-us" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-[height,background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out ${
          scrolled
            ? "border-emerald-900/10 bg-white/95 shadow-[0_4px_24px_rgba(3,55,43,0.08)] backdrop-blur-xl"
            : "border-transparent bg-white shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 transition-[height,padding] duration-300 ease-out sm:px-6 lg:w-[90%] lg:px-8 2xl:w-[85%] ${
            scrolled
              ? "h-14 sm:h-20"
              : "h-16 sm:h-20 lg:h-24 xl:h-30"
          }`}
        >
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            <Image
              src="/asset/img/golf-swipe-logo.png"
              alt="Golf Swipe"
              width={180}
              height={48}
              priority
              className={`w-auto transition-[height,width] duration-300 ease-out ${
                scrolled
                  ? "h-12 sm:h-9 lg:h-15"
                  : "h-14 sm:h-12 lg:h-14 xl:h-22"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden flex-1 items-center justify-end gap-2 xl:flex xl:gap-3"
            aria-label="Main navigation"
          >
            <ul className="flex flex-wrap items-center justify-end gap-x-0.5 gap-y-1">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-md tracking-wide transition-[padding,font-size,background-color,color] duration-300 hover:bg-[#03372b] hover:text-white ${
                        active
                          ? "bg-[#03372b] font-medium text-white"
                          : "text-black"
                      } ${
                        scrolled
                          ? "px-2 py-1 text-sm"
                          : "px-2.5 py-1.5 text-[15px]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/"
              className={`shrink-0 rounded-md bg-[#03372b] font-medium tracking-wide text-white shadow-[0_0_16px_rgba(156,163,175,0.45)] ring-2 ring-[#9ca3af]/40 transition-all duration-300 hover:bg-[#024a3a] hover:shadow-[0_0_24px_rgba(156,163,175,0.65)] hover:ring-[#9ca3af]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ca3af] focus-visible:ring-offset-2 ${
                scrolled ? "px-3.5 py-1.5 text-sm" : "px-4 py-2 text-[15px]"
              }`}
            >
              Download Now
            </Link>
          </nav>

          {/* Hamburger — mobile & tablet */}
          <button
            type="button"
            className={`flex shrink-0 items-center justify-center rounded-lg border border-[#03372b] bg-[#03372b] text-white transition-all duration-300 hover:bg-[#024a3a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03372b] focus-visible:ring-offset-2 xl:hidden ${
              scrolled ? "h-9 w-9" : "h-10 w-10"
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
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

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      {/* Mobile menu panel */}
      <nav
        id="mobile-nav"
        className={`fixed right-0 top-0 z-70 flex h-dvh w-[min(100vw,20rem)] flex-col bg-[#03372b] text-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/15 px-4 sm:h-16 sm:px-6">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/asset/img/golf-swipe-logo.png"
              alt="Golf Swipe"
              width={120}
              height={28}
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
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
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <li
                key={link.href}
                className="border-b border-white/10 last:border-b-0"
              >
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center rounded-lg px-3 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 ${
                    active ? "bg-white/15" : ""
                  }`}
                  onClick={closeMenu}
                >
                  <span
                    className={`mr-3 h-1.5 w-1.5 shrink-0 rounded-full ${
                      active ? "bg-[#8cc129]" : "bg-white"
                    }`}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="shrink-0 border-t border-white/15 px-4 py-4 sm:px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="mb-3 flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-semibold tracking-wide text-[#03372b] shadow-[0_0_18px_rgba(156,163,175,0.45)] ring-2 ring-[#9ca3af]/60 transition-all duration-300 hover:shadow-[0_0_28px_rgba(156,163,175,0.55)]"
          >
            Download Now
          </Link>
          <p className="text-center text-xs text-white/70">
            Your all-in-one golf community
          </p>
        </div>
      </nav>
    </>
  );
}
