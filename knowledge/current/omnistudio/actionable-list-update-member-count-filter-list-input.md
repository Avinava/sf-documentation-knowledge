---
title: "Actionable List Update Member Count Filter List Input"
domain: omnistudio
topic: actionable-list-update-member-count-filter-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.995Z
estimatedTokens: 183
keywords: [Actionable, List, Update, Member, Count, Filter, Input, input, filters.]
---

# Actionable List Update Member Count Filter List Input

> Actionable List Member Count input for filters.

# Actionable List Update Member Count Filter List Input

Actionable List Member Count input for filters.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Actionable List Update Member Count Filter Input[] | List criteria in the form fieldName, operator, value, with an index to identify the filter in the filterLogic. | Required if filters is specified | 59.0 |
| filterLogic | String | Filter indexes with AND and OR logic to determine the overall outcome. | Required if filters is specified | 59.0 |
| querySize | Integer | Number of records to be returned, between 200 and 2000. The default is 2000. | Optional | 59.0 |

## Code Examples

```
{
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
```

## Related Topics

- Actionable List Update Member Count Filter Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_actionable_list_update_member_count_filter_input.htm)
