---
title: "Pay Ex Gratia Claim Coverage Payment Detail Action"
domain: insurance-developer-guide
topic: pay-ex-gratia-claim-coverage-payment-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:48.895Z
estimatedTokens: 279
keywords: [Inputs, Outputs, Pay, Gratia, Claim, Coverage, Payment, Detail, Action, Process, payments, record, adjusted, amount, greater, policy, limit, count, REST, HTTP]
---

> Process ex gratia payments for the claim coverage payment detail record when the
        adjusted amount is greater than the policy limit amount or count or both.

# Pay Ex Gratia Claim Coverage Payment Detail Action

Process ex gratia payments for the claim coverage payment detail record when the adjusted amount is greater than the policy limit amount or count or both.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v/actions/standard/payExGratiaClaimCvrPymtDetail

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| payExGratiaClaimCvrPymtDtlInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.PayExGratiaClaimCvrPymtDtlInputRep record that contains the details to process the ex gratia payment. |

## Outputs

| Output | Details |
| --- | --- |
| payExGratiaClaimCvrPymtDtlRep | TypeApex-definedDescriptionAn Apex ConnectApi.PayExGratiaClaimCvrPymtDtlRep record that contains the ex gratia payment details. |

## Example

POST

This sample request is for the Pay Ex Gratia Claim Coverage Payment Detail action.

```

```

This sample response is for the Pay Ex Gratia Claim Coverage Payment Detail action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "payExGratiaClaimCvrPymtDtlInputRep": {
        "claimId": "0Zkxx0000000001CAA",
        "coverageId": "0kPxx0000000001CAA",
        "paymentDetailId": "0k5xx0000000001AAA",
        "reason": "Ex gratia payment approved for customer satisfaction."
      }
    }
  ]
}
```

```
[
  {
    "actionName": "payExGratiaClaimCvrPymtDetail",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "payExGratiaClaimCvrPymtDtlRep": {
        "claimPaymentSummaryId": "0sDxx0000000001CAA",
        "consumedLimitCount": 5,
        "exceededAmount": 1500,
        "exceededCount": 2,
        "insPolicyLimitTrackingIds": [
          "0qOxx0000004CvQEAU",
          "0qOxx0000004CvREAU"
        ],
        "isSuccess": true,
        "paidAmount": 5000
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
