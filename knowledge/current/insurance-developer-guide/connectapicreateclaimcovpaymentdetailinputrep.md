---
title: "ConnectApi.CreateClaimCovPaymentDetailInputRep"
domain: insurance-developer-guide
topic: connectapicreateclaimcovpaymentdetailinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.162Z
estimatedTokens: 318
keywords: [Input, representation, creating, claim, coverage, payment, detail, record]
---

# ConnectApi.CreateClaimCovPaymentDetailInputRep

> Input representation for creating a claim coverage payment detail record.

# ConnectApi.CreateClaimCovPaymentDetailInputRep

Input representation for creating a claim coverage payment detail record.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional standard or custom fields that are used to create the claim coverage payment detail record. | Optional | 65.0 |
| adjustedAmount | Double | Amount deducted from the Posted Amount based on the respective attribute category. | Optional | 65.0 |
| benefitName | String | Sub-coverage information. | Optional | 65.0 |
| claimedAmount | Double | Amount of the claim. | Optional | 65.0 |
| coveragePaymentType | String | Specifies the category of the payment. The value must be either Loss or Expense. Loss refers to the payment related to the policyholder's covered damages. Expense refers to costs associated with claim processing, such as vendor fees. | Optional | 65.0 |
| description | String | Description of the payment detail. | Optional | 65.0 |
| limitUnitCount | Integer | Number of units for this claim coverage payment detail, such as the number of days for a rental car expense. The default value is 1. | Optional | 65.0 |
| recipientId | String | ID of the recipient. | Optional | 65.0 |
