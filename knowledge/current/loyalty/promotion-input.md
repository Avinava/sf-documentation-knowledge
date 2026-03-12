---
title: "Promotion Input"
domain: loyalty
topic: promotion-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.968Z
estimatedTokens: 111
keywords: [Promotion, Input, representation]
---

# Promotion Input

> Input representation details of a promotion.

# Promotion Input

Input representation details of a promotion.

JSON example for POST and PUT

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| promotionDetails | Unified Promotions Input[] | Configuration of the promotion | Required | 64.0 |
| rules | Unified Promotion Template Input[] | List of rules that are configured for a promotion. | Required | 64.0 |

## Code Examples

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
        "name":"NTO"
      },
      "additionalFieldValues": {
          "attributes": {
              "isUnifiedPromotion__c": true
          }  
      },
      "promotionEligibility":{
          "productCatalog": {
              "id":"0ZSxx000000001dGAA"
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
          "eligibleCustomerEvents":{
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
      "promotionLimits":{
          "perLineItemLimit": 10,
          "pointsPerCustomerLimit": 5,
          "vouchersPerCustomerLimit": 5,
          "perCartLimit": 5,
          "usePerCustomerLimit" : 5,
          "totalUseLimit" : 25,
          "pointsLimit": 1000,
          "vouchersLimit": 100,
          "liabilityLimit": 10000,
          "loyaltyProgramCurrency": {
              "id":"0lcxx0000000001AAA"
          }
      }
  },
  "rules": [
        {
            "templateName": "BuyXToGetRewards",
            "ruleName": "123",
            "priority": 1,
            "eventConfiguration": [
                {
                    "allOf": [
                        {
                            "anyOf": {
                                "purchaseType": "Product",
                                "applicablePurchaseList": [
                                    {
                                        "name": "Veg Burger"
                                    }
                                ],
                                "purchaseCriteria": {
                                    "type": "Quantity",
                                    "value": 1
                                }
                            }
                        }
                    ]
                }
            ],
            "rewardConfiguration": [
                {
                    "type": "ProvideDiscount",
                    "rewardDetails": {
                        "discountValue": "100",
                        "discountType": "PercentageOff"
                    },
                    "targetAudience": {
                        "audienceType": "LoyaltyTierMembers",
                        "audienceDetails": {
                            "tierGroup": {
                                "name": "Default"
                            },
                            "tier": {
                                "name": "Silver"
                            }
                        }
                    }
                },
                {
                    "type": "IssueVoucher",
                    "rewardDetails": {
                        "voucherDefinition": {
                        "name": "GET 10% OFF"
                        },
                        "voucherExpirationDate": "2020-10-10"
                    },
                    "targetAudience": {
                        "audienceType": "AllLoyaltyMembers"
                    }
                }
            ]
        }
    ]

}
```

## Related Topics

- Unified
                        Promotions Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_unified_promotions_input.htm)
- Unified
                        Promotion Template Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_unified_promotion_template_input.htm)
