---
title: "Hold Violation"
domain: edu-cloud-dev-guide
topic: hold-violation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.065Z
estimatedTokens: 200
keywords: [Hold, Violation, Output, representation, newly, created]
---

# Hold Violation

> Output representation of the response details for a newly created hold
    violation.

# Hold Violation

Output representation of the response details for a newly created hold violation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionPlan​Id | String | Unique ID of the action plan template assignment ID created for the hold violation. | Big, 65.0 | 65.0 |
| caseId | String | ID of the case linked to hold violation. | Big, 65.0 | 65.0 |
| contactId | String | Contact ID of the case linked to hold violation. | Big, 65.0 | 65.0 |
| regulatoryCode​ViolRegClVerId | String[] | Unique ID of the regulatory clause version that has been breached by a learner. | Big, 65.0 | 65.0 |
| regulatoryCode​ViolationId | String | ID of the hold violation that was created. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "contactId": "string",
  "caseId": "string",
  "regulatoryCodeId": "string",
  "regulatoryCodeViolationId": "string",
  "regulatoryCodeViolRegClVerId": [
    "string"
  ],
  "actionPlanId": "string",
  "regulatoryCodeName": "string"
}
```
