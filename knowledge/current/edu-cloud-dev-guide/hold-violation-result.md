---
title: "Hold Violation Result"
domain: edu-cloud-dev-guide
topic: hold-violation-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.067Z
estimatedTokens: 120
keywords: [Hold, Violation, Result, Output, representation, retrieve]
---

# Hold Violation Result

> Output representation of the response details to retrieve hold violation
    information.

# Hold Violation Result

Output representation of the response details to retrieve hold violation information.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contactId | String | Unique ID of the contact associated with the hold violation. | Big, 64.0 | 64.0 |
| violations | Hold Violation Result[] | List of violations associated with the case and contact. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "contactId": "string",
  "violations": [
    {
      "caseId": "string",
      "description": "string",
      "regulatoryCodeViolationId": "string",
      "regulatoryCodeId": "string",
      "regulatoryCodeName": "string",
      "dateCreated": "2025-07-24T18:35:18.820Z",
      "complianceDueDate": "2025-07-24T18:35:18.820Z",
      "dateResolved": "2025-07-24T18:35:18.820Z",
      "daysOpen": 0,
      "reasons": [
        {
          "name": "RegulationClauseName",
          "id": "0x6frr566",
          "isRuleDriven": false
        }
      ],
      "restrictions": [
        {
          "name": "Enrollment",
          "id": "0x7fsss66",
          "isRuleDriven": true,
          "isExecuted": true
        },
        {
          "name": "FeePayment",
          "id": "0x7fsss67",
          "isRuleDriven": false,
          "isExecuted": false
        }
      ],
      "resolution": {
        "id": "string",
        "name": "string",
        "numberOfTasks": 0,
        "numberOfOverdueTasks": 0,
        "status": "string",
        "startDate": "2025-07-24T18:35:18.820Z",
        "endDate": "2025-07-24T18:35:18.820Z",
        "allowOverride": true,
        "tasks": [
          {
            "id": "string",
            "taskParentName": "string",
            "relatedTo": "string",
            "subject": "string",
            "status": "string",
            "priority": "string",
            "dueDate": "2025-07-24T18:35:18.820Z",
            "createdDate": "2025-07-24T18:35:18.820Z",
            "description": "string",
            "completedDateTime": "2025-07-24T18:35:18.820Z"
          }
        ]
      }
    }
  ]
}
```

## Related Topics

- Hold Violation Result (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_violation_result_outpu.htm)
