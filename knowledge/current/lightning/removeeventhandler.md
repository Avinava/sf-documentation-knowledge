---
title: "removeEventHandler()"
domain: lightning
topic: removeeventhandler
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.705Z
estimatedTokens: 179
keywords: [removeEventHandler, Dynamically, removes, component, event, handler]
---

# removeEventHandler()

> Dynamically removes a component event handler for the specified
   event.

# removeEventHandler()

Dynamically removes a component event handler for the specified event.

## Signature

removeEventHandler(String event, function handler, String phase)

## Parameters

event

Type: String

The name of the event to remove; for example, 'c:myEvent'.

handler

Type: function

A reference to the function or action to remove; for example., 'cmp.getReference("c.handleMyEvent");'.

phase

Type: String

Optional. The event bubbling phase for which to remove the handler. The default value is "default".

#### See Also

-   [addEventHandler()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addEventHandler.htm "Dynamically adds an event handler for a component or application event.")

## Related Topics

- addEventHandler() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addEventHandler.htm)
