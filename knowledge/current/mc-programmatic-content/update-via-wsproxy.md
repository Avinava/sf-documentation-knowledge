---
title: "Update via WSProxy"
domain: mc-programmatic-content
topic: update-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:27.429Z
estimatedTokens: 405
keywords: [via, WSProxy, item, several, items, call, updateItem, updateBatch, functions, Data, Extension, Upsert]
---

# Update via WSProxy

> To update a single item or several items of the same type in a single call, use the updateItem and updateBatch functions.

# Update via WSProxy

To update a single item or several items of the same type in a single call, use the updateItem and updateBatch functions.

-   Specify the first two parameters of the update functions like you do for the create functions.
-   The optional third parameter includes any properties to be set using the SOAP UpdateOptions object.

## Example 1: Update a Data Extension

This example renames a data extension using its ObjectID.

```
var prox = new Script.Util.WSProxy();
var objectID = "c9875a80-4dad-e411-b071-ac7ba13db5bc";
var name = "Renamed DE";

var res = prox.updateItem("DataExtension", { "ObjectID":objectID, "Name":name });
```

The returned object has the same properties as the Create functions, except the results contain properties from the SOAP UpdateResult items.

## Example 2: Upsert to Data Extension

```
var api = new Script.Util.WSProxy();

    /* Build DE Object */
    var updateObject = {
        CustomerKey: 'DE_Example',
        Properties: [
             {
                Name: 'FirstName',
                Value: 'Tester'
            },
             {
                Name: 'LastName',
                Value: 'Testerson'
            },
             {
                Name: 'ModifiedDate',
                Value: Platform.Function.Now()
            }
        ]
    };

    var options = {SaveOptions: [{'PropertyName': '*', SaveAction: 'UpdateAdd'}]};

    var res = api.updateItem('DataExtensionObject', updateObject, options);
```

## Related Items

[Create via WSProxy](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_WSProxy_create.htm)

## Related Topics

- Create via WSProxy (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_WSProxy_create.htm)
