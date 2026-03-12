---
title: "Composite Promotion"
domain: chatterapi
topic: composite-promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.917Z
estimatedTokens: 877
keywords: [Composite, Promotion, Output, representation]
---

# Composite Promotion

> Output representation of the composite promotion information.

# Composite Promotion

Output representation of the composite promotion information.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| active | Boolean | Indicates whether the promotion is active (true) or not (false). | Small, 62.0 | 62.0 |
| areQualItemsExclFromDiscounts | Boolean | Indicates whether qualifying items are excluded from discounts for the promotion (true) or not (false). | Small, 62.0 | 62.0 |
| coupons | Composite Promotion Coupon[] | List of coupons associated with the promotion. | Small, 63.0 | 63.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the promotion. | Small, 62.0 | 62.0 |
| description | String | Description of the promotion. | Small, 62.0 | 62.0 |
| discountOrder | String | Discount order for the promotion. Possible values are:LeastExpensiveMostExpensive | Small, 62.0 | 62.0 |
| discountRestriction | String | Discount restriction for the promotion. Possible values are:LeastExpensiveNone | Small, 62.0 | 62.0 |
| displayName | Promotion Translation | Promotion display name and translated values. | Small, 62.0 | 62.0 |
| endDateTime | String | The date time the promotion ends. | Small, 62.0 | 62.0 |
| exclusivityType | String | Type of exclusivity to be considered when applying the promotion. Possible values are:Class—Class exclusion.Global—Global exclusion.No—No exclusion. | Small, 62.0 | 62.0 |
| generationId | String | ID of the generated promotion. This field is used to display the feedback component and collect promotion feedback when Smart Promotion is enabled. | Small, 62.0 | 62.0 |
| isApproaching​DiscountApplicable | Boolean | Indicates whether the promotion is an approaching discount (true) or not (false). If true, the promotion shows an approaching discount alert. | Small, 64.0 | 64.0 |
| maximumUsageCount | Integer | Number of times the promotion can apply to a cart. | Small, 62.0 | 62.0 |
| name | String | Name of the promotion. | Small, 62.0 | 62.0 |
| objective | String | Objective of the promotion. | Small, 62.0 | 62.0 |
| priorityNumber | Integer | Priority number for the promotion. | Small, 62.0 | 62.0 |
| qualifierCriteria | String | Qualifier criteria for the promotion. Possible values are:All—All the criteria are met.Any—Any of the criteria can be met. | Small, 62.0 | 62.0 |
| qualifiers | Promotion Qualifier[] | List of promotion qualifiers. | Small, 62.0 | 62.0 |
| segments | Promotion Segment[] | List of promotion segments associated with the web store or buyer group. | Small, 62.0 | 62.0 |
| startDateTime | String | The date time the promotion starts. | Small, 62.0 | 62.0 |
| targetCriteria | String | Promotion criteria type. Possible values are:All—All the criteria are met.Any—Any of the criteria can be met. | Small, 62.0 | 62.0 |
| targets | Promotion Target[] | List of promotion targets. | Small, 62.0 | 62.0 |
| termsAndCondition | Promotion Translation | Promotion terms and conditions and translated values. | Small, 62.0 | 62.0 |
| tiered | Boolean | Indicates whether promotion is tiered (true) or not (false). | Small, 62.0 | 62.0 |

#### See Also

-   [*Connect REST API Developer Guide*: Commerce Webstore Composite Promotions](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_composite_promotions.htm "Connect REST API Developer Guide: Commerce Webstore Composite
    Promotions  - HTML (New Window)")

## Code Examples

```
{
  "name": "Buy Tennis racquet, and tennis shoes get 20% off and buy minimum of 2 tennis balls get 10% off",
  "description": "Buy Tennis racquet, and tennis shoes get 20% off and buy minimum of 2 tennis balls get 10% off",
  "currencyIsoCode": "USD",
  "areQualItemsExclFromDiscounts": true,
  "discountOrder": "MostExpensive",
  "discountRestriction": "None",
  "active": false,
  "MaximumUsageCount": 1,
  "PriorityNumber": null,
  "IsTiered": false,
  "Objective": "Upsell tennis products",
  "IsAutomatic": false,
  "startDateTime": "2022-05-09T20:00:00.000+0000",
  "endDateTime": "2022-05-17T19:00:00.000+0000",
  "displayName": {
    "default": "Buy Tennis racquet, and tennis shoes get 20% off and buy minimum of 2 tennis balls get 10% off",
    "translations": [
      {
        "fr": "Achetez un p1, p2 ou p3, obtenez un 2e produit à 20 % de réduction"
      },
      {
        "de": "Kaufen Sie ein p1, p2 oder p3 und erhalten Sie 20 % Rabatt auf ein zweites Produkt"
      }
    ]
  },
  "termsAndConditions": {
    "default": "Buy Tennis racquet, and shoes get 20% off and buy tennis balls get 10% off",
    "translations": [
      {
        "fr": "Achetez un p1, p2 ou p3, obtenez un 2e produit à 20 % de réduction, jusqu'à épuisement des stocks"
      },
      {
        "de": "Kaufen Sie ein p1, p2 oder p3 und erhalten Sie 20% Rabatt auf ein zweites Produkt, solange der Vorrat reicht"
      }
    ]
  },
  "qualifiers": [
    {
      "qualifierType": "Quantity",
      "qualifierValue": "3",
      "currencyIsoCode": "USD",
      "qualifierReference": [
        {
          "name": "Tennis racquet",
          "id": "ODDD12323432423",
          "itemReferenceType": "Product",
          "operatorType": "EQUALS_TO"
        },
        {
          "name": "Tennis shoes",
          "id": "ODDD123234323422",
          "itemReferenceType": "Product",
          "operatorType": "EQUALS_TO"
        }
      ]
    },
    {
      "qualifierType": "Amount",
      "qualifierValue": "100",
      "currencyIsoCode": "USD",
      "qualifierReference": [
        {
          "name": "Tennis Balls",
          "id": "ODDD12323432423",
          "itemReferenceType": "Product",
          "operatorType": "EQUALS_TO"
        }
      ]
    }
  ],
  "targets": [
    {
      "adjustmentType": "PercentageDiscount",
      "adjustmentValue": "20",
      "currencyIsoCode": "USD",
      "isMinItemCountRequired": false,
      "restrictionQuantity": null,
      "ruleCriteriaType": "ANY_REQUIRED",
      "targetReferences": [
        {
          "id": "ODDD12323432423",
          "itemReferenceType": "Product",
          "name": "Tennis racquet",
          "operatorType": "EQUAL_TO"
        }
      ]
    },
    {
      "adjustmentType": "PercentageDiscount",
      "adjustmentValue": "10",
      "currencyIsoCode": "USD",
      "isMinItemCountRequired": false,
      "restrictionQuantity": null,
      "ruleCriteriaType": "ANY_REQUIRED",
      "targetReferences": [
        {
          "id": "ODDD12323432423",
          "itemReferenceType": "Product",
          "name": "Tennis Balls",
          "operatorType": "EQUAL_TO"
        }
      ]
    }
  ],
  "segments": [
    {
      "webstoreId": "0ZExx0000000085GAA",
      "webstoreName": "ABC Store"
    }
  ]
}
```

## Related Topics

- Composite
                  Promotion Coupon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_promotion_coupon.htm)
- Promotion Translation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_translation.htm)
- Promotion
                Qualifier (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_qualifier.htm)
- Promotion
                Segment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_segment.htm)
- Promotion Target (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_promotion_target.htm)
- Promotion
                Translation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_translation.htm)
