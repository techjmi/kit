"use client";

import Image from "next/image";
import { Testimonials } from "tektokit";
import { TESTIMONIALS_CONFIG } from "@/constants/components/testimonials.constant";

const Testimonial = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 inline-flex flex-wrap justify-center items-center gap-2">
            What Our
            <span className="relative inline-flex items-center partner-heading-highlight">
              Students
              <i className="shape absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/assets/svg/hiring-highlight.svg"
                  alt="Students highlight"
                  width={206}
                  height={53}
                  className="partner-heading-svg"
                />
              </i>
            </span>
            Says
          </h2>
          {/* <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {TESTIMONIALS_CONFIG.description}
          </p> */}
        </div>

        <Testimonials config={TESTIMONIALS_CONFIG} />
      </div>
    </section>
  );
};

export default Testimonial