---
title: "Queuing of Server-Side Actions"
domain: lightning
topic: queuing-of-server-side-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.597Z
estimatedTokens: 677
keywords: [Queuing, Server-Side, Actions, framework, queues, sending, server, grouped, together, batches, sent, process, reduce, network, traffic]
---

# Queuing of Server-Side Actions

> The framework queues up actions before sending them to the server. Actions are grouped
            together into batches, and then sent to the server together. This process enables the
            framework to reduce network traffic by batching multiple actions into fewer, more
            efficient requests.

# Queuing of Server-Side Actions

The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.

The framework uses a stack to track the actions to send to the server. When the browser finishes processing events and JavaScript on the client, enqueued actions on the stack are sent to the server in a batch, or boxcar. Multiple actions sent in the same boxcar are processed in one transaction.

This mechanism is largely transparent to you when you’re writing code, as long as you follow a few simple guidelines. The most important thing to keep in mind is that actions and responses are asynchronous. Responses to actions can return in a different order than they were sent. If one action depends on the results of another, **you** must manage the sequence and timing of the actions in your code. See [Batching of Server-side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_batching.htm "Multiple queued actions are batched together into a group, and then sent to the server in a single request (XHR) to minimize network round trips. The batching of actions is also known as boxcar’ing, similar to a train that couples boxcars together.") for more details and guidelines.

-   **[Batching of Server-side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_batching.htm)**
    Multiple queued actions are batched together into a group, and then sent to the server in a single request (XHR) to minimize network round trips. The batching of actions is also known as boxcar’ing, similar to a train that couples boxcars together.
-   **[Foreground and Background Actions](atlas.en-us.lightning.meta/lightning/controllers_server_background_actions.htm)**
    Actions run in the foreground by default. You can set an action to run in the background. This feature is useful if you want your app to remain responsive to a user while it executes a low priority, long-running action. A rough guideline is to use a background action if it takes more than a few seconds for the response to return from the server.

#### See Also

-   [Action Limits and Considerations](atlas.en-us.lightning.meta/lightning/controllers_server_actions_limits.htm "Keep the following limits and other considerations in mind when using server-side actions.")

-   [Action States](atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm "Call a server-side controller action from a client-side controller. The action can have different states during processing.")

## Related Topics

- Batching of Server-side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_batching.htm)
- Foreground and Background Actions (atlas.en-us.lightning.meta/lightning/controllers_server_background_actions.htm)
- Action Limits and Considerations (atlas.en-us.lightning.meta/lightning/controllers_server_actions_limits.htm)
- Action States (atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm)
