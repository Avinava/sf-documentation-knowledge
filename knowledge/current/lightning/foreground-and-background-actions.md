---
title: "Foreground and Background Actions"
domain: lightning
topic: foreground-and-background-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.640Z
estimatedTokens: 777
keywords: [Foreground, Background, Actions, run, action, feature, useful, want, app, remain, responsive, user, executes, low, priority]
---

# Foreground and Background Actions

> Actions run in the foreground by default. You can set an action to run in the
        background. This feature is useful if you want your app to remain responsive to a user while
        it executes a low priority, long-running action. A rough guideline is to use a background
        action if it takes more than a few seconds for the response to return from the
        server.

# Foreground and Background Actions

Actions run in the foreground by default. You can set an action to run in the background. This feature is useful if you want your app to remain responsive to a user while it executes a low priority, long-running action. A rough guideline is to use a background action if it takes more than a few seconds for the response to return from the server.

When enqueued actions are grouped into boxcars and sent to the server, foreground actions are processed first, followed by background actions. Don’t rely on each background action being sent in its own request as that behavior isn’t guaranteed. On the server, foreground actions run in parallel with background actions, and responses for foreground and background actions can come back in either order.

## Framework-Managed Request Throttling

The framework manages and enqueues foreground and background requests separately. This means that the framework can control the number of foreground requests and the number of background actions running at any time. The framework automatically throttles the rate of sending these requests. Other than setting an action to run in the background, you can’t control the framework’s request processing. The framework manages the number of foreground and background XHRs, which varies depending on available resources and the boxcar’ing strategy enabled in your org.

Even with separate throttling, background actions can affect performance in some conditions, such as when there is an excessive number of requests to the server.

## Setting Background Actions

To set an action as a background action, call the setBackground() method on the action object in JavaScript.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

A background action can’t be set back to a foreground action. setBackground takes no arguments, and calling setBackground more than once has no effect.

#### See Also

-   [Boxcar Grouping and Optimization](atlas.en-us.lightning.meta/lightning/controllers_server_actions_boxcar_dynamic.htm "On the client, the Aura Framework uses a process called boxcar’ing to group together multiple server-side controller actions into one network request. Boxcar’ing requests uses network resources more efficiently than sending each action separately.")

-   [Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm "The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.")

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

## Code Examples

```
// create a server-side action
var action = cmp.get("c.serverEcho");

// optionally set actions params
// action.setParams({ firstName : cmp.get("v.firstName") });

// set as a background action
action.setBackground();
```

## Related Topics

- Boxcar Grouping and Optimization (atlas.en-us.lightning.meta/lightning/controllers_server_actions_boxcar_dynamic.htm)
- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
