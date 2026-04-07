---
title: "Storage Service Adapters"
domain: lightning
topic: storage-service-adapters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:05.761Z
estimatedTokens: 305
keywords: [Storage, Service, Adapters, supports, multiple, implementations, selects, adapter, runtime, browser, support, characteristics, persistence, security, persistent, secure, cached, preserved, user, sessions, encrypted]
---

> The Storage Service supports multiple implementations of storage
   and selects an adapter at runtime based on browser support and specified characteristics of
   persistence and security. Storage can be persistent and secure. With persistent storage,
  cached data is preserved between user sessions in the browser. With secure storage, cached data is
  encrypted.

# Storage Service Adapters

The Storage Service supports multiple implementations of storage and selects an adapter at runtime based on browser support and specified characteristics of persistence and security. Storage can be persistent and secure. With persistent storage, cached data is preserved between user sessions in the browser. With secure storage, cached data is encrypted.

| Storage Adapter Name | Persistent | Secure |
| --- | --- | --- |
| IndexedDB | true | false |
| Memory | false | true |

IndexedDB

(Persistent but not secure) Provides access to an API for client-side storage and search of structured data. For more information, see the [Indexed Database API](http://www.w3.org/TR/IndexedDB/ "HTML (New Window)").

Memory

(Not persistent but secure) Provides access to JavaScript memory for caching data. The stored cache persists only per browser page. Browsing to a new page resets the cache.

The Storage Service selects a storage adapter on your behalf that matches the persistent and secure options you specify when initializing the service. For example, if you request a persistent and insecure storage service, the Storage Service returns the IndexedDB storage if the browser supports it.
