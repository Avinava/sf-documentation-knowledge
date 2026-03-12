---
title: "Offline Environment Details"
domain: mobile-offline
topic: offline-environment-details
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.693Z
estimatedTokens: 577
keywords: [Offline, Environment, presents, number, technical, challenges, LWC, Offline-enabled, mobile, apps, Lightning, web, components]
---

# Offline Environment Details

> The offline environment presents a number of technical challenges for LWC
  Offline-enabled mobile apps, and for your Lightning web components.

# Offline Environment Details

The offline environment presents a number of technical challenges for LWC Offline-enabled mobile apps, and for your Lightning web components.

Salesforce mobile apps are heavily optimized for offline use. These optimizations are enabled by our complete understanding of how the built-in features are implemented, including code, data, and metadata relationships. The app contains or loads the information it needs for built-in features to perform well, online and offline. See the following topics in Salesforce Help for application-specific details.

-   Salesforce Mobile App Plus: [Offline Behaviors](https://help.salesforce.com/s/articleView?id=xcloud.salesforce_app_plus_offline_behavior.htm&type=5&language=en_US)
-   Field Service Mobile App: [Offline Priming in the Field Service Mobile App](https://help.salesforce.com/articleView?id=service.mfs_offline_parent.htm&type=5&language=en_US "HTML (New Window)")

Salesforce mobile apps don’t, and can’t, have this same level of knowledge about your custom features built with Lightning web components. Instead, the app analyzes your custom objects, page layouts, components, and other metadata, and then loads the data and metadata it thinks you need. To improve the quality of this analysis, and thus the performance of your components, you must follow a number of guidelines when developing your Lightning web components.

-   **[What Happens When Something Isn’t Primed (Preloaded)](atlas.en-us.mobile_offline.meta/mobile_offline/offline_not_primed.htm)**
    Priming for offline use is a “best effort” mechanism. Salesforce mobile apps are resilient in situations where resources are required by a mobile client but weren’t primed.
-   **[Create Components with Offline Analysis In Mind](atlas.en-us.mobile_offline.meta/mobile_offline/offline_static_analysis.htm)**
    To use a feature implemented with Lightning web components while offline, it must be preloaded, or primed, **before** you go offline.
-   **[Determine Online or Offline Status](atlas.en-us.mobile_offline.meta/mobile_offline/offline_status.htm)**
    The Salesforce Mobile app, Field Service Mobile app, and Lightning Web Components generally, don’t have a supported mechanism for detecting whether a device is online or not. **This is by design.**

## Related Topics

- What Happens When Something Isn’t Primed (Preloaded) (atlas.en-us.mobile_offline.meta/mobile_offline/offline_not_primed.htm)
- Create Components with Offline Analysis In Mind (atlas.en-us.mobile_offline.meta/mobile_offline/offline_static_analysis.htm)
- Determine Online or Offline Status (atlas.en-us.mobile_offline.meta/mobile_offline/offline_status.htm)
