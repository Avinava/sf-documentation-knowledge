---
title: "Delete Claim Coverage Payment Detail Action"
domain: insurance-developer-guide
topic: delete-claim-coverage-payment-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.574Z
estimatedTokens: 259
keywords: [Claim, Coverage, Payment, Detail, Action, Remove, unpaid, updating, status, record, Deleted, REST, HTTP, Inputs, Outputs]
---

# Delete Claim Coverage Payment Detail Action

> Remove unpaid claim coverage payment details by updating the status of the claim
  coverage payment detail record to Deleted.

# Delete Claim Coverage Payment Detail Action

Remove unpaid claim coverage payment details by updating the status of the claim coverage payment detail record to Deleted.

When the coveragePaymentType is Loss, this action reverses the insurance policy limit tracking data to roll back consumption. This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/deleteClaimCvrPaymentDetail

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| deleteClaimCvrPymtDtlInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.DeleteClaimCvrPymtDtlInputRep record that contains the details of the claim coverage payment detail record to be marked for deletion by updating the status. |

## Outputs

| Output | Details |
| --- | --- |
| paymentDetailId | TypestringDescriptionID of the payment detail record that's deleted. |

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
      "deleteClaimCvrPymtDtlInputRep": {
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
    "actionName": "deleteClaimCvrPaymentDetail",
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
    ]
```

## Related Topics

- ConnectApi.DeleteClaimCvrPymtDtlInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_delete_claim_cvr_pymt_dtl_input_re.htm)
