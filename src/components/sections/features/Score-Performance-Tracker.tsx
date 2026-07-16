import Image from "next/image";

const stats = [
  { label: "Fairways Hit", detail: "Accuracy off the tee" },
  { label: "Greens in Reg.", detail: "Approach precision" },
  { label: "Putts / Round", detail: "Sharpen your short game" },
];

const highlights = [
  { label: "WHS-Compliant", detail: "Official handicap, auto-updated" },
  { label: "Log in Seconds", detail: "From casual to competitive" },
  { label: "Share Wins", detail: "Straight to the community" },
];

export default function ScorePerformanceTracker() {
  return (
    <> 
      {/* Track & improve */}
      <section className="relative w-full overflow-hidden bg-[#fff]">
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
        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-6 sm:text-sm">
              Score &amp; Performance Tracker
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Know your game.{" "}
              <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                Grow your game
              </span>
              .
            </h2> 
          </div>
          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            {/* Image */}
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
                    src="/asset/img/tracker.webp"
                    alt="GolfSwipe app — score tracking and performance insights"
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

            {/* Copy */}
            <div className="relative z-10 order-1 lg:order-2">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-6 sm:text-sm">
                Every Round Counts
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:leading-[1.15]">
                Log every round in{" "}
                <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  seconds
                </span>
              </h3>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
                From casual weekend games to competitive competitions, record
                scores, fairways hit, greens in regulation, and putts — and get
                an official WHS-compliant handicap updated automatically.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
              See exactly how your game evolves over time with clear trends and insights.
               Celebrate your best rounds, spot where you’re improving, and share your achievements 
               straight to friends or the wider GolfSwipe community.

              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {stats.map((item) => (
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

      {/* Trends & insights */}
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

        <div>
         

          <div className="relative z-10 mx-auto mt-12 max-w-3xl sm:mt-16">
            <div className="relative overflow-hidden rounded-3xl bg-[#03372b] px-6 py-10 text-center shadow-[0_24px_60px_-24px_rgba(3,55,43,0.5)] sm:px-10 sm:py-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,193,41,0.22),transparent_60%)]"
              />
              <p className="relative text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl lg:text-3xl">
                Every round counts —{" "}
                <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  make every round matter
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
