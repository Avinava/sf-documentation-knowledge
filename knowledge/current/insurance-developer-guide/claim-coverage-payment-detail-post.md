---
title: "Claim Coverage Payment Detail (POST)"
domain: insurance-developer-guide
topic: claim-coverage-payment-detail-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.084Z
estimatedTokens: 612
keywords: [Claim, Coverage, Payment, Detail, POST, record, generates, records, Insurance, Policy, Limit, Tracking, Adjustment, applicable]
---

# Claim Coverage Payment Detail (POST)

> Create a claim coverage payment detail record. This also generates the related records
  for the Insurance Policy Limit Tracking and Claim Coverage Payment Adjustment records if
  applicable.

# Claim Coverage Payment Detail (POST)

Create a claim coverage payment detail record. This also generates the related records for the Insurance Policy Limit Tracking and Claim Coverage Payment Adjustment records if applicable.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimId | String | ID of the claim for which the claim coverage payment detail record must be created. | Required | 65.0 |
| coverageId | String | ID of the coverage that applies to the claim. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional standard or custom fields that are used to create the claim coverage payment detail record. | Optional | 65.0 |
| adjustedAmount | Double | Amount deducted from the Posted Amount based on the respective attribute category. | Required when coveragePaymentType is Loss | 65.0 |
| benefitName | String | Name of the benefit that's associated with the product attribute's mapped scope as a sub-coverage. | Required when coveragePaymentType is Loss | 65.0 |
| claimedAmount | Double | Amount requested by the claimant when submitting the loss. | Required | 65.0 |
| coveragePayment​Type | String | Specifies the category of the payment. The value must be either Loss or Expense.Loss refers to the payment related to the policyholder's covered damages.Expense refers to costs associated with claim processing, such as vendor fees. | Required | 65.0 |
| description | String | Description of the claim coverage payment detail record. | Optional | 65.0 |
| limitUnitCount | Integer | Number of units for this claim coverage payment detail, such as the number of days for a rental car expense.The default value is 1. | Optional | 65.0 |
| recipientId | String | ID of the person or entity who will receive the payment, such as the policyholder, a third-party claimant, or a service vendor. | Optional | 65.0 |

Response body for POST

[Claim Coverage Payment Detail](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_claim_coverage_payment_detail.htm "Output representation for creating the claim coverage payment detail record.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/payment-details
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA/payment-details
```

```
{
  "claimedAmount": 1200.0,
  "recipientId": "001xx000003GN2rAAG",
  "coveragePaymentType": "Loss",
  "benefitName": "DentalCov",
  "description": "Dental cleaning and checkup.",
  "limitUnitCount": 1,
  "adjustedAmount": 1200.0,
  "additionalFields": {
    "State__c": "CA",
    "LOB__c": "Commercial"
  }
}
```

## Related Topics

- Claim Coverage Payment
       Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_claim_coverage_payment_detail.htm)
