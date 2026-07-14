import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[280px] w-full overflow-hidden sm:h-[320px] md:h-[350px]">
      <Image
        src="/asset/img/title-banner.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Soft brand overlay for readable type */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03372b]/90 via-[#03372b]/70 to-[#03372b]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full px-4 sm:px-6 md:w-[90%] lg:w-[90%] lg:px-8 xl:w-[90%] 2xl:w-[85%]">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Marketplace
          </h1>

          <nav className="mt-3 sm:mt-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="text-white/75 transition-colors hover:text-[#8cc129]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/45">
                /
              </li>
              <li>
                <span className="font-medium text-[#8cc129]" aria-current="page">
                  Marketplace
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
