---
title: "Pay Ex Gratia Claim Coverage Payment Detail (POST)"
domain: insurance-developer-guide
topic: pay-ex-gratia-claim-coverage-payment-detail-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.287Z
estimatedTokens: 373
keywords: [Pay, Gratia, Claim, Coverage, Payment, Detail, POST, Process, discretionary, enabling, policy, limits, exceeded]
---

# Pay Ex Gratia Claim Coverage Payment Detail (POST)

> Process a discretionary ex gratia payment for a claim coverage payment detail, enabling payment even when coverage or policy limits are exceeded.

# Pay Ex Gratia Claim Coverage Payment Detail (POST)

Process a discretionary ex gratia payment for a claim coverage payment detail, enabling payment even when coverage or policy limits are exceeded.

Use this resource to pay the full adjusted amount for a loss type payment detail, regardless of whether policy limits are reached. The system records limit consumption only up to the remaining available limit and tracks the excess as an ex gratia amount.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Path parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimId | String | ID of the claim. | Required | 66.0 |
| coverageId | String | ID of the coverage that applies to the claim. | Required | 66.0 |
| paymentDetailId | String | ID of the claim coverage payment detail record. | Required | 66.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| reason | String | Reason for the ex gratia payment. | Optional | 66.0 |

Response body for POST

[Pay Ex Gratia Claim Coverage Payment Detail](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_pay_ex_gratia_claim_cvr_payment_detail.htm "Output representation for the details of the ex gratia payment that’s made for the claim coverage payment detail.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/payment-details/paymentDetailId/pay-ex-gratia
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA/payment-details/0l2xx000000003gEAA/pay-ex-gratia
```

```
{
  "reason": "Customer goodwill gesture despite exceeded limits."
}
```

## Related Topics

- Pay Ex Gratia Claim Coverage
       Payment Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_pay_ex_gratia_claim_cvr_payment_detail.htm)
