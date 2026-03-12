---
title: "Calculate Adjustments"
domain: insurance-developer-guide
topic: calculate-adjustments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.373Z
estimatedTokens: 267
keywords: [Calculate, Adjustments, Output, representation, calculating, claim, loss, item]
---

# Calculate Adjustments

> Output representation of the details for calculating the adjustments for the claim loss
    item.

# Calculate Adjustments

Output representation of the details for calculating the adjustments for the claim loss item.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustedAmount | Double | Amount after adjustments are made based on the current standings of the policy limits. | Big, 65.0 | 65.0 |
| adjustmentReason | String | Reason for the claim coverage payment detail adjustment such as deductible, copay, or coinsurance. | Big, 65.0 | 65.0 |
| claimCov​Payment​Adjustments | Claim Coverage Payment Adjustment Details[] | List of claim coverage payment adjustment details. | Big, 65.0 | 65.0 |
| errors | Error Detail [] | List of errors that are associated with the API request. | Big, 65.0 | 65.0 |
| insPolicy​LimitTrackings | Insurance Policy Limit Tracking Details[] | List of insurance policy limit tracking details. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "adjustedAmount": 1250.00,
  "adjustmentReason": "Deductible applied.",
  "claimCovPaymentAdjustments": [
    {
      "adjustedAmount": 250.00,
      "adjustmentReason": "Deductible"
    }
  ],
  "insPolicyLimitTrackings": [
    {
      "policyLimitId": "0lYx00000004CvQEAU",
      "category": "Per-Incident Limit",
      "remainingAmount": 4750.00
    }
  ],
  "errors": []
}
```

## Related Topics

- Claim Coverage Payment Adjustment Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_cov_payment_adj_details.htm)
- Error Detail
                [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
- Insurance Policy Limit Tracking Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_ins_policy_limit_tracking_details.htm)
