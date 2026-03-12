---
title: "getParameters()"
domain: pages
topic: getparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.676Z
estimatedTokens: 133
keywords: [getParameters, map, query, PageReference, POST, included, key, Usage]
---

# getParameters()

> Returns a map of the query string parameters for the PageReference; both POST and GET
        parameters are included. The key string contains the name of the parameter, while the value
        string contains the value of the parameter.

# getParameters()

Returns a map of the query string parameters for the PageReference; both POST and GET parameters are included. The key string contains the name of the parameter, while the value string contains the value of the parameter.

## Signature

public Map<String, String\> getParameters()

## Return Value

Type: Map<String, String>

## Usage

This map can be modified and remains in scope for the PageReference object. For instance, you could do:

```

```

Parameter keys are case-insensitive. For example:

```

```

## Code Examples

```
PageReference.getParameters().put('id', myID);
```

```apex
System.assert(
    ApexPages.currentPage().getParameters().get('myParamName') ==
    ApexPages.currentPage().getParameters().get('myparamname'));
```
