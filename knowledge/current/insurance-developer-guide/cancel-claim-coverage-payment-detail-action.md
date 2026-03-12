---
title: "Cancel Claim Coverage Payment Detail Action"
domain: insurance-developer-guide
topic: cancel-claim-coverage-payment-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.494Z
estimatedTokens: 241
keywords: [Cancel, Claim, Coverage, Payment, Detail, Action, record, REST, HTTP, Inputs, Outputs]
---

# Cancel Claim Coverage Payment Detail Action

> Cancel payment for a claim coverage payment detail record.

# Cancel Claim Coverage Payment Detail Action

Cancel payment for a claim coverage payment detail record.

When the coveragePaymentType is Loss, this action reverses the insurance policy limit tracking data to roll back consumption. This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/cancelClaimCvrPaymentDetail

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| cancelClaimCvrPymtDtlInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.CancelClaimCvrPymtDtlInputRep record that contains the details to cancel the payment for the claim coverage payment detail record. |

## Outputs

| Output | Details |
| --- | --- |
| paymentDetailId | TypestringDescriptionID of the payment detail record for which the payment is canceled. |

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
      "cancelClaimCvrPymtDtlInputRep": {
        "claimId": "0clS70000004p9XIAQ",
        "coverageId": "0kPxx000000002fEAA",
        "paymentDetailId": "0l2xx000000003gEAA"
      }
    }
  ]
}
```

```
{
  "actionName": "cancelClaimCvrPaymentDetail",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "paymentDetailId": "5pdS70000004oVfIAI"
  },
  "sortOrder": -1,
  "version": 1
}
```
