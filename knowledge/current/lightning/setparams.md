---
title: "setParams()"
domain: lightning
topic: setparams
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.633Z
estimatedTokens: 160
keywords: [setParams, action, pass, data, Apex, event, doesn’t, modify, already, fired]
---

# setParams()

> Sets parameters for an action. Use parameters to pass data to an Apex
   action.

# setParams()

Sets parameters for an action. Use parameters to pass data to an Apex action.

## Signature

setParams (Object config)

## Parameters

config

Type: Object

The key-value pairs for action parameters. For example { "record": id, "name": name}.

#### See Also

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

## Related Topics

- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
