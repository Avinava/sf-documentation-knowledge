---
title: "Fulfillment Step Details"
domain: omnistudio
topic: fulfillment-step-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.285Z
estimatedTokens: 214
keywords: [Fulfillment, Step, Details, Output, representation, fulfillment, steps, associated, stage.]
---

# Fulfillment Step Details

> Output representation of the fulfillment steps associated with a stage.

# Fulfillment Step Details

Output representation of the fulfillment steps associated with a stage.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actions | Map<String, Object> | Details of actions being performed for a fulfillment step based on the step type. | Small, 61.0 | 61.0 |
| details | Map<String, Object> | Details of a fulfillment step required for the stage overview. | Small, 61.0 | 61.0 |
| id | String | ID of the fulfillment step. | Small, 61.0 | 61.0 |
| name | String | Name of the fulfillment step. | Small, 61.0 | 61.0 |
| status | String | Status of the current fulfillment step. | Small, 61.0 | 61.0 |
| stepType | String | Step type of the current fulfillment step, such as manual task, auto task, and callout. | Small, 61.0 | 61.0 |

## Code Examples

```
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
      ]
```
