---
title: "Create Claim Coverage Payment Detail Action"
domain: insurance-developer-guide
topic: create-claim-coverage-payment-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.512Z
estimatedTokens: 251
keywords: [Claim, Coverage, Payment, Detail, Action, record, REST, HTTP, Inputs, Outputs]
---

# Create Claim Coverage Payment Detail Action

> Create a claim coverage payment detail record.

# Create Claim Coverage Payment Detail Action

Create a claim coverage payment detail record.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createClaimCvrPaymentDetail

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| createClaimCvrPymtDtlInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.CreateClaimCvrPymtDtlInputRep record that contains the details to create the claim coverage payment detail record. |

## Outputs

| Output | Details |
| --- | --- |
| createClaimCvrPymtDtlOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.CreateClaimCvrPymtDtlOutputRep record that contains the details of the claim coverage payment detail record ‌and the generated data for the insurance policy limit tracking and claim coverage payment adjustment records. |

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
      "createClaimCvrPymtDtlInputRep": {
        "claimId": "0Zkxx000000001dEAA",
        "claimCoverageId": "0kPxx000000002fEAA",
        "claimedAmount": 1200,
        "recipientId": "001xx000003GN2rAAG",
        "coveragePaymentType": "Loss",
        "benefitName": "DentalCov",
        "description": "Dental cleaning and checkup.",
        "limitUnitCount": 1,
        "adjustedAmount": 1200,
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
  "actionName": "createClaimCvrPaymentDetail",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "createClaimCvrPymtDtlOutputRep": {
      "adjustedAmount": 200,
      "adjustedReason": "Deductible",
      "paymentDetailId": "0lDxx0000004CUmEAM",
      "insPolicyLimitTrackingIds": [
        "1TExx0000004DUuGAM",
        "1TExx0000004DUvGAM"
      ]
    }
  },
  "sortOrder": -1,
  "version": 1
}
```
