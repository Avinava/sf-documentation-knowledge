---
title: "Stage Management Details"
domain: omnistudio
topic: stage-management-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.336Z
estimatedTokens: 79
keywords: [Stage, Management, Output, representation]
---

# Stage Management Details

> Output representation of the details of stage management.

# Stage Management Details

Output representation of the details of stage management.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| stages | Stage Details[] | List of stages and their details. | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "stages": [
    {
      "executedStepsCount": 0,
      "fulfillmentSteps": [],
      "isActive": true,
      "plannedStepsCount": 0,
      "stageName": "Initiated"
    },
    {
      "executedStepsCount": 0,
      "fulfillmentSteps": [
        {
          "actions": {},
          "details": {
            "dynamicFields": {
              "Fulfillment Step Definition Name": "T_I_RS_1"
            },
            "taskSubType": "Manual Task"
          },
          "id": "0qDxx00000000BJEAY",
          "name": "T_I_RS_1",
          "status": "Started",
          "stepType": "ManualTask"
        },
        {
          "actions": {},
          "details": {
            "dynamicFields": {
              "Fulfillment Step Definition Name": "T_I_IR_2"
            },
            "taskSubType": "Screen Flow"
          },
          "id": "0qDxx00000000BKEAY",
          "name": "T_I_IR_2",
          "status": "Not Started",
          "stepType": "ManualTask"
        },
        {
          "actions": {},
          "details": {
            "dynamicFields": {
              "Fulfillment Step Definition Name": "S_RS_I_1"
            },
            "taskSubType": "Manual Task"
          },
          "id": "0qDxx00000000CvEAI",
          "name": "S_RS_I_1",
          "status": "Completed",
          "stepType": "ManualTask"
        }
      ],
      "isActive": false,
      "plannedStepsCount": 3,
      "stageName": "Risk Screening"
    }
  ]
}
```

## Related Topics

- Stage Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_object_stage_value_info.htm)
