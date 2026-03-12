---
title: "Product Rating Request Input"
domain: insurance-developer-guide
topic: product-rating-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.732Z
estimatedTokens: 283
keywords: [Product, Rating, Input, representation, getting, IDs]
---

# Product Rating Request Input

> Input representation for getting rating input from product IDs.

# Product Rating Request Input

Input representation for getting rating input from product IDs.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | Additional fields to generate rating input. | Optional | 66.0 |
| effectiveDate | Date | Date that's used to find the active pricing procedure for pricing. The default value is the current date. | Optional | 66.0 |
| productIds | String[] | IDs of the products for which you want to generate rating input. | Required | 66.0 |
| ratingDate | Date | Date that's used to calculate rating. | Optional | 66.0 |
| ratingOptions | Rating Options Input | Options to control rating behavior. | Optional | 66.0 |
| rootProduct​Codes | String[] | Root product codes that are used to create rating inputs. | Optional | 66.0 |
| salesTransaction​TypeId | String | ID of the sales transaction type for which you want to generate rating request payload. | Optional | 66.0 |
| transaction​Type | String | Name of the transaction processing type. | Optional | 66.0 |

## Code Examples

```
{
  "productIds": [
    "01txx0000006i3DAAQ"
  ],
  "salesTransactionTypeId": "0YWxx000000001GAAQ",
  "transactionType": "Auto",
  "ratingOptions": {
    "executeConfigurationRules": true,
    "executePricing": true,
    "returnContextJSON": false,
    "returnProductDetails": false
  },
  "effectiveDate": "2025-01-01T00:00:00.000Z",
  "ratingDate": "2025-01-01T00:00:00.000Z",
  "additionalFields": {
    "customField1": "value1"
  },
  "rootProductCodes": [
    "AUTO_POLICY"
  ]
}
```

## Related Topics

- Rating
            Options Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_rating_options_input.htm)
