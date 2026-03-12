---
title: "Rate Adjustments"
domain: revenue-cloud
topic: rate-adjustments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.827Z
estimatedTokens: 322
keywords: [Rate, Adjustments, Output, representation, adjustment]
---

# Rate Adjustments

> Output representation of the details of a rate adjustment.

# Rate Adjustments

Output representation of the details of a rate adjustment.

JSON Example

```

```

If the negotiable property value that’s associated with a rate card entry is blank, then the data is derived from Product Catalog Management. If it isn’t blank, then the data is derived from Rate Management.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | Map<String, Fields Response> | List of optional fields and their values that belong to the rate adjustment object. | Big, 63.0 | 63.0 |
| lowerBound | Double | Minimum quantity for the adjustment to be applicable. | Small, 63.0 | 63.0 |
| name | String | Name of the tier. | Small, 63.0 | 63.0 |
| negotiatedRate​Adjustment​Id | String | ID of the negotiated rate adjustment. | Small, 63.0 | 63.0 |
| rateAdjustment​Id | String | ID of the rate adjustment. | Small, 63.0 | 63.0 |
| rateAdjustment​Type | String | Type of the rate adjustment. | Small, 63.0 | 63.0 |
| rateAdjustment​Value | Double | Value of the rate adjustment. | Small, 63.0 | 63.0 |
| tierUnitOf​Measure | String | Unit of measure representing the tier. | Small, 63.0 | 63.0 |
| upperBound | Double | Maximum quantity for the adjustment to be applicable. | Small, 63.0 | 63.0 |

## Code Examples

```
"rateAdjustments": [
        {
           "fields": {},
           "lowerBound": 0.0,
           "name": null,
           "negotiatedRateAdjustmentId": null,
           "rateAdjustmentId": "1ENxx0000004C9BGAU",
           "rateAdjustmentType": "Percentage",
           "rateAdjustmentValue": 10.0,
           "tierUnitOfMeasure": "USD",
           "upperBound": 50.0
        }
    ]
```

## Related Topics

- Fields Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_fields_output.htm)
