import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950">
      {/* Ambient glow layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/15 blur-[120px] sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-[min(100%,36rem)] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[80px]"
      />

      <div className="md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[85%] relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left — content */}
          <div className="relative z-10 w-full text-center lg:max-w-xl lg:flex-1 lg:text-left xl:max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.25)] sm:mb-6 sm:text-sm">
              About GolfSwipe
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Stop jumping between{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.35)]">
                clunky forums, sketchy marketplaces,
              </span>{" "}
              and social media meet up groups.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg lg:text-xl lg:leading-relaxed">
              GolfSwipe is the world&apos;s first all in one app built exclusively for the
              modern golfer. Whether you are hunting for rare JDM clubs, looking for a game
              while traveling, mapping out your next weekend round, or settling a rules
              debate with your friends, GolfSwipe connects you to a global community of
              players instantly and securely.
            </p>
          </div>

          {/* Right — image with glow */}
          <div className="relative z-10 flex w-full justify-center lg:flex-1 lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Image glow halo */}
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[2rem] blur-3xl sm:inset-8"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[2.5rem] border sm:-inset-3"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border ring-1 sm:aspect-[5/6] lg:aspect-square">
                <Image
                  src="/asset/img/player.webp"
                  alt="Golfer on the course at golden hour"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 36rem"
                />

                {/* Soft vignette overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-emerald-900/10"
                />
              </div>

              {/* Floating accent glow dot */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-emerald-400/30 blur-2xl sm:-bottom-6 sm:-left-6 sm:h-28 sm:w-28"
              />
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-teal-300/25 blur-2xl sm:-right-5 sm:-top-5 sm:h-24 sm:w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
