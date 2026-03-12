---
title: "Calculate Adjustments Action"
domain: insurance-developer-guide
topic: calculate-adjustments-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.490Z
estimatedTokens: 246
keywords: [Calculate, Adjustments, Action, adjusted, amount, loss, item, generate, data, insurance, policy, limit, tracking, claim, coverage]
---

# Calculate Adjustments Action

> Calculate the adjusted amount for a loss item and generate data for insurance policy
  limit tracking and claim coverage payment adjustment records.

# Calculate Adjustments Action

Calculate the adjusted amount for a loss item and generate data for insurance policy limit tracking and claim coverage payment adjustment records.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/calculateAdjustments

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| calculateAdjustmentsInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.CalculateAdjustmentsInputRep record that contains the details of the claim for which the adjusted amount must be calculated. |

## Outputs

| Output | Details |
| --- | --- |
| calculateAdjustmentsOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.CalculateAdjustmentsRepresentation record that contains the details of the adjustments for the claim loss items. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
  "inputs": [
    {
      "calculateAdjustmentsInputRep": {
        "claimId": "0ZkSB0000000tqv0AA",
        "claimCoverageId": "0kPSB000000G72L2AS",
        "claimedAmount": "1000"
      }
    }
  ]
}
```

```
{
  "actionName": "calculateAdjustments",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "calculateAdjustmentsOutputRep": {
      "adjustedAmount": 1250.00,
      "adjustmentReason": "Deductible applied."
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
      ]
    }
  },
  "sortOrder": -1,
  "version": 1
}
```

## Related Topics

- ConnectApi.CalculateAdjustmentsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_calculate_adjustments.htm)
