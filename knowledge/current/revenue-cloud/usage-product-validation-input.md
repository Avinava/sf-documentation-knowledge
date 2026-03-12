---
title: "Usage Product Validation Input"
domain: revenue-cloud
topic: usage-product-validation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.389Z
estimatedTokens: 148
keywords: [Usage, Product, Validation, Input, representation]
---

# Usage Product Validation Input

> Input representation of the usage product validation request.

# Usage Product Validation Input

Input representation of the usage product validation request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productIds | String[] | List of product IDs to be validated. The maximum limit is 10 valid product IDs. | Required | 66.0 |
| startDate | String | Start date of the date range in which all active records are validated. | Optional | 66.0 |
| endDate | String | End date of the date range in which all active records are validated. | Optional | 66.0 |

## Code Examples

```
{
  "productIds": [
    "01txx0000006i2gAAA",
    "01txx0000006j2gAAA"
  ],
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-12-31T23:59:59Z"
}
```
