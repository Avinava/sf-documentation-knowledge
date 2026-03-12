---
title: "Context Information"
domain: omnistudio
topic: context-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.846Z
estimatedTokens: 183
keywords: [Context, Information, Output, representation, containing, detailed, information, context.]
---

# Context Information

> Output representation containing detailed information about a context.

# Context Information

Output representation containing detailed information about a context.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childBusinessObjectTypes | String[] | List of associated child business object types. | Small, 59.0 | 59.0 |
| contextDefinitionId | String | ID of the context definition record. | Small, 59.0 | 59.0 |
| contextId | String | Unique ID of the context. | Small, 59.0 | 59.0 |
| contextMappingId | String | Identifier for the context's mapping structure. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the request was successful (true) or not (false). | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "childBusinessObjectTypes": [
    "Order"
  ],
  "contextDefinitionId": "11Oxx0000006VjNEAU",
  "contextId": "3729ed60-d16d-41b8-8951-9ad4f6407ad2",
  "contextMappingId": "11jxx0000004Q83AAE",
  "isSuccess": true
}
```
