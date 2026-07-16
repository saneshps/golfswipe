"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavChild = { label: string; href: string };
type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "Meet-Up Map & Calendar", href: "/meet-up-map-calendar" },
      { label: "Golf Travel Hub", href: "/golf-travel-hub" },
      {
        label: "GPS Course Maps & Shot Planner",
        href: "/gps-course-maps-shot-planner",
      },
      {
        label: "Score & Performance Tracker",
        href: "/score-performance-tracker",
      },
      { label: "Bi-Weekly Rules Quiz", href: "/bi-weekly-rules-quiz" },
      { label: "The Clubhouse Forum", href: "/clubhouse-forum" },
      { label: "Golf Jobs Board", href: "/golf-jobs-board" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasActiveChild(pathname: string, children?: NavChild[]) {
  return children?.some((child) => isActivePath(pathname, child.href)) ?? false;
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopFeaturesOpen, setDesktopFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const featuresRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    // Hysteresis so the compact/expanded toggle doesn't flicker near the threshold.
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (prev) return y > 16;
        return y > 40;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDesktopFeaturesOpen(false);
    setMobileFeaturesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 767) {
        setMenuOpen(false);
        setMobileFeaturesOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!desktopFeaturesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        setDesktopFeaturesOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopFeaturesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopFeaturesOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileFeaturesOpen(false);
  };

  return (
    <>
      {/*
        Spacer always reserves the expanded header height. The real header is fixed
        so shrinking it on scroll does not change document height / scrollY (no shake).
      */}
      <div
        className="h-16 w-full shrink-0 sm:h-20 lg:h-24 xl:h-30"
        aria-hidden="true"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b [overflow-anchor:none] transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out ${
          scrolled
            ? "border-emerald-900/10 bg-white/95 shadow-[0_4px_24px_rgba(3,55,43,0.08)] backdrop-blur-xl"
            : "border-transparent bg-white shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 transition-[height,padding] duration-300 ease-out sm:px-6 lg:w-[90%] lg:px-8 2xl:w-[85%] ${
            scrolled ? "h-14 sm:h-20" : "h-16 sm:h-20 lg:h-24 xl:h-30"
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

          {/* Desktop / tablet navigation — full menu from 767px up */}
          <nav
            className="hidden min-[767px]:flex flex-1 items-center justify-end gap-2 min-[767px]:gap-3"
            aria-label="Main navigation"
          >
            <ul className="flex flex-wrap items-center justify-end gap-x-0.5 gap-y-1">
              {navLinks.map((link) => {
                const active =
                  isActivePath(pathname, link.href) ||
                  hasActiveChild(pathname, link.children);
                const isFeatures = Boolean(link.children);

                if (isFeatures) {
                  return (
                    <li
                      key={link.href}
                      ref={featuresRef}
                      className="relative"
                      onMouseEnter={() => setDesktopFeaturesOpen(true)}
                      onMouseLeave={() => setDesktopFeaturesOpen(false)}
                    >
                      <button
                        type="button"
                        aria-expanded={desktopFeaturesOpen}
                        aria-haspopup="menu"
                        aria-controls="features-menu"
                        onClick={() =>
                          setDesktopFeaturesOpen((open) => !open)
                        }
                        className={`inline-flex items-center gap-1 tracking-wide transition-[padding,font-size,border-color,color] duration-300 hover:text-[#03372b] ${
                          active
                            ? "border-b-2 border-[#03372b] font-medium text-[#03372b]"
                            : "border-b-2 border-transparent text-black"
                        } ${
                          scrolled
                            ? "px-2 py-1 text-sm"
                            : "px-2.5 py-1.5 text-[15px]"
                        }`}
                      >
                        {link.label}
                        <ChevronIcon
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            desktopFeaturesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        id="features-menu"
                        role="menu"
                        aria-label="Features"
                        className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 transition-all duration-200 ${
                          desktopFeaturesOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        }`}
                      >
                        <ul className="overflow-hidden rounded-xl border border-emerald-900/10 bg-white py-2 shadow-[0_12px_40px_rgba(3,55,43,0.12)]">
                          {link.children!.map((child) => {
                            const childActive = isActivePath(
                              pathname,
                              child.href,
                            );
                            return (
                              <li key={child.href} role="none">
                                <Link
                                  href={child.href}
                                  role="menuitem"
                                  aria-current={
                                    childActive ? "page" : undefined
                                  }
                                  onClick={() => setDesktopFeaturesOpen(false)}
                                  className={`block px-4 py-2.5 text-sm tracking-wide transition-colors ${
                                    childActive
                                      ? "bg-[#03372b]/8 font-medium text-[#03372b]"
                                      : "text-black hover:bg-[#03372b]/5 hover:text-[#03372b]"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`tracking-wide transition-[padding,font-size,border-color,color] duration-300 hover:text-[#03372b] ${
                        active
                          ? "border-b-2 border-[#03372b] font-medium text-[#03372b]"
                          : "border-b-2 border-transparent text-black"
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

          {/* Hamburger — below 767px only */}
          <button
            type="button"
            className={`flex shrink-0 items-center justify-center rounded-lg border border-[#03372b] bg-[#03372b] text-white transition-all duration-300 hover:bg-[#024a3a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03372b] focus-visible:ring-offset-2 min-[767px]:hidden ${
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

      {/* Mobile overlay — below 767px only */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 min-[767px]:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      {/* Mobile menu panel — below 767px only */}
      <nav
        id="mobile-nav"
        className={`fixed right-0 top-0 z-70 flex h-dvh w-[min(100vw,20rem)] flex-col bg-[#03372b] text-white shadow-2xl transition-transform duration-300 ease-in-out min-[767px]:hidden ${
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
            const active =
              isActivePath(pathname, link.href) ||
              hasActiveChild(pathname, link.children);
            const isFeatures = Boolean(link.children);

            if (isFeatures) {
              return (
                <li
                  key={link.href}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={mobileFeaturesOpen}
                    aria-controls="mobile-features-menu"
                    onClick={() => setMobileFeaturesOpen((open) => !open)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-left text-sm font-medium text-white transition-colors hover:bg-white/10 ${
                      active ? "bg-white/15" : ""
                    }`}
                  >
                    <span className="flex items-center">
                      <span
                        className={`mr-3 h-1.5 w-1.5 shrink-0 rounded-full ${
                          active ? "bg-[#8cc129]" : "bg-white"
                        }`}
                      />
                      {link.label}
                    </span>
                    <ChevronIcon
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        mobileFeaturesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <ul
                    id="mobile-features-menu"
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      mobileFeaturesOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.children!.map((child) => {
                      const childActive = isActivePath(pathname, child.href);
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            className={`ml-4 flex items-center rounded-lg px-3 py-2.5 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white ${
                              childActive ? "bg-white/15 text-white" : ""
                            }`}
                            onClick={closeMenu}
                          >
                            <span
                              className={`mr-3 h-1 w-1 shrink-0 rounded-full ${
                                childActive ? "bg-[#8cc129]" : "bg-white/50"
                              }`}
                            />
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

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
