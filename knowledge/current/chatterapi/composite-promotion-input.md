---
title: "Composite Promotion Input"
domain: chatterapi
topic: composite-promotion-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.371Z
estimatedTokens: 989
keywords: [Composite, Promotion, Input, representation]
---

# Composite Promotion Input

> Input representation of the create promotion request.

# Composite Promotion Input

Input representation of the create promotion request.

Root XML tag

<createPromotion>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| active | Boolean | Indicates whether the promotion is active (true) or not (false). | Optional | 62.0 |
| areQualItemsExcl​FromDiscounts | Boolean | Indicates whether qualifying items are excluded from discounts for the promotion (true) or not (false). | Optional | 62.0 |
| coupons | Promotion Coupon Input[] | List of coupons associated with the promotion. | Optional | 63.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the promotion. | Optional | 62.0 |
| description | String | Localized display name of the promotion. | Optional | 62.0 |
| discountOrder | String | Discount order for the promotion. Possible values are:LeastExpensiveMostExpensive | Optional | 62.0 |
| discount​Restriction | String | Discount restriction for the promotion. Possible values are:LeastExpensiveNone | Optional | 62.0 |
| displayName | Promotion Translation Input | Promotion display name and translated values. | Optional | 62.0 |
| endDateTime | String | The date time the promotion ends. | Optional | 62.0 |
| exclusivityType | String | Type of exclusivity to be considered when applying the promotion. Possible values are:Class—Class exclusion.Global—Global exclusion.No—No exclusion. | Optional | 62.0 |
| generationId | String | ID of the generated promotion. This field is used to display the feedback component and collect promotion feedback when Smart Promotion is enabled. | Optional | 62.0 |
| isApproaching​DiscountApplicable | Boolean | Indicates whether the promotion is an approaching discount (true) or not (false). If true, the promotion shows an approaching discount alert. | Small, 64.0 | 64.0 |
| maximumUsage​Count | Integer | Number of times a promotion can apply to a cart. | Optional | 62.0 |
| name | String | Name of the promotion. | Required | 62.0 |
| objective | String | Objective for promotion. | Optional | 62.0 |
| priorityNumber | Integer | Priority number for the promotion. | Optional | 62.0 |
| qualifierCriteria | String | Qualifier criteria for the promotion. Possible values are:All—All the criteria are met.Any—Any of the criteria can be met. | Optional | 62.0 |
| qualifiers | Promotion Qualifier Input[] | List of promotion qualifiers. | Optional | 62.0 |
| segments | Promotion Segment Input[] | List of promotion segments associated with the web store or buyer group. | Required | 62.0 |
| startDateTime | String | The date time the promotion starts. | Optional | 62.0 |
| targetCriteria | String | Promotion criteria type. Possible values are:All—All the criteria are met.Any—Any of the criteria can be met. | Optional | 62.0 |
| targets | Promotion Target Input[] | List of promotion targets. | Required | 62.0 |
| termsAnd​Condition | Promotion Translation Input | Promotion terms and conditions and translated values. | Optional | 62.0 |
| tiered | Boolean | Indicates whether promotion is tiered (true) or not (false).If it is a tiered promotion, each tier can have its own set of targets and qualifiers. For example, buy 1 "t-shirt" and get 10% off or buy 2 "t-shirts” and get 20% off. | Optional | 62.0 |

#### See Also

-   [*Connect REST API Developer Guide*: Commerce Webstore Composite Promotions](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_composite_promotions.htm "Connect REST API Developer Guide: Commerce Webstore Composite Promotions  - HTML (New Window)")

-   [*Connect REST API Developer Guide*: Composite Promotion Result](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_responses_composite_promotion_result.htm "Connect REST API Developer Guide: Composite Promotion Result  - HTML (New Window)")

## Code Examples

```
{
   "active": false,
   "areQualItemsExclFromDiscounts": false,
   "currencyIsoCode": "USD",
   "description": "This is fall promotion.Get 10% off on Product &#39;Alpine Energy Drink Chai Post 0.5L PET - 6 pack&#39;",
   "discountOrder": "MostExpensive",
   "discountRestriction": "None",
   "displayName": {
      "translations": {},
      "value": "Fall Promotion"
   },
   "objective": "Upsell product in fall",
   "isTiered": true,
   "endDateTime": null,
   "exclusivityType": "Class",
   "maximumUsageCount": 1,
   "name": "Fall Promotion",
   "priorityNumber": null,
   "qualifierCriteria": "All",
   "segments": [
      {
         "id": "0ZESB0000006vja4AA",
         "name": "Codecept B2B LWR Store",
         "segmentType": "Webstore"
      }
   ],
   "startDateTime": "2023-09-01T00:00:00Z",
   "targetCriteria": "Any",
   "targets": [
      {
         "adjustmentType": "PercentageDiscount",
         "adjustmentValue": "10",
         "currencyIsoCode": "USD",
         "isMinItemCountRequired": false,
         "restrictionQuantity": null,
         "ruleCriteriaType": "ANY",
         "targetReferences": [
            {
               "id": "01tSB0000002p01YAA",
               "itemReferenceType": "Product",
               "name": "Alpine Energy Drink Chai Post 0.5L PET - 6 pack",
               "operatorType": "EQUALS_TO"
            }
         ]
      }
   ],
   "qualifiers": [
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
   ],
   "termsAndCondition": {
      "translations": {},
      "value": "This is fall promotion.Get 10% off on Product &#39;Alpine Energy Drink Chai Post 0.5L PET - 6 pack."
   }
}
```

## Related Topics

- Promotion
                        Coupon Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_coupon_input.htm)
- Promotion
                        Translation
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_translation_input.htm)
- Promotion Qualifier
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_qualifier_input.htm)
- Promotion Segment
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_segment_input.htm)
- Promotion Target
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_target_input.htm)
- Promotion Translation
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_translation_input.htm)
