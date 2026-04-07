---
title: "Delete via WSProxy"
domain: mc-programmatic-content
topic: delete-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:22.830Z
estimatedTokens: 225
keywords: [via, WSProxy, item, several, items, call, deleteItem, deleteBatch, functions, Extension]
---

> To delete a single item or several items of the same type in a single call, use the deleteItem and deleteBatch functions.

# Delete via WSProxy

To delete a single item or several items of the same type in a single call, use the deleteItem and deleteBatch functions.

-   Specify the first two parameters of the delete functions like you do for the create functions.
-   The optional third parameter includes any properties to be set using the SOAP DeleteOptions object.

## Example: Delete a Data Extension

This example deletes a data extension using its ObjectID.

```
var prox = new Script.Util.WSProxy();
var objectID = "c9875a80-4dad-e411-b071-ac7ba13db5bc";

var res = prox.deleteItem("DataExtension", { "ObjectID":objectID });
```

The returned object has the same properties as the Create functions, except the results contain properties from the SOAP DeleteResult items.

## Related Items

[Create via WSProxy](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_WSProxy_create.htm)

## Related Topics

- Create via WSProxy (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_WSProxy_create.htm)
