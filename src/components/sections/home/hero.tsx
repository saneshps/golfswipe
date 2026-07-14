import Image from "next/image";
import Link from "next/link";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.609 1.814 13.792 12 3.61 22.186a1.96 1.96 0 0 1-.065-1.158L5.865 12 3.545 2.972a1.96 1.96 0 0 1 .064-1.158zm3.096 1.183 10.481 6.064-2.456 2.456L6.705 4.997zm0 18.006 4.925-4.925 2.456 2.456L6.705 19.003zM14.268 12.707l2.915-2.915 4.358 2.515c.745.43.745 1.493 0 1.923l-4.358 2.515-2.915-2.915z" />
    </svg>
  );
}

const storeButtonClass =
  "group flex w-full items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-950 px-4 py-3 text-white shadow-md shadow-zinc-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-zinc-900 hover:shadow-lg hover:shadow-emerald-900/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto sm:min-w-[200px] sm:px-5 sm:py-3.5";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-light-gray">
      <div className="md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[85%] mx-auto flex flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-20 xl:py-24">
        {/* Left — content */}
        <div className="w-full max-w-xl text-center lg:max-w-lg lg:flex-1 lg:text-left xl:max-w-xl">
          <div className="flex items-center justify-center">
          <Image
            src="/asset/img/golf-swipe-logo.png"
            alt="GolfSwipe"
            width={100}
            height={100}
            className="w-50 h-auto mb-6"
          />
          </div>
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-700 sm:mb-6 sm:text-sm">
            GolfSwipe
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.1]">
            The Global Clubhouse in Your Pocket.
          </h1>

          <h2 className="mt-4 text-base font-normal leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg lg:mt-5 lg:text-xl lg:leading-snug">
            Swipe gear. Plan shots. Find your fourball. All in one borderless app.
          </h2>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <Link href="#" className={storeButtonClass} aria-label="Download on the App Store">
              <AppleIcon className="h-7 w-7 shrink-0 text-white transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-400 sm:text-[11px]">
                  Download on the
                </span>
                <span className="mt-0.5 text-base font-semibold tracking-tight sm:text-lg">
                  App Store
                </span>
              </span>
            </Link>

            <Link href="#" className={storeButtonClass} aria-label="Get it on Google Play">
              <GooglePlayIcon className="h-7 w-7 shrink-0 text-emerald-400 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-400 sm:text-[11px]">
                  Get it on
                </span>
                <span className="mt-0.5 text-base font-semibold tracking-tight sm:text-lg">
                  Google Play
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Right — banner image */}
        <div className="relative flex w-full justify-center lg:w-auto lg:flex-1 lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-md sm:max-w-lg lg:aspect-auto lg:h-[min(70vh,560px)] lg:max-w-none lg:w-full">
            <Image
              src="/asset/img/banner-new.webp"
              alt="GolfSwipe app on mobile"
              fill
              priority
              className="object-contain object-center lg:object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
