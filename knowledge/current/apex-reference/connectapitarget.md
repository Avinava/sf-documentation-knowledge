---
title: "ConnectApi.Target"
domain: apex-reference
topic: connectapitarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.082Z
keywords: [ConnectApi.Target, See]
---

# ConnectApi.Target

# ConnectApi.Target

Personalization target information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| audience | ConnectApi.​AudienceTarget | Audience assigned to the target. | 48.0 |
| formulaScope | ConnectApi.​FormulaScope | Formula scope of the target. | 50.0 |
| groupName | String | Group name of the target. Groups bundle related target and audience pairs. | 48.0 |
| id | String | ID of the target. | 48.0 |
| priority | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | 48.0 |
| publishStatus | ConnectApi.​PublishStatus | Publish status of the target. Values are:DraftLive | 48.0 |
| scope | List<ConnectApi.​Scope> | List of scopes for the target.In version 50.0 and later, the formulaScope property returns this information. | 48.0–49.0 |
| targetType | String | Type of target, indicating the nature of the data being targeted. | 48.0 |
| targetValue | String | Value of the target. | 48.0 |
| url | String | URL to the target. | 48.0 |

#### See Also

-   [ConnectApi.TargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target_collection.htm "List of personalization targets.")