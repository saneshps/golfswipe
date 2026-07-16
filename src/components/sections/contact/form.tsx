"use client";

import Link from "next/link";

const inputClass =
  "w-full rounded-xl border border-[#03372b]/12 bg-white px-4 py-3 text-base text-[#03372b] shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-[#8cc129] focus:ring-2 focus:ring-[#8cc129]/25";

const labelClass =
  "mb-1.5 block text-sm font-medium tracking-wide text-[#03372b]";

export default function Form() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-1/4 h-72 w-72 rounded-full bg-[#8cc129]/15 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#03372b]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,32rem)] -translate-x-1/2 rounded-full bg-[#8cc129]/10 blur-[80px]"
      />

      <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-5 sm:text-sm">
            Get in touch
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem]">
          Get in Touch {" "}
            <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
            With Us
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Send us a message and our team will get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5 lg:gap-10 xl:gap-14">
          {/* Left — form */}
          <div className="relative z-10 lg:col-span-3">
            <form
              action="#"
              method="post"
              className="rounded-3xl border border-[#03372b]/10 bg-white/80 p-6 shadow-[0_20px_50px_-20px_rgba(3,55,43,0.18)] backdrop-blur-sm sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className={labelClass}>
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="John Smith"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[0-9]/g,
                        "",
                      );
                    }}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="07700900000"
                    required
                    pattern="[0-9]{10,15}"
                    inputMode="numeric"
                    maxLength={15}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /\D/g,
                        "",
                      );
                    }}
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a little more about your enquiry..."
                    className={`${inputClass} min-h-[8.5rem] resize-y`}
                  />
                </div>
              </div>

              <div className="mt-7 sm:mt-8">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#03372b] px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#054e3d] hover:shadow-lg hover:shadow-[#03372b]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cc129] focus-visible:ring-offset-2 sm:w-auto sm:min-w-[12rem]"
                >
                  Send message
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
                </button>
              </div>
            </form>
          </div>

          {/* Right — address / contact info */}
          <div className="relative z-10 lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#03372b] p-6 text-white shadow-[0_24px_60px_-20px_rgba(3,55,43,0.45)] sm:p-8 lg:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#8cc129]/25 blur-[80px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[#8cc129]/15 blur-[90px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/50 to-transparent"
              />

              <div className="relative flex flex-1 flex-col">
                <p className="text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:text-sm">
                  Contact details
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Reach us directly
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                  Prefer email? Drop us a line anytime — we typically reply
                  within one business day.
                </p>

                <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8cc129]/15 text-[#8cc129]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                          Email
                        </p>
                        <Link
                          href="mailto:hello@golfswipe.com"
                          className="mt-1 block break-all text-base font-semibold text-white transition-colors hover:text-[#8cc129] sm:text-lg"
                        >
                          hello@golfswipe.com
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8cc129]/15 text-[#8cc129]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                          Working hours
                        </p>
                        <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                          Monday – Friday
                        </p>
                        <p className="mt-0.5 text-sm text-white/65 sm:text-base">
                          9:00 AM – 6:00 PM (GMT)
                        </p>
                        <p className="mt-2 text-sm text-white/50">
                          Closed weekends &amp; public holidays
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-auto pt-8">
                  <div className="rounded-2xl border border-[#8cc129]/25 bg-[#8cc129]/10 px-4 py-3.5 sm:px-5">
                    <p className="text-sm leading-relaxed text-[#c4e86a] sm:text-base">
                      Looking for marketplace support? Include your listing ID
                      in the subject line for a faster reply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
