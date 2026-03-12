---
title: "Considerations for Field Service Mobile App"
domain: mobile-offline
topic: considerations-for-field-service-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.413Z
estimatedTokens: 303
keywords: [Considerations, Service, Mobile, App, apply, LWC, Offline, run, components]
---

# Considerations for Field Service Mobile App

> The following considerations apply to LWC Offline when you run your
  components in the Field Service Mobile app.

# Considerations for Field Service Mobile App

The following considerations apply to LWC Offline when you run your components in the Field Service Mobile app.

These considerations apply to LWCs *only* when run in the Field Service mobile app.

-   Global quick actions are available on all pages that have the Actions menu. They do **not** receive the record ID of the current record when invoked from a record detail page.
-   A Community license user who opens a Service Appointment can experience a missing record error. This is a known issue with this specific user type.
-   Task objects added to a briefcase aren’t primed. If a briefcase contains a Task object and priming is attempted, an error message is displayed. However, other objects in the briefcase are primed. To resolve the error, remove Task objects from the briefcase.
-   There’s a conflict between Appointment Assistance and LWC Offline that can result in missing URLs. [See this known issue for details.](https://trailblazer.salesforce.com/issues_view?id=a1p4V000001cWaaQAE "HTML (New Window)")
-   (iOS only) Changes to Lightning web components are loaded into the app only when the app is fully quit and then relaunched (a “cold start”).
