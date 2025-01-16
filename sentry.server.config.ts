// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// Documentation: https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Use an environment variable for the DSN to keep it secure
  dsn: process.env.SENTRY_DSN || "https://fc7d0d2f5951190a164c7fdfb3f792b9@o4508647660584960.ingest.de.sentry.io/4508647665827920",

  // Adjust the sample rate for capturing performance data
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0, // Lower rate in production for performance

  // Enable debug mode for troubleshooting in non-production environments
  debug: process.env.NODE_ENV !== "production",

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === "development",
});
