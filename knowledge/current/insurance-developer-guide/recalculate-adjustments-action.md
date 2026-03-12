---
title: "Recalculate Adjustments Action"
domain: insurance-developer-guide
topic: recalculate-adjustments-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.691Z
estimatedTokens: 276
keywords: [Recalculate, Adjustments, Action, adjusted, amount, claim, loss, item, maximum, that’s, allowed, insurance, policy, REST, HTTP]
---

# Recalculate Adjustments Action

> Recalculate the adjusted amount for a claim loss item to the maximum amount that’s
        allowed by the insurance policy.

# Recalculate Adjustments Action

Recalculate the adjusted amount for a claim loss item to the maximum amount that’s allowed by the insurance policy.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/recalculateAdjustments

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| recalcAdjustmentsInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.RecalcAdjustmentsInputRep record that contains the claim amount and ID of the claim coverage payment detail record to recalculate the adjusted amount. |

## Outputs

| Output | Details |
| --- | --- |
| calculateAdjustmentsOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.CalcAdjustmentsOutputRep record containing the calculated adjusted amount and the updated insurance policy limit tracking details. |

## Example

POST

This sample request is for the Recalculate Adjustments action.

```

```

This sample response is for the Recalculate Adjustments action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "recalcAdjustmentsInputRep": {
        "claimId": "0Zkxx0000000001CAA",
        "claimCoverageId": "0kPxx0000000001CAA",
        "paymentDetailId": "0l2xx0000000001CAA",
        "claimedAmount": 5000
      }
    }
  ]
}
```

```
[
  {
    "actionName": "recalculateAdjustments",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "calculateAdjustmentsOutputRep": {
        "adjustedAmount": 1250,
        "adjustmentReason": "Deductible applied.",
        "claimCovPaymentAdjustments": [
          {
            "adjustedAmount": 250,
            "adjustmentReason": "Deductible"
          }
        ],
        "insPolicyLimitTrackings": [
          {
            "policyLimitId": "0lYx00000004CvQEAU",
            "category": "Per-Incident Limit",
            "remainingAmount": 4750
          }
        ]
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
