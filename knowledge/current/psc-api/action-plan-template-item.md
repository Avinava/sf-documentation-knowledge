---
title: "Action Plan Template Item"
domain: psc-api
topic: action-plan-template-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.643Z
estimatedTokens: 239
keywords: [Action, Plan, Template, Item, Output, representation, version]
---

# Action Plan Template Item

> Output representation of an item on an action plan template
  version.

# Action Plan Template Item

Output representation of an item on an action plan template version.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionPlanTemplate​Version | String | Version of the action plan template item. | Small, 56.0 | 56.0 |
| displayOrder | Integer | Order in which this item is displayed within the action plan template version. | Small, 56.0 | 56.0 |
| id | String | Unique identifier for this action plan template item record. | Small, 56.0 | 56.0 |
| isRequired | Boolean | Indicates whether the task created from this template item is required (true) or not (false). | Small, 56.0 | 56.0 |
| itemEntityType | String | Type of action plan template item entity. Always set to Task.Possible values are:AssessmentTaskRecordActionSignatureTaskTask | Small, 56.0 | 56.0 |
| name | String | Name of the action plan template item record. | Small, 56.0 | 56.0 |
