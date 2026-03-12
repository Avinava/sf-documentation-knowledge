---
title: "API Execution Log Response"
domain: revenue-cloud
topic: api-execution-log-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.316Z
estimatedTokens: 111
keywords: [API, Execution, Log, Response, Output, representation, execution, log, pricing, waterfall, request.]
---

# API Execution Log Response

> Output representation of the execution log of a pricing waterfall request.

# API Execution Log Response

Output representation of the execution log of a pricing waterfall request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String [] | Message of the API execution. | Small, 63.0 | 63.0 |
| pricingElement | Adjustment Details | Details of the price adjustment of a pricing element. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "message": {The Pricing API execution was successful.},
  "pricingElement": {
    "adjustments": [
      {
        "adjustmentType": null,
        "adjustmentValue": null
      }
    ],
    "name": "List Price",
    "elementType": "ListPrice"
  }
}
```

## Related Topics

- Adjustment Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_adjustment_detail.htm)
