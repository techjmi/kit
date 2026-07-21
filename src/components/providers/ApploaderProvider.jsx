"use client";

import { BASIC_DETAILS, SITE_LOGO } from "@/constants/global.constant";
import { useState, useEffect } from "react";
import { AppLoader } from "tektokit";

export default function AppLoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <AppLoader
          text={BASIC_DETAILS.site_name}
          subtext="Loading your experience..."
          logo={SITE_LOGO}
          duration={2000}
          onComplete={() => setIsLoading(false)}
        />
      )}
      {children}
    </>
  );
}
