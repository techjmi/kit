"use client";

import { About } from "tektokit";
import { ABOUT_PAGE_CONFIG } from "@/constants/pages/about.constant";

/**
 * About Section Component
 * Renders detailed about page with highlighted text support
 */
export default function AboutSection() {
  return (
    <About config={ABOUT_PAGE_CONFIG} variant="simple" />
  );
}
