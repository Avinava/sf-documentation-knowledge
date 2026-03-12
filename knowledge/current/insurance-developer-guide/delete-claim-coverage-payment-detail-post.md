---
title: "Delete Claim Coverage Payment Detail (POST)"
domain: insurance-developer-guide
topic: delete-claim-coverage-payment-detail-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.094Z
estimatedTokens: 251
keywords: [Claim, Coverage, Payment, Detail, POST, Remove, unpaid, updating, status, Deleted, API, reverses, insurance, policy, limit]
---

# Delete Claim Coverage Payment Detail (POST)

> Remove unpaid claim coverage payment details by updating the status to Deleted. The API
  reverses the insurance policy limit tracking data to roll back consumption for the type
  Loss.

# Delete Claim Coverage Payment Detail (POST)

Remove unpaid claim coverage payment details by updating the status to Deleted. The API reverses the insurance policy limit tracking data to roll back consumption for the type Loss.

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
| claimId | String | ID of the claim whose coverage payment detail must be deleted. | Required | 65.0 |
| coverageId | String | ID of the claim coverage record. | Required | 65.0 |
| paymentDetailId | String | ID of the claim coverage payment detail record. | Required | 65.0 |

Response body for POST

[Delete Claim Coverage Payment Detail](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_delete_claim_coverage_payment_detail.htm "Output representation for the deleted claim coverage payment detail.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/payment-details/paymentDetailId/delete
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA/payment-details/0l2xx000000003gEAA/delete
```

## Related Topics

- Delete Claim Coverage
       Payment Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_delete_claim_coverage_payment_detail.htm)
