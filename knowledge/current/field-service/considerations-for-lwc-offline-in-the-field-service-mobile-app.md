---
title: "Considerations for LWC Offline in the Field Service Mobile App"
domain: field-service
topic: considerations-for-lwc-offline-in-the-field-service-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:56.996Z
estimatedTokens: 359
keywords: [Considerations, LWC, Offline, Field, Service, Mobile, App, following, considerations, apply, run, components, mobile, app., Note]
---

# Considerations for LWC Offline in the Field Service Mobile App

> The following considerations apply to LWC Offline when you run your components in the
  Field Service mobile app.

# Considerations for LWC Offline in the Field Service Mobile App

The following considerations apply to LWC Offline when you run your components in the Field Service mobile app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Developing with Lightning web components is likely best suited for seasoned developers, although very advanced admins with coding experience can also be successful.

-   Global quick actions are available on all pages that have the Actions menu. They do **not** receive the record ID of the current record when invoked from a record detail page.
-   A Community license user who opens a service appointment can experience a missing record error. This is a known issue with this specific user type.
-   Task objects added to a briefcase aren’t primed for offline use. If a briefcase contains a Task object and priming is attempted, an error message is displayed. However, other objects in the briefcase are primed. To resolve the error, remove Task objects from the briefcase.
-   There’s a conflict between Appointment Assistant and LWC Offline that can result in missing URLs. [See this known issue for details.](https://trailblazer.salesforce.com/issues_view?id=a1p4V000001cWaaQAE "HTML (New Window)")
-   (iOS only) Changes to Lightning web components are loaded into the app only when the app is fully quit and then relaunched (a “cold start”).
