---
title: "setStorable()"
domain: lightning
topic: setstorable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.636Z
estimatedTokens: 440
keywords: [setStorable, Marks, Apex, action, storable, stored, framework’s, client-side, cache, Enhance, component’s, performance, marking, actions, cacheable]
---

# setStorable()

> Marks an Apex action as storable to have its response stored in the
   framework’s client-side cache . Enhance your component’s performance by marking actions as
   storable (cacheable) to quickly show cached data from client-side storage without waiting for a
   server trip. If the cached data is stale, the framework retrieves the latest data from the
   server. Caching is especially beneficial for users on high latency, slow, or unreliable
   connections such as 3G networks.

# setStorable()

Marks an Apex action as storable to have its response stored in the framework’s client-side cache . Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Client-side storage is automatically configured in Lightning Experience and the Salesforce mobile app. A component shouldn’t assume a cache duration because it may change as we optimize the platform.

## Signature

setStorable (Object config)

## Parameters

config

Type: Object

An optional configuration map of key-value pairs representing the storage options and values to set. You can only set the ignoreExisting property. Set ignoreExisting to true to bypass the cache. The default value is false.

This property is useful when you know that any cached data is invalid, such as after a record modification. This property should be used rarely because it explicitly defeats caching.

#### See Also

-   [Storable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm "Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.")

## Related Topics

- Storable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm)
