---
title: "Offline Caching"
domain: mobile-sdk
topic: offline-caching
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.046Z
estimatedTokens: 794
keywords: [Offline, Caching, provide, support, app, able, cache, models, collections, Mobile, Sync, configurable, mechanism, gives, full]
---

# Offline Caching

> To provide offline support, your app must be able to cache its
 models and collections. Mobile Sync provides a configurable mechanism that gives you full control over
caching operations.

# Offline Caching

To provide offline support, your app must be able to cache its models and collections. Mobile Sync provides a configurable mechanism that gives you full control over caching operations.

## Default Cache and Custom Cache Implementations

For its default cache, the Mobile Sync library defines StoreCache, a cache implementation that uses SmartStore. Both StoreCache and SmartStore are optional components for Mobile Sync apps. If your application runs in a browser instead of the Mobile SDK container, or if you don't want to use SmartStore, you must provide an alternate cache implementation. Mobile Sync requires cache objects to support these operations:

-   retrieve
-   save
-   save all
-   remove
-   find

## Mobile Sync Caching Workflow

The Mobile Sync model performs all interactions with the cache and the Salesforce server on behalf of your app. Your app gets and sets attributes on model objects. During save operations, the model uses these attribute settings to determine whether to write changes to the cache or server, and how to merge new data with existing data. If anything changes in the underlying data or in the model itself, the model sends event notifications. Similarly, if you request a fetch, the model fetches the data and presents it to your app in a model collection.

![Model data flow](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fmodel.png&folder=mobile_sdk)

Mobile Sync updates data in the cache transparently during CRUD operations. You can control the transparency level through optional flags. Cached objects maintain "dirty" attributes that indicate whether they've been created, updated, or deleted locally.

## Cache Modes

When you use a cache, you can specify a mode for each CRUD operation. Supported modes are:

| Mode | Constant | Description |
| --- | --- | --- |
| “cache-only” | Force.CACHE_MODE.CACHE_ONLY | Read from, or write to, the cache. Do not perform the operation on the server. |
| “server-only” | Force.CACHE_MODE.SERVER_ONLY | Read from, or write to, the server. Do not perform the operation on the cache. |
| “cache-first” | Force.CACHE_MODE.CACHE_FIRST | For FETCH operations only. Fetch the record from the cache. If the cache doesn't contain the record, fetch it from the server and then update the cache. |
| “server-first” (default) | Force.CACHE_MODE.SERVER_FIRST | Perform the operation on the server, then update the cache. |

To query the cache directly, use a cache query. SmartStore provides query APIs as well as its own query language, Smart SQL. See [Retrieving Data from a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm "SmartStore provides a set of helper methods that build query strings for you.").

-   **[Implementing Offline Caching](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_implementing_caching.htm)**

-   **[Using StoreCache For Offline Caching](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_storecache.htm)**


#### See Also

-   [Using StoreCache For Offline Caching](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_storecache.htm)

## Related Topics

- Retrieving Data from a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm)
- Implementing Offline Caching (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_implementing_caching.htm)
- Using StoreCache For Offline Caching (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_storecache.htm)
