---
title: "Action States"
domain: lightning
topic: action-states
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.600Z
estimatedTokens: 322
keywords: [Action, States, Call, server-side, controller, client-side, different, processing]
---

# Action States

> Call a server-side controller action from a client-side controller. The action can have
  different states during processing.

# Action States

Call a server-side controller action from a client-side controller. The action can have different states during processing.

The possible action states are:

NEW

The action was created but is not in progress yet

RUNNING

The action is in progress

SUCCESS

The action executed successfully

ERROR

The server returned an error

INCOMPLETE

The server didn’t return a response. The server might be down or the client might be offline. The framework guarantees that an action’s callback is always invoked as long as the component is valid. If the socket to the server is never successfully opened, or closes abruptly, or any other network error occurs, the XHR resolves and the callback is invoked with state equal to INCOMPLETE.

ABORTED

The action was aborted. This action state is deprecated. A callback for an aborted action is executed only if you explicitly add a handler for it.

#### See Also

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

## Related Topics

- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
