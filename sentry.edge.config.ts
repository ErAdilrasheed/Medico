// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// Documentation: https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Use an environment variable for the DSN to keep it secure
  dsn: process.env.SENTRY_DSN || "https://fc7d0d2f5951190a164c7fdfb3f792b9@o4508647660584960.ingest.de.sentry.io/4508647665827920",

  // Adjust the sample rate for capturing performance data
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0, // Use a lower rate in production

  // Enable debug mode for troubleshooting in non-production environments
  debug: process.env.NODE_ENV !== "production",
});
