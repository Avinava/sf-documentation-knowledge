---
title: "Product Rating Details Response"
domain: insurance-developer-guide
topic: product-rating-details-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.492Z
estimatedTokens: 325
keywords: [Product, Rating, Output, representation, constructed, payload]
---

# Product Rating Details Response

> Output representation that contains the constructed rating request payload.

# Product Rating Details Response

Output representation that contains the constructed rating request payload.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | Additional custom fields that are used to generate rating request payload. | Big, 66.0 | 66.0 |
| effectiveDate | Date | Date that's used to find the active pricing procedure for pricing. The default value is the current date. | Big, 66.0 | 66.0 |
| ratingDate | Date | Date that's used to calculate rating. | Big, 66.0 | 66.0 |
| ratingInputs | Rating Input Node Response[] | List of the rating input nodes in the hierarchical structure that contains the attribute values of each context node. | Big, 66.0 | 66.0 |
| ratingOptions | Rating Options | Rating options that are used to control the rating behavior for the Insurance Product Rating API. | Big, 66.0 | 66.0 |
| rootProductCodes | String[] | Root product codes that the products belong to for which the rating request payload is created. | Big, 66.0 | 66.0 |
| salesTransaction​TypeId | String | ID of the sales transaction type. | Big, 66.0 | 66.0 |
| transactionType | String | Name of the transaction processing type. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "salesTransactionTypeId": "0YWxx000000001GAAQ",
  "transactionType": "NewBusiness",
  "ratingInputs": [
    {
      "instanceKeys": [
        "autoSilver",
        "auto",
        "comprehensive"
      ],
      "productCode": "comprehensive",
      "attributes": {
        "NumberOfDays": "",
        "Deductible": "100",
        "BodilyInjuryPerPersonLimit": "",
        "PropertyDamagePerAccidentLimit": "",
        "Limit": "1000",
        "BodilyInjuryPerAccidentLimit": ""
      },
      "additionalFields": {}
    }
  ],
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
         Input Node Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_rating_input_node_output.htm)
- Rating
         Options (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_rating_options_output.htm)
