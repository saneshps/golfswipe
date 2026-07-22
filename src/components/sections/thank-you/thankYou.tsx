"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] w-full flex-1 items-center overflow-hidden bg-white py-16 sm:min-h-[calc(100svh-5rem)] sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(140,193,41,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(3,55,43,0.08),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-28 top-1/4 h-72 w-72 rounded-full bg-[#8cc129]/20 blur-[100px] transition-opacity duration-1000 sm:h-96 sm:w-96 ${ready ? "opacity-100" : "opacity-0"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#03372b]/12 blur-[110px] transition-opacity duration-1000 delay-150 ${ready ? "opacity-100" : "opacity-0"}`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-[min(100%,28rem)] -translate-x-1/2 rounded-full bg-[#8cc129]/10 blur-[80px]"
      />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:w-[90%] lg:w-[90%] lg:px-8 xl:w-[90%] 2xl:w-[85%]">
        <div
          className={`mx-auto flex max-w-xl flex-col items-center text-center transition-all duration-700 ease-out ${ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >

          <div
            className={`relative mb-7 flex h-20 w-20 items-center justify-center sm:mb-8 sm:h-24 sm:w-24 ${ready ? "scale-100 opacity-100" : "scale-75 opacity-0"} transition-all delay-150 duration-700 ease-out`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-pulse rounded-full bg-[#8cc129]/20"
            />
            <span
              aria-hidden="true"
              className="absolute inset-2 rounded-full bg-[#03372b]/5"
            />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#03372b] shadow-lg shadow-[#03372b]/25 sm:h-20 sm:w-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-8 w-8 text-[#8cc129] transition-all delay-300 duration-500 sm:h-9 sm:w-9 ${ready ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
          </div>

          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-4 sm:text-sm">
            Message received
          </p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-5xl">
            Thank you for{" "}
            <span className="bg-linear-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
              reaching out
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 sm:mt-5 sm:text-lg">
            We&apos;ve got your message and will get back to you within one
            business day. In the meantime, explore what GolfSwipe has to offer.
          </p>

          <div
            className={`mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4 transition-all delay-200 duration-700 ${ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#03372b] px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#054e3d] hover:shadow-lg hover:shadow-[#03372b]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cc129] focus-visible:ring-offset-2"
            >
              Back to home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#03372b]/15 bg-white px-6 py-3.5 text-base font-semibold text-[#03372b] transition-all duration-300 hover:border-[#8cc129] hover:bg-[#8cc129]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cc129] focus-visible:ring-offset-2"
            >
              Browse marketplace
            </Link>
          </div>

          <p className="mt-8 text-sm text-zinc-500 sm:mt-10">
            Need to add something?{" "}
            <Link
              href="/contact-us"
              className="font-medium text-[#03372b] underline decoration-[#8cc129]/50 underline-offset-4 transition-colors hover:text-[#054e3d] hover:decoration-[#8cc129]"
            >
              Send another message
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
