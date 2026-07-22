import type { ReactNode } from "react";

const steps = [
  {
    step: "01",
    title: "Buyer pays GolfSwipe’s Escrow Portal",
    description:
      "Funds are held securely in our digital vault fully visible to the buyer and the seller.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Seller sends the item",
    description: "Tracked delivery required",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Buyer confirms condition",
    description:
      "Inspects, verifies authenticity, then approves release of funds",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Seller gets paid",
    description:
      "Funds transferred only when the buyer is fully satisfied",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const differences = [
  {
    title: "Zero risk for buyers",
    description: "Your money is protected until you have the item in your hands",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Guaranteed payment for sellers",
    description: "You know funds are there before you ship",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
  },
  {
    title: "2% flat fee for buyer and seller only when a deal completes",
    description:
      "No upfront costs, no hidden charges",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Fully regulated & protected",
    description: "Your money is held separately in secure accounts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Integrated natively: No external apps or websites",
    description:
      "Everything happens right here",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

const noMoreItems = [
  "Sending cash or bank transfers and never hearing back", 
  "Receiving items that don’t match the description", 
  "Negotiating refunds or chasing payments", 
  "Worrying about serial numbers, fakes, or damaged goods", 
];

function SectionHeading({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#03372b]/10 bg-[#8cc129]/10 text-[#03372b] sm:h-12 sm:w-12">
        {icon}
      </div>
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-3xl xl:leading-[1.15]">
        {children}
      </h2>
    </div>
  );
}

export default function BuyerAndSellerProtection() {
  return (
    <>
      {/* Intro */}
      <section className="relative w-full overflow-hidden bg-light-gray">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,193,41,0.12),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#03372b]/5 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#8cc129]/15 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-24 xl:w-[90%] 2xl:w-[85%]">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#03372b]/15 bg-white/80 px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest text-[#03372b] shadow-[0_4px_20px_-8px_rgba(3,55,43,0.12)] sm:mb-6 sm:gap-3 sm:px-4 sm:py-2 sm:text-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#8cc129]/15 text-[#03372b] sm:h-8 sm:w-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              GolfSwipe Secure Escrow
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Trade with total confidence —{" "}
              <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
                every time
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#03372b]/70 sm:mt-6 sm:text-lg">
            Buying or selling golf gear should be simple — but it should never be risky. GolfSwipe’s built‑in escrow service eliminates fraud, scams, and disputes completely.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(140,193,41,0.1),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/30 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-24 xl:w-[90%] 2xl:w-[85%]">
          <SectionHeading
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2.5 2.5L16 9" />
              </svg>
            }
          >
            How It{" "}
            <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
              Works
            </span>
          </SectionHeading>

         

          <ol className="relative mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item, index) => (
              <li
                key={item.step}
                className="group relative rounded-[20px] border border-[#03372b]/8 bg-light-gray p-5 shadow-[0_8px_30px_-12px_rgba(3,55,43,0.08)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#03372b]/10 bg-white text-[#03372b] sm:h-12 sm:w-12">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-bold tracking-tight text-[#8cc129]/35 sm:text-4xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-[#03372b] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#03372b]/65 sm:mt-3 sm:text-base">
                  {item.description}
                </p>
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#8cc129] xl:block"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why It’s Different */}
      <section className="relative w-full overflow-hidden bg-light-gray">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(140,193,41,0.12),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#03372b]/5 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-24 xl:w-[90%] 2xl:w-[85%]">
          <SectionHeading
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
          >
            Why It’s{" "}
            <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
              Different
            </span>
          </SectionHeading>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {differences.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] bg-white p-5 shadow-[0_8px_30px_-12px_rgba(3,55,43,0.08)] sm:p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#03372b]/10 bg-[#8cc129]/10 text-[#03372b] sm:h-12 sm:w-12">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-[#03372b] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#03372b]/65 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* No More… */}
      <section className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,193,41,0.1),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/30 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-24 xl:w-[90%] 2xl:w-[85%]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div>
              <SectionHeading
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6" />
                    <path d="M9 9l6 6" />
                  </svg>
                }
              >
                No More{" "}
                <span className="bg-linear-to-r from-[#8cc129] to-[#5a8f0f] bg-clip-text text-transparent">
                  …
                </span>
              </SectionHeading>

              <p className="mt-3 max-w-md text-base leading-relaxed text-[#03372b]/65 sm:mt-4 sm:text-lg">
                Leave the risky, messy side of peer-to-peer trading behind.
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {noMoreItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#03372b]/8 bg-light-gray px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#03372b]/8 text-[#03372b]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-[#03372b]/75 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Only GolfSwipe */}
      <section className="relative w-full overflow-hidden bg-[#03372b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,193,41,0.18),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#8cc129]/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#8cc129]/10 blur-[100px]"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-24 xl:w-[90%] 2xl:w-[85%]">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest text-white sm:mb-6 sm:gap-3 sm:px-4 sm:py-2 sm:text-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#8cc129]/25 text-[#8cc129] sm:h-8 sm:w-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                >
                  <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4L7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" />
                </svg>
              </span>
              Only GolfSwipe Does This
            </div> */}

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem] xl:leading-[1.15]">
            Only GolfSwipe{" "}
              <span className="bg-linear-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
              Does This
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
            We’re the only global, golf‑first marketplace that combines trusted escrow and secure trading — all in one place.
            </p>

            <p className="mx-auto mt-6 text-base font-semibold tracking-tight text-[#8cc129] sm:mt-8 sm:text-lg">
            <span> Trade safely.   </span>  
            <span> Trade smart.  </span>   
            <span>  Trade with GolfSwipe Escrow.  </span>   
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
