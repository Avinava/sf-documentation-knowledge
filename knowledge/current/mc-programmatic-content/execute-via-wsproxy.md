---
title: "Execute via WSProxy"
domain: mc-programmatic-content
topic: execute-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:22.838Z
estimatedTokens: 189
keywords: [Execute, via, WSProxy, action, function]
---

> To execute an action, use the execute function.

# Execute via WSProxy

To execute an action, use the execute function.

-   The first parameter is an array of Name/Value parameters to include in the call.
-   The second parameter is the name of the execute request.

## Example Request

This example shows the parameters but is not a working example.

```
var prox = new Script.Util.WSProxy();
var props = [
   { Name: "SomeName", Value: "SomeValue" }
];
var data = prox.execute(props, "Name of the execute request");
```

## Example Response

The returned object has three properties, “Status”, “RequestID”, and “Results.” The results contain properties from the SOAP ExecuteResponse items.

```
{
    "Status": "OK",
    "RequestID": "fb768ddc-6670-4183-8b9d-4f0d5518bb2e",
    "Results": [...]
}
```
