---
title: "Edit Claim Coverage Payment Detail Input"
domain: insurance-developer-guide
topic: edit-claim-coverage-payment-detail-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.713Z
estimatedTokens: 351
keywords: [Edit, Claim, Coverage, Payment, Detail, Input, record]
---

# Edit Claim Coverage Payment Detail Input

> Details to edit a claim coverage payment detail record.

# Edit Claim Coverage Payment Detail Input

Details to edit a claim coverage payment detail record.

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

## Code Examples

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
