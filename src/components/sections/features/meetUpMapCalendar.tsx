import Image from "next/image";

const highlights = [
  {
    title: "Drop a Pin",
    description:
      "Mark your local course on the live, geo-located map and make yourself findable to golfers nearby.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10Z" />
        <circle cx="12" cy="11" r="2.25" />
      </svg>
    ),
  },
  {
    title: "Search Any City",
    description:
      "Traveling for business or pleasure? Search for compatible players wherever you land.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Fill a Tee Slot",
    description:
      "Have a tee time booked but need a partner? Post it to the Community Calendar.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    title: "Play Your Level",
    description:
      "Connect with like-minded golfers — from casual weekend rounds to high-level networking.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function MeetUpMapCalendar() {
  return (
    <>
      {/* Intro */}
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
            <div className="relative z-10 w-full lg:max-w-xl lg:flex-1 xl:max-w-2xl">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-6 sm:text-sm">
                Meet-Up Map &amp; Calendar
              </span>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
                Never Play a{" "}
                <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                  Lonely Round
                </span>{" "}
                Again
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-md lg:text-md lg:leading-relaxed">
                Drop a pin on the map, share a tee time, and play golf anywhere
                on earth with like minded golfers.
              </p>
              <p className="mt-2 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-md lg:text-md lg:leading-relaxed">
              Golf is a social sport, yet finding players who match your skill level, or securing a game when traveling for business is notoriously difficult. GolfSwipe’s Interactive Meet-up Map solves the isolation of the game.
              </p>
            </div>

            <div className="relative z-10 flex w-full justify-center lg:flex-1 lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-[2rem] bg-[#8cc129]/25 blur-3xl sm:inset-6"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[2.5rem] border border-[#03372b]/10 sm:-inset-3"
                />

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(3,55,43,0.35)] sm:aspect-[5/6] lg:aspect-square">
                  <Image
                    src="/asset/img/lonely.webp"
                    alt="Golfer on the course — find your next playing partner"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 36rem"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#03372b]/45 via-transparent to-[#8cc129]/10"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-[#8cc129]/35 blur-2xl sm:-bottom-6 sm:-left-6 sm:h-28 sm:w-28"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-[#03372b]/20 blur-2xl sm:-right-5 sm:-top-5 sm:h-24 sm:w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Calendar + closing */}
      <section className="relative w-full overflow-hidden bg-[#03372b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,193,41,0.18),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#8cc129]/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-6 sm:text-sm">
                Community Calendar
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:leading-[1.15]">
                From casual weekend rounds to{" "}
                <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  high-level networking
                </span>
              </h3>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-md">
                  With our live, geo-located map, you can drop a pin at your local course or search
                   for players in any city you visit. Have a tee time booked but need to fill a slot? 
                   Post it to the Community Calendar and let compatible local players join your game.
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-md">
              From casual weekend rounds to high-level networking, GolfSwipe connects you with passionate 
              golfers around the corner or across the globe.
              </p>
 
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-full">
                {/* Core glow halo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-[2rem] bg-[#8cc129]/40 blur-3xl sm:inset-6"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2.5rem] bg-[#8cc129]/20 blur-[60px] sm:-inset-4"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#8cc129]/25 via-transparent to-[#c4e86a]/15 blur-2xl"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#8cc129]/35 shadow-[0_0_40px_rgba(140,193,41,0.35),0_0_80px_rgba(140,193,41,0.18),0_24px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-[#8cc129]/25 sm:rounded-[2.5rem]">
                  <Image
                    src="/asset/img/geo-located map.webp"
                    alt="GolfSwipe app — Find Players and plan your next round"
                    width={640}
                    height={1280}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 90vw, 28rem"
                  />
                </div>

                {/* Corner accent glows */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#8cc129]/45 blur-2xl sm:-bottom-6 sm:-left-6 sm:h-32 sm:w-32"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#c4e86a]/35 blur-2xl sm:-right-5 sm:-top-5 sm:h-28 sm:w-28"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
