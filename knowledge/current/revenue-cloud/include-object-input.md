---
title: "Include Object Input"
domain: revenue-cloud
topic: include-object-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:50.287Z
estimatedTokens: 100
keywords: [Include]
---

> Input representation of the object to include in the response.

# Include Object Input

Input representation of the object to include in the response.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectName | String | Name of the object to include in the response. The supported object is ProductCategory. | Required if the options property is specified. | 60.0 |

## Code Examples

```
"includeObjects": 
[{
"objectName": "ProductCategory"
}]
```
