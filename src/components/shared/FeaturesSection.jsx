"use client";

import { FaBriefcase, FaCheckCircle, FaHandshake, FaUsers } from "react-icons/fa";
import { FEATURES_CONFIG } from "@/constants/components/features.constant";

const ICON_REGISTRY = {
  briefcase: FaBriefcase,
  checkCircle: FaCheckCircle,
  handshake: FaHandshake,
  users: FaUsers,
};

const getIcon = (iconName) => {
  const IconComponent = ICON_REGISTRY[iconName];
  return IconComponent ? <IconComponent size={24} /> : null;
};

export default function FeaturesSection() {
  return (
    <section className="relative z-10 mx-auto w-[98%] md:w-[80%]">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
          {FEATURES_CONFIG.features.map((feature, index) => (
            <div
              key={feature.title || index}
              className="flex flex-col gap-4 px-6 py-8 sm:px-8"
            >
              <div className="flex h-14 w-14 items-center text-center justify-center rounded-full bg-slate-100 text-slate-900">
                {getIcon(feature.icon)}
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
