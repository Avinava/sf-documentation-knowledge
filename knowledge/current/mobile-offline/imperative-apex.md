---
title: "Imperative Apex"
domain: mobile-offline
topic: imperative-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.384Z
estimatedTokens: 397
keywords: [Imperative, Apex, traditional, way, call, network-based, API, control, You’re, invocation, rather, framework]
---

# Imperative Apex

> Imperative Apex is the more traditional way to call an Apex method, as a
  network-based API call. Imperative Apex allows you to control exactly when the method is called.
  You’re in control of the invocation, rather than the framework.

# Imperative Apex

Imperative Apex is the more traditional way to call an Apex method, as a network-based API call. Imperative Apex allows you to control exactly when the method is called. You’re in control of the invocation, rather than the framework.

Imperative Apex is more flexible—and less restrictive—than reactive Apex wires. For example, you can use imperative Apex calls to change data on the server. The full details are described in [Call Apex Methods Imperatively](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_call_imperative "HTML (New Window)") in the Lightning Web Components Developer Guide.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=mobile_offline)

#### Warning

Salesforce strongly recommends against using imperative Apex for offline use cases.

However, imperative Apex has a significant limitation in an offline-enabled mobile app. **You can’t use imperative Apex while offline.** This is by design, since imperative Apex is allowed to change data on the server. There’s no way to reconcile what *might* change on the server side with data cached on the client side. This is because the client has no knowledge of the implementation of a server-side Apex method. See [Imperative Apex While Offline](atlas.en-us.mobile_offline.meta/mobile_offline/apex_imperative_offline.htm "Imperative Apex calls always fail when the client device is offline. When using imperative Apex in an offline-enabled mobile app, it’s essential to handle the possibility of a network failure error.").

## Related Topics

- Imperative Apex While Offline (atlas.en-us.mobile_offline.meta/mobile_offline/apex_imperative_offline.htm)
