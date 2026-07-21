const benefits = [
  {
    id: "budget",
    title: (
      <>
        GolfSwipe Weather –{" "}
        <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
        Know Before You Go
        </span>
      </>
    ),
    content: [
      "Perfect conditions for every round, every time",
      "Whether you’re buying new clubs, planning a weekend trip, or just heading out for 18 – know exactly what to expect before you leave the house.",
      "Only GolfSwipe puts accurate, golf-focused weather right where you need it.",
    ],
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
        <path d="M17.5 14a4.5 4.5 0 1 0-1.1-8.85A6 6 0 0 0 6.1 9.1 4 4 0 0 0 6 17h11.5" />
        <path d="M12 17v3" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
  {
    id: "golf-data",
    title: (
      <>
        What You{" "}
        <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
        Get
        </span>
      </>
    ),
    content: [
      "Live local conditions: Temperature, wind speed/direction, gusts, humidity & UV index",
      "Precision forecasts: Hourly breakdowns + 3-day outlook for any course worldwide",
      "Rain timing: See exactly when showers start and stop – no more getting caught short",
      "Course-linked data: Automatically matches forecasts to any club or listing location",
      "Playability guide: Clear simple rating – Excellent / Good / Fair / Poor",
    ],
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
        <path d="M9 6h11" />
        <path d="M9 12h11" />
        <path d="M9 18h11" />
        <path d="M4 6.5l1 1 2-2.5" />
        <path d="M4 12.5l1 1 2-2.5" />
        <path d="M4 18.5l1 1 2-2.5" />
      </svg>
    ),
  },
  {
    id: "global",
    title: (
      <>
        Why It Matters{" "}
        <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
        For You
        </span>
      </>
    ),
    content: [
      "Buying gear? Check conditions before you commit – see if those new irons will get used this weekend.", 
      "Selling gear? Better weather = more buyers browsing and ready to act.", 
      "Planning a round? Tee time confirmed? Know exactly how to dress and which clubs to bring.", 
    ],
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
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 19.5c1.4-3.2 3.7-4.75 6.5-4.75s5.1 1.55 6.5 4.75" />
      </svg>
    ),
  },
  {
    id: "no-lock-in",
    title: (
      <>
        Only On{" "}
        <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
        GolfSwipe
        </span>
      </>
    ),
    content: [
      "No other golf marketplace integrates accurate, location-specific weather natively. Everything you need – trading, safety, course info, and conditions – all in one place.",
      "Available to all users – upgrade to All Access for minute-by-minute updates and 14-day forecasts.",
    ],
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
        <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4L7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" />
      </svg>
    ),
  },
];

export default function WeatherUpdates() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-light-gray">
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:gap-x-14 xl:gap-x-20 xl:gap-y-16">
            {benefits.map((item) => (
              <article key={item.id} className="relative z-10 bg-white rounded-[20px] p-5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#03372b]/10 bg-[#8cc129]/10 text-[#03372b] sm:mb-5 sm:h-14 sm:w-14">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-3xl xl:leading-[1.15]">
                  {item.title}
                </h3>

                <ul className="mt-4 space-y-1.5 text-base leading-relaxed text-[#03372b]/70 sm:mt-5 sm:text-lg">
                  {item.content.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-0 shrink-0 text-[#8cc129]">
                        →
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
