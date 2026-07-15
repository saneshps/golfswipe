import Image from "next/image";
import Link from "next/link";

const destinations = [
  { name: "St Andrews", region: "Scotland" },
  { name: "Pebble Beach", region: "California" },
  { name: "Augusta", region: "Georgia" },
];

export default function GolfTravelHub() {
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

        <div className="relative mx-auto flex justify-center px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-6 sm:text-sm">
              Golf Travel Hub
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Your next great round is just a{" "}
              <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                swipe away
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg lg:leading-relaxed">
              From local hidden gems to the world&apos;s most legendary courses,
              play wherever your passion takes you.
            </p>
          </div>
        </div>
      </section>

      {/* Book anywhere */}
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
            <div className="relative z-10 order-2 flex justify-center lg:order-1 lg:justify-start">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-[2rem] bg-[#8cc129]/40 blur-3xl sm:inset-6"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2.5rem] bg-[#8cc129]/20 blur-[60px] sm:-inset-4"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#8cc129]/35 shadow-[0_0_40px_rgba(140,193,41,0.35),0_0_80px_rgba(140,193,41,0.18),0_24px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-[#8cc129]/25 sm:rounded-[2.5rem]">
                  <Image
                    src="/asset/img/geo-located map.webp"
                    alt="GolfSwipe app — swipe to discover and book golf tee times"
                    width={640}
                    height={1280}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 90vw, 28rem"
                  />
                </div>

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

            <div className="relative z-10 order-1 lg:order-2">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-6 sm:text-sm">
                Book Inside the App
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:leading-[1.15]">
                Live tee times, multi-round breaks &amp;{" "}
                <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  golf-and-stay packages
                </span>
              </h3>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
                Search live tee times, multi-round breaks, and complete
                golf-and-stay packages across 150+ countries, including
                bucket-list venues like St Andrews, Pebble Beach, and Augusta.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                Book directly inside GolfSwipe with total ease — no hidden fees,
                no jumping between sites, just confirmed tee times and great
                rates.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {[
                  { label: "No hidden fees", detail: "Transparent rates" },
                  { label: "One app", detail: "Book everything here" },
                  { label: "Confirmed times", detail: "Instant peace of mind" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                  >
                    <p className="text-sm font-semibold text-[#8cc129]">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Every journey */}
      <section className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-1/3 h-72 w-72 rounded-full bg-[#8cc129]/12 blur-[100px] sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#03372b]/8 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#03372b]/15 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
            <div className="relative z-10 w-full lg:max-w-xl lg:flex-1 xl:max-w-2xl">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-6 sm:text-sm">
                Every Journey
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-3xl lg:text-4xl xl:leading-[1.15]">
                Turn every trip into{" "}
                <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                  unforgettable golf
                </span>
              </h3>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg">
                Whether you&apos;re planning a weekend trip with friends, a solo
                adventure, or a once-in-a-lifetime pilgrimage, turn every
                journey into unforgettable golf.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: "Weekend with friends",
                    text: "Lock in multi-round breaks and keep the group on the same fairway.",
                  },
                  {
                    title: "Solo adventure",
                    text: "Find tee times and destinations that match your pace and passion.",
                  },
                  {
                    title: "Bucket-list pilgrimage",
                    text: "Chase legendary venues with packages built for the trip of a lifetime.",
                  },
                ].map((item, index) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#03372b] to-[#8cc129] text-xs font-bold text-white"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[#03372b]">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
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

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(3,55,43,0.35)] sm:aspect-[5/6] lg:aspect-[4/3]">
                  <Image
                    src="/asset/img/other/zip/2148295319.jpg"
                    alt="Friends enjoying a round together on a golf course"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 36rem"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#03372b]/40 via-transparent to-transparent"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-[#8cc129]/35 blur-2xl sm:-bottom-6 sm:-left-6 sm:h-28 sm:w-28"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel alone — map */}
      <section className="relative w-full overflow-hidden bg-[#03372b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(140,193,41,0.16),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-white/5 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-6 sm:text-sm">
                Never Play Alone
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:leading-[1.15]">
                Travelling solo?{" "}
                <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  Pin your round
                </span>{" "}
                and let golfers join
              </h3>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
                And if you are travelling and booking alone, use the GolfSwipe
                interactive map and pin to let other golfers join your round —
                all in the one app.
              </p>

              <Link
                href="/meet-up-map-calendar"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(140,193,41,0.55)] transition hover:brightness-110 sm:text-base"
              >
                Explore Meet-Up Map
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-[2rem] bg-[#8cc129]/40 blur-3xl sm:inset-6"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2.5rem] bg-[#8cc129]/20 blur-[60px] sm:-inset-4"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#8cc129]/35 shadow-[0_0_40px_rgba(140,193,41,0.35),0_0_80px_rgba(140,193,41,0.18),0_24px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-[#8cc129]/25 sm:rounded-[2.5rem]">
                  <Image
                    src="/asset/img/geo-located map.webp"
                    alt="GolfSwipe interactive map — pin your round and invite golfers"
                    width={640}
                    height={1280}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 90vw, 28rem"
                  />
                </div>

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
