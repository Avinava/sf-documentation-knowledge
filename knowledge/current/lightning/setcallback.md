---
title: "setCallback()"
domain: lightning
topic: setcallback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.628Z
estimatedTokens: 275
keywords: [setCallback, callback, function, executed, Apex, action]
---

# setCallback()

> Sets the callback function that is executed after an Apex action
      returns.

# setCallback()

Sets the callback function that is executed after an Apex action returns.

## Signature

setCallback (Object scope, function callback, String name)

## Parameters

scope

Type: Object

The scope in which the function is executed. Always set this parameter to the keyword this.

callback

Type: function

The callback to invoke after the Apex action returns.

name

Type: String

Defaults to "ALL" which registers callbacks for the "SUCCESS", "ERROR", and "INCOMPLETE" states.

#### See Also

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

-   [Action States](atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm "Call a server-side controller action from a client-side controller. The action can have different states during processing.")

## Related Topics

- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
- Action States (atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm)
