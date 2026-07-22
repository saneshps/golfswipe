
import Image from "next/image";

export default function GpsCourseMapsShotPlanner() {
  return (
    <>
      {/* Intro */}
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#03372b]/15 bg-[#03372b]/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#03372b] sm:mb-6 sm:text-sm">
              GPS Course Maps &amp; Shot Planner
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#03372b] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              Tour-Level Strategy in the{" "}
              <span className="bg-linear-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                Palm of Your Hand
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg lg:leading-relaxed">
              High-resolution GPS maps and tactical shot planning for global
              courses.
            </p>
          </div>

          <figure className="relative z-10 mx-auto mt-10 w-full max-w-4xl sm:mt-12 lg:mt-16 lg:max-w-5xl">
            <div
              aria-hidden="true"
              className="absolute inset-3 rounded-[1.75rem] bg-[#8cc129]/20 blur-3xl sm:inset-5 sm:rounded-4xl"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[1.75rem] border border-[#03372b]/10 sm:-inset-3 sm:rounded-[2.25rem]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-3 h-16 w-16 rounded-full bg-[#8cc129]/30 blur-2xl sm:-bottom-6 sm:-left-5 sm:h-24 sm:w-24"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-[#c4e86a]/25 blur-2xl sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
            />

            <div className="group relative overflow-hidden rounded-2xl border border-[#03372b]/10 bg-[#03372b]/3 shadow-[0_20px_50px_-16px_rgba(3,55,43,0.22)] sm:rounded-3xl lg:rounded-4xl">
              <div className="relative aspect-16/10 w-full sm:aspect-video">
                <Image
                  src="/asset/img/course.webp"
                  alt="GPS Course Maps & Shot Planner"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 85vw, 64rem"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#03372b]/30 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                />
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* High-resolution maps */}
      <section className="relative w-full overflow-hidden bg-[#03372b]">
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
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-6 sm:text-sm">
                Ultimate Yardage Book
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:leading-[1.15]">
                Stunning maps for courses{" "}
                <span className="bg-linear-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  worldwide
                </span>
              </h3>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
                They say golf is played between the ears. To score low, you need
                the ultimate yardage book. GolfSwipe equips you with stunning,
                high-resolution maps for golf courses worldwide.
              </p>
            </div>

            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:mb-6 sm:text-sm">
                Tactical Shot Planner
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:leading-[1.15]">
                Plan every hole from{" "}
                <span className="bg-linear-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  tee to green
                </span>
              </h3>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
                Our Tactical Shot Planner lets you plan every hole from tee to
                green before you even pull a club. Measure exact yardages to
                hazards, calculate layups, and plan your ideal shot shapes
                dynamically on your mobile screen.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                Whether you&apos;re playing a course for the first time or
                plotting a new strategy for your home track, GolfSwipe gives you
                the confidence to execute every shot with precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
