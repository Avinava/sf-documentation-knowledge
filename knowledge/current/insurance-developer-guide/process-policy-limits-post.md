---
title: "Process Policy Limits (POST)"
domain: insurance-developer-guide
topic: process-policy-limits-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.305Z
estimatedTokens: 459
keywords: [Process, Policy, Limits, POST, loss, item, claim, current, standings, insurance]
---

# Process Policy Limits (POST)

> Process the policy limits for a loss item in a claim by using the current standings of
  the insurance policy limits.

# Process Policy Limits (POST)

Process the policy limits for a loss item in a claim by using the current standings of the insurance policy limits.

This API uses the default Expression Set Executable Template to evaluate how a specific transaction affects the monetary and non-monetary policy limits. You can either extend the executable template to create a custom Expression Set or invoke an Integration Procedure for more complex calculations. This API uses coverage and transaction details as input and returns a detailed breakdown of how each applicable limit is consumed by the proposed amount.

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
| claimId | String | ID of the claim to process the policy limits for. | Required | 65.0 |
| coverageId | String | ID of the claim coverage within the claim that the loss item belongs to. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjusted​Amount | Double | Amount after adjustments are made based on the current standings of the policy limits. | Optional | 65.0 |
| benefitName | String | Name of the specific benefit or sub-coverage that the loss item applies to. | Optional | 65.0 |
| limitUnit​Count | Integer | Unit count that the payment detail represents.Default value is 1. | Optional | 65.0 |

Response body for POST

[Process Policy Limits Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_process_policy_limits.htm "Output representation for processing the policy limits for a claim loss item.")

## Code Examples

```
/connect/insurance/claims/claimId/coverages/coverageId/process-limits
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/claims/0Zkxx000000001dEAA/coverages/0kPxx000000002fEAA/process-limits
```

```
{
  "adjustedAmount": 1250.00,
  "benefitName": "Collision Coverage",
  "limitUnitCount": 1
}
```

## Related Topics

- Process Policy Limits Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_process_policy_limits.htm)
