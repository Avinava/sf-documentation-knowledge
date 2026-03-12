---
title: "Recommended Action"
domain: chatterapi
topic: recommended-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.781Z
estimatedTokens: 618
keywords: [Recommended, Action]
---

# Recommended Action

> Recommended action.

# Recommended Action

Recommended action.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| acceptanceLabel | String | Text indicating user acceptance of the recommended action. | Small, 59.0 | 59.0 |
| actionInfo | Action Info | Name and parameters required for processing and displaying the recommended action. | Small, 59.0 | 59.0 |
| businessObjectiveId | String | 18-character business objective ID associated with the recommended action. | Small, 59.0 | 59.0 |
| channelId | String | Associated channel ID for the recommended action. | Small, 61.0 | 61.0 |
| createdDate | String | Creation date of the recommended action. | Small, 61.0 | 61.0 |
| description | String | Description of the recommended action. | Small, 59.0 | 59.0 |
| domain | String | Domain category of the recommended action (e.g., "Product"). | Small, 59.0 | 59.0 |
| externalName | String | External identifier used for recommended action tracking. | Small, 60.0 | 60.0 |
| externalState | String | JSON string containing data required for executing the recommended action. | Small, 60.0 | 60.0 |
| grouping | String | Free-form categorization field to keep track of additional groupings of the recommended actions. | Small, 62.0 | 62.0 |
| iconName | String | SLDS icon name representing the recommended action domain. | Small, 60.0 | 60.0 |
| id | String | ID of the recommended action. | Small, 59.0 | 59.0 |
| imageId | String | Content asset file ID for the recommended action display image. | Small, 60.0 | 60.0 |
| lastModifiedDate | String | Date that the recommended action was last modified. | Small, 61.0 | 61.0 |
| name | String | Display name of the recommended action. | Small, 59.0 | 59.0 |
| output | Action Info | Stores the last executed snapshot of the recommended action. | Small, 61.0 | 61.0 |
| rejectionLabel | String | Text indicating user rejection of the recommended action. | Small, 59.0 | 59.0 |
| score | Integer | Impact score of the recommended action (value between 0-100). | Small, 60.0 | 60.0 |
| secondaryState | String | Optional state field for additional filtering of recommended action states. | Small, 62.0 | 62.0 |
| state | String | Primary state of the recommended action (e.g., "ACTIVE", "INACTIVE", "ACCEPTED", "NOT_EXPIRING"). | Small, 59.0 | 59.0 |
| tertiaryState | String | Optional state field for additional filtering of recommended action states. | Small, 62.0 | 62.0 |

## Related Topics

- Action Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_info_output.htm)
