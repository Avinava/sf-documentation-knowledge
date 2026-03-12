---
title: "Expected Revenue Coverage"
domain: insurance-developer-guide
topic: expected-revenue-coverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.457Z
estimatedTokens: 167
keywords: [Expected, Revenue, Coverage, Output, representation, associated]
---

# Expected Revenue Coverage

> Output representation details of the coverage and associated expected
    revenue.

# Expected Revenue Coverage

Output representation details of the coverage and associated expected revenue.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amountWith​Frequency | Amount With Frequency[] | Expected revenue amount with frequency. | Small, 63.0 | 63.0 |
| id | String | ID of the coverage associated with the policy for which the expected revenue is calculated. | Small, 63.0 | 63.0 |
| ratePlans | Rate Plan[] | Details of the rate plans associated with the policy or through coverages. | Small, 63.0 | 63.0 |

## Code Examples

```
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
```

## Related Topics

- Amount With Frequency (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_amount_with_frequency_output.htm)
- Rate Plan (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_rate_plan_output.htm)
