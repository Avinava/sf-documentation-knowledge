---
title: "Audience Target Assignment"
domain: chatterapi
topic: audience-target-assignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.283Z
estimatedTokens: 303
keywords: [Audience, Target, Assignment, assignments]
---

# Audience Target Assignment

> Target assignments for an audience.

# Audience Target Assignment

Target assignments for an audience.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| formulaScope | Formula Scope | Formula scope of the target. | Small, 51.0 | 51.0 |
| groupName | String | Group name of the target. Groups bundle related target and audience pairs. | Small, 47.0 | 47.0 |
| id | String | ID of the target. | Small, 48.0 | 48.0 |
| isMatch | Boolean | Specifies whether the target matches the current context (true) or doesn’t (false). | Small, 47.0 | 47.0 |
| priority | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | Small, 48.0 | 48.0 |
| publishStatus | String | Publish status of the target. Values are:DraftLive | Small, 48.0 | 48.0 |
| targetType | String | Type of target, indicating the nature of the data being targeted. | Small, 47.0 | 47.0 |
| targetValue | String | Value of the target. | Small, 47.0 | 47.0 |
| url | String | URL to the target. | Small, 48.0 | 48.0 |

#### See Also

-   [Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience.htm "An audience.")

## Related Topics

- Formula Scope (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_formula_scope.htm)
- Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience.htm)
