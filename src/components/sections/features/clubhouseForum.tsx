import Image from "next/image";

const topics = [
  "PGA / LIV News",
  "Swing Analysis",
  "Equipment Reviews",
  "Course Conditions",
  "Gear Talk",
];

export default function ClubhouseForum() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-6 sm:text-sm">
              The Clubhouse Forum
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#000000] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Where Golf{" "}
              <span className="bg-linear-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                Never Stops
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#000000] sm:mt-6 sm:text-lg">
              Join the ultimate discussion hub for gear, swing tips, and pro tour
              debate.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 items-center gap-10 md:mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            {/* Image */}
            <div className="relative z-10 order-2 flex justify-center lg:order-1 lg:justify-start">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-4xl bg-[#8cc129]/25 blur-3xl sm:inset-6"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[2.5rem] border border-[#03372b]/10 sm:-inset-3"
                />

                <div className="relative overflow-hidden rounded-4xl border border-[#03372b]/10 bg-white shadow-[0_20px_50px_-12px_rgba(3,55,43,0.15)] sm:rounded-3xl">
                  <div className="relative h-105 w-full sm:h-125">
                    <Image
                      src="/asset/img/clubhouse.webp"
                      alt="GolfSwipe app — The Clubhouse discussion forum"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                    />
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-[#8cc129]/35 blur-2xl sm:-bottom-6 sm:-left-6 sm:h-28 sm:w-28"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-[#c4e86a]/30 blur-2xl sm:-right-5 sm:-top-5 sm:h-24 sm:w-24"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="relative z-10 order-1 lg:order-2">
              <p className="text-base leading-relaxed text-[#000000]/70 sm:text-lg">
                Social media algorithms are cluttered, and generic groups are
                flooded with spam. Golfers deserve a dedicated space to talk
                about the game they love.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#000000]/70 sm:mt-5 sm:text-lg">
                Welcome to The Clubhouse, GolfSwipe&apos;s built-in discussion
                forum. Organized by clean, easy-to-navigate categories, this is
                your go-to destination to discuss the latest PGA/LIV tour news,
                ask for swing analysis, read honest equipment reviews, and share
                local course conditions.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#000000]/70 sm:mt-5 sm:text-lg">
                It&apos;s a thriving, self-moderating community where you can
                learn from better players, share your own experiences, and live
                the game 24/7.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-2.5">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center rounded-full border border-[#03372b]/12 bg-[#03372b]/4 px-3 py-1.5 text-xs font-medium text-[#03372b]/80 sm:px-3.5 sm:text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Closing banner */}
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
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/45 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/20 to-transparent"
              />

              <p className="relative mx-auto max-w-2xl text-base font-bold leading-snug tracking-tight text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:leading-tight">
                Live the game{" "}
                <span className="bg-linear-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  24/7
                </span>{" "}
                — right inside GolfSwipe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
