'use client';

import AppLoaderProvider from "@/components/providers/ApploaderProvider";
import ErrorBoundaryProvider from "@/components/providers/ErrorBoundaryProvider";

/**
 * Root Providers Component
 * Wraps all context providers for the app
 */
export default function Providers({ children }) {
  return (
    // <ThemeProvider>
      <ErrorBoundaryProvider>
        <AppLoaderProvider>
          {children}
        </AppLoaderProvider>
      </ErrorBoundaryProvider>
    // </ThemeProvider>
  );
}
