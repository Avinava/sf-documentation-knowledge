---
title: "ConnectApi.EditClaimCvrPaymentDetailInputRep"
domain: insurance-developer-guide
topic: connectapieditclaimcvrpaymentdetailinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.175Z
estimatedTokens: 336
keywords: [Input, representation, editing, claim, coverage, payment, detail]
---

# ConnectApi.EditClaimCvrPaymentDetailInputRep

> Input representation for editing claim coverage payment detail.

# ConnectApi.EditClaimCvrPaymentDetailInputRep

Input representation for editing claim coverage payment detail.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional standard or custom fields that are used to update the claim coverage payment detail record. | Optional | 66.0 |
| adjustedAmount | Double | Amount deducted from the Posted Amount based on the respective attribute category. | Optional | 66.0 |
| claimedAmount | Double | Amount of the claim. | Optional | 66.0 |
| description | String | Description of the payment detail. | Optional | 66.0 |
| limitUnitCount | Integer | Number of units for this claim coverage payment detail, such as the number of days for a rental car expense. The default value is 1. | Optional | 66.0 |
| name | String | Name of the claim coverage payment detail record. | Optional | 66.0 |
| recipientId | String | ID of the person or entity who will receive the payment, such as the policyholder, a third-party claimant, or a service vendor.For a Loss item, the recipient is the policyholder or a third party. For an Expense item, the recipient ID represents a vendor or internal staff member. | Optional | 66.0 |
| status | String | Current status of the claim coverage payment detail. | Optional | 66.0 |
