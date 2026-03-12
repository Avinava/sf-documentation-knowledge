---
title: "Enable Caching of Apex Results"
domain: mobile-offline
topic: enable-caching-of-apex-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.380Z
estimatedTokens: 278
keywords: [Enable, Caching, Apex, Results, allow, calls, saved, offline, offline-enabled, mobile, apps]
---

# Enable Caching of Apex Results

> To allow results of Apex calls to be saved for offline use, enable caching on Apex
  methods used in your offline-enabled mobile apps.

# Enable Caching of Apex Results

To allow results of Apex calls to be saved for offline use, enable caching on Apex methods used in your offline-enabled mobile apps.

Annotate the Apex method with @AuraEnabled(cacheable=true), which caches the method results on the client. When you set cacheable=true, a method must only retrieve data, it can’t mutate (change) data.

-   Apex methods used in reactive wires **must** be annotated with @AuraEnabled(cacheable=true), whether you intend to use the results offline or not.
-   Apex methods called imperatively only need to be annotated with @AuraEnabled(cacheable=true) if you want the results to be available offline.

Additional details of Apex method caching behavior and managing cached results can be found in the Lightning Web Components Developer Guide.

#### See Also

-   [*Lightning Web Components Developer Guide:* Client-Side Caching of Apex Method Results](https://developer.salesforce.com/docs/platform/lwc/guide/apex-result-caching.html "Lightning Web Components Developer Guide: Client-Side Caching of Apex Method
    Results - HTML (New Window)")
