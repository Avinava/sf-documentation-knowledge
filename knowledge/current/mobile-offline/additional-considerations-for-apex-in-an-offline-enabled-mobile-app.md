---
title: "Additional Considerations for Apex in an Offline-Enabled Mobile App"
domain: mobile-offline
topic: additional-considerations-for-apex-in-an-offline-enabled-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.373Z
estimatedTokens: 423
keywords: [Additional, Considerations, Apex, Offline-Enabled, Mobile, App, differences, behavior, compared, run, browser-based, connection, apply, Lightning, web]
---

# Additional Considerations for Apex in an Offline-Enabled Mobile App

> The following differences in behavior compared to Apex run from a browser-based
  connection apply to Apex when used in Lightning web components in an offline-enabled mobile
  app.

# Additional Considerations for Apex in an Offline-Enabled Mobile App

The following differences in behavior compared to Apex run from a browser-based connection apply to Apex when used in Lightning web components in an offline-enabled mobile app.

If a quick action uses a wired Apex method, and that quick action is primed at app startup, then the Apex results data can be primed as well, and available offline. The LWC must be statically analyzable for priming to take place. Specifically, input parameters for the wire adapter must be analyzable. For example, if the input parameters are derived from page reference attributes, or from the output of another LDS wire that is also analyzable. See [Validate Lightning Web Components for Offline Use](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm "Use the Komaci Static Analyzer (or static analyzer for short) during component development to validate your Lightning web components for offline use. Using the static analyzer helps you ensure that code dependencies and data your component depends on can be primed when a network connection is available, making the component and its data available offline when the network has limited or no connectivity.") for additional details about static analysis. Note that the Apex method will be invoked during priming, possibly many times, to prime results for all possible adapter input parameters.

Apex continuations are supported. However, because continuations tend to be longer running requests, we recommend providing feedback to the user while a continuation is active. Otherwise, they might go offline before a continuation completes, which results in an error.

## Related Topics

- Validate Lightning Web Components for Offline Use (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm)
