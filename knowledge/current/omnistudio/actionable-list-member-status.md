---
title: "Actionable List Member Status"
domain: omnistudio
topic: actionable-list-member-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.363Z
estimatedTokens: 153
keywords: [Actionable, Member, Status, Output, representation]
---

# Actionable List Member Status

> Output representation of the
      actionable list member status request.

# Actionable List Member Status

Output representation of the actionable list member status request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Count of actionable list members in an actionable list member status. | Small, 58.0 | 58.0 |
| iconName | String | Name of an actionable list member status icon. | Small, 58.0 | 58.0 |
| id | String | ID of an actionable list member status. | Small, 58.0 | 58.0 |
| status | String | Name of an actionable list member status. | Small, 58.0 | 58.0 |

## Code Examples

```
"statusCountList": [
    {
      "count": 0,
      "iconName": "action:approval",
      "id": "0x5SG00000000XtYAI",
      "status": "Closed"
    },
    {
      "count": 0,
      "iconName": "action:preview",
      "id": "0x5SG00000000XuYAI",
      "status": "Triage"
    },
    {
      "count": 3,
      "iconName": "action:call",
      "id": "0x5SG00000000XvYAI",
      "status": "Call"
    },
    {
      "count": 0,
      "iconName": "action:new_event",
      "id": "0x5SG00000000XwYAI",
      "status": "Follow up"
    },
    {
      "count": 64,
      "iconName": "action:fallback",
      "id": "0x5SG00000000XxYAI",
      "status": "Lead"
    },
    {
      "count": 1,
      "iconName": null,
      "id": null,
      "status": null
    }
  ]
```
