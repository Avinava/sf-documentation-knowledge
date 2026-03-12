---
title: "Rating Options"
domain: insurance-developer-guide
topic: rating-options
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.764Z
estimatedTokens: 186
keywords: [Rating, Options, Output, representation]
---

# Rating Options

> Output representation of the rating options that are returned in the
  response.

# Rating Options

Output representation of the rating options that are returned in the response.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| executeConfiguration​Rules | Boolean | Indicates whether to execute the configuration rules (true) or not (false). | Big, 66.0 | 66.0 |
| executePricing | Boolean | Indicates whether to execute the pricing (true) or not (false). | Big, 66.0 | 66.0 |
| returnContext​JSON | Boolean | Indicates whether to return the context JSON (true) or not (false). | Big, 66.0 | 66.0 |
| returnProduct​Details | Boolean | Indicates whether to return the product details (true) or not (false). | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "executeConfigurationRules": true,
  "executePricing": true,
  "returnContextJSON": true,
  "returnProductDetails": true
}
```
