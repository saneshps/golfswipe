import Image from "next/image";

const weatherImages = [
  {
    src: "/asset/img/weather-1.webp",
    alt: "GolfSwipe app — live golf weather conditions and playability rating",
  },
];

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

function BenefitCard({
  item,
}: {
  item: (typeof benefits)[number];
}) {
  return (
    <article className="relative z-10 rounded-[20px] bg-[#03372b] p-5 shadow-[0_8px_30px_-12px_rgba(3,55,43,0.35)]">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#8cc129]/15 text-[#8cc129] sm:mb-5 sm:h-14 sm:w-14">
        {item.icon}
      </div>

      <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl xl:leading-[1.15]">
        {item.title}
      </h3>

      <ul className="mt-4 space-y-1.5 text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
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
  );
}

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
            {benefits.slice(0, 2).map((item) => (
              <BenefitCard key={item.id} item={item} />
            ))}

            {weatherImages.map((image) => (
              <figure
                key={image.src}
                className="relative z-10 mx-auto w-full max-w-3xl md:col-span-2 md:max-w-4xl lg:max-w-5xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-3 rounded-[1.75rem] bg-[#8cc129]/20 blur-3xl sm:inset-5 sm:rounded-4xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[1.75rem] border border-[#03372b]/10 sm:-inset-3 sm:rounded-[2.25rem]"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-3 h-16 w-16 rounded-full bg-[#8cc129]/30 blur-2xl sm:-bottom-6 sm:-left-5 sm:h-24 sm:w-24"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-[#c4e86a]/25 blur-2xl sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
                />

                <div className="group relative overflow-hidden rounded-2xl border border-[#03372b]/10 bg-[#03372b]/3 shadow-[0_20px_50px_-16px_rgba(3,55,43,0.22)] sm:rounded-3xl">
                  <div className="relative aspect-16/10 w-full sm:aspect-video">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:object-center"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 64rem"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#03372b]/25 via-transparent to-transparent"
                    />
                  </div>
                </div>
              </figure>
            ))}

            {benefits.slice(2).map((item) => (
              <BenefitCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
