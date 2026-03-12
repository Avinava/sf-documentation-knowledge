---
title: "Rating Options Input"
domain: insurance-developer-guide
topic: rating-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.992Z
estimatedTokens: 249
keywords: [Rating, Options, Input, representation, service]
---

# Rating Options Input

> Input representation details of rating service options.

# Rating Options Input

Input representation details of rating service options.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| executeConfiguration​Rules | Boolean | Indicates whether to execute configuration rules. | Optional | 63.0 |
| executePricing | Boolean | Indicates whether to execute pricing. | Optional | 63.0 |
| pricingProcedure | String | Name of the associated pricing procedure.This property is deprecated in API version 66.0 and later. | Optional | 63.0 |
| returnContext​JSON | Boolean | Indicates whether context details must be shown in the response (true) or not (false). | Optional | 66.0 |
| returnProduct​Details | Boolean | Indicates whether product details must be shown in the response (true) or not (false). | Optional | 66.0 |
| returnRating​Results | Boolean | Indicates whether rating results must be shown in the response (true) or not (false). | Optional | 66.0 |

## Code Examples

```
{
  "ratingOptions": {
    "executeConfigurationRules": true,
    "executePricing": true,
    "returnContextJSON": true,
    "returnProductDetails": true
  }
}
```
