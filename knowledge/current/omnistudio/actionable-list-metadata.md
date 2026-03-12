---
title: "Actionable List Metadata"
domain: omnistudio
topic: actionable-list-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.365Z
estimatedTokens: 142
keywords: [Actionable, Metadata, Output, representation]
---

# Actionable List Metadata

> Output representation of the actionable list metadata
    request.

# Actionable List Metadata

Output representation of the actionable list metadata request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| quickActionList | Quick Actions Metadata[] | List of quick actions with their metadata. | Small, 58.0 | 58.0 |
| statusCountList | Actionable List Member Status[] | List of actionable list member statuses and count of actionable list members in each status for the actionable list ID specified in the request. | Small, 58.0 | 58.0 |

## Code Examples

```
{
  "quickActionList": [
    {
      "metadataDetailRepresentation": [
        {
          "column": "Phone",
          "label": "Account Phone"
        }
        {
          "column": "Home_Phone",
          "label": "Home Phone"
        }
      ],
      "quickActionType": "Phone"
    }
  ],
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
}
```

## Related Topics

- Quick Actions
                  Metadata[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_quick_actions_metadata.htm)
- Actionable List Member Status[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_actionable_list_member_status.htm)
