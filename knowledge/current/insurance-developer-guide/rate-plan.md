---
title: "Rate Plan"
domain: insurance-developer-guide
topic: rate-plan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.758Z
estimatedTokens: 255
keywords: [Rate, Plan, Output, representation, plans, associated, directly, policy, coverages]
---

# Rate Plan

> Output representation of the details of the rate plans associated
    directly
    with the policy or through coverages.

# Rate Plan

Output representation of the details of the rate plans associated directly with the policy or through coverages.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expectedRevenue​Amount | Double | Expected revenue amount for the specified policy. | Small, 63.0 | 63.0 |
| id | String | ID of the rate plan. | Small, 63.0 | 63.0 |
| ratePlan​Commissions | Rate Plan Commission[] | Details of the rate plan commissions. | Small, 63.0 | 63.0 |
| totalFee​Amount | Double | Total fee amount that's calculated for rate plan and then rolled up to policy. | Small, 63.0 | 63.0 |
| totalPremium​Amount | Double | Total premium amount that's calculated for rate plan and then rolled up to policy. | Small, 63.0 | 63.0 |
| totalPremium​EqvAmount | Double | Total premium equivalent amount that's calculated for rate plan and then rolled up to policy. | Small, 63.0 | 63.0 |

## Code Examples

```
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
```

## Related Topics

- Rate Plan Commission (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_rate_plan_commission_output.htm)
