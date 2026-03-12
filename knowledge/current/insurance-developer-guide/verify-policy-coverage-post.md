---
title: "Verify Policy Coverage (POST)"
domain: insurance-developer-guide
topic: verify-policy-coverage-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.349Z
estimatedTokens: 326
keywords: [Verify, Policy, Coverage, POST, applicability, loss, date, under, insurance, eligible, coverages, processed, claims]
---

# Verify Policy Coverage (POST)

> Verify the applicability of a policy coverage for a specified loss date under an
  insurance policy, so that only eligible coverages are processed for claims.

# Verify Policy Coverage (POST)

Verify the applicability of a policy coverage for a specified loss date under an insurance policy, so that only eligible coverages are processed for claims.

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
| policyId | String | ID of the insurance policy that the coverage belongs to. | Required | 65.0 |
| coverageId | String | ID of the coverage within the insurance policy to verify the details for. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| insuredAsset​Or​ParticipantId | String | ID of the insured asset or participant that's related to the policy coverage. | Required | 65.0 |
| lossDate | String | Date on which the incident occurred. | Required | 65.0 |

Response body for POST

[Verify Policy Coverage](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_verify_policy_coverage.htm "Output representation of a policy coverage's applicability for a specified loss date under an insurance policy.")

## Code Examples

```
/connect/insurance/policies/policyId/coverages/coverageId/verify
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/policies/0YTx0000000001qEAA/coverages/0cYx0000000002fEAA/verify
```

```
{
  "lossDate": "2025-09-13",
  "insuredAssetOrParticipantId": "0kaxx000000001dEAA"
}
```

## Related Topics

- Verify Policy Coverage (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_verify_policy_coverage.htm)
