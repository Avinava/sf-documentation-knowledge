---
title: "Actionable List Update Member Count Input"
domain: omnistudio
topic: actionable-list-update-member-count-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.000Z
estimatedTokens: 142
keywords: [Actionable, List, Update, Member, Count, Input, input.]
---

# Actionable List Update Member Count Input

> Actionable List Member Count input.

# Actionable List Update Member Count Input

Actionable List Member Count input.

JSON example

```

```

Properties

Specify either an actionableListId or filters, but not both.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionable​ListId | String | ID of the actionable list to be updated. | Required if no filters | 59.0 |
| filters | Actionable List Update Member Count Filter List Input[] | List of filters to identify the actionable lists to be updated. | Required if no actionable​ListId | 59.0 |

## Code Examples

```
{
  "filters": {
    "conditions": [
      {
        "fieldName": "ObjectName",
        "operator": "equals",
        "value": "Account",
        "index": 1
      },
      {
        "fieldName": "Name",
        "operator": "equals",
        "value": "VIPClients",
        "index": 2
      }
    ],
    "filterLogic": "1 AND 2",
    "querySize": 2000
  }
}
```

## Related Topics

- Actionable List Update Member Count Filter List Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_actionable_list_update_member_count_filter_input_list.htm)
