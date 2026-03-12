---
title: "Share Captured Activity Input"
domain: chatterapi
topic: share-captured-activity-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.831Z
estimatedTokens: 154
keywords: [Share, Captured, Activity, Input, email, event, shared]
---

# Share Captured Activity Input

> Defines who a captured email or event is shared
  with.

# Share Captured Activity Input

Defines who a captured email or event is shared with.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupsTo​ShareWith | String[] | List of IDs for the groups that you share the activity with. Valid only if sharingType is MyGroups. | Optional | 39.0 |
| sharingType | String | Type of sharing operation.Everyone—The activity is shared with everyone.MyGroups—The activity is shared only with a selection of the context user’s groups.OnlyMe—The activity is private. | Required | 39.0 |

## Code Examples

```
{
"groupsToShareWith":["0F9B00000004EVAKA2", "0F9B00000005YGHKA2", "0F9B00000008RTUKA2",],
"sharingType":"MyGroups"
}
```
