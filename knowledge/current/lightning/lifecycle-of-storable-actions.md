---
title: "Lifecycle of Storable Actions"
domain: lightning
topic: lifecycle-of-storable-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.655Z
estimatedTokens: 599
keywords: [Lifecycle, Storable, Actions, image, sequence, callback, execution, Cache, Miss, Hit]
---

# Lifecycle of Storable Actions

> This image describes the sequence of callback execution for storable
  actions.

# Lifecycle of Storable Actions

This image describes the sequence of callback execution for storable actions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

An action might have its callback invoked more than once:

-   First with the cached response, if it’s in storage.
-   Second with updated data from the server, if the stored response has exceeded the time to refresh entries.

![Storable Action Lifecycle](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fstorable_action_lifecycle.png&folder=lightning)

## Cache Miss

If the action is not a cache hit as it doesn’t match a storage entry:

1.  The action is sent to the server-side controller.
2.  If the response is SUCCESS, the response is added to storage.
3.  The callback in the client-side controller is executed.

## Cache Hit

If the action is a cache hit as it matches a storage entry:

1.  The callback in the client-side controller is executed with the cached action response.
2.  If the response has been cached for longer than the refresh time, the storage entry is refreshed.

    When an application enables storable actions, a refresh time is configured. The refresh time is the duration in seconds before an entry is refreshed in storage. The refresh time is automatically configured in Lightning Experience and the Salesforce mobile app.

3.  The action is sent to the server-side controller.
4.  If the response is SUCCESS, the response is added to storage.
5.  If the refreshed response is different from the cached response, the callback in the client-side controller is executed for a second time.

#### See Also

-   [Storable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm "Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.")

-   [Enable Storable Actions in an Application](atlas.en-us.lightning.meta/lightning/controllers_server_storable_enable.htm "To use storable actions in a standalone app (.app resource), you must configure client-side storage for cached action responses.")

## Related Topics

- Storable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm)
- Enable Storable Actions in an Application (atlas.en-us.lightning.meta/lightning/controllers_server_storable_enable.htm)
