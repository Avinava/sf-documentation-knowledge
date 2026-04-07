---
title: "Describe via WSProxy"
domain: mc-programmatic-content
topic: describe-via-wsproxy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.414Z
estimatedTokens: 158
keywords: [Describe, via, WSProxy, structure, SOAP, API, objects, call, function, either, representing, array, strings, multiple, Data]
---

# Describe via WSProxy

> To return information on the structure of SOAP API objects, use the describe call. The function takes either a string representing the object type to describe, or an array of strings for multiple object types.

# Describe via WSProxy

To return information on the structure of SOAP API objects, use the describe call. The function takes either a string representing the object type to describe, or an array of strings for multiple object types.

## Example: Describe a Data Extension

```
var prox = new Script.Util.WSProxy();
var res = prox.describe("DataExtension");
```

## Example Response

The returned object has two properties, “RequestID” and “Results.” The results contain ObjectDefinition SOAP items that describe the desired object types.

```
{
    "RequestID": "fb768ddc-6670-4183-8b9d-4f0d5518bb2e",
    "Results": [...]
}
```
