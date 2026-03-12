---
title: "Insurance Product Rating Details (POST)"
domain: insurance-developer-guide
topic: insurance-product-rating-details-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.241Z
estimatedTokens: 511
keywords: [Insurance, Product, Rating, POST, Generate, input, IDs, generated, API, evaluate, pricing]
---

# Insurance Product Rating Details (POST)

> Generate rating input details from a list of Product IDs, and use the
   generated rating input as the request body for the Insurance Product Rating API to evaluate
   product pricing.

# Insurance Product Rating Details (POST)

Generate rating input details from a list of Product IDs, and use the generated rating input as the request body for the Insurance Product Rating API to evaluate product pricing.

This API retrieves product catalog information and constructs a hierarchical rating input structure based on product relationships. It generates product-specific attributes that's formatted specifically for the [Insurance Product Rating API](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_product_rating.htm "HTML (New Window)").

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Product Rating Details Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_rating_details_output.htm "Output representation that contains the constructed rating request payload.")

## Code Examples

```
/connect/insurance/product-rating/get-rating-input
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-rating/get-rating-input
```

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
- Product Rating Details Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_rating_details_output.htm)
