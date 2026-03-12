---
title: "Inventory Actions Result"
domain: automotive-cloud
topic: inventory-actions-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.850Z
estimatedTokens: 132
keywords: [Inventory, Actions, Result, Output, representation, results, vehicle, transfer, action, search]
---

# Inventory Actions Result

> Output representation of the results for the vehicle inventory
      transfer action search.

# Inventory Actions Result

Output representation of the results for the vehicle inventory transfer action search.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Map<String, String> | Details of the error message returned if the request failed to retrieve the product transfer action. | Small, 59.0 | 59.0 |
| results | Map<String, String> | Details of the retrieved product transfer records. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "errors": {},
  "results": {
    "0jRxx00000000rG": "0Luxx0000004Cc4CAE",
    "0jRxx00000000sr": "0Luxx0000004Cc4CAE"
  }
}
```
