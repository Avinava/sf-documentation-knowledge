---
title: "ConnectApi.RecRepresentation"
domain: apex-reference
topic: connectapirecrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.809Z
estimatedTokens: 555
keywords: [ConnectApi.RecRepresentation, Recommended, action]
---

# ConnectApi.RecRepresentation

> Recommended action.

# ConnectApi.RecRepresentation

Recommended action.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| acceptanceLabel | String | Text indicating user acceptance of the recommended action. | 59.0 |
| actionInfo | ConnectApi.ActionInfo​OutputRepresentation | Name and parameters required for processing and displaying the recommended action. | 60.0 |
| businessObjectiveId | String | 18-character business objective ID associated with the recommended action. | 59.0 |
| channelId | String | Associated channel ID for the recommended action. | 61.0 |
| createdDate | Datetime | Creation date of the recommended action. | 61.0 |
| description | String | Description of the recommended action. | 59.0 |
| domain | String | Domain category of the recommended action (e.g., "Product"). | 59.0 |
| externalName | String | External identifier used for recommended action tracking. | 60.0 |
| externalState | String | JSON string containing data required for executing the recommended action. | 60.0 |
| grouping | String | Free-form categorization field to keep track of additional groupings of the recommended actions. | 62.0 |
| iconName | String | SLDS icon name representing the recommended action domain. | 60.0 |
| id | String | ID of the recommended action. | 59.0 |
| imageId | String | Content asset file ID for the recommended action display image. | 60.0 |
| lastModifiedDate | Datetime | Date that the recommended action was last modified. | 61.0 |
| name | String | Display name of the recommended action. | 59.0 |
| output | ConnectApi.ActionInfo​OutputRepresentation | Stores the last executed snapshot of the recommended action. | 61.0 |
| rejectionLabel | String | Text indicating user rejection of the recommended action. | 59.0 |
| score | Integer | Impact score of the recommended action (value between 0-100). | 60.0 |
| secondaryState | String | Optional state field for additional filtering of recommended action states. | 62.0 |
| state | String | Primary state of the recommended action (e.g., "ACTIVE", "INACTIVE", "ACCEPTED", "NOT_EXPIRING"). | 59.0 |
| tertiaryState | String | Optional state field for additional filtering of recommended action states. | 62.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ActionInfo​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_info_output.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
