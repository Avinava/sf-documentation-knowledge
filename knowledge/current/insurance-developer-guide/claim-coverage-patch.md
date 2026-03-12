---
title: "Claim Coverage (PATCH)"
domain: insurance-developer-guide
topic: claim-coverage-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.345Z
estimatedTokens: 312
keywords: [Claim, Coverage, PATCH, specific, record]
---

# Claim Coverage (PATCH)

> Update a specific claim coverage record.

# Claim Coverage (PATCH)

Update a specific claim coverage record.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

PATCH

Path parameter for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimId | String | ID of the claim to update the coverage for. | Required | 65.0 |
| coverageId | String | ID of the coverage within the claim that must be updated. | Required | 65.0 |

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Fields | Object | Additional standard or custom fields to update the record. | Optional | 65.0 |
| expense​ReserveAmount | Double | Amount that's reserved to cover potential expenses while handling the claim, such as administrative or legal costs. | Optional | 65.0 |
| lossReserve​Amount | Double | Amount that's reserved to cover a potential payment for a loss. | Optional | 65.0 |

Response body for PATCH

[Claim Coverage](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_coverage.htm "Output representation for a claim coverage.")

## Code Examples

```
/connect/claims/claimId/coverages/coverageId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA
```

```
{
  "expenseReserveAmount": 500.00,
  "lossReserveAmount": 2000.00,
  "additionalFields": {
    "Status": "Pending Review"
  }
}
```

## Related Topics

- Claim Coverage (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_coverage.htm)
