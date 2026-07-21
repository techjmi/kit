"use client";

import { Footer as FooterPackage } from "tektokit";
import { FOOTER_CONFIG } from "@/constants/layout/footer.constant";

export default function Footer() {
  return <FooterPackage config={FOOTER_CONFIG} className="footer_bg"/>;
}
