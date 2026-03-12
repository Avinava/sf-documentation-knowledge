---
title: "Product Rating Post Input"
domain: insurance-developer-guide
topic: product-rating-post-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.970Z
estimatedTokens: 266
keywords: [Product, Rating, Post, Input, representation]
---

# Product Rating Post Input

> Input representation of the product rating details.

# Product Rating Post Input

Input representation of the product rating details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | Map of additional fields that must be updated in the quote context. | Required if the generated context ID is used to issue a policy | 63.0 |
| effectiveDate | String | Date used to find the active pricing procedure for pricing. The default value is the current date. | Optional | 63.0 |
| ratingInputs | Rating Input Node[] | JSON that contains the attribute values of each context node. | Required | 63.0 |
| ratingOptions | Rating Options Input[] | Options for rating. | Optional | 63.0 |
| rootProductCodes | String [] | Root product codes that are used with the ratingInputs to create rating result. The created rating result is used as request in the insurance product rating API. | Optional | 66.0 |
| transactionType | String | Name of the transaction processing type. | Required | 63.0 |

## Code Examples

```
{
  "transactionType": "AutoTransactionType",
  "additionalFields": {
    "QuoteAccount": "001ZM000002ZNnBYAW"
  },
  "ratingOptions": {
    "executeConfigurationRules": false
  },
  "ratingInputs": [
    {
      "productCode": "auto",
      "instanceKeys": [
        "Auto1"
      ],
      "attributes": {
        "Make": "BMW",
        "AutoValue": "20000",
        "Year": "2024",
        "Model": "SUV"
      }
    },
    {
      "productCode": "comprehensive",
      "instanceKeys": [
        "Auto1",
        "Comprehensive"
      ],
      "attributes": {
        "Limit": "2000",
        "Deductible": "100"
      }
    }
  ],
  "rootProductCodes": [
    "auto-ECO1x",
    "auto-ECO2x"
  ]
}
```

## Related Topics

- Rating Input Node (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_rating_input_node.htm)
- Rating Options Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_rating_options_input.htm)
