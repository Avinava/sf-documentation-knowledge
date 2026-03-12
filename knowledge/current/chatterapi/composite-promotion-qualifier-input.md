---
title: "Composite Promotion Qualifier Input"
domain: chatterapi
topic: composite-promotion-qualifier-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.617Z
estimatedTokens: 291
keywords: [Composite, Promotion, Qualifier, Input, representation]
---

# Composite Promotion Qualifier Input

> Input representation of the promotion qualifier.

# Composite Promotion Qualifier Input

Input representation of the promotion qualifier.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| approaching​DiscountThreshold | String | The cart amount that a customer has to reach before seeing an approaching discount message. For example, if a promotion qualifier minimum is set at $150 and this field is set at $50, then a customer receives a banner notification that they’re approaching the discount when they have at least $50 in their cart. | Small, 64.0 | 64.0 |
| currencyIso​Code | String | Three-letter ISO 4217 currency code associated with the promotion qualifier. | Optional | 62.0 |
| qualifier​References | Item Reference Input[] | List of product or category for the promotion qualifier. | Optional | 62.0 |
| qualifierType | String | Type of the promotion qualifier. Possible values are:Amount—Minimum spend amount.Quantity—Minimum quantity. | Optional | 62.0 |
| qualifierValue | Double | Value for the promotion qualifier. For example, if qualifier type is Quality, the value can be "3". | Optional | 62.0 |

## Code Examples

```
[
   {
      "currencyIsoCode": "USD",
      "qualifierReferences": [
         {
            "id": "01tSB0000002p01YAA",
            "itemReferenceType": "Product",
            "name": "Alpine Energy Drink Chai Post 0.5L PET - 6 pack",
            "operatorType": "EQUALS_TO"
         }
      ],
      "qualifierType": "Quantity",
      "qualifierValue": 2
   }
]
```

## Related Topics

- Item Reference
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_item_reference_input.htm)
