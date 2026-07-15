const plans = [
  {
    name: "Weekly Pass",
    price: "£1.99",
    period: "/ week",
    description: "Perfect for traveling golfers or casual players.",
    features: [
      "Unlocks a single premium feature (e.g., GPS Course Maps or the Meet-up Map) for 7 days.",
    ],
    featured: false,
    tone: "light" as const,
  },
  {
    name: "All-Access Monthly",
    price: "£7.99",
    period: "/ month",
    description: "Full, unlimited access to the entire GolfSwipe ecosystem.",
    features: [
      "All GPS Course Maps",
      "Meet-up Map & Calendar",
      "Clubhouse Chat",
      "Up to 3 active marketplace listings",
    ],
    featured: false,
    tone: "light" as const,
  },
  {
    name: "All-Access Annual",
    price: "£59.99",
    period: "/ year",
    badge: "Best Value",
    description: "Save over 35% compared to monthly.",
    features: [
      "Year-round access to every premium feature",
      "All maps included",
      "Full access to the global marketplace",
    ],
    featured: true,
    tone: "featured" as const,
  },
  {
    name: "Unlimited Seller Annual",
    price: "£150",
    period: "/ year",
    description:
      "Designed for power-sellers, gear flippers, and local pro shops.",
    features: [
      "Unlimited marketplace listings",
      "Zero individual weekly listing fees",
      "All premium app utility features included",
    ],
    featured: false,
    tone: "dark" as const,
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function PricingAndBundles() {
  return (
    <section className="relative w-full overflow-hidden bg-light-gray">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/50 to-transparent"
      />
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
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-5 sm:text-sm">
            The Options
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
            Choose Your Access.{" "}
            <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
              Elevate Your Game.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:mt-5 sm:text-lg">
            Flexible passes and all-inclusive bundles designed around your
            season.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 xl:mt-20 xl:grid-cols-4 xl:gap-5">
          {plans.map((plan) => {
            const isFeatured = plan.tone === "featured";
            const isDark = plan.tone === "dark";

            return (
              <li
                key={plan.name}
                className={[
                  "group relative flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl",
                  isFeatured
                    ? "border border-[#8cc129]/50 bg-gradient-to-b from-[#03372b] to-[#054e3d] shadow-[0_24px_60px_-20px_rgba(3,55,43,0.55)] ring-1 ring-[#8cc129]/30"
                    : isDark
                      ? "border border-[#03372b]/20 bg-[#03372b] shadow-[0_20px_50px_-24px_rgba(3,55,43,0.45)]"
                      : "border border-[#03372b]/10 bg-white shadow-[0_16px_40px_-24px_rgba(3,55,43,0.25)]",
                ].join(" ")}
              >
                {isFeatured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#8cc129]/25 blur-3xl"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/70 to-transparent"
                    />
                  </>
                )}

                <div className="relative flex h-full flex-col p-6 sm:p-7 lg:p-8">
                  {"badge" in plan && plan.badge ? (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full border border-[#8cc129]/40 bg-[#8cc129]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#8cc129] sm:mb-5 sm:text-xs">
                      {plan.badge}
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="mb-4 hidden h-[26px] xl:mb-5 xl:block xl:h-[28px]"
                    />
                  )}

                  <h3
                    className={[
                      "text-lg font-semibold tracking-tight sm:text-xl",
                      isFeatured || isDark ? "text-white" : "text-[#03372b]",
                    ].join(" ")}
                  >
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span
                      className={[
                        "text-4xl font-bold tracking-tight sm:text-[2.5rem]",
                        isFeatured
                          ? "text-[#8cc129]"
                          : isDark
                            ? "text-white"
                            : "text-[#03372b]",
                      ].join(" ")}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={[
                        "text-sm sm:text-base",
                        isFeatured || isDark
                          ? "text-white/55"
                          : "text-zinc-500",
                      ].join(" ")}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={[
                      "mt-4 text-sm leading-relaxed sm:text-[15px]",
                      isFeatured || isDark
                        ? "text-white/70"
                        : "text-zinc-600",
                    ].join(" ")}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={[
                      "my-5 h-px w-full sm:my-6",
                      isFeatured
                        ? "bg-gradient-to-r from-transparent via-[#8cc129]/40 to-transparent"
                        : isDark
                          ? "bg-white/10"
                          : "bg-[#03372b]/10",
                    ].join(" ")}
                  />

                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span
                          className={[
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            isFeatured
                              ? "bg-[#8cc129]/20 text-[#8cc129]"
                              : isDark
                                ? "bg-white/10 text-[#8cc129]"
                                : "bg-[#8cc129]/15 text-[#03372b]",
                          ].join(" ")}
                        >
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span
                          className={[
                            "text-sm leading-relaxed sm:text-[15px]",
                            isFeatured || isDark
                              ? "text-white/75"
                              : "text-zinc-600",
                          ].join(" ")}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
