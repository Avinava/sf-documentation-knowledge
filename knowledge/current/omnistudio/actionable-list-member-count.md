---
title: "Actionable List Member Count"
domain: omnistudio
topic: actionable-list-member-count
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.848Z
estimatedTokens: 228
keywords: [Actionable, List, Member, Count, Update, member, count, actionable, list.]
---

# Actionable List Member Count

> Update the member count of an actionable list.

# Actionable List Member Count

Update the member count of an actionable list.

Resource

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

Specify either an actionableListId or filters, but not both.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionable​ListId | String | ID of the actionable list to be updated. | Required if no filters | 59.0 |
| filters | Actionable List Update Member Count Filter List Input[] | List of filters to identify the actionable lists to be updated. | Required if no actionable​ListId | 59.0 |

Response body for POST

[Actionable List Update Member Count Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_actionable_list_update_member_count_output.htm "Actionable List Member Count output.")

## Code Examples

```
/connect/actionable-list-member-count
```

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
- Actionable List Update Member Count Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_actionable_list_update_member_count_output.htm)
