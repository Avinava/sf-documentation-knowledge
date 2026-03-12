---
title: "Expected Revenue Policy"
domain: insurance-developer-guide
topic: expected-revenue-policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.462Z
estimatedTokens: 185
keywords: [Expected, Revenue, Policy, Output, representation, associated, coverages, rate, plans]
---

# Expected Revenue Policy

> Output representation of the associated expected revenue details for a policy, such as
    coverages and rate plans.

# Expected Revenue Policy

Output representation of the associated expected revenue details for a policy, such as coverages and rate plans.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amountWithFrequency | Amount With Frequency[] | Expected revenue amount with frequency. | Small, 63.0 | 63.0 |
| coverages | Expected Rev Coverage[] | Details of policy coverages, such as associated rate plans. | Small, 63.0 | 63.0 |
| id | String | ID of the policy for which expected revenue is calculated. | Small, 63.0 | 63.0 |
| ratePlans | Rate Plan[] | Details of rate plans. | Small, 63.0 | 63.0 |

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

## Related Topics

- Amount With Frequency (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_amount_with_frequency_output.htm)
- Expected Rev Coverage (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_exp_rev_coverage_output.htm)
- Rate
                  Plan (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_rate_plan_output.htm)
