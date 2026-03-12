---
title: "Group Rating Input"
domain: insurance-developer-guide
topic: group-rating-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.834Z
estimatedTokens: 153
keywords: [Group, Rating, Input, representation, Benefits, API]
---

# Group Rating Input

> Input representation for the Group Benefits Group Rating API.

# Group Rating Input

Input representation for the Group Benefits Group Rating API.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| batchSize | Integer | Number of records to process in each batch for the rating calculation.The default value is 5. | Optional | 65.0 |
| quoteLineItemIds | String[] | List of quote line item IDs of the root plan. | Optional | 65.0 |
| ratingDate | String | Date to use for the rating calculation. If not specified, the API uses the effective date of the quote. | Optional | 65.0 |

## Code Examples

```
{
  "batchSize": 200,
  "quoteLineItemIds": [
    "0qvp00000004C9wAAE"
  ],
  "ratingDate": "2025-01-01"
}
```
