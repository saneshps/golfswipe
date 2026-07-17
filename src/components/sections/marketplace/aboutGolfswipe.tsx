import Image from "next/image";

export default function AboutGolfswipe() {
  return (
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

      <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left — content */}
          <div className="relative z-10 w-full lg:max-w-xl lg:flex-1 xl:max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-6 sm:text-sm">
              About GolfSwipe
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
            The worlds fastest growing{" "}
              <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
              borderless golf marketplace
              </span>
            </h2>

            <p className="mt-4 text-xl font-semibold tracking-wide text-[#8cc129] sm:mt-5 sm:text-2xl">
              Swipe. Match. Buy
            </p>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:space-y-5 sm:text-lg lg:leading-relaxed">
              <p>
                Buying and selling golf gear online shouldn&apos;t feel like a
                gamble. Say goodbye to the clunky navigation of generic listing
                sites and the constant threat of marketplace scammers.
              </p>

              <p>
                GolfSwipe revolutionises how golf equipment is traded. Our
                gesture-controlled Swipe Deck lets you effortlessly browse
                premium clubs, rare shafts, and designer apparel with a simple
                flick of your thumb.
              </p>

              <p>
                When you find the perfect match, our optional integrated TrustAp
                Escrow Service locks the funds securely in a digital vault. The
                seller gets paid only when the gear arrives at your door and you
                verify it&apos;s exactly what you ordered.{" "}
                <span className="font-semibold text-[#03372b]">
                  No risk. No stress
                </span>
                , just simplified, borderless trade.
              </p>
            </div>
          </div>

          {/* Right — image */}
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
                  src="/asset/img/aboutGolfswipe.webp"
                  alt="GolfSwipe marketplace — browse and trade golf gear with confidence"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 36rem"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#03372b]/40 via-transparent to-[#8cc129]/10"
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
  );
}
