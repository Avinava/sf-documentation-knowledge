---
title: "Adjustment Details"
domain: revenue-cloud
topic: adjustment-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.305Z
estimatedTokens: 137
keywords: [Adjustment, Details, Output, representation, pricing, adjustment, request., rate]
---

# Adjustment Details

> Output representation of a pricing adjustment request.

# Adjustment Details

Output representation of a pricing adjustment request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustments | Map<String, Object>[] | Details of the pricing element. | Small, 60.0 | 60.0 |
| description | String | Description of the pricing element. | Small, 60.0 | 60.0 |
| element​Type | String | Type of the pricing element. | Small, 60.0 | 60.0 |
| name | String | Name of the pricing element. | Small, 60.0 | 60.0 |

## Code Examples

```
"pricingElement": {
      "adjustments": [{
      "adjustmentType": null,
      "adjustmentValue": null
    }],
      "name": "List Price",
      "elementType": "ListPrice"
}
```
