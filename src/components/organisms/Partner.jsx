"use client";

import Image from "next/image";
import { PARTNER_SECTION_CONFIG } from "@/constants/components/partner.constant";
import "./Partner.css";

export default function Partner() {
  const logos = PARTNER_SECTION_CONFIG.logos;
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-1 py-2">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary mb-3">
            Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 inline-flex flex-wrap justify-center items-center gap-2">
            Our
            <span className="relative inline-flex items-center partner-heading-highlight">
              Hiring
              <i className="shape absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/assets/svg/hiring-highlight.svg"
                  alt="Hiring highlight"
                  width={206}
                  height={53}
                  className="partner-heading-svg"
                />
              </i>
            </span>
            Partners
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {PARTNER_SECTION_CONFIG.description}
          </p>
        </div>

        <div className="partner-marquee-wrapper rounded-3xl px-4 py-10">
          <div className="partner-marquee-track">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="partner-marquee-item">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={56}
                  className="partner-marquee-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
