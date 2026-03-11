---
title: "Stage Details"
domain: omnistudio
topic: stage-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.607Z
keywords: [Stage, Details]
---

# Stage Details

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