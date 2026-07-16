import Image from "next/image";

const audiences = [
  {
    label: "For Clubs & Employers",
    description:
      "Post open roles—from greenkeepers and pro shop assistants to caddies and clubhouse managers—for just £10/week. We don’t collect CVs or store applicant data, meaning zero GDPR or privacy liabilities for your business. Candidates apply to you directly.",
  },
  {
    label: "For Job Seekers",
    description:
      "Browse highly targeted industry roles globally and apply directly to decision-makers with a single tap.",
  },
];

export default function GolfJobsBoard() {
  return (
    <>
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
              Golf Jobs Board
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#000000] sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.15]">
              The Direct Link to{" "}
              <span className="bg-gradient-to-r from-[#03372b] via-[#054e3d] to-[#8cc129] bg-clip-text text-transparent">
                Golf Industry Talent
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#000000] sm:mt-6 sm:text-lg">
              Find qualified staff or discover your next career move in the golf
              industry.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 items-center gap-10 md:mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            {/* Image */}
            <div className="relative z-10 order-2 flex justify-center lg:order-1 lg:justify-start">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-[2rem] bg-[#8cc129]/25 blur-3xl sm:inset-6"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[2.5rem] border border-[#03372b]/10 sm:-inset-3"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#03372b]/10 bg-white shadow-[0_20px_50px_-12px_rgba(3,55,43,0.15)] sm:rounded-[1.5rem]">
                  <div className="relative h-[420px] w-full sm:h-[500px]">
                    <Image
                      src="/asset/img/job.webp"
                      alt="GolfSwipe app — Golf Jobs Board connecting clubs and talent"
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
                Recruiting for golf clubs and pro shops is notoriously tough.
                General job sites flood employers with generic CVs from people
                who don&apos;t know a wedge from a putter.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#000000]/70 sm:mt-5 sm:text-lg">
                The GolfSwipe Jobs Board solves this by connecting golf
                businesses directly with passionate, qualified candidates who
                live and breathe golf culture.
              </p>

              <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
                {audiences.map((audience) => (
                  <div
                    key={audience.label}
                    className="relative border-l-2 border-[#8cc129] pl-4 sm:pl-5"
                  >
                    <h3 className="text-base font-bold tracking-tight text-[#03372b] sm:text-lg">
                      {audience.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#000000]/70 sm:text-base">
                      {audience.description}
                    </p>
                  </div>
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
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/45 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/20 to-transparent"
              />

              <p className="relative mx-auto max-w-2xl text-base font-bold leading-snug tracking-tight text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:leading-tight">
                Hire golf people.{" "}
                <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
                  Find golf careers
                </span>{" "}
                — all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
