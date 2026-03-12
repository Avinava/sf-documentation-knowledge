---
title: "Promotion Details (GET, PUT)"
domain: loyalty
topic: promotion-details-get-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.220Z
estimatedTokens: 764
keywords: [Promotion, PUT, Retrieve, record]
---

# Promotion Details (GET, PUT)

> Retrieve the details of a promotion. Update a promotion record.

# Promotion Details (GET, PUT)

Retrieve the details of a promotion. Update a promotion record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

To update an existing promotion, you must first deactivate the promotion in the org.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

GET, PUT

Request body for PUT

Root XML tag

unifiedPromotionsInputRepresentation

JSON example for POST and PUT

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​FieldValues | Map<String, String> | Custom, and additional field values that provide more details about the promotion. | Optional | 60.0 |
| businessUnit | Name And Id Input [] | ID or name of the Marketing Cloud business unit associated with the promotion.To specify a business unit, you must have the Marketing Cloud license. | Optional | 60.0 |
| currency​IsoCode | String | ISO code of the active currency associated with the promotion.Before specifying the currency ISO code, make sure that your org supports multiple currencies. | Optional | 60.0 |
| description | String | Description of the promotion. | Optional | 60.0 |
| displayName | String | Display name of the promotion. | Optional | 60.0 |
| endDateTime | String | Date and time until which the promotion can be applied for customers. | Optional | 60.0 |
| isAutomatic | Boolean | Indicates whether the promotion is automatically applied for eligible carts (true) or not (false). | Optional | 63.0 |
| isEmail​Activated | Boolean | Indicates whether the promotion's email is activated (true) or not (false). If set to true, an email template is created for the promotion's email in the org. The default value is false. | Optional | Small, 60.0 |
| loyaltyProgram | Name And Id Input [] | ID or name of the active loyalty program the promotion applies to.You can’t change the loyalty program of an existing promotion. | Optional | 60.0 |
| name | String | Unique name of the promotion. | Required | 60.0 |
| objective | String | Objective of the promotion. | Optional | 60.0 |
| priority​Number | Integer | Number that determines the priority of the promotion in a list of eligible promotions.Priority number must be greater than zero. | Optional | 60.0 |
| promotionCode | String | Unique code of the promotion. | Optional | 60.0 |
| promotion​Eligibility | Promotion Eligibility Input | Eligibility criteria of the promotion. | Optional | 60.0 |
| promotionLimits | Promotion Limit Input | Limits of the promotion, including the number of times the promotion can be applied for customers.A promotion limit must be greater than zero. | Optional | 60.0 |
| ruleLibrary | String | Rule library associated with the promotion. | Optional | 62.0 |
| startDateTime | String | Date and time from which the promotion can be applied for customers. | Required | 60.0 |
| termsAndConditions | String | Terms and conditions which are applied to the promotion. | Optional | 63.0 |

## Code Examples

```apex
/global-promotions-management/promotions/promotionId
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/promotions/promotionId
```

```
{
  "promotionDetails": {
    "name": "Sample Promotion 6",
    "displayName": "Sample Promotion",
    "priorityNumber": 1,
    "description": "Sample promotion description",
    "promotionCode": "XYZ",
    "startDateTime": "2023-06-30T00:00:00.000Z",
    "endDateTime": "2023-12-30T00:00:00.000Z",
    "objective": "To increase sales",
    "isAutomatic": true,
    "loyaltyProgram": {
      "name": "NTO"
    },
    "additionalFieldValues": {
      "attributes": {
        "isUnifiedPromotion__c": true
      }
    },
    "promotionEligibility": {
      "productCatalog": {
        "id": "0ZSxx000000001dGAA"
      },
      "eligibleProductCategories": [
        {
          "id": "0ZGxx0000000001GAA"
        }
      ],
      "eligibleProducts": [
        {
          "name": "someProduct"
        }
      ],
      "eligibleChannels": [
        {
          "channelType": "***",
          "channel": {
            "id": "***",
            "name": "***"
          },
          "store": {
            "id": "***",
            "name": "***"
          },
          "retailLocationGroup": {
            "name": "***"
          }
        }
      ],
      "eligibleCampaign": {
        "name": "***"
      },
      "eligibleSegments": [
        {
          "name": "someSegment"
        }
      ],
      "eligibleCustomerEvents": {
        "event": "MemberBirthday",
        "eventPeriodUnit": ""
      },
      "eligibleEnrollmentPeriod": {
        "isEnrollmentRequired": true,
        "enrollmentStartDate": "",
        "enrollmentEndDate": ""
      },
      "eligibleLoyaltyPartnerProducts": [
        {
          "name": "",
          "id": ""
        }
      ],
      "eligibleLoyaltyTiers": [
        {
          "tierGroup": {
            "name": "",
            "id": ""
          },
          "tier": {
            "name": "",
            "id": ""
          }
        }
      ],
      "eligibleCoupons": [
        {
          "couponCode": "",
          "status": "",
          "description": "",
          "startDateTime": "",
          "endDateTime": "",
          "redemptionLimitOverall": "",
          "redemptionLimitPerCustomer": ""
        }
      ]
    },
    "promotionLimits": {
      "perLineItemLimit": 10,
      "pointsPerCustomerLimit": 5,
      "vouchersPerCustomerLimit": 5,
      "perCartLimit": 5,
      "usePerCustomerLimit": 5,
      "totalUseLimit": 25,
      "pointsLimit": 1000,
      "vouchersLimit": 100,
      "liabilityLimit": 10000,
      "loyaltyProgramCurrency": {
        "id": "0lcxx0000000001AAA"
      }
    }
  }
}
```

## Related Topics

- Name And Id Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_name_and_id_input.htm)
- Promotion Eligibility Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_eligibility_input.htm)
- Promotion Limit Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_limit_input.htm)
