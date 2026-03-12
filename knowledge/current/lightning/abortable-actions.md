---
title: "Abortable Actions"
domain: lightning
topic: abortable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.568Z
estimatedTokens: 716
keywords: [Abortable, Actions, Mark, action, potentially, it's, queued, sent, server, queue, component, created, longer, cmp.isValid, automatically]
---

# Abortable Actions

> Mark an action as abortable to make it potentially abortable
            while it's queued to be sent to the server. An abortable action in the queue is not sent
            to the server if the component that created the action is no longer valid, that is
                cmp.isValid() == false. A component is
            automatically destroyed and marked invalid by the framework when it is
        unrendered.

# Abortable Actions

Mark an action as abortable to make it potentially abortable while it's queued to be sent to the server. An abortable action in the queue is not sent to the server if the component that created the action is no longer valid, that is cmp.isValid() == false. A component is automatically destroyed and marked invalid by the framework when it is unrendered.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

We recommend that you only use abortable actions for read-only operations as they are not guaranteed to be sent to the server.

An abortable action is sent to the server and executed normally unless the component that created the action is invalid before the action is sent to the server.

A non-abortable action is always sent to the server and can't be aborted in the queue.

If an action response returns from the server and the associated component is now invalid, the logic has been executed on the server but the action callback isn’t executed. This is true whether or not the action is marked as abortable.

## Marking an Action as Abortable

Mark a server-side action as abortable by using the setAbortable() method on the Action object in JavaScript. For example:

```

```

#### See Also

-   [Events Fired During the Rendering Lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm "A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.")

-   [Creating Server-Side Logic with Controllers](atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm "The framework supports client-side (JavaScript) and server-side (Apex) controllers. An event is always wired to a client-side controller action, which can in turn call an Apex controller action. For example, a client-side controller might handle an event and call an Apex controller action to persist a record.")

-   [Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm "The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.")

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

## Code Examples

```
var action = cmp.get("c.serverEcho");
action.setAbortable();
```

## Related Topics

- Events Fired During the Rendering Lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
- Creating Server-Side Logic with Controllers (atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm)
- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
