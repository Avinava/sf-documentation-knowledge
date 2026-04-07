---
title: "Basic Retrieves via WSProxy"
domain: mc-programmatic-content
topic: basic-retrieves-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.392Z
estimatedTokens: 730
keywords: [Basic, Retrieves, via, WSProxy, offers, several, retrieve, options, depending, level, complexity, simplest, option, array, DataExtensions]
---

# Basic Retrieves via WSProxy

> The WSProxy() object offers several retrieve options, depending on the level of complexity you need. The simplest option takes the type of object as the first parameter, and an array of object property names to retrieve.

# Basic Retrieves via WSProxy

The WSProxy() object offers several retrieve options, depending on the level of complexity you need. The simplest option takes the type of object as the first parameter, and an array of object property names to retrieve.

## Example: Retrieve the First Page of DataExtensions

This example returns the first page of DataExtensions without any filtering. The number of items per page varies depending on item type being requested and your account configuration.

```
var prox = new Script.Util.WSProxy();
var cols = [ "Name", "CustomerKey", "CategoryID", "IsSendable"];
var data = prox.retrieve("DataExtension", cols);
```

## Example Response

The response is an object with four properties from the APiObjects SOAP items. In addition to the standard response properties, retrieved responses include the HasMoreRows property. If this property is set to true, there are more items to be returned. To retrieve the entire data set, perform one or more requests using [pagination](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_WSProxy_advanced_retrieve.htm).

```
{
    "Status": "OK",
    "RequestID": "fb768ddc-6670-4183-8b9d-4f0d5518bb2e",
    "Results": [...],
    "HasMoreRows": false
}
```

## Example: Filter the List of DataExtensions

To filter the list of data extensions returned, add a third parameter to the function that contains a retrieve filter query.

> This filter specification is identical to the filter used by the SSJS Core library.

This example includes a simple filter looking for DataExtension items where the CustomerKey is “ArtistsDE”.

```
var prox = new Script.Util.WSProxy();
var cols = ["Name","CustomerKey","CategoryID","IsSendable"];
var filter = {
    Property: "CustomerKey",
    SimpleOperator: "equals",
    Value: "ArtistsDE"
};
var desc = prox.retrieve("DataExtension", cols, filter);
```

This example includes a complex filter looking for DataExtension items where the CustomerKey is “ArtistsDE” or the Name is “LikeCounter”.

```
var prox = new Script.Util.WSProxy();
var cols = ["Name","CustomerKey","CategoryID","IsSendable"];
var filter = {
    LeftOperand: {
        Property: "CustomerKey",
        SimpleOperator: "equals",
        Value: "ArtistsDE"
    },
    LogicalOperator: "OR",
    RightOperand: {
        Property: "Name",
        SimpleOperator: "equals",
        Value: "LikeCounter"
    }
};
var desc = prox.retrieve("DataExtension", cols, filter);
```

## Example: Retrieve from All Accounts

This example uses a parameter called queryAllAccounts to retrieve data from all accounts.

```
var prox = new Script.Util.WSProxy();
var queryAllAccounts = true;
var cols = ["Name","CustomerKey","CategoryID","IsSendable"];
var filter = {
    Property: "CustomerKey",
    SimpleOperator: "equals",
    Value: "ArtistsDE"
};
var desc = prox.retrieve("DataExtension", cols, filter, queryAllAccounts);
```

## Related Topics

- pagination (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_WSProxy_advanced_retrieve.htm)
