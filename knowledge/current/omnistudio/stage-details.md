---
title: "Stage Details"
domain: omnistudio
topic: stage-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.081Z
estimatedTokens: 232
keywords: [Stage, Output, representation, associated]
---

# Stage Details

> Output representation of the details associated with a stage.

# Stage Details

Output representation of the details associated with a stage.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| executedSteps​Count | Integer | Number of steps executed to fulfill the stage requirement. It represents the number of fulfillmentSteps. | Small, 61.0 | 61.0 |
| fulfillment​Steps | Fulfillment Step Details[] | Details of fulfillment step and fulfillment step definition associated with the stage. | Small, 61.0 | 61.0 |
| isActive | Boolean | Indicates whether the stage is active (true) or not (false). The current stage is always active. | Small, 61.0 | 61.0 |
| plannedSteps​Count | Integer | Number of planned steps to fulfill the stage requirement, which represents the number of fulfillment step definitions. | Small, 61.0 | 61.0 |
| stageName | String | Name of the stage. | Small, 61.0 | 61.0 |

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

- Fulfillment Step Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_fulfillment_step_info.htm)
