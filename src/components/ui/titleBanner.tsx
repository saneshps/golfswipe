"use client";

import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type TitleBannerProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  imageSrc?: string;
  imageAlt?: string;
};

export default function TitleBanner({
  title,
  breadcrumbs,
  imageSrc = "/asset/img/title-banner.webp",
  imageAlt = "",
}: TitleBannerProps) {
  return (
    <section className="relative h-[280px] w-full overflow-hidden sm:h-[320px] md:h-[350px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden={imageAlt ? undefined : true}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#03372b]/90 via-[#03372b]/70 to-[#03372b]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full px-4 sm:px-6 md:w-[90%] lg:w-[90%] lg:px-8 xl:w-[90%] 2xl:w-[85%]">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <nav className="mt-3 sm:mt-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 && (
                      <span aria-hidden="true" className="text-white/45">
                        /
                      </span>
                    )}
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="text-white/75 transition-colors hover:text-[#8cc129]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className={
                          isLast
                            ? "font-medium text-[#8cc129]"
                            : "text-white/75"
                        }
                        aria-current={isLast ? "page" : undefined}
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
