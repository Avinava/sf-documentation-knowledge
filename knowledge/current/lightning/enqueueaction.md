---
title: "enqueueAction()"
domain: lightning
topic: enqueueaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.723Z
estimatedTokens: 394
keywords: [enqueueAction, Queue, call, Apex, action, framework, queues, actions, sending, server, mechanism, largely, transparent, you’re, writing]
---

# enqueueAction()

> Queue a call to an Apex action . The framework queues up actions
   before sending them to the server. This mechanism is largely transparent to you when you’re
   writing code but it enables the framework to minimize network traffic by batching multiple
   actions into one request (XHR).

# enqueueAction()

Queue a call to an Apex action . The framework queues up actions before sending them to the server. This mechanism is largely transparent to you when you’re writing code but it enables the framework to minimize network traffic by batching multiple actions into one request (XHR).

The batching of actions is also known as boxcar’ing, similar to a train that couples boxcars together.

The framework uses a stack to keep track of the actions to send to the server. When the browser finishes processing events and JavaScript on the client, the enqueued actions on the stack are sent to the server in a batch.

## Signature

enqueueAction (Action action, Boolean background)

## Parameters

action

Type: Action

The action to enqueue.

background

Type: Boolean

Deprecated. Do not use.

#### See Also

-   [Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm "The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.")

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

## Related Topics

- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
