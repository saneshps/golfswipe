const golfReadyData = [
  "Temperature",
  "Wind speed",
  "Wind direction",
  "Gusts",
  "Rain probability",
  "Precipitation",
  "Humidity",
  "UV index",
];

const benefits = [
  { 
    title: (
      <>
        Perfect for your startup{" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
          budget
        </span>
      </>
    ),
    description:
      "100% free, no API key required, no usage caps for typical launch volumes (~10k calls/day)", 
  },
  { 
    title: (
      <>
        Golf-ready data out of the{" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
        box
        </span>
      </>
    ),
    description:
      "Temperature, wind speed/direction/gusts, rain probability, precipitation amount, humidity, UV index", 
  },
  { 
    title: (
      <>
       Global coverage with high{" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
        accuracy
        </span>
      </>
    ),
    description:
      "1km resolution across UK/Europe, works worldwide for your planned international launches", 
  },
  { 
    title: (
      <>
     No {" "}
        <span className="bg-gradient-to-r from-[#8cc129] to-[#c4e86a] bg-clip-text text-transparent">
        lock-in
        </span>
      </>
    ),
    description:
      "Easy to swap or add a second provider later as you scale", 
  },
];

export default function WeatherUpdates() {
  return (
    <>
 

      {/* Benefits */}
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc129]/40 to-transparent"
        />

        <div className="relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:w-[90%] lg:w-[90%] lg:px-8 lg:py-28 xl:w-[90%] 2xl:w-[85%]">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:gap-x-14 xl:gap-x-20 xl:gap-y-16">
            {benefits.map((item, index) => (
              <article key={item.label} className="relative z-10">
                <div className="mb-4 flex flex-wrap items-center gap-3 sm:mb-5">
                  <span className="inline-flex items-center rounded-full border border-[#8cc129]/35 bg-[#8cc129]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#8cc129] sm:text-sm">
                    {item.label}
                  </span>
                  <span className="text-xs font-medium tracking-wide text-white/40 sm:text-sm">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl xl:leading-[1.15]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-semibold tracking-wide text-[#8cc129] sm:mt-5 sm:text-base">
                  {item.accent}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
 
    </>
  );
}
