import Image from "next/image";

export default function BiWeeklyRulesQuiz() {
  return (
    <>
      {/* Quiz experience */}
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
              Bi-Weekly Rules Quiz
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Settle the Score.{" "}
              <span className="bg-linear-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                Claim the Bragging Rights
              </span>
              .
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-1 items-center gap-10 md:mt-12 lg:mt-15 lg:grid-cols-2 lg:gap-14 xl:gap-20">
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
                  <div className="relative h-125 w-full">
                    <Image
                      src="/asset/img/quiz.webp"
                      alt="GolfSwipe app — bi-weekly rules quiz and leaderboards"
                      fill
                      className="object-cover"
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
              <p className="mt-5 text-base leading-relaxed text-[#03372b]/70 sm:mt-6 sm:text-lg">
                Test your knowledge in our bi-weekly Rules Quiz and dominate the
                leaderboards.
              </p>

              <p className="mt-5 text-base leading-relaxed text-[#03372b]/70 sm:mt-6 sm:text-lg">
                Who actually knows the exact ruling when a ball is lost in a
                penalty area? It&apos;s time to settle the clubhouse debates once
                and for all.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#03372b]/70 sm:text-lg">
                Every two weeks, GolfSwipe launches the Global Rules Quiz—a
                highly engaging, gamified challenge featuring real-world rules
                scenarios, trivia, and etiquette.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#03372b]/70 sm:text-lg">
                Compete against your friends in private groups, or climb the
                local, regional, and global leaderboards. It&apos;s the ultimate
                way to stay sharp, learn the game, and claim ultimate bragging
                rights even when you&apos;re off the course.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
