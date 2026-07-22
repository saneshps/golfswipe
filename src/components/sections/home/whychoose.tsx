const features = [
  {
    title: "Trade with Confidence",
    description:
      "Protect every transaction with secure, integrated escrow.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 3 4.5 6.5v5.2c0 4.4 3.1 8.5 7.5 9.8 4.4-1.3 7.5-5.4 7.5-9.8V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Never Play Alone",
    description:
      "Drop a pin and find local players, wherever you are in the world.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10Z" />
        <circle cx="12" cy="11" r="2.25" />
      </svg>
    ),
  },
  {
    title: "Tour-Level Utility",
    description:
      "High-resolution GPS maps and tactical shot planning for courses globally.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="m14.5 9.5 3-1.5" />
      </svg>
    ),
  },
  {
    title: "Fuel Your Passion",
    description:
      "Discuss gear, trends, and swing tips in our thriving global forum.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M7 17.5 4.5 20v-5.2A7.5 7.5 0 1 1 12 19.5H8.2" />
        <path d="M8.5 11h7M8.5 14h4.5" />
      </svg>
    ),
  },
];

export default function Whychoose() {
  return (
    <section className="relative w-full overflow-hidden bg-light-gray">
      {/* Soft green atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-300/10 blur-[110px]"
      />

      <div className="md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[85%] relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-700 sm:mb-5 sm:text-sm">
            Quick-Grid Features
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.75rem]">
            Why{" "}
            <span className="bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              GolfSwipe?
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:mt-5 sm:text-lg">
            Everything a modern golfer needs — trade, meet, map, and talk — in one
            borderless app.
          </p>
        </div>

        {/* Feature grid */}
        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-100 sm:mt-16 sm:grid-cols-2 lg:mt-20">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="group relative bg-white px-6 py-8 transition-colors duration-300 hover:bg-emerald-50/60 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-emerald-500 to-teal-400 transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600 sm:mb-6 sm:h-14 sm:w-14">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:mt-3 sm:text-base">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
