---
title: "Create Promotions (GET, POST, PUT)"
domain: revenue-cloud
topic: create-promotions-get-post-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:04.168Z
estimatedTokens: 135
keywords: [Promotions, POST, PUT, rewards, product, selling, model, template]
---

> Get rewards based on a product selling model
    template.

# Create Promotions (GET, POST, PUT)

Get rewards based on a product selling model template.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

GET, POST, PUT

Request and response body

This example shows a sample request to create a promotion.

```

```

See [Promotions Creation API](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/connect_resources_unified_promotions.htm "HTML (New Window)") reference to get additional details of the request and response properties.

## Code Examples

```apex
/global-promotions-management/promotions
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/promotions
```

```
{
  "promotionDetails": {
    "additionalFieldValues": {
      "attributes": {}
    },
    "displayName": "10% off on Cisco Router",
    "isAutomatic": true,
    "isEmailActivated": false,
    "name": "10% off on Cisco Router",
    "promotionEligibility": {
      "eligibleCustomerEvents": {},
      "eligibleEnrollmentPeriod": {
        "isEnrollmentRequired": false
      },
      "eligibleProducts": [
        {
          "id": "01txx0000006igmAAA",
          "name": "Cisco Router",
          "productType": "SimpleProduct"
        }
      ]
    },
    "promotionLimits": {},
    "ruleLibrary": {
      "id": "9Qsxx0000004H76CAE",
      "name": "RLMSales"
    },
    "startDateTime": "2025-11-01T08:43:00.000Z"
  },
  "rules": [
    {
      "eventConfiguration": [],
      "journalSubType": null,
      "journalSubTypeName": null,
      "journalType": "Customer Purchase",
      "priority": 10,
      "rewardConfiguration": [
        {
          "scope": "SimpleProduct",
          "scopeDetails": [
            {
              "name": "Cisco Router",
              "id": "01txx0000006igmAAA"
            }
          ],
          "doNotDefineRewards": false,
          "rewardDetailsList": [
            {
              "productSellingModel": {
                "name": "Monthly",
                "id": "0jPxx0000000001EAA"
              },
              "discountType": "PercentageOff",
              "discountValue": 10,
              "termBasedRewards": {
                "psmTenure": {
                  "tenure": "SpecificTerm",
                  "operator": "Equals",
                  "value": 12
                },
                "rewardDuration": {
                  "tenure": "SpecificTerm",
                  "value": 3
                }
              }
            }
          ],
          "childProducts": [],
          "type": "PSMDiscount",
          "isPrimaryReward": false
        }
      ],
      "ruleName": "rule",
      "templateName": "GetRewardsBasedOnSellingModel"
    }
  ]
}
```
