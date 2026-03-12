---
title: "Cost Calculation"
domain: insurance-developer-guide
topic: cost-calculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.417Z
estimatedTokens: 170
keywords: [Cost, Calculation, Output, representation]
---

# Cost Calculation

> Output representation details of the cost calculation.

# Cost Calculation

Output representation details of the cost calculation.

JSON example

Here's a sample success response.

```

```

This request shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the API request is successful ( true) or not ( false). | Small, 63.0 | 63.0 |
| policy | Map<String, Object> | Map of policy and cost calculation details from policy to ratePlanLineItems. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "isSuccess":true,
  "errors":[],
  "policy": {
    "id": "p111",
    "premiumAmountWithFrequency": {
      "Annually": "xxx.xx",
      "Monthly": "xxx.xxx",
      "Quarterly": "xx.xxx"
    },
    "premiumEqvAmountWithFrequency": {
      "Annually": "xx.xx",
      "Monthly": "xx.xx",
      "Quarterly": "xxx.xxx"
    },
    "feeAmountWithFrequency": {
      "Annually": "xx.xx",
      "Monthly": "xx.xx",
      "Quarterly": "xxx.xxx"
    },
    "coverages": [
      {
        "id": "pc111",
        "premiumAmountWithFrequency": {
          "Annually": "xxx.xx",
          "Monthly": "xxx.xxx",
          "Quarterly": "xx.xxx"
        },
        "premiumEqvAmountWithFrequency": {
          "Annually": "xx.xx",
          "Monthly": "xx.xx",
          "Quarterly": "xxx.xxx"
        },
        "feeAmountWithFrequency": {
          "Annually": "xx.xx",
          "Monthly": "xx.xx",
          "Quarterly": "xxx.xxx"
        },
        "ratePlans": [
          {
            "id": "rp11",
            "totalPremiumAmount": 350,
            "totalFeeAmount": "xyz",
            "totalPremiumEqvAmount": "xyz",
            "ratePlanLineItems": [
              {
                "id": "rpli111",
                "premiumAmount": 100
              },
              {
                "id": "rpli112",
                "premiumAmount": 150
              }
            ]
          },
          {
            "id": "rp12",
            "totalPremiumAmount": 580,
            "ratePlanLineItems": [
              {
                "id": "rpli121",
                "premiumAmount": 80
              },
              {
                "id": "rpli122",
                "premiumAmount": 200
              },
              {
                "id": "rpli123",
                "premiumAmount": 300
              }
            ]
          }
        ]
      }
    ]
  }
}
```

```
{
    "isSuccess":true,
    "errors" : [
        {
            "code":INVALID_INPUT,
            "message": "Specify a valid ratePlanId."
        }
    ]
}
```
