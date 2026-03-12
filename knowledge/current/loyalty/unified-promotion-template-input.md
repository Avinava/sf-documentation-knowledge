---
title: "Unified Promotion Template Input"
domain: loyalty
topic: unified-promotion-template-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.003Z
estimatedTokens: 314
keywords: [Unified, Promotion, Template, Input, representation]
---

# Unified Promotion Template Input

> Input representation of the unified promotion template.

# Unified Promotion Template Input

Input representation of the unified promotion template.

JSON example for POST and PUT

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| event​Configuration | Map<String, Object>[] | List of criteria that decides when customers are eligible for the rewards of the promotion rule. | Required | 60.0 |
| journalSubType | String | ID of the journal sub type. | Required when journalType is used | 60.0 |
| journalSub​TypeName | String | Name of the journal sub type. | Required when journalType is used | 64.0 |
| journalType | String | Name of the journal sub type. | Required for loyalty accrual or redemption templates | 60.0 |
| priority | Integer | Priority number of the rule in the promotion. | Required | 60.0 |
| promotionLimit | Integer | Milestone limit of the promotion. | Optional | 63.0 |
| reward​Configuration | Map<String, Object>[] | List of rewards that members get when their activity meets the rule's eligibility criteria. | Required | 60.0 |
| ruleName | String | Name of the promotion rule. | Required | 60.0 |
| templateName | String | Name of the promotion template that's used in a promotion rule. | Required | 60.0 |

## Code Examples

```
{
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
