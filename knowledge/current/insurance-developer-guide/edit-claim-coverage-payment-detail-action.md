---
title: "Edit Claim Coverage Payment Detail Action"
domain: insurance-developer-guide
topic: edit-claim-coverage-payment-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.578Z
estimatedTokens: 250
keywords: [Edit, Claim, Coverage, Payment, Detail, Action, Modify, record, REST, HTTP, Inputs, Outputs]
---

# Edit Claim Coverage Payment Detail Action

> Modify a claim coverage payment detail record.

# Edit Claim Coverage Payment Detail Action

Modify a claim coverage payment detail record.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/editClaimCvrPaymentDetail

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| editClaimCvrPymtDtlInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.EditClaimCvrPymtDtlInputRep record that contains details of the claim coverage payment detail to edit. |

## Outputs

| Output | Details |
| --- | --- |
| editClaimCvrPymtDtlOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.EditClaimCvrPymtDtlOutputRep record that contains details of the claim coverage payment detail that’s edited. |

## Example

POST

This sample request is for the Edit Claim Coverage Payment Detail action.

```

```

This sample response is for the Edit Claim Coverage Payment Detail action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "editClaimCvrPymtDtlInputRep": {
        "claimId": "0Zkxx0000000001CAA",
        "claimCoverageId": "0kPxx0000000001CAA",
        "claimCoveragePaymentDetailId": "0l2xx0000000001CAA",
        "claimedAmount": 5000,
        "adjustedAmount": 5000,
        "recipientId": "001xx000003DGQyAAO",
        "name": "Rental Car Expense",
        "description": "Payment for 5 days of rental car usage",
        "limitUnitCount": 5,
        "status": "Draft",
        "additionalFields": [
          {
            "key": "State",
            "value": "CA"
          },
          {
            "key": "LOB__c",
            "value": "Commercial"
          }
        ]
      }
    }
  ]
}
```

```
{
  "actionName": "editClaimCvrPaymentDetail",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "editClaimCvrPymtDtlOutputRep": {
      "isSuccess": true,
      "adjustedAmount": 200,
      "adjustedReason": "Deductible",
      "insPolicyLimitTrackingIds": [
        "1TExx0000004DUuGAM",
        "1TExx0000004DUvGAM"
      ],
      "errors": []
    }
  },
  "sortOrder": -1,
  "version": 1
}
```
