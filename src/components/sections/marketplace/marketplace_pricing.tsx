const listingTiers = [
  { range: "£1 – £10", fee: "50p", period: "/ week" },
  { range: "£10 – £100", fee: "£1.00", period: "/ week" },
  { range: "£100 – £300", fee: "£1.50", period: "/ week" },
  { range: "£301 – £600", fee: "£2.00", period: "/ week" },
  { range: "£601 – £1,000", fee: "£3.00", period: "/ week" },
  { range: "£1,000+", fee: "£5.00", period: "/ week" },
];

export default function MarketplacePricing() {
  return (
    <section className="relative w-full overflow-hidden bg-[#03372b]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(140,193,41,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#8cc129]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/40 to-transparent"
      />

      <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left — pitch */}
          <div className="relative z-10">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-6 sm:text-sm">
              Marketplace Pricing
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Enjoy your first month{" "}
              <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                completely FREE!
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
              Put as much golf equipment you want on the app and trade globally
              at no cost.
            </p>

            <div className="mt-8 space-y-5 sm:mt-10">
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                After the free month the following listing fees will apply:
              </p>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#8cc129] to-[#8cc129]/30"
                />
                <p className="pl-3 text-lg font-semibold leading-snug text-white sm:pl-4 sm:text-xl">
                  Flexible, Value-Tiered Listing Fees
                </p>
                <p className="mt-2 pl-3 text-sm text-white/60 sm:pl-4 sm:text-base">
                  Pay Weekly, Stop Anytime
                </p>
              </div>
            </div>
          </div>

          {/* Right — tiers + unlimited pass */}
          <div className="relative z-10 w-full">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:rounded-3xl">
              <div className="border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:text-sm">
                  Weekly listing fees
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Based on your item&apos;s value
                </p>
              </div>

              <ul className="divide-y divide-white/10">
                {listingTiers.map((tier) => (
                  <li
                    key={tier.range}
                    className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-white/4 sm:px-6 sm:py-4"
                  >
                    <span className="text-sm text-white/75 sm:text-base">
                      Items valued{" "}
                      <span className="font-medium text-white">
                        {tier.range}
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      <span className="text-base font-bold text-[#8cc129] sm:text-lg">
                        {tier.fee}
                      </span>
                      <span className="ml-1 text-xs text-white/45 sm:text-sm">
                        {tier.period}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#8cc129]/35 bg-gradient-to-br from-[#8cc129]/20 via-[#8cc129]/10 to-transparent p-5 sm:mt-6 sm:rounded-3xl sm:p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#8cc129]/25 blur-2xl"
              />
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8cc129]/25 text-[#8cc129]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 3 4.5 6.5v5.2c0 4.4 3.1 8.5 7.5 9.8 4.4-1.3 7.5-5.4 7.5-9.8V6.5L12 3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-semibold text-white sm:text-lg">
                    Unlimited Seller Pass —{" "}
                    <span className="text-[#8cc129]">£150/year</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                    For pro shops and high-volume traders — list as much gear as
                    you want with zero listing fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
