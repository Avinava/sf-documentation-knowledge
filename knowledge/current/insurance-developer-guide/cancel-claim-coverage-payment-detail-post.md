---
title: "Cancel Claim Coverage Payment Detail (POST)"
domain: insurance-developer-guide
topic: cancel-claim-coverage-payment-detail-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.041Z
estimatedTokens: 224
keywords: [Cancel, Claim, Coverage, Payment, Detail, POST, record]
---

# Cancel Claim Coverage Payment Detail (POST)

> Cancel payment for a claim coverage payment detail record.

# Cancel Claim Coverage Payment Detail (POST)

Cancel payment for a claim coverage payment detail record.

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
| claimId | String | ID of the claim whose coverage payment detail must be canceled. | Required | 65.0 |
| coverageId | String | ID of the coverage that applies to the claim. | Required | 65.0 |
| paymentDetailId | String | ID of the claim coverage payment detail record. | Required | 65.0 |

Response body for POST

[Cancel Claim Coverage Payment Detail](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_cancel_claim_coverage_payment_detail.htm "Output representation for the canceled claim coverage payment detail.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/payment-details/paymentDetailId/cancel
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA/payment-details/0l2xx000000003gEAA/cancel
```

## Related Topics

- Cancel Claim Coverage
       Payment Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_cancel_claim_coverage_payment_detail.htm)
