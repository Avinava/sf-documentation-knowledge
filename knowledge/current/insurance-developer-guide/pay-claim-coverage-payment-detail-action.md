---
title: "Pay Claim Coverage Payment Detail Action"
domain: insurance-developer-guide
topic: pay-claim-coverage-payment-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.671Z
estimatedTokens: 248
keywords: [Pay, Claim, Coverage, Payment, Detail, Action, Initiate, record, track, policy, limit, consumption, payout, status, Paid]
---

# Pay Claim Coverage Payment Detail Action

> Initiate the payment for a claim coverage payment detail record, track the policy limit
  consumption for the payout, and update the status of the claim coverage payment detail record to
  Paid.

# Pay Claim Coverage Payment Detail Action

Initiate the payment for a claim coverage payment detail record, track the policy limit consumption for the payout, and update the status of the claim coverage payment detail record to Paid.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/payClaimCvrPaymentDetail

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| payClaimCvrPymtDtlInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.PayClaimCvrPymtDtlInputReprecord that contains the details of the claim coverage payment detail to be paid. |

## Outputs

| Output | Details |
| --- | --- |
| payClaimCvrPymtDtlOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.PayClaimCvrPymtDtlOutputRep record that contains the details of the payment status. |

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
      "payClaimCvrPymtDtlInputRep": {
        "claimId": "0Zkxx000000001dEAA",
        "coverageId": "0kPxx000000002fEAA",
        "paymentDetailId": "5pdS70000004oVfIAI"
      }
    }
  ]
}
```

```
[
  {
    "actionName": "payClaimCvrPaymentDetail",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "payClaimCvrPymtDtlOutputRep": {
        "isSuccess": true
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
