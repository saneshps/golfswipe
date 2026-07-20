const benefits = [
  {
    id: "budget",
    title: (
      <>
        Perfect for your startup{" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
          budget
        </span>
      </>
    ),
    description:
      "100% free, no API key required, no usage caps for typical launch volumes (~10k calls/day)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10" />
        <path d="M9.5 9.5c0-1.1 1.12-2 2.5-2s2.5.9 2.5 2-1.12 2-2.5 2-2.5.9-2.5 2 1.12 2 2.5 2 2.5-.9 2.5-2" />
      </svg>
    ),
  },
  {
    id: "golf-data",
    title: (
      <>
        Golf-ready data out of the{" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
          box
        </span>
      </>
    ),
    description:
      "Temperature, wind speed/direction/gusts, rain probability, precipitation amount, humidity, UV index",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden="true"
      >
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M5.6 5.6l1.4 1.4" />
        <path d="M17 17l1.4 1.4" />
        <path d="M3 12h2" />
        <path d="M19 12h2" />
        <path d="M5.6 18.4l1.4-1.4" />
        <path d="M17 7l1.4-1.4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: "global",
    title: (
      <>
        Global coverage with high{" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
          accuracy
        </span>
      </>
    ),
    description:
      "1km resolution across UK/Europe, works worldwide for your planned international launches",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    id: "no-lock-in",
    title: (
      <>
        No{" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
          lock-in
        </span>
      </>
    ),
    description:
      "Easy to swap or add a second provider later as you scale",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden="true"
      >
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 7.5-1.9" />
        <circle cx="12" cy="16" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function WeatherUpdates() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,193,41,0.12),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#03372b]/5 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#8cc129]/15 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:gap-x-14 xl:gap-x-20 xl:gap-y-16">
            {benefits.map((item) => (
              <article key={item.id} className="relative z-10 bg-[#8cc129]/10 rounded-[20px] p-[20px]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#03372b]/10 bg-[#8cc129]/10 text-[#03372b] sm:mb-5 sm:h-14 sm:w-14">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-3xl xl:leading-[1.15]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#03372b]/70 sm:mt-5 sm:text-lg">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
