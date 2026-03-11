---
title: "ConnectApi.AudienceTargetAssignment"
domain: apex-reference
topic: connectapiaudiencetargetassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.984Z
keywords: [ConnectApi.AudienceTargetAssignment, See]
---

# ConnectApi.AudienceTargetAssignment

# ConnectApi.AudienceTargetAssignment

Target assignments for a personalization audience.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| formulaScope | ConnectApi.​FormulaScope | Formula scope of the target. | 51.0 |
| groupName | String | Group name of the target. Groups bundle related target and audience pairs. | 48.0 |
| id | String | ID of the target. | 48.0 |
| isMatch | Boolean | Specifies whether the target matches the current context (true) or doesn’t (false). | 48.0 |
| priority | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | 48.0 |
| publishStatus | ConnectApi.​PublishStatus | Publish status of the target. Values are:DraftLive | 48.0 |
| targetType | String | Type of target, indicating the nature of the data being targeted. | 48.0 |
| targetValue | String | Value of the target. | 48.0 |
| url | String | URL to the target. | 48.0 |

#### See Also

-   [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")