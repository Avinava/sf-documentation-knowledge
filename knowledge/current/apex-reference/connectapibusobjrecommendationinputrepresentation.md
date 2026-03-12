---
title: "ConnectApi.BusObjRecommendationInputRepresentation"
domain: apex-reference
topic: connectapibusobjrecommendationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.419Z
estimatedTokens: 647
keywords: [ConnectApi.BusObjRecommendationInputRepresentation, Recommended, action, business, objective, goal.]
---

# ConnectApi.BusObjRecommendationInputRepresentation

> Recommended action for a business objective, or goal.

# ConnectApi.BusObjRecommendationInputRepresentation

Recommended action for a business objective, or goal.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| acceptanceLabel | String | Text indicating user acceptance of the recommended action. | Optional | 60.0 |
| actionInfo | ConnectApi.ActionInfo​InputRepresentation | Name and parameters required for processing and displaying the recommended action. | Optional | 60.0 |
| businessObjectiveId | String | 18-character business objective ID associated with the recommended action. | Required to create a recommended action. | 60.0 |
| channelId | String | Associated channel ID for the recommended action. | Required | 61.0 |
| description | String | Detailed description of the recommended action. | Optional | 60.0 |
| domain | String | Domain category of the recommended action (e.g., "Product"). | Optional | 60.0 |
| externalName | String | External identifier used for recommended action tracking. | Optional | 61.0 |
| externalState | String | JSON string containing data required for executing the recommended action. | Optional | 60.0 |
| goalId | String | 18-character GoalAssignment ID linked to the recommended action. | Optional | 61.0 |
| grouping | String | Free-form categorization field to keep track of additional groupings of the recommended actions. | Optional | 62.0 |
| iconName | String | SLDS icon name representing the recommended action domain. | Optional | 60.0 |
| imageId | String | Content asset file ID for the recommended action display image. | Optional | 60.0 |
| name | String | Display name of the recommended action. | Required to create a recommended action. | 60.0 |
| output | ConnectApi.ActionInfo​InputRepresentation | Stores the last executed snapshot of the recommended action. | Optional | 61.0 |
| recommendationId | String | 18-character unique identifier for the recommended action. | Required to update a recommended action. | 60.0 |
| rejectionLabel | String | Text indicating user rejection of the recommended action. | Optional | 60.0 |
| score | String | Impact score of the recommended action (value between 0-100). | Optional | 60.0 |
| secondaryState | String | Optional state field for additional filtering of recommended action states. | Optional | 62.0 |
| state | String | Primary state of the recommended action (e.g., "ACTIVE", "INACTIVE", "ACCEPTED", "NOT_EXPIRING"). | Optional | 60.0 |
| tertiaryState | String | Optional state field for additional filtering of recommended action states. | Optional | 62.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ActionInfo​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_action_info.htm)
