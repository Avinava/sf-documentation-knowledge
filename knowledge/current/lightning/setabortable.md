---
title: "setAbortable()"
domain: lightning
topic: setabortable
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.622Z
estimatedTokens: 257
keywords: [setAbortable, action, abortable, component, actions, sent, server, automatically, destroyed, marked, invalid, framework, unrendered, always, regardless]
---

# setAbortable()

> Sets an action as abortable. If the component is not valid, abortable
   actions are not sent to the server. A component is automatically destroyed and marked invalid by
   the framework when it is unrendered. Actions not marked abortable are always sent to the server
   regardless of the validity of the component.

# setAbortable()

Sets an action as abortable. If the component is not valid, abortable actions are not sent to the server. A component is automatically destroyed and marked invalid by the framework when it is unrendered. Actions not marked abortable are always sent to the server regardless of the validity of the component.

For example, a save or edit action should not be set as abortable to ensure that it’s always sent to the server even if the component is deleted. Setting an action as abortable can’t be undone.

## Signature

setAbortable()

#### See Also

-   [Abortable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_abortable_actions.htm "Mark an action as abortable to make it potentially abortable while it's queued to be sent to the server. An abortable action in the queue is not sent to the server if the component that created the action is no longer valid, that is cmp.isValid() == false. A component is automatically destroyed and marked invalid by the framework when it is unrendered.")

## Related Topics

- Abortable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_abortable_actions.htm)
