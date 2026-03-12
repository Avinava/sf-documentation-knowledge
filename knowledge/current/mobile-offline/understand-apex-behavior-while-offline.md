---
title: "Understand Apex Behavior While Offline"
domain: mobile-offline
topic: understand-apex-behavior-while-offline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.394Z
estimatedTokens: 598
keywords: [Understand, Apex, Behavior, Offline, Additional, features, built, offline-enabled, apps, allow, app, including, Lightning, web, components]
---

# Understand Apex Behavior While Offline

> Additional features that are built into offline-enabled apps allow the app, including
  Lightning web components and even Apex, to continue to function. Knowing these features, and their
  limitations, is critical to writing LWCs that function well, even without a connection to the
  Salesforce service.

# Understand Apex Behavior While Offline

Additional features that are built into offline-enabled apps allow the app, including Lightning web components and even Apex, to continue to function. Knowing these features, and their limitations, is critical to writing LWCs that function well, even without a connection to the Salesforce service.

The standard Salesforce web interface requires a continuous network connection to the Salesforce service. When a standard Salesforce client, such as a desktop browser, is offline, features that require a connection to the Salesforce service—which is most features—don’t work. Since Apex runs on the Salesforce service, this includes *all* Apex-based features of Lightning web components.

An offline-enabled mobile app, in contrast, is designed to continue to function even when no connection to the Salesforce service is available. The offline features of the app aren’t magic; data that’s not already available on the client device is inaccessible. But carefully designed features, including Lightning web components that use Apex, can continue to run with data that’s available locally, on the device, even without a network connection.

-   **[Apex Wires While Offline](atlas.en-us.mobile_offline.meta/mobile_offline/apex_wires_while_offline.htm)**
    Lightning web components that wire properties or functions to Apex methods continue to provide cached values from the durable store, if available.
-   **[Imperative Apex While Offline](atlas.en-us.mobile_offline.meta/mobile_offline/apex_imperative_offline.htm)**
    **Imperative Apex calls always fail when the client device is offline.** When using imperative Apex in an offline-enabled mobile app, it’s essential to handle the possibility of a network failure error.
-   **[Refresh Records Cached in Durable Store While Offline](atlas.en-us.mobile_offline.meta/mobile_offline/apex_refresh_cached_records.htm)**
    While it’s not possible to retrieve updated data from Salesforce while a client device is offline, it’s still possible to request updates when data is known to be stale.

#### See Also

-   [*Lightning Web Components Developer Guide:* Client-Side Caching of Apex Method Results](https://developer.salesforce.com/docs/platform/lwc/guide/apex-result-caching.html "Lightning Web Components Developer Guide: Client-Side Caching of Apex Method
    Results - HTML (New Window)")

## Related Topics

- Apex Wires While Offline (atlas.en-us.mobile_offline.meta/mobile_offline/apex_wires_while_offline.htm)
- Imperative Apex While Offline (atlas.en-us.mobile_offline.meta/mobile_offline/apex_imperative_offline.htm)
- Refresh Records Cached in Durable Store While Offline (atlas.en-us.mobile_offline.meta/mobile_offline/apex_refresh_cached_records.htm)
