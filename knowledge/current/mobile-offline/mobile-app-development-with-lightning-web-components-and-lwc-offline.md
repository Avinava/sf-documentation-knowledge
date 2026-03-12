---
title: "Mobile App Development with Lightning Web Components and LWC Offline"
domain: mobile-offline
topic: mobile-app-development-with-lightning-web-components-and-lwc-offline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.627Z
estimatedTokens: 581
keywords: [Mobile, App, Development, Lightning, Web, Components, LWC, Offline, Customize, Salesforce, apps, features, built, deploy, customizations]
---

# Mobile App Development with Lightning Web Components and LWC Offline

> Customize Salesforce mobile apps with features built with Lightning web components, and
  deploy your customizations to mobile users. Create components and apps that work even when mobile
  devices are offline while in the field. Optimize your features to handle low- and no-network
  connectivity situations with grace.

# Mobile App Development with Lightning Web Components and LWC Offline

Customize Salesforce mobile apps with features built with Lightning web components, and deploy your customizations to mobile users. Create components and apps that work even when mobile devices are offline while in the field. Optimize your features to handle low- and no-network connectivity situations with grace.

LWC Offline is an advanced runtime environment for Lightning web components. Available only for mobile devices, it replaces the standard Lightning components runtime, and augments it with features designed specifically for mobile and offline use.

-   Briefcase Builder lets you define advanced data priming strategies, customized for the objects and records that your users need access to while offline.
-   A new priming engine preloads records when you prepare to go offline.
-   A durable on-device cache holds primed records for offline access, including changes made while offline.
-   Lightning Data Service (LDS) is enhanced to work seamlessly with primed records. While online, LDS uses the cache as a performance enhancer. While offline, LDS allows transparent access to existing, changed, and even new records.

There are many, many other changes that you (mostly) don’t need to worry about. The overall goal for LWC Offline is to let you develop Lightning web components that “just work” whether you’re online or offline.

-   **[About This Developer Guide](atlas.en-us.mobile_offline.meta/mobile_offline/intro_about_this_dev_guide.htm)**
    Documentation for LWC Offline is a work in progress, and will improve continuously throughout the pilot and beta programs. The initial release of the program documentation is shared across several LWC Offline-enabled mobile apps. Use this developer guide for the purpose of evaluating LWC Offline in your own orgs.
-   **[LWC Offline Enabled Apps](atlas.en-us.mobile_offline.meta/mobile_offline/intro_enabled_apps.htm)**
    LWC Offline is available as an optional, opt-in enhancement to existing Salesforce mobile apps.
-   **[Learn Lightning Web Components](atlas.en-us.mobile_offline.meta/mobile_offline/intro_get_started_with_lwc.htm)**
    To create Lightning web components for use in LWC Offline-enabled mobile apps, you must learn the basics of Lightning web components.

## Related Topics

- About This Developer Guide (atlas.en-us.mobile_offline.meta/mobile_offline/intro_about_this_dev_guide.htm)
- LWC Offline Enabled Apps (atlas.en-us.mobile_offline.meta/mobile_offline/intro_enabled_apps.htm)
- Learn Lightning Web Components (atlas.en-us.mobile_offline.meta/mobile_offline/intro_get_started_with_lwc.htm)
