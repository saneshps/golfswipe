import Image from "next/image";  

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
              Know your game.{" "} <br />
              <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                Grow your game
              </span>
            </h2> 
          </div>
          <div className="mt-5 md:mt-12 lg:mt-25 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            {/* Image */}
            <div className="relative z-10 order-2 flex justify-center lg:order-1 lg:justify-start">
              <div className="relative w-full">
                <div className="relative overflow-hidden rounded-[2rem] border border-[#03372b]/10 bg-white shadow-[0_20px_50px_-12px_rgba(3,55,43,0.15)] sm:rounded-[1rem]">
                  <Image
                    src="/asset/img/tracker.webp"
                    alt="GolfSwipe app — score tracking and performance insights"
                    width={800}
                    height={1280}
                    className="block h-auto w-full"
                    sizes="(max-width: 640px) 80vw, 20rem"
                  />
                </div>
              </div>
            </div>
 
            {/* Copy */}
            <div className="relative z-10 order-1 lg:order-2">
              

              <h4 className="text-2xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-2xl lg:text-2xl xl:leading-[1.15]">
                Log every round in{" "}
                <span className="bg-gradient-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
                  seconds
                </span>
              </h4>

              <p className="mt-5 text-base leading-relaxed text-[#03372b]/70 sm:mt-6 sm:text-lg">
                From casual weekend games to competitive competitions, record
                scores, fairways hit, greens in regulation, and putts — and get
                an official WHS-compliant handicap updated automatically.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#03372b]/70 sm:mt-6 sm:text-lg">
              See exactly how your game evolves over time with clear trends and insights.
               Celebrate your best rounds, spot where you’re improving, and share your achievements 
               straight to friends or the wider GolfSwipe community.

              </p> 
            </div>
             
          </div>

          {/* CTA Banner */}
          <div className="relative z-10 mx-auto mt-12 w-full max-w-4xl sm:mt-16 lg:mt-20">
            <div className="relative overflow-hidden rounded-2xl border border-[#8cc129]/15 bg-[#03372b] px-5 py-8 text-center shadow-[0_20px_50px_-16px_rgba(3,55,43,0.55),0_0_0_1px_rgba(140,193,41,0.08)_inset] sm:rounded-3xl sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,193,41,0.2),transparent_62%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_50%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/45 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/20 to-transparent"
              />

              <p className="relative mx-auto max-w-2xl text-base font-bold leading-snug tracking-tight text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:leading-tight">
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