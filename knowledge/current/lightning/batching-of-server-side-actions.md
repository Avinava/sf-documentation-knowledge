---
title: "Batching of Server-side Actions"
domain: lightning
topic: batching-of-server-side-actions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.573Z
estimatedTokens: 956
keywords: [Batching, Server-side, Actions, Multiple, queued, batched, together, group, sent, server, XHR, minimize, network, round, trips]
---

# Batching of Server-side Actions

> Multiple queued actions are batched together into a group, and then sent to the server
  in a single request (XHR) to minimize network round trips. The batching of actions is also known
  as boxcar’ing, similar to a train that couples boxcars together.

# Batching of Server-side Actions

Multiple queued actions are batched together into a group, and then sent to the server in a single request (XHR) to minimize network round trips. The batching of actions is also known as boxcar’ing, similar to a train that couples boxcars together.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

The framework doesn’t guarantee any specific order of execution of actions or action callbacks. XHR responses can return in a different order than the order in which the XHR requests were sent due to server processing time. If two actions must execute sequentially, the component must orchestrate the ordering. For example, the component can enqueue the first action. Then, in the first action’s callback, the component can enqueue the second, dependent action.

All actions sent in the same boxcar are processed in one transaction. If you see an error for “uncommitted work pending”, it’s possible that a later action can’t be completed due to uncommitted work for an earlier action in the same transaction. For example, if the first action updates a record, an Apex callout in a second action can’t be completed due to the uncommitted work from the first action.

The server returns the XHR response to the client when **all** actions have been processed on the server. If a long-running action is in the boxcar, the XHR response is held until that long-running action completes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Set a long-running action as a background action to send that action separately from foreground actions. The separate transmission ensures that the background action doesn’t impact the response time of the foreground actions. The motivation for background actions is to isolate long-running actions into a separate request to avoid slowing the response for foreground actions. See [Foreground and Background Actions](atlas.en-us.lightning.meta/lightning/controllers_server_background_actions.htm "Actions run in the foreground by default. You can set an action to run in the background. This feature is useful if you want your app to remain responsive to a user while it executes a low priority, long-running action. A rough guideline is to use a background action if it takes more than a few seconds for the response to return from the server.") for additional details.

-   **[Boxcar Grouping and Optimization](atlas.en-us.lightning.meta/lightning/controllers_server_actions_boxcar_dynamic.htm)**
    On the client, the Aura Framework uses a process called *boxcar’ing* to group together multiple server-side controller actions into one network request. Boxcar’ing requests uses network resources more efficiently than sending each action separately.
-   **[Manage Synchronous Action Dependencies](atlas.en-us.lightning.meta/lightning/controllers_server_actions_manage_dependencies.htm)**
    When your code has dependencies that require a prior action to complete, don’t call the dependent actions until the earlier action completes. For example, render a dependent element conditionally, based on the result of the earlier action being available. Or call the dependent action from the earlier action’s callback function. This ensures that the dependent call isn’t made until after the earlier call completes.
-   **[Disable Dynamic Boxcar Optimization for Aura Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_disable_boxcar_optimization.htm)**
    Dynamic boxcar optimization improves performance for most Lightning components and apps, including Lightning Experience itself. If your org has components that are adversely affected by dynamic boxcar optimization, you can disable it for your org in Setup.

## Related Topics

- Foreground and Background Actions (atlas.en-us.lightning.meta/lightning/controllers_server_background_actions.htm)
- Boxcar Grouping and Optimization (atlas.en-us.lightning.meta/lightning/controllers_server_actions_boxcar_dynamic.htm)
- Manage Synchronous Action Dependencies (atlas.en-us.lightning.meta/lightning/controllers_server_actions_manage_dependencies.htm)
- Disable Dynamic Boxcar Optimization for Aura Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_disable_boxcar_optimization.htm)
