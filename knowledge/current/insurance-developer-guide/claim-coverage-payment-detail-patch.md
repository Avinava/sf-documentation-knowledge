---
title: "Claim Coverage Payment Detail (PATCH)"
domain: insurance-developer-guide
topic: claim-coverage-payment-detail-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.105Z
estimatedTokens: 645
keywords: [Claim, Coverage, Payment, Detail, PATCH, Modify, record, loss, expense]
---

# Claim Coverage Payment Detail (PATCH)

> Modify an existing claim coverage payment detail record for both loss and expense
        types.

# Claim Coverage Payment Detail (PATCH)

Modify an existing claim coverage payment detail record for both loss and expense types.

For loss-type payments, the system automatically re-evaluates the claim by reversing previously applied limits and recalculating adjustments such as deductible and copay before saving the updated payment. For expense-type payments, you can update fields, such as claim amount and recipient. These updates do not trigger any recalculation of adjustments or policy limits.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

PATCH

Path parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimId | String | ID of the claim. | Required | 66.0 |
| coverageId | String | ID of the coverage that applies to the claim. | Required | 66.0 |
| paymentDetailId | String | ID of the claim coverage payment detail record. | Required | 66.0 |

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional standard or custom fields that are used to update the claim coverage payment detail. | Optional | 66.0 |
| adjustedAmount | Double | Adjusted amount of the claim. | Required if claimedAmount is specified for a loss item. | 66.0 |
| claimedAmount | Double | Amount requested by the claimant when submitting the loss. | Optional | 66.0 |
| description | String | Description of the claim line item. | Optional | 66.0 |
| limitUnitCount | Integer | Number of units for this claim coverage payment detail, such as the number of days for a rental car expense. The default value is 1. | Optional | 66.0 |
| name | String | Name of the claim coverage payment detail record. | Optional | 66.0 |
| recipientId | String | ID of the person or entity who will receive the payment, such as the policyholder, a third-party claimant, or a service vendor.For a Loss item, the recipient is the policyholder or a third party. For an Expense item, the recipient ID represents a vendor or internal staff member. | Optional | 66.0 |
| status | String | Current status of the claim coverage payment detail, such as Draft. | Optional | 66.0 |

Response body for PATCH

[Edit Claim Coverage Payment Detail Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_edit_claim_coverage_payment_detail.htm "Output representation for the edited claim coverage payment detail.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/payment-details/paymentDetailId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx0000000001CAA/coverages/0kPxx0000000001CAA/payment-details/0l2xx0000000001CAA
```

```
{
  "claimedAmount": 5000.00,
  "adjustedAmount": 5000.0,
  "recipientId": "001xx000003DGQyAAO",
  "name": "Rental Car Expense",
  "description": "Payment for 5 days of rental car usage",
  "limitUnitCount": 5,
  "status": "Draft",
  "additionalFields": {
    "State": "CA",
    "policyType": "Auto",
    "LOB__c": "Personal"
  }
}
```

## Related Topics

- Edit
                            Claim Coverage Payment Detail Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_edit_claim_coverage_payment_detail.htm)
