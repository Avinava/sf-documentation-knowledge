---
title: "Advanced Retrieves via WSProxy"
domain: mc-programmatic-content
topic: advanced-retrieves-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:27.388Z
estimatedTokens: 519
keywords: [Advanced, Retrieves, via, WSProxy, perform, complex, including, ability, retrieve, SOAP, RetrieveOptions, Pagination]
---

# Advanced Retrieves via WSProxy

> You can perform more complex retrieves, including the ability to set other properties on the retrieve request, including SOAP RetrieveOptions.

# Advanced Retrieves via WSProxy

You can perform more complex retrieves, including the ability to set other properties on the retrieve request, including SOAP RetrieveOptions.

-   The first three parameters are the same as the parameters in simple retrieves.
-   The fourth parameter specifies the properties on the RetrieveOptions on the request.
-   The fifth parameter specifies any remaining properties to set on the request. These properties include “QueryAllAccounts”, “RepeatLastResult”, “RepeatAllSinceLastBatch”, and so on.

> In this example, the “BatchSize” RetrieveOption property is not a valid value. It is merely an example of how the properties could be set.

```
var prox = new Script.Util.WSProxy();
var props = { QueryAllAccounts: true };
var cols = ["Name","CustomerKey","CategoryID","IsSendable"];
var filter = {
    Property: "CategoryID",
    SimpleOperator: "equals",
    Value: 101367
};
var opts = {
    BatchSize: 25
};
var data = prox.retrieve("DataExtension", cols, filter, opts, props);
```

## Pagination of Retrieves

To retrieve more pages, use the getNextBatch function.

-   The first parameter is the object type.
-   The second parameter is the RequestID from any previous retrieve.

This example loops through every email in an account and writes the Name property, then outputs the total number returned after outputting all of the items.

```
var prox = new Script.Util.WSProxy(),
    objectType = "Email",
    cols = ["Name"],
    moreData = true,
    reqID = null,
    numItems = 0;

while(moreData) {
    moreData = false;
    var data = reqID == null ?
           prox.retrieve(objectType, cols) :
           prox.getNextBatch(objectType, reqID);

    if(data != null) {
        moreData = data.HasMoreRows;
        reqID = data.RequestID;
        if(data && data.Results) {
            for(var i=0; i< data.Results.length; i++) {
                Platform.Response.Write(data.Results[i].Name);
                numItems++;
            }
        }
    }
}
Platform.Response.Write("<br />" + numItems + " total " + objectType);
```
