---
title: "Storable Actions"
domain: lightning
topic: storable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.649Z
estimatedTokens: 960
keywords: [Storable, Actions, Enhance, component’s, performance, marking, cacheable, quickly, show, cached, data, client-side, storage, waiting, server]
---

# Storable Actions

> Enhance your component’s performance by marking actions as
            storable (cacheable) to quickly show cached data from client-side storage without
            waiting for a server trip. If the cached data is stale, the framework retrieves the
            latest data from the server. Caching is especially beneficial for users on high latency,
            slow, or unreliable connections such as 3G networks.

# Storable Actions

Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

-   A storable action might result in no call to the server. Never mark as storable an action that updates or deletes data.
-   For storable actions in the cache, the framework returns the cached response immediately and also refreshes the data if it’s stale. Therefore, storable actions might have their callbacks invoked more than once: first with cached data, then with updated data from the server.

Most server requests are read-only and idempotent, which means that a request can be repeated or retried as often as necessary without causing data changes. The responses to idempotent actions can be cached and quickly reused for subsequent identical actions. For storable actions, the key for determining an identical action is a combination of:

-   Apex controller name
-   Method name
-   Method parameter values

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Client-side storage is automatically configured in Lightning Experience and the Salesforce mobile app. A component shouldn’t assume a cache duration because it may change as we optimize the platform.

## Marking an Action as Storable

To cache data returned from an Apex method for any component with an API version of 44.0 or higher, you must annotate the Apex method with @AuraEnabled(cacheable=true). For example:

```

```

Prior to API version 44.0, to cache data returned from an Apex method, you had to call setStorable() in JavaScript code on every action that called the Apex method. For API version of 44.0 or higher, you can mark the Apex method as storable (cacheable) and get rid of any setStorable() calls in JavaScript code. The Apex annotation approach is better because it centralizes your caching notation for a method in the Apex class.

Call setStorable() on an action in JavaScript code, as follows.

```

```

The setStorable function takes an optional argument, which is a configuration map of key-value pairs representing the storage options and values to set. You can only set the following property:

ignoreExisting

Set to true to bypass the cache. The default value is false.

This property is useful when you know that any cached data is invalid, such as after a record modification. This property should be used rarely because it explicitly defeats caching.

To set the storage options for the action response, pass this configuration map into setStorable(configObj).

-   **[Lifecycle of Storable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_storable_lifecycle.htm)**
    This image describes the sequence of callback execution for storable actions.
-   **[Enable Storable Actions in an Application](atlas.en-us.lightning.meta/lightning/controllers_server_storable_enable.htm)**
    To use storable actions in a standalone app (.app resource), you must configure client-side storage for cached action responses.
-   **[Storage Service Adapters](atlas.en-us.lightning.meta/lightning/storage_adapters.htm)**
    The Storage Service supports multiple implementations of storage and selects an adapter at runtime based on browser support and specified characteristics of persistence and security. Storage can be persistent and secure. With persistent storage, cached data is preserved between user sessions in the browser. With secure storage, cached data is encrypted.

## Code Examples

```apex
@AuraEnabled(cacheable=true)
public static Account getAccount(Id accountId) {
    // your code here
}
```

```
action.setStorable();
```

## Related Topics

- Lifecycle of Storable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_storable_lifecycle.htm)
- Enable Storable Actions in an Application (atlas.en-us.lightning.meta/lightning/controllers_server_storable_enable.htm)
- Storage Service Adapters (atlas.en-us.lightning.meta/lightning/storage_adapters.htm)
