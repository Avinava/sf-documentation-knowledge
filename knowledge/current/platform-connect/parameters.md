---
title: "Parameters"
domain: platform-connect
topic: parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.529Z
estimatedTokens: 189
keywords: [JSON-formatted, containing, context, developer, Visualforce, tag, apex, canvasApp, component, Chatter, canvas, feed, item, variable, cre]
---

# Parameters

> The Parameters object
is a JSON-formatted object containing context information specified
by the developer. The Parameters object is specified in a Visualforce page by using the parameters tag in the apex:canvasApp component,
or in a Chatter canvas feed item by using the parameters variable when cre

# Parameters

The Parameters object is a JSON-formatted object containing context information specified by the developer. The Parameters object is specified in a Visualforce page by using the parameters tag in the apex:canvasApp component, or in a Chatter canvas feed item by using the parameters variable when creating the feed item.

The following code snippet shows an example of the Parameters object.

```

```

#### See Also

-   [Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)

-   [apex:canvasApp Component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm "Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.")

## Code Examples

```
"parameters":
{
    "inventoryStatus":"Picked",
    "stockPrice":"12.99",
    "count":2, 
    "address":{"street":"1 Market", "city":"San Francisco", "state":"CA"}
}
```

## Related Topics

- Environment (atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)
- apex:canvasApp Component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)
