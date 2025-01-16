// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a user loads a page in their browser.
// Documentation: https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Use an environment variable for the DSN to keep it secure
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://fc7d0d2f5951190a164c7fdfb3f792b9@o4508647660584960.ingest.de.sentry.io/4508647665827920",

  // Adjust this value in production to control the percentage of transactions captured
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0, // Lower sample rate in production

  // Enable debug mode for easier troubleshooting in non-production environments
  debug: process.env.NODE_ENV !== "production",

  // Capture session replays for errors and sessions
  replaysOnErrorSampleRate: 1.0, // Capture 100% of errors
  replaysSessionSampleRate: 0.1, // Capture 10% of sessions

  // Sentry Session Replay integration
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true, // Mask sensitive text in session replays
      blockAllMedia: true, // Block media (e.g., videos, images) in session replays
    }),
  ],
});
