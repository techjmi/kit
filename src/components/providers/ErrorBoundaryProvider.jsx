"use client";

import { ErrorBoundary } from "tektokit";

export default function ErrorBoundaryProvider({ children }) {
  return (
    <ErrorBoundary
      showDetails={process.env.NODE_ENV === "development"}
      logErrors={true}
    >
      {children}
    </ErrorBoundary>
  );
}
