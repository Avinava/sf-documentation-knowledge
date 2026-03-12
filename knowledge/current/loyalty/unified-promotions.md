---
title: "Unified Promotions"
domain: loyalty
topic: unified-promotions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.715Z
estimatedTokens: 546
keywords: [Unified, Promotions, Output, representation, promotion]
---

# Unified Promotions

> Output representation of the promotion details.

# Unified Promotions

Output representation of the promotion details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalFieldValues | Additional Attributes Output | Additional details of the promotion. | Small, 60.0 | 60.0 |
| businessUnit | Name And Id Output [] | ID or name of the Marketing Cloud business unit associated with the promotion. | Small, 60.0 | 60.0 |
| currencyIsoCode | String | ISO code of the active currency associated with the promotion. | Small, 60.0 | 60.0 |
| description | String | Description of the promotion. | Small, 60.0 | 60.0 |
| displayName | String | Display name of the promotion. | Small, 60.0 | 60.0 |
| endDateTime | String | Date and time until which the promotion can be applied for customers. | Small, 60.0 | 60.0 |
| id | String | ID of the promotion. | Small, 60.0 | 60.0 |
| isAutomatic | Boolean | Indicates whether the promotion is automatically applied for eligible carts (true) or not (false). | Small, 63.0 | 63.0 |
| isEmailActivated | Boolean | Indicates whether the promotion's email has been activated (true) or not (false). | Small, 60.0 | Small, 60.0 |
| loyaltyProgram | String | Loyalty program associated with the promotion. | Small, 60.0 | 60.0 |
| name | String | Unique name of the promotion. | Small, 60.0 | 60.0 |
| objective | String | Objective of the promotion. | Small, 60.0 | 60.0 |
| priorityNumber | Integer | Number that determines the priority of the promotion in a list of eligible promotions. | Small, 60.0 | 60.0 |
| promotionCode | String | Promotion code of the promotion. | Small, 60.0 | 60.0 |
| promotionEligibility | Promotion Eligibility Output | Eligibility criteria of the promotion. | Small, 60.0 | 60.0 |
| promotionLimits | Promotion Limit Output | Limits for the promotion. | Small, 60.0 | 60.0 |
| ruleLibrary | String | Rule library associated with the promotion. | Small, 62.0 | 62.0 |
| startDateTime | String | Start date and time of the promotion | Small, 60.0 | 60.0 |
| termsAndConditions | String | Terms and conditions which are applied to the promotion. | Small, 63.0 | 63.0 |

## Code Examples

```
{
   "additionalFieldValues":{
      "attributes":{
         "isUnifiedPromotion__c":"true"
      }
   },
   "description":"Buy 2 Get 1 free",
   "displayName":"Sample Promotion",
   "endDateTime":"2023-12-30T00:00:00.000Z",
   "id":"0c8SB0000000rCPYAY",
   "loyaltyProgram":{
      "id":"0lpSB00000001If",
      "name":"Program-001"
   },
   "name":"Free Beverage",
   "objective":"To increase sales",
   "priorityNumber":1,
   "promotionEligibility":{
      "eligibleChannels":[
         {
            "channelType":"Offline",
            "retailLocationGroup":{
               "id":"0Y2SB000000004r",
               "name":"test"
            },
            "store":{
               "id":"0YQSB000000006T",
               "name":"test Store"
            }
         }
      ],
      "eligibleCustomerEvents":{
         "event":"MemberBirthday",
         "eventPeriodUnit":"Date"
      },
      "eligibleEnrollmentPeriod":{
         "enrollmentEndDate":"2023-12-30T00:00:00.000Z",
         "enrollmentStartDate":"2023-06-30T00:00:00.000Z",
         "isEnrollmentRequired":true
      },
      "eligibleLoyaltyTiers":[
         {
            "tier":{
               "id":"0lgSB00000000srYAA",
               "name":"Silver"
            },
            "tierGroup":{
               "id":"0ltSB00000000T3YAI",
               "name":"Group-001"
            }
         }
      ],
      "eligibleProductCategories":[
         {
            "id":"0ZGSB0000002td7",
            "name":"Beverages"
         }
      ],
      "eligibleProducts":[
         {
            "id":"01tSB0000008Lth",
            "name":"Coke"
         }
      ]
   },
   "promotionLimits":{
      "liabilityLimit":10000,
      "loyaltyProgramCurrency":{
         "id":"NQP",
         "name":"0lcSB00000001Tx"
      },
      "perCartLimit":5,
      "perLineItemLimit":10,
      "pointsPerCustomerLimit":5,
      "usePerCustomerLimit":5,
      "vouchersLimit":100,
      "vouchersPerCustomerLimit":5
   },
   "startDateTime":"2023-06-30T00:00:00.000Z"
}
```

## Related Topics

- Additional Attributes Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_additional_attributes_output.htm)
- Name
                  And Id Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_name_and_id_output.htm)
- Promotion Eligibility Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_eligibility_output.htm)
- Promotion Limit Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_limit_output.htm)
