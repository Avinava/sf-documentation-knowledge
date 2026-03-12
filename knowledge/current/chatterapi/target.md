---
title: "Target"
domain: chatterapi
topic: target
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.314Z
estimatedTokens: 336
keywords: [Target, Personalization]
---

# Target

> Personalization target information.

# Target

Personalization target information.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| audience | Audience Target | Audience assigned to the target. | Small, 47.0 | 47.0 |
| formulaScope | Formula Scope | Formula scope of the target. | Small, 50.0 | 50.0 |
| groupName | String | Group name of the target. Groups bundle related target and audience pairs. | Small, 47.0 | 47.0 |
| id | String | ID of the target. | Small, 47.0 | 47.0 |
| priority | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | Small, 47.0 | 47.0 |
| publishStatus | String | Publish status of the target. Values are:DraftLive | Small, 47.0 | 47.0 |
| scope | Scope[] | List of scopes for the target.In version 50.0 and later, the formulaScope property returns this information. | Small, 47.0 | 47.0–49.0 |
| targetType | String | Type of target, indicating the nature of the data being targeted. | Small, 47.0 | 47.0 |
| targetValue | String | Value of the target. | Small, 47.0 | 47.0 |
| url | String | URL to the target. | Small, 47.0 | 47.0 |

#### See Also

-   [Target Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_target_collection.htm "List of personalization targets.")

## Related Topics

- Audience Target (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_target.htm)
- Formula Scope (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_formula_scope.htm)
- Scope (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scope.htm)
- Target Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_target_collection.htm)
