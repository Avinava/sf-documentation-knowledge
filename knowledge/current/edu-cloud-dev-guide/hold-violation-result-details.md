---
title: "Hold Violation Result Details"
domain: edu-cloud-dev-guide
topic: hold-violation-result-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.073Z
estimatedTokens: 373
keywords: [Hold, Violation, Result, Output, representation, items]
---

# Hold Violation Result Details

> Output representation of the information related to the list of hold result
    items.

# Hold Violation Result Details

Output representation of the information related to the list of hold result items.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| caseId | String | Unique ID of the case associated with the hold violation. | Big, 64.0 | 64.0 |
| compliance​DueDate | String | Date by which compliance is required to address the violation. | Big, 64.0 | 64.0 |
| dateCreated | String | Date and time when the violation record was created. | Big, 64.0 | 64.0 |
| dateResolved | String | Date and time when the violation was resolved. | Big, 64.0 | 64.0 |
| daysOpen | Integer | Number of days the violation remained open before being resolved. | Big, 64.0 | 64.0 |
| description | String | Description of the violation record. | Big, 64.0 | 64.0 |
| reasons | Hold Result Output Items[] | Reason for the hold result. | Big, 64.0 | 64.0 |
| regulatoryCode​Id | String | Unique ID of the regulatory code associated with the violation. | Big, 64.0 | 64.0 |
| regulatory​CodeName | String | Name of the regulatory code associated with the violation. | Big, 64.0 | 64.0 |
| regulatoryCode​ViolationId | String | Unique ID of the violation record. | Big, 64.0 | 64.0 |
| resolution | Action Plan | Details about the action plan to resolve the violation. | Big, 64.0 | 64.0 |
| restrictions | Hold Result Output Items[] | Restriction associated with the hold result. | Big, 64.0 | 64.0 |

## Code Examples

```
{
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

- Hold Result Output Items (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_result_output_item.htm)
- Action
                  Plan (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_action_pla.htm)
