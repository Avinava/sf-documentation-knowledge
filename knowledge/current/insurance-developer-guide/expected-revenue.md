---
title: "Expected Revenue"
domain: insurance-developer-guide
topic: expected-revenue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.465Z
estimatedTokens: 172
keywords: [Expected, Revenue, Output, representation]
---

# Expected Revenue

> Output representation of the details of the expected revenue.

# Expected Revenue

Output representation of the details of the expected revenue.

JSON example

This example shows a sample success response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response[] | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 63.0 | 63.0 |
| policy | Expected Revenue Policy[] | Map of the policy and expected revenue calculation details. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "policy": {
    "id": "p111",
    "amountWithFrequency": {
      "annually": 1000.3,
      "monthly": 100.03,
      "quarterly": 300.09
    },
    "coverages": [
      {
        "id": "pc111",
        "amountWithFrequency": {
          "annually": 1000.3,
          "monthly": 100.03,
          "quarterly": 300.09
        },
        "ratePlans": [
          {
            "id": "rp11",
            "totalPremiumAmount": 350,
            "totalFeeAmount": 200,
            "totalPremiumEqvAmount": 100,
            "expectedRevenueAmount": 45,
            "ratePlanCommissions": [
              {
                "id": "rpc111",
                "premiumPercent": 100,
                "type": "FlatPercentOfPremium"
              }
            ]
          },
          {
            "id": "rp12",
            "totalPremiumAmount": 350,
            "totalFeeAmount": 200,
            "totalPremiumEqvAmount": 100,
            "expectedRevenueAmount": 45,
            "ratePlanCommissions": [
              {
                "id": "rpc111",
                "premiumPercent": null,
                "type": "GradedPercent",
                "amountStartRange": 0,
                "amountEndRange": 1000
              },
              {
                "id": "rpc112",
                "premiumPercent": null,
                "type": "GradedPercent",
                "amountStartRange": 1001,
                "amountEndRange": 10000
              },
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
    "isSuccess":false,
    "errors" : [
        {
            "code":INVALID_INPUT,
            "message": "Specify a valid ratePlanId."
        }
    ]
}
```

## Related Topics

- Expected Revenue Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_exp_rev_policy_output.htm)
