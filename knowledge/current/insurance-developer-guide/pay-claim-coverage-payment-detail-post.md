---
title: "Pay Claim Coverage Payment Detail (POST)"
domain: insurance-developer-guide
topic: pay-claim-coverage-payment-detail-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.282Z
estimatedTokens: 231
keywords: [Pay, Claim, Coverage, Payment, Detail, POST, Process, record]
---

# Pay Claim Coverage Payment Detail (POST)

> Process the payment for a claim coverage payment detail record.

# Pay Claim Coverage Payment Detail (POST)

Process the payment for a claim coverage payment detail record.

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
| claimId | String | ID of the claim under which the payment is made. | Required | 65.0 |
| coverageId | String | ID of the claim coverage record that the payment detail is associated with. | Required | 65.0 |
| paymentDetailId | String | ID of the claim coverage payment detail record that you want to pay. | Required | 65.0 |

Response body for POST

[Pay Claim Coverage Payment Detail](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_pay_claim_coverage_payment_detail.htm "Output representation for paying a claim coverage payment detail.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/payment-details/paymentDetailId/pay
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA/payment-details/0l2xx000000003gEAA/pay
```

## Related Topics

- Pay Claim Coverage Payment
       Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_pay_claim_coverage_payment_detail.htm)
